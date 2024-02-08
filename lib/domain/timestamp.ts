export interface Timestamp {
  iso: string;
  dateString: string;
}

export default function createSimpleTimestamp(source: string): Timestamp {
  return {
    iso: source,
    dateString: new Date(source).toDateString(),
  };
}
