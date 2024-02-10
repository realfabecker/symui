export interface IMD5Hasher {
  hash(input: string): Promise<string>;
}
