import { IGpgProvider } from '../../core/ports/ports';
import { injectable } from 'inversify';
import { GpgListKeys } from '../../../wailsjs/go/main/App';
import { GpgKey } from '../../core/entities/entities';

@injectable()
export class WailsGpgProvider implements IGpgProvider {
  async listKeys(): Promise<GpgKey[]> {
    const res = await GpgListKeys();
    if (res.error) throw new Error(res.error);
    return res.data;
  }
}
