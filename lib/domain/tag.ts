export interface Tag {
  id: string;
  value: string;
}

export default function createSimpleTag(source: string): Tag {
  return {
    id: source,
    value: source,
  };
}
