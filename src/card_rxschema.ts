export const cardRxSchema = {
  "title": "card schema",
  "version": 0,
  "description": "Card for reactive desktop",
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "primary": true
    },
    "version": {
      "type": "number"
    },
    "user": {
      "type": "string"
    },    
    "type": {
      "type": "string"
    },    
    "date": {
      "type": "object",
      "properties": {
        "createdDate": {
          "type": "string"
        },
        "modifiedDate": {
          "type": "string"
        }
      }
    },
    "data": {
      "type": "string"
    }
  },
  "required": ["version", "user", "type", "date", "data"]
}