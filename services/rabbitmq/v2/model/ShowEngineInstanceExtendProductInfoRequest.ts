

export class ShowEngineInstanceExtendProductInfoRequest {
    public engine?: ShowEngineInstanceExtendProductInfoRequestEngineEnum | string;
    private 'instance_id'?: string;
    public type?: ShowEngineInstanceExtendProductInfoRequestTypeEnum | string;
    public constructor(engine?: string, instanceId?: string) { 
        this['engine'] = engine;
        this['instance_id'] = instanceId;
    }
    public withEngine(engine: ShowEngineInstanceExtendProductInfoRequestEngineEnum | string): ShowEngineInstanceExtendProductInfoRequest {
        this['engine'] = engine;
        return this;
    }
    public withInstanceId(instanceId: string): ShowEngineInstanceExtendProductInfoRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withType(type: ShowEngineInstanceExtendProductInfoRequestTypeEnum | string): ShowEngineInstanceExtendProductInfoRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowEngineInstanceExtendProductInfoRequestEngineEnum {
    RABBITMQ = 'rabbitmq'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowEngineInstanceExtendProductInfoRequestTypeEnum {
    ADVANCED = 'advanced',
    PLATINUM = 'platinum',
    DEC = 'dec',
    EXP = 'exp'
}
