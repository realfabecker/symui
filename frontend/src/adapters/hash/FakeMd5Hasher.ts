import { injectable } from 'inversify';
import { IMD5Hasher } from '../../core/ports/ports';

@injectable()
export class FakeMd5Hasher implements IMD5Hasher {
  async hash(input: string): Promise<string> {
    return input;
  }
}
