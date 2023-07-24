import { Action } from './Action';
import { BindHost } from './BindHost';
import { PolicyAction } from './PolicyAction';
import { PolicyOption } from './PolicyOption';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class DeletePolicyResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public level?: number;
    private 'full_detection'?: boolean | undefined;
    private 'robot_action'?: Action | undefined;
    public action?: PolicyAction;
    public options?: PolicyOption;
    private 'modulex_options'?: { [key: string]: object; } | undefined;
    public hosts?: Array<string>;
    private 'bind_host'?: Array<BindHost> | undefined;
    public extend?: { [key: string]: string; };
    public timestamp?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): DeletePolicyResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): DeletePolicyResponse {
        this['name'] = name;
        return this;
    }
    public withLevel(level: number): DeletePolicyResponse {
        this['level'] = level;
        return this;
    }
    public withFullDetection(fullDetection: boolean): DeletePolicyResponse {
        this['full_detection'] = fullDetection;
        return this;
    }
    public set fullDetection(fullDetection: boolean | undefined) {
        this['full_detection'] = fullDetection;
    }
    public get fullDetection() {
        return this['full_detection'];
    }
    public withRobotAction(robotAction: Action): DeletePolicyResponse {
        this['robot_action'] = robotAction;
        return this;
    }
    public set robotAction(robotAction: Action | undefined) {
        this['robot_action'] = robotAction;
    }
    public get robotAction() {
        return this['robot_action'];
    }
    public withAction(action: PolicyAction): DeletePolicyResponse {
        this['action'] = action;
        return this;
    }
    public withOptions(options: PolicyOption): DeletePolicyResponse {
        this['options'] = options;
        return this;
    }
    public withModulexOptions(modulexOptions: { [key: string]: object; }): DeletePolicyResponse {
        this['modulex_options'] = modulexOptions;
        return this;
    }
    public set modulexOptions(modulexOptions: { [key: string]: object; } | undefined) {
        this['modulex_options'] = modulexOptions;
    }
    public get modulexOptions() {
        return this['modulex_options'];
    }
    public withHosts(hosts: Array<string>): DeletePolicyResponse {
        this['hosts'] = hosts;
        return this;
    }
    public withBindHost(bindHost: Array<BindHost>): DeletePolicyResponse {
        this['bind_host'] = bindHost;
        return this;
    }
    public set bindHost(bindHost: Array<BindHost> | undefined) {
        this['bind_host'] = bindHost;
    }
    public get bindHost() {
        return this['bind_host'];
    }
    public withExtend(extend: { [key: string]: string; }): DeletePolicyResponse {
        this['extend'] = extend;
        return this;
    }
    public withTimestamp(timestamp: number): DeletePolicyResponse {
        this['timestamp'] = timestamp;
        return this;
    }
}