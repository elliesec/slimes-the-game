import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TaskProgress } from '../tasks/TaskProgress';
import { log } from './Log';

export function preloadImages(...urls: string[]): Observable<TaskProgress> {
    const max = urls.length;

    return combineLatest(urls.map((url) => preloadImage(url))).pipe(
        map((values: boolean[]) => {
            const value = values.reduce((sum, value) => {
                return typeof value === 'boolean' ? sum + 1 : sum;
            }, 0);
            return { max, value, complete: value === max };
        })
    );
}

export function preloadImage(url: string, retryCount = 0): Observable<boolean> {
    const subject = new BehaviorSubject(null);
    const img = new Image();
    img.src = url;
    img.onload = () => {
        log.trace(`Image URL "${url}" successfully preloaded`);
        subject.next(true);
        subject.complete();
    };
    img.onerror = (e: ErrorEvent) => {
        log.warn(`Preload of image URL "${url}" failed. Retrying...`);
        if (retryCount < 5) {
            preloadImage(url, retryCount + 1).subscribe(subject);
        } else {
            subject.next(false);
            subject.complete();
        }
    };
    return subject;
}
