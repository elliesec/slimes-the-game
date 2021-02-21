export type PartialRecord<K extends string | number | symbol, T> = Partial<Record<K, T>>;
export type StringRecord<T> = Record<string, T>;
export type WithId<T> = T & { id: string };

export interface DefaultModule<T> {
    default: T;
}

export interface Serializable<T> {
    serialize(): T;
}

export interface Point {
    x: number;
    y: number;
}

export interface Dimensions {
    width: number;
    height: number;
}

export interface Rect extends Point, Dimensions {
}

export interface ContainerDestroyOptions {
    children?: boolean;
    texture?: boolean;
    baseTexture?: boolean;
}
