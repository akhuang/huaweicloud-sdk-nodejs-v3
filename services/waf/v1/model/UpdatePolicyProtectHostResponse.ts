import { Action } from './Action';
import { BindHost } from './BindHost';
import { PolicyAction } from './PolicyAction';
import { PolicyOption } from './PolicyOption';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePolicyProtectHostResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public level?: number;
    private 'full_detection'?: boolean;
    private 'robot_action'?: Action;
    public action?: PolicyAction;
    public options?: PolicyOption;
    private 'modulex_options'?: { [key: string]: object; };
    public hosts?: Array<string>;
    private 'bind_host'?: Array<BindHost>;
    public extend?: { [key: string]: string; };
    public timestamp?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdatePolicyProtectHostResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpdatePolicyProtectHostResponse {
        this['name'] = name;
        return this;
    }
    public withLevel(level: number): UpdatePolicyProtectHostResponse {
        this['level'] = level;
        return this;
    }
    public withFullDetection(fullDetection: boolean): UpdatePolicyProtectHostResponse {
        this['full_detection'] = fullDetection;
        return this;
    }
    public set fullDetection(fullDetection: boolean  | undefined) {
        this['full_detection'] = fullDetection;
    }
    public get fullDetection(): boolean | undefined {
        return this['full_detection'];
    }
    public withRobotAction(robotAction: Action): UpdatePolicyProtectHostResponse {
        this['robot_action'] = robotAction;
        return this;
    }
    public set robotAction(robotAction: Action  | undefined) {
        this['robot_action'] = robotAction;
    }
    public get robotAction(): Action | undefined {
        return this['robot_action'];
    }
    public withAction(action: PolicyAction): UpdatePolicyProtectHostResponse {
        this['action'] = action;
        return this;
    }
    public withOptions(options: PolicyOption): UpdatePolicyProtectHostResponse {
        this['options'] = options;
        return this;
    }
    public withModulexOptions(modulexOptions: { [key: string]: object; }): UpdatePolicyProtectHostResponse {
        this['modulex_options'] = modulexOptions;
        return this;
    }
    public set modulexOptions(modulexOptions: { [key: string]: object; }  | undefined) {
        this['modulex_options'] = modulexOptions;
    }
    public get modulexOptions(): { [key: string]: object; } | undefined {
        return this['modulex_options'];
    }
    public withHosts(hosts: Array<string>): UpdatePolicyProtectHostResponse {
        this['hosts'] = hosts;
        return this;
    }
    public withBindHost(bindHost: Array<BindHost>): UpdatePolicyProtectHostResponse {
        this['bind_host'] = bindHost;
        return this;
    }
    public set bindHost(bindHost: Array<BindHost>  | undefined) {
        this['bind_host'] = bindHost;
    }
    public get bindHost(): Array<BindHost> | undefined {
        return this['bind_host'];
    }
    public withExtend(extend: { [key: string]: string; }): UpdatePolicyProtectHostResponse {
        this['extend'] = extend;
        return this;
    }
    public withTimestamp(timestamp: number): UpdatePolicyProtectHostResponse {
        this['timestamp'] = timestamp;
        return this;
    }
}