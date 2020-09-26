import { Callback } from '../functions';

export class PixiAppUpdateManager {
    private static readonly updateListeners: Array<Callback<number>> = [];

    public static addUpdateListener(listener: Callback<number>): void {
        this.updateListeners.push(listener);
    }

    public static removeUpdateListener(listener: Callback<number>): void {
        const index = this.updateListeners.indexOf(listener);
        if (index !== -1) {
            this.updateListeners.splice(index, 1);
        }
    }

    public static updateApp(delta: number): void {
        this.updateListeners.forEach((listener) => listener(delta));
    }
}
