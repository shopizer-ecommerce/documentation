# API Documentation

This section contains detailed API documentation for the project.

## Example API Endpoint

### GET /api/items

Returns a list of items.

```typescript
interface Item {
  id: string;
  name: string;
  description: string;
}
```

#### Response

```json
{
  "items": [
    {
      "id": "1",
      "name": "Example Item",
      "description": "This is an example item"
    }
  ]
}
```