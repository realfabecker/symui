import { Container as IC } from 'inversify';
import { Types } from '../core/ports/types';
import { WailsMd5Hasher } from './hash/WailsMd5Hasher';

export const container = new IC();
container.bind(Types.IMd5Hasher).to(WailsMd5Hasher);
