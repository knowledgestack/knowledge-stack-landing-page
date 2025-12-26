# API Documentation Deployment Guide

## Overview

The API documentation system automatically generates documentation pages from OpenAPI specifications. Each API version has its own directory containing an OpenAPI spec file.

## Directory Structure

```
public/api-specs/
├── v1/
│   └── openapi.yaml        # OpenAPI 3.1.2 specification for API v1
├── v2/                     # Future versions
│   └── openapi.yaml
└── README.md
```

## Adding a New API Version

1. Create a new directory under `public/api-specs/` with the version name (e.g., `v2`)
2. Place your OpenAPI specification file in that directory:
   - `openapi.yaml` (preferred) or
   - `openapi.json`
3. Update `src/lib/api-specs.ts` to add the new version to the `API_VERSIONS` array:

```typescript
export const API_VERSIONS: APIVersion[] = [
  {
    version: 'v1',
    name: 'API v1',
    description: 'Stable API version',
    status: 'current',
  },
  {
    version: 'v2',
    name: 'API v2',
    description: 'Latest API version with new features',
    status: 'current',
  },
];
```

## Updating an Existing API Version

Simply replace the `openapi.yaml` or `openapi.json` file in the version directory with your updated specification. The documentation will automatically reflect the changes on the next build/deployment.

## Supported OpenAPI Formats

- **OpenAPI 3.0.x**
- **OpenAPI 3.1.x** (recommended)

The system supports both YAML and JSON formats, with YAML being preferred.

## Deployment Workflow

1. Export your OpenAPI specification from your API server
2. Copy the spec file to the appropriate version directory in `public/api-specs/`
3. Commit and deploy - the documentation will be automatically generated

## Version Status

Each version can have one of the following statuses:
- `current` - The recommended version to use
- `deprecated` - Still available but will be removed in the future
- `preview` - Experimental version, may change

Update the status in `src/lib/api-specs.ts` when changing version statuses.


