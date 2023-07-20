

export class Secret {
    public id?: string;
    public name?: string;
    public state?: string;
    private 'kms_key_id'?: string;
    public description?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    private 'scheduled_delete_time'?: number;
    public constructor() { 
    }
    public withId(id: string): Secret {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Secret {
        this['name'] = name;
        return this;
    }
    public withState(state: string): Secret {
        this['state'] = state;
        return this;
    }
    public withKmsKeyId(kmsKeyId: string): Secret {
        this['kms_key_id'] = kmsKeyId;
        return this;
    }
    public set kmsKeyId(kmsKeyId: string  | undefined) {
        this['kms_key_id'] = kmsKeyId;
    }
    public get kmsKeyId(): string | undefined {
        return this['kms_key_id'];
    }
    public withDescription(description: string): Secret {
        this['description'] = description;
        return this;
    }
    public withCreateTime(createTime: number): Secret {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): Secret {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withScheduledDeleteTime(scheduledDeleteTime: number): Secret {
        this['scheduled_delete_time'] = scheduledDeleteTime;
        return this;
    }
    public set scheduledDeleteTime(scheduledDeleteTime: number  | undefined) {
        this['scheduled_delete_time'] = scheduledDeleteTime;
    }
    public get scheduledDeleteTime(): number | undefined {
        return this['scheduled_delete_time'];
    }
}