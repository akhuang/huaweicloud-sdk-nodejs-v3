import { Action } from './Action';
import { OnError } from './OnError';
import { StateDataFilter } from './StateDataFilter';


export class OperationState {
    private 'action_mode'?: OperationStateActionModeEnum | string;
    public actions?: Array<Action>;
    private 'on_errors'?: Array<OnError>;
    public id?: string;
    public name?: string;
    public type?: OperationStateTypeEnum | string;
    public end?: boolean;
    public transition?: string;
    private 'state_data_filter'?: StateDataFilter;
    public duration?: number;
    public constructor(actions?: Array<Action>, id?: string, name?: string, type?: string, end?: boolean, transition?: string) { 
        this['actions'] = actions;
        this['id'] = id;
        this['name'] = name;
        this['type'] = type;
        this['end'] = end;
        this['transition'] = transition;
    }
    public withActionMode(actionMode: OperationStateActionModeEnum | string): OperationState {
        this['action_mode'] = actionMode;
        return this;
    }
    public set actionMode(actionMode: OperationStateActionModeEnum | string  | undefined) {
        this['action_mode'] = actionMode;
    }
    public get actionMode(): OperationStateActionModeEnum | string | undefined {
        return this['action_mode'];
    }
    public withActions(actions: Array<Action>): OperationState {
        this['actions'] = actions;
        return this;
    }
    public withOnErrors(onErrors: Array<OnError>): OperationState {
        this['on_errors'] = onErrors;
        return this;
    }
    public set onErrors(onErrors: Array<OnError>  | undefined) {
        this['on_errors'] = onErrors;
    }
    public get onErrors(): Array<OnError> | undefined {
        return this['on_errors'];
    }
    public withId(id: string): OperationState {
        this['id'] = id;
        return this;
    }
    public withName(name: string): OperationState {
        this['name'] = name;
        return this;
    }
    public withType(type: OperationStateTypeEnum | string): OperationState {
        this['type'] = type;
        return this;
    }
    public withEnd(end: boolean): OperationState {
        this['end'] = end;
        return this;
    }
    public withTransition(transition: string): OperationState {
        this['transition'] = transition;
        return this;
    }
    public withStateDataFilter(stateDataFilter: StateDataFilter): OperationState {
        this['state_data_filter'] = stateDataFilter;
        return this;
    }
    public set stateDataFilter(stateDataFilter: StateDataFilter  | undefined) {
        this['state_data_filter'] = stateDataFilter;
    }
    public get stateDataFilter(): StateDataFilter | undefined {
        return this['state_data_filter'];
    }
    public withDuration(duration: number): OperationState {
        this['duration'] = duration;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OperationStateActionModeEnum {
    SEQUENTIAL = 'sequential',
    PARALLEL = 'parallel'
}
/**
    * @export
    * @enum {string}
    */
export enum OperationStateTypeEnum {
    OPERATION = 'Operation',
    SLEEP = 'Sleep',
    END = 'End'
}
