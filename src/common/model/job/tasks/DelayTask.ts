import { BaseTask } from '../BaseTask';

export class DelayTask extends BaseTask {
    public constructor(private readonly delayMillis: number) {
        super(`Wait ${delayMillis}ms`);
    }

    protected run(): void {
        setTimeout(() => this.complete(), this.delayMillis);
    }
}
