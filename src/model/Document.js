import { Node } from "./Node";
import { Paragraph } from "./Paragraph";
import generatorID from "../utils/id-generator";

export class Document extends Node {
  static create(json) {
    const { id, nodes } = json;
    return new Document(
      id,
      nodes.map((node) => {
        return Paragraph.create(node);
      })
    );
  }

  constructor(id = generatorID("document"), nodes) {
    super(id, "document");
    this.nodes = nodes;
  }
}
