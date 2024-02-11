import { Container as IC } from 'inversify';
import { Types } from '../core/ports/types';
import { WailsMd5Hasher } from './hash/WailsMd5Hasher';
import { WailsAesProvider } from './crypto/WailsAesProvider';

export const container = new IC();
container.bind(Types.IMd5Provider).to(WailsMd5Hasher);
container.bind(Types.IAesProvider).to(WailsAesProvider);
