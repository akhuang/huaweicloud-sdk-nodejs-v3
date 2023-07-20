

export class InstanceRestoreInfo {
    private 'backup_id'?: string;
    private 'restore_id'?: string;
    private 'backup_name'?: string;
    private 'updated_at'?: string;
    private 'restore_remark'?: string;
    private 'created_at'?: string;
    public progress?: string;
    private 'error_code'?: string;
    private 'restore_name'?: string;
    private 'backup_remark'?: string;
    public status?: InstanceRestoreInfoStatusEnum | string;
    public constructor() { 
    }
    public withBackupId(backupId: string): InstanceRestoreInfo {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
    public withRestoreId(restoreId: string): InstanceRestoreInfo {
        this['restore_id'] = restoreId;
        return this;
    }
    public set restoreId(restoreId: string  | undefined) {
        this['restore_id'] = restoreId;
    }
    public get restoreId(): string | undefined {
        return this['restore_id'];
    }
    public withBackupName(backupName: string): InstanceRestoreInfo {
        this['backup_name'] = backupName;
        return this;
    }
    public set backupName(backupName: string  | undefined) {
        this['backup_name'] = backupName;
    }
    public get backupName(): string | undefined {
        return this['backup_name'];
    }
    public withUpdatedAt(updatedAt: string): InstanceRestoreInfo {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withRestoreRemark(restoreRemark: string): InstanceRestoreInfo {
        this['restore_remark'] = restoreRemark;
        return this;
    }
    public set restoreRemark(restoreRemark: string  | undefined) {
        this['restore_remark'] = restoreRemark;
    }
    public get restoreRemark(): string | undefined {
        return this['restore_remark'];
    }
    public withCreatedAt(createdAt: string): InstanceRestoreInfo {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withProgress(progress: string): InstanceRestoreInfo {
        this['progress'] = progress;
        return this;
    }
    public withErrorCode(errorCode: string): InstanceRestoreInfo {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withRestoreName(restoreName: string): InstanceRestoreInfo {
        this['restore_name'] = restoreName;
        return this;
    }
    public set restoreName(restoreName: string  | undefined) {
        this['restore_name'] = restoreName;
    }
    public get restoreName(): string | undefined {
        return this['restore_name'];
    }
    public withBackupRemark(backupRemark: string): InstanceRestoreInfo {
        this['backup_remark'] = backupRemark;
        return this;
    }
    public set backupRemark(backupRemark: string  | undefined) {
        this['backup_remark'] = backupRemark;
    }
    public get backupRemark(): string | undefined {
        return this['backup_remark'];
    }
    public withStatus(status: InstanceRestoreInfoStatusEnum | string): InstanceRestoreInfo {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum InstanceRestoreInfoStatusEnum {
    WAITING = 'waiting',
    RESTORING = 'restoring',
    SUCCEED = 'succeed',
    FAILED = 'failed'
}
