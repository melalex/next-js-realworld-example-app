export interface Tag {
  id: string;
  value: string;
}

export class SimpleTag implements Tag {
  constructor(private readonly tag: string) {}

  get id() {
    return this.tag;
  }

  get value() {
    return this.tag;
  }
}
