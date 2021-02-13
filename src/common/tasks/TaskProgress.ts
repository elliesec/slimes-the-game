export interface TaskProgress {
    max: number;
    value: number;
    complete: boolean;
}

export function aggregateProgress(p1: TaskProgress, p2: TaskProgress): TaskProgress {
    return {
        max     : p1.max + p2.max,
        value   : p1.value + p2.value,
        complete: p1.complete && p2.complete,
    };
}
