# API Specifications

This directory contains OpenAPI specifications for different API versions.

## Structure

```
api-specs/
├── v1/
│   └── openapi.json    # OpenAPI 3.0 specification for API v1
├── v2/
│   └── openapi.json    # OpenAPI 3.0 specification for API v2
└── README.md           # This file
```

## Usage

During deployment, update the OpenAPI specification files in their respective version directories. The documentation pages will automatically generate from these specifications.

## Format

All specifications should follow the OpenAPI 3.0 format (JSON or YAML). The specification file should be named `openapi.json` or `openapi.yaml` within each version directory.

