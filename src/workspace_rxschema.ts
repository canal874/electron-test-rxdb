export const workspaceRxSchema = {
  "title": "workspace schema",
  "version": 0,
  "description": "Workspace for reactive desktop",
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "primary": true
    },
    "version": {
      "type" : "number"
    },
    "name": {
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
    "avatars": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "geometry": {
            "type": "object",
            "properties": {
              "x": {
                "type": "number"
              },
              "y": {
                "type": "number"
              },
              "z": {
                "type": "number"
              },
              "width": {
                "type": "number"
              },
              "height": {
                "type": "number"
              }
            }
          },
          "style": {
            "type": "object",
            "properties": {
              "uiColor": {
                "type": "string"
              },
              "backgroundColor": {
                "type": "string"
              },
              "opacity": {
                "type": "number",
                "minimum": 0,
                "maximum": 1
              }
            },
            "zoom": {
              "type": "number",
              "minimum": 0
            }
          },
          "condition": {
            "type": "object",
            "properties": {
              "locked": {
                "type": "boolean"
              }
            }
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
          }
        }
      }
    }
  },
  "required": ["name", "version", "date", "avatars"]
}