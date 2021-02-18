import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from '../../tasks/Task';
import { emptyTaskProgress, TaskProgress } from '../../tasks/TaskProgress';
import { preloadImage } from '../imageUtils';

export class PreloadImagesTask extends Task {
    private readonly urls: string[];
    private progress = emptyTaskProgress();

    public constructor(...urls: string[]) {
        super('Preload Images');
        this.urls = urls;
        this.setProgress(0);
    }

    public execute(): Observable<TaskProgress> {
        return combineLatest(this.urls.map((url) => preloadImage(url))).pipe(
            map((values: boolean[]) => {
                const value = values.reduce((sum, value) => {
                    return typeof value === 'boolean' ? sum + 1 : sum;
                }, 0);
                return this.setProgress(value);
            }),
        );
    }

    public getProgress(): TaskProgress {
        return this.progress;
    }

    private setProgress(value: number): TaskProgress {
        return (this.progress = {
            max     : this.urls.length,
            value,
            complete: value >= this.urls.length,
        });
    }
}
