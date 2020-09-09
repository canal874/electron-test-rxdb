"use strict";
exports.__esModule = true;
exports.cardRxSchema = void 0;
exports.cardRxSchema = {
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
};
//# sourceMappingURL=card_rxschema.js.map