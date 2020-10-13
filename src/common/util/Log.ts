import { format } from 'date-fns';

export enum LogLevel {
    ERROR = 0,
    WARNING = 1,
    INFO = 2,
    DEBUG = 3,
    TRACE = 4,
}

export type ConsoleLogFunction = (message?: any, ...args: any[]) => void;

export class Log {
    private logColors: Record<LogLevel, string> = {
        [LogLevel.ERROR]: '#f44336',
        [LogLevel.WARNING]: '#ffa000',
        [LogLevel.INFO]: '#039be5',
        [LogLevel.DEBUG]: '#689f38',
        [LogLevel.TRACE]: '#90a4ae',
    };

    public error(message: string, data?: any): void {
        this.log(console.error, LogLevel.ERROR, `[ERROR] ${message}`, data);
    }

    public warn(message: string, data?: any): void {
        this.log(console.warn, LogLevel.WARNING, `[WARN]  ${message}`, data);
    }

    public info(message: string, data?: any): void {
        this.log(console.log, LogLevel.INFO, `[INFO]  ${message}`, data);
    }

    public debug(message: string, data?: any): void {
        this.log(console.log, LogLevel.DEBUG, `[DEBUG] ${message}`, data);
    }

    public trace(message: string, data?: any): void {
        this.log(console.log, LogLevel.TRACE, `[TRACE] ${message}`, data);
    }

    public log(
        logFunction: ConsoleLogFunction,
        level: LogLevel,
        message: string,
        data?: any
    ): void {
        const color = this.logColors[level];
        const style = `color: ${color};`;
        logFunction(
            `%c${format(new Date(), 'HH:mm:ss.SSS')} ${message}${this.serialiseData(data)}`,
            style
        );
    }

    private serialiseData(data?: any): string {
        if (data == null) {
            return '';
        }
        return String(data);
    }
}

export const log = new Log();
