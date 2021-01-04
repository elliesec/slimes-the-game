import { Job, TaskStatus } from '../../redux/job/jobState';

export interface ProgressStats {
    min: number;
    max: number;
    progress: number;
}

export function progressFromJob(job: Job): ProgressStats {
    return {
        min: 0,
        max: job.tasks.length,
        progress: job.tasks.filter((task) => task.status === TaskStatus.COMPLETE).length,
    };
}

export function combineProgressStats(...stats: ProgressStats[]): ProgressStats {
    return stats.reduce(
        (combined, stat) => ({
            min: combined.min + stat.min,
            max: combined.max + stat.max,
            progress: combined.progress + stat.progress,
        }),
        {
            min: 0,
            max: 0,
            progress: 0,
        }
    );
}
