export interface Timestamp {
  iso: string;
  dateString: string;
}

export class SimpleTimestamp implements Timestamp {
  dateString: string;

  constructor(readonly iso: string) {
    this.dateString = new Date(iso).toDateString();
  }
}
