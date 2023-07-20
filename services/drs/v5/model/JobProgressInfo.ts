import { ProgressCompleteInfo } from './ProgressCompleteInfo';


export class JobProgressInfo {
    public progress?: string;
    private 'incr_trans_delay'?: string;
    private 'incr_trans_delay_millis'?: string;
    private 'task_mode'?: string;
    private 'transfer_status'?: string;
    private 'process_time'?: string;
    private 'remaining_time'?: string;
    private 'progress_map'?: { [key: string]: ProgressCompleteInfo; };
    public constructor() { 
    }
    public withProgress(progress: string): JobProgressInfo {
        this['progress'] = progress;
        return this;
    }
    public withIncrTransDelay(incrTransDelay: string): JobProgressInfo {
        this['incr_trans_delay'] = incrTransDelay;
        return this;
    }
    public set incrTransDelay(incrTransDelay: string  | undefined) {
        this['incr_trans_delay'] = incrTransDelay;
    }
    public get incrTransDelay(): string | undefined {
        return this['incr_trans_delay'];
    }
    public withIncrTransDelayMillis(incrTransDelayMillis: string): JobProgressInfo {
        this['incr_trans_delay_millis'] = incrTransDelayMillis;
        return this;
    }
    public set incrTransDelayMillis(incrTransDelayMillis: string  | undefined) {
        this['incr_trans_delay_millis'] = incrTransDelayMillis;
    }
    public get incrTransDelayMillis(): string | undefined {
        return this['incr_trans_delay_millis'];
    }
    public withTaskMode(taskMode: string): JobProgressInfo {
        this['task_mode'] = taskMode;
        return this;
    }
    public set taskMode(taskMode: string  | undefined) {
        this['task_mode'] = taskMode;
    }
    public get taskMode(): string | undefined {
        return this['task_mode'];
    }
    public withTransferStatus(transferStatus: string): JobProgressInfo {
        this['transfer_status'] = transferStatus;
        return this;
    }
    public set transferStatus(transferStatus: string  | undefined) {
        this['transfer_status'] = transferStatus;
    }
    public get transferStatus(): string | undefined {
        return this['transfer_status'];
    }
    public withProcessTime(processTime: string): JobProgressInfo {
        this['process_time'] = processTime;
        return this;
    }
    public set processTime(processTime: string  | undefined) {
        this['process_time'] = processTime;
    }
    public get processTime(): string | undefined {
        return this['process_time'];
    }
    public withRemainingTime(remainingTime: string): JobProgressInfo {
        this['remaining_time'] = remainingTime;
        return this;
    }
    public set remainingTime(remainingTime: string  | undefined) {
        this['remaining_time'] = remainingTime;
    }
    public get remainingTime(): string | undefined {
        return this['remaining_time'];
    }
    public withProgressMap(progressMap: { [key: string]: ProgressCompleteInfo; }): JobProgressInfo {
        this['progress_map'] = progressMap;
        return this;
    }
    public set progressMap(progressMap: { [key: string]: ProgressCompleteInfo; }  | undefined) {
        this['progress_map'] = progressMap;
    }
    public get progressMap(): { [key: string]: ProgressCompleteInfo; } | undefined {
        return this['progress_map'];
    }
}