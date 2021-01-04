import { BaseTask } from '../BaseTask';

export class DelayTask extends BaseTask {
    public constructor(delayMillis: number) {
        super(`Wait ${delayMillis}ms`);
        setTimeout(() => this.complete(), delayMillis);
    }
}
