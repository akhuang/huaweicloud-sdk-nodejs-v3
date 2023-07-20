

export class ApplicationDTO {
    private 'app_id'?: string;
    private 'app_name'?: string;
    private 'create_time'?: string;
    private 'default_app'?: boolean;
    public constructor() { 
    }
    public withAppId(appId: string): ApplicationDTO {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withAppName(appName: string): ApplicationDTO {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withCreateTime(createTime: string): ApplicationDTO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withDefaultApp(defaultApp: boolean): ApplicationDTO {
        this['default_app'] = defaultApp;
        return this;
    }
    public set defaultApp(defaultApp: boolean  | undefined) {
        this['default_app'] = defaultApp;
    }
    public get defaultApp(): boolean | undefined {
        return this['default_app'];
    }
}