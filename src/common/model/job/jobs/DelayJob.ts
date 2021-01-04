import { BaseJob } from '../BaseJob';
import { BaseTask } from '../BaseTask';
import { DelayTask } from '../tasks/DelayTask';

export interface DelayJobConfig {
    delayMillis: number;
}

export class DelayJob extends BaseJob<DelayJobConfig> {
    public constructor(delayMillis: number) {
        super({ delayMillis });
    }

    protected createTasks({ delayMillis }: DelayJobConfig): BaseTask[] {
        return [new DelayTask(delayMillis)];
    }
}
