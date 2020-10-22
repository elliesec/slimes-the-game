import memoizee from 'memoizee';

export type Callback<T> = (t: T) => void;

export function noop(...args: any[]): void {
    return;
}

export const memoize = memoizee;
