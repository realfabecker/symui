export interface IMd5Provider {
  hash(input: string): Promise<string>;
}

export interface IAESProvider {
  encrypt(key: string, plainText: string): Promise<string>;
  decrypt(key: string, cipherText: string): Promise<string>;
}
