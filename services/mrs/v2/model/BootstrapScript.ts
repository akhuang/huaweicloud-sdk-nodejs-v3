

export class BootstrapScript {
    public name?: string;
    public uri?: string;
    public parameters?: string;
    public nodes?: Array<string>;
    private 'active_master'?: boolean;
    private 'fail_action'?: BootstrapScriptFailActionEnum | string;
    private 'before_component_start'?: boolean;
    private 'start_time'?: number;
    public state?: BootstrapScriptStateEnum | string;
    private 'action_stages'?: Array<BootstrapScriptActionStagesEnum> | Array<string>;
    public constructor(name?: string, uri?: string, nodes?: Array<string>, failAction?: string) { 
        this['name'] = name;
        this['uri'] = uri;
        this['nodes'] = nodes;
        this['fail_action'] = failAction;
    }
    public withName(name: string): BootstrapScript {
        this['name'] = name;
        return this;
    }
    public withUri(uri: string): BootstrapScript {
        this['uri'] = uri;
        return this;
    }
    public withParameters(parameters: string): BootstrapScript {
        this['parameters'] = parameters;
        return this;
    }
    public withNodes(nodes: Array<string>): BootstrapScript {
        this['nodes'] = nodes;
        return this;
    }
    public withActiveMaster(activeMaster: boolean): BootstrapScript {
        this['active_master'] = activeMaster;
        return this;
    }
    public set activeMaster(activeMaster: boolean  | undefined) {
        this['active_master'] = activeMaster;
    }
    public get activeMaster(): boolean | undefined {
        return this['active_master'];
    }
    public withFailAction(failAction: BootstrapScriptFailActionEnum | string): BootstrapScript {
        this['fail_action'] = failAction;
        return this;
    }
    public set failAction(failAction: BootstrapScriptFailActionEnum | string  | undefined) {
        this['fail_action'] = failAction;
    }
    public get failAction(): BootstrapScriptFailActionEnum | string | undefined {
        return this['fail_action'];
    }
    public withBeforeComponentStart(beforeComponentStart: boolean): BootstrapScript {
        this['before_component_start'] = beforeComponentStart;
        return this;
    }
    public set beforeComponentStart(beforeComponentStart: boolean  | undefined) {
        this['before_component_start'] = beforeComponentStart;
    }
    public get beforeComponentStart(): boolean | undefined {
        return this['before_component_start'];
    }
    public withStartTime(startTime: number): BootstrapScript {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withState(state: BootstrapScriptStateEnum | string): BootstrapScript {
        this['state'] = state;
        return this;
    }
    public withActionStages(actionStages: Array<BootstrapScriptActionStagesEnum> | Array<string>): BootstrapScript {
        this['action_stages'] = actionStages;
        return this;
    }
    public set actionStages(actionStages: Array<BootstrapScriptActionStagesEnum> | Array<string>  | undefined) {
        this['action_stages'] = actionStages;
    }
    public get actionStages(): Array<BootstrapScriptActionStagesEnum> | Array<string> | undefined {
        return this['action_stages'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BootstrapScriptFailActionEnum {
    CONTINUE = 'continue',
    ERROROUT = 'errorout'
}
/**
    * @export
    * @enum {string}
    */
export enum BootstrapScriptStateEnum {
    PENDING = 'PENDING',
    IN_PROGRESS = 'IN_PROGRESS',
    SUCCESS = 'SUCCESS',
    FAILURE = 'FAILURE'
}
/**
    * @export
    * @enum {string}
    */
export enum BootstrapScriptActionStagesEnum {
    BEFORE_COMPONENT_FIRST_START = 'BEFORE_COMPONENT_FIRST_START',
    AFTER_COMPONENT_FIRST_START = 'AFTER_COMPONENT_FIRST_START',
    BEFORE_SCALE_IN = 'BEFORE_SCALE_IN',
    AFTER_SCALE_IN = 'AFTER_SCALE_IN',
    BEFORE_SCALE_OUT = 'BEFORE_SCALE_OUT',
    AFTER_SCALE_OUT = 'AFTER_SCALE_OUT'
}
