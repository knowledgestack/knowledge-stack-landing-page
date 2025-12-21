/**
 * API Specifications Manager
 * 
 * This module handles loading and managing OpenAPI specifications
 * for versioned API documentation.
 */

export interface APIVersion {
  version: string;
  name: string;
  description?: string;
  status?: 'current' | 'deprecated' | 'preview';
  releaseDate?: string;
}

export interface OpenAPISpec {
  openapi: string;
  info: {
    title: string;
    version: string;
    description?: string;
    contact?: {
      name?: string;
      url?: string;
      email?: string;
    };
  };
  servers?: Array<{
    url: string;
    description?: string;
  }>;
  paths: Record<string, any>;
  components?: {
    schemas?: Record<string, any>;
    securitySchemes?: Record<string, any>;
  };
  tags?: Array<{
    name: string;
    description?: string;
  }>;
}

/**
 * Available API versions
 * This list should be updated when new versions are released
 */
export const API_VERSIONS: APIVersion[] = [
  {
    version: 'v1',
    name: 'API v1',
    description: 'Stable API version',
    status: 'current',
  },
  // Add more versions as they're released
  // {
  //   version: 'v2',
  //   name: 'API v2',
  //   description: 'Latest API version with new features',
  //   status: 'current',
  // },
];

/**
 * Get the default/current API version
 */
export function getCurrentVersion(): string {
  const current = API_VERSIONS.find(v => v.status === 'current');
  return current?.version || API_VERSIONS[0]?.version || 'v1';
}

/**
 * Load OpenAPI specification for a given version
 */
export async function loadAPISpec(version: string): Promise<OpenAPISpec | null> {
  try {
    // Try JSON first
    try {
      const response = await fetch(`/api-specs/${version}/openapi.json`);
      if (response.ok) {
        return await response.json();
      }
    } catch (e) {
      // Fall through to try YAML
    }

    // Try YAML if JSON fails
    try {
      const response = await fetch(`/api-specs/${version}/openapi.yaml`);
      if (response.ok) {
        const yaml = await response.text();
        // Dynamic import to avoid bundling yaml parser if not needed
        const yamlModule = await import('js-yaml');
        return yamlModule.load(yaml) as OpenAPISpec;
      }
    } catch (e) {
      console.error(`Failed to parse YAML for version ${version}:`, e);
    }

    return null;
  } catch (error) {
    console.error(`Failed to load API spec for version ${version}:`, error);
    return null;
  }
}

/**
 * Get API version info
 */
export function getVersionInfo(version: string): APIVersion | undefined {
  return API_VERSIONS.find(v => v.version === version);
}

