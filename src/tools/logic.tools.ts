import type { AnyValue } from '../models';
import { toType } from './type.tools';

export function ifTrue<T = undefined, K = T>(
  condition: AnyValue,
  dataOrFn: (() => T) | T,
  alternative?: (() => K) | K,
): T | K {
  if (condition) {
    if (typeof dataOrFn === 'function') return (dataOrFn as () => T)();

    return dataOrFn;
  }

  if (typeof alternative !== 'undefined') {
    if (typeof alternative === 'function') return (alternative as () => K)();

    return alternative;
  }

  return toType<T>(undefined);
}
