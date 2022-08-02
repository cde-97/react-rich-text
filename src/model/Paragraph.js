import { Node } from "./Node";
import { Segment } from "./Segment";
import generatorID from "../utils/id-generator";

export class Paragraph extends Node {
  static create(json) {
    const { id, segments } = json;
    return new Paragraph(id, segments.map(Segment.create));
  }
  constructor(id = generatorID("paragraph"), segments) {
    super(id, "paragraph");
    this.segments = segments;
  }
}
