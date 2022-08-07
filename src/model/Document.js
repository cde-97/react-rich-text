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

  addInilieStyle(startId, startOffset, endId, endOffset, styName, styValue) {
    const nodes = this.findSegmentsByStartAndEnd(startId, endId);
    if (nodes.length < 1) {
      return [startId, startOffset, endId, endOffset];
    }
    //同一个segment节点
    if (nodes.length === 1) {
      const first = nodes[0];
      const firstPra = this.findParentById(first.id);

      const [, center] = firstPra.split(first.id, startOffset, endOffset);
      center.addStyle(styName, styValue);
      return;
    }
    const first = nodes[0];
    const firstPra = this.findParentById(first.id);
    const [, after] = firstPra.split(first.id, startOffset);
    after.addStyle(styName, styValue);

    const last = nodes[nodes.length - 1];
    const lastPra = this.findParentById(last.id);
    const [before] = lastPra.split(last.id, endOffset);
    before.addStyle(styName, styValue);

    nodes
      .slice(1, nodes.length - 1)
      .forEach((node) => node.addStyle(styName, styValue));
  }
  findSegmentsByStartAndEnd(startId, endId) {
    let result = [];
    let startFlg = false;
    this.nodes.map((item) => {
      if (item.segments) {
        item.segments.forEach((segment) => {
          if (segment.id === startId) {
            startFlg = true;
          }
          if (segment.id === endId) {
            result.push(segment);
            startFlg = false;
          }
          if (startFlg === true) {
            result.push(segment);
          }
        });
      }
    });
    return result;
  }
  findParentById(id) {
    if (this.id === id) {
      return null;
    }
    for (const node of this.nodes) {
      if (node.id === id) {
        return this;
      }
      if (node.type === "paragraph") {
        for (const segment of node.segments) {
          if (segment.id === id) {
            return node;
          }
        }
      }
    }
  }
}
