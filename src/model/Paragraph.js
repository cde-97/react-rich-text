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

  split(segmentId, offSet, endOffSet = null) {
    const Index = this.segments.findIndex(
      (segment) => segment.id === segmentId
    );

    const head = this.segments.slice(0, Index);
    const tail = this.segments.slice(Index + 1);

    if (endOffSet) {
      const [before, center, after] = this.segments[Index].split(
        offSet,
        endOffSet
      );
      this.segments = head.concat([before, center, after]).concat(tail);
      return [before, center, after];
    } else {
      const [before, after] = this.segments[Index].split(offSet);
      this.segments = head.concat([before, after]).concat(tail);
      return [before, after];
    }
  }
}
