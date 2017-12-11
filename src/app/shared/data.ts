interface IDomNode {
    tag?: string;
    attributes?: {
      [key: string]: string
    };
    content?: [
      DOMNode | { text?: string; }
    ]
}

export class DOMNode implements IDomNode {
    constructor(
      public tag?: string,
      public attributes?: {
        [key: string]: string
      },
      public content?: [
        DOMNode | { text?: string; }
      ]
    ) {}
}

export const data: string = '{ "tag": "div", "content": [{ "tag": "span", "attributes":{"style": "color: red"},"content": [{ "text": "Enter value:" } ]}, {  "tag":"input", "attributes": {"type": "text", "value": "test",	"style": "color: green"}} ]}';
