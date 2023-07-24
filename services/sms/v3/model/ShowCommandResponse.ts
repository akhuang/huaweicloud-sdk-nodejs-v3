import { ComandParam } from './ComandParam';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ShowCommandResponse extends SdkResponse {
    private 'command_name'?: string | undefined;
    private 'command_param'?: ComandParam | undefined;
    public constructor() { 
        super();
    }
    public withCommandName(commandName: string): ShowCommandResponse {
        this['command_name'] = commandName;
        return this;
    }
    public set commandName(commandName: string | undefined) {
        this['command_name'] = commandName;
    }
    public get commandName() {
        return this['command_name'];
    }
    public withCommandParam(commandParam: ComandParam): ShowCommandResponse {
        this['command_param'] = commandParam;
        return this;
    }
    public set commandParam(commandParam: ComandParam | undefined) {
        this['command_param'] = commandParam;
    }
    public get commandParam() {
        return this['command_param'];
    }
}