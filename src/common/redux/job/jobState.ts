export enum TaskStatus {
    PENDING = 'PENDING',
    COMPLETE = 'COMPLETE',
    FAILED = 'FAILED',
}

export interface Task {
    id: string;
    description: string;
    status: TaskStatus;
}

export interface Job {
    id: string;
    tasks: Task[];
}

export interface JobState {
    loadingJobs: Job[];
}

export interface WithJobState {
    job: JobState;
}
