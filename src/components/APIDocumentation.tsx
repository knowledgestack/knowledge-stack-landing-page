import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Copy, Check, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { loadAPISpec, OpenAPISpec, getVersionInfo } from "@/lib/api-specs";
import { useParams } from "react-router-dom";

const APIDocumentation = () => {
  const { version } = useParams<{ version: string }>();
  const [spec, setSpec] = useState<OpenAPISpec | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copiedPath, setCopiedPath] = useState<string | null>(null);

  useEffect(() => {
    if (!version) return;

    const fetchSpec = async () => {
      setLoading(true);
      setError(null);
      try {
        const loadedSpec = await loadAPISpec(version);
        if (loadedSpec) {
          setSpec(loadedSpec);
        } else {
          setError(`API specification not found for version ${version}`);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load API specification');
      } finally {
        setLoading(false);
      }
    };

    fetchSpec();
  }, [version]);

  const copyToClipboard = (text: string, path: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPath(path);
    setTimeout(() => setCopiedPath(null), 2000);
  };

  const getMethodColor = (method: string) => {
    const colors: Record<string, string> = {
      get: 'bg-blue-500',
      post: 'bg-green-500',
      put: 'bg-yellow-500',
      patch: 'bg-orange-500',
      delete: 'bg-red-500',
    };
    return colors[method.toLowerCase()] || 'bg-gray-500';
  };

  const renderSchema = (schema: any): string => {
    if (!schema) return 'Any';
    if (schema.type) {
      if (schema.type === 'array') {
        return `Array<${schema.items ? renderSchema(schema.items) : 'Any'}>`;
      }
      if (schema.type === 'object') {
        return 'Object';
      }
      return schema.format ? `${schema.type} (${schema.format})` : schema.type;
    }
    if (schema.$ref) {
      const refName = schema.$ref.split('/').pop();
      return refName || 'Reference';
    }
    return 'Any';
  };

  const renderParameters = (parameters: any[] = []) => {
    if (parameters.length === 0) return null;

    return (
      <div className="mt-4">
        <h4 className="font-semibold mb-2">Parameters</h4>
        <div className="space-y-2">
          {parameters.map((param, idx) => (
            <div key={idx} className="border-l-2 border-muted pl-3">
              <div className="flex items-center gap-2">
                <code className="text-sm font-mono">{param.name}</code>
                <Badge variant={param.required ? "default" : "secondary"}>
                  {param.required ? "required" : "optional"}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  ({param.in})
                </span>
              </div>
              {param.description && (
                <p className="text-sm text-muted-foreground mt-1">{param.description}</p>
              )}
              {param.schema && (
                <p className="text-xs text-muted-foreground mt-1">
                  Type: <code>{renderSchema(param.schema)}</code>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderRequestBody = (requestBody: any) => {
    if (!requestBody) return null;

    return (
      <div className="mt-4">
        <h4 className="font-semibold mb-2">Request Body</h4>
        <Badge variant={requestBody.required ? "default" : "secondary"} className="mb-2">
          {requestBody.required ? "required" : "optional"}
        </Badge>
        {requestBody.content && Object.entries(requestBody.content).map(([contentType, content]: [string, any]) => (
          <div key={contentType} className="mt-2">
            <p className="text-sm text-muted-foreground">Content-Type: <code>{contentType}</code></p>
            {content.schema && (
              <p className="text-xs text-muted-foreground mt-1">
                Schema: <code>{renderSchema(content.schema)}</code>
              </p>
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderResponses = (responses: any = {}) => {
    if (Object.keys(responses).length === 0) return null;

    return (
      <div className="mt-4">
        <h4 className="font-semibold mb-2">Responses</h4>
        <div className="space-y-2">
          {Object.entries(responses).map(([statusCode, response]: [string, any]) => (
            <div key={statusCode} className="border-l-2 border-muted pl-3">
              <div className="flex items-center gap-2">
                <Badge variant={statusCode.startsWith('2') ? "default" : "destructive"}>
                  {statusCode}
                </Badge>
                <span className="text-sm">{response.description}</span>
              </div>
              {response.content && Object.entries(response.content).map(([contentType, content]: [string, any]) => (
                <div key={contentType} className="mt-1 text-xs text-muted-foreground">
                  <code>{contentType}</code>
                  {content.schema && (
                    <span className="ml-2">Schema: <code>{renderSchema(content.schema)}</code></span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading API documentation...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !spec) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <Card className="max-w-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <AlertCircle className="w-5 h-5" />
                Error Loading Documentation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{error || 'API specification not found'}</p>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  const versionInfo = version ? getVersionInfo(version) : null;
  const pathsByTag: Record<string, Array<{ path: string; method: string; operation: any }>> = {};
  const untaggedPaths: Array<{ path: string; method: string; operation: any }> = [];

  // Group paths by tags
  Object.entries(spec.paths || {}).forEach(([path, pathItem]: [string, any]) => {
    Object.entries(pathItem).forEach(([method, operation]: [string, any]) => {
      if (['get', 'post', 'put', 'patch', 'delete', 'options', 'head'].includes(method.toLowerCase())) {
        if (operation.tags && operation.tags.length > 0) {
          operation.tags.forEach((tag: string) => {
            if (!pathsByTag[tag]) pathsByTag[tag] = [];
            pathsByTag[tag].push({ path, method, operation });
          });
        } else {
          untaggedPaths.push({ path, method, operation });
        }
      }
    });
  });

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-card">
        <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">{spec.info.title}</h1>
              <p className="text-xl text-muted-foreground">{spec.info.description}</p>
            </div>
            {versionInfo && (
              <Badge variant={versionInfo.status === 'current' ? 'default' : 'secondary'}>
                {versionInfo.name}
              </Badge>
            )}
          </div>
          {spec.info.version && (
            <p className="text-sm text-muted-foreground">Version: {spec.info.version}</p>
          )}
        </div>

        {/* Servers */}
        {spec.servers && spec.servers.length > 0 && (
          <Card className="mb-8 border-border">
            <CardHeader>
              <CardTitle>Base URLs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {spec.servers.map((server, idx) => (
                  <div key={idx}>
                    <code className="text-sm">{server.url}</code>
                    {server.description && (
                      <p className="text-sm text-muted-foreground">{server.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* API Endpoints by Tag */}
        <Tabs defaultValue={Object.keys(pathsByTag)[0] || 'all'} className="w-full">
          <TabsList className="inline-flex w-auto mb-8 overflow-x-auto">
            {Object.keys(pathsByTag).map((tag) => (
              <TabsTrigger key={tag} value={tag}>
                {tag}
              </TabsTrigger>
            ))}
            {untaggedPaths.length > 0 && (
              <TabsTrigger value="all">Other</TabsTrigger>
            )}
          </TabsList>

          {Object.keys(pathsByTag).map((tag) => (
            <TabsContent key={tag} value={tag} className="space-y-4">
              <h2 className="text-2xl font-bold mb-4">{tag}</h2>
              {pathsByTag[tag].map(({ path, method, operation }, idx) => (
                <Card key={idx} className="border-border">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge className={getMethodColor(method)}>
                            {method.toUpperCase()}
                          </Badge>
                          <code className="text-lg font-mono">{path}</code>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard(path, `${method}:${path}`)}
                          >
                            {copiedPath === `${method}:${path}` ? (
                              <Check className="w-4 h-4" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </Button>
                        </div>
                        <CardTitle>{operation.summary || operation.operationId}</CardTitle>
                        {operation.description && (
                          <CardDescription className="mt-2 text-base">
                            {operation.description}
                          </CardDescription>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {operation.deprecated && (
                      <Badge variant="destructive" className="mb-4">
                        Deprecated
                      </Badge>
                    )}
                    {renderParameters(operation.parameters)}
                    {renderRequestBody(operation.requestBody)}
                    {renderResponses(operation.responses)}
                    {operation.security && (
                      <div className="mt-4">
                        <p className="text-sm text-muted-foreground">
                          Security: {operation.security.map((sec: any) => Object.keys(sec).join(', ')).join(', ')}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          ))}

          {untaggedPaths.length > 0 && (
            <TabsContent value="all" className="space-y-4">
              <h2 className="text-2xl font-bold mb-4">Other Endpoints</h2>
              {untaggedPaths.map(({ path, method, operation }, idx) => (
                <Card key={idx} className="border-border">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge className={getMethodColor(method)}>
                            {method.toUpperCase()}
                          </Badge>
                          <code className="text-lg font-mono">{path}</code>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard(path, `${method}:${path}`)}
                          >
                            {copiedPath === `${method}:${path}` ? (
                              <Check className="w-4 h-4" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </Button>
                        </div>
                        <CardTitle>{operation.summary || operation.operationId}</CardTitle>
                        {operation.description && (
                          <CardDescription className="mt-2 text-base">
                            {operation.description}
                          </CardDescription>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {operation.deprecated && (
                      <Badge variant="destructive" className="mb-4">
                        Deprecated
                      </Badge>
                    )}
                    {renderParameters(operation.parameters)}
                    {renderRequestBody(operation.requestBody)}
                    {renderResponses(operation.responses)}
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          )}
        </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default APIDocumentation;

