export type Callback<T> = (t: T) => void;

export function noop(...args: any[]): void {
    return;
}
