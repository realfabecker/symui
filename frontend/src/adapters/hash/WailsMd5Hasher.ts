import { IMD5Hasher } from '../../core/ports/ports';
import { injectable } from 'inversify';
import { CreateMd5Hash } from '../../../wailsjs/go/main/App';

@injectable()
export class WailsMd5Hasher implements IMD5Hasher {
  async hash(input: string): Promise<string> {
    const res = await CreateMd5Hash(input);
    if (res.error) throw new Error(res.error);
    return res?.hashed as string;
  }
}
