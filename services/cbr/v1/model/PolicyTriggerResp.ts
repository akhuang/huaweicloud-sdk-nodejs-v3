import { PolicyTriggerPropertiesResp } from './PolicyTriggerPropertiesResp';


export class PolicyTriggerResp {
    public id?: string;
    public name?: string;
    public properties?: PolicyTriggerPropertiesResp;
    public type?: PolicyTriggerRespTypeEnum | string;
    public constructor(id?: string, properties?: PolicyTriggerPropertiesResp) { 
        this['id'] = id;
        this['properties'] = properties;
    }
    public withId(id: string): PolicyTriggerResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): PolicyTriggerResp {
        this['name'] = name;
        return this;
    }
    public withProperties(properties: PolicyTriggerPropertiesResp): PolicyTriggerResp {
        this['properties'] = properties;
        return this;
    }
    public withType(type: PolicyTriggerRespTypeEnum | string): PolicyTriggerResp {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PolicyTriggerRespTypeEnum {
    TIME = 'time'
}
