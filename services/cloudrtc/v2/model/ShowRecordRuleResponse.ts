import { HLSRecordConfig } from './HLSRecordConfig';
import { MP4RecordConfig } from './MP4RecordConfig';
import { RecordObsFileAddr } from './RecordObsFileAddr';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRecordRuleResponse extends SdkResponse {
    private 'rule_id'?: string;
    private 'app_id'?: string;
    private 'obs_addr'?: RecordObsFileAddr;
    private 'record_formats'?: Array<ShowRecordRuleResponseRecordFormatsEnum> | Array<string>;
    private 'hls_config'?: HLSRecordConfig;
    private 'mp4_config'?: MP4RecordConfig;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'X-request-Id'?: string;
    public constructor() { 
        super();
    }
    public withRuleId(ruleId: string): ShowRecordRuleResponse {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withAppId(appId: string): ShowRecordRuleResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withObsAddr(obsAddr: RecordObsFileAddr): ShowRecordRuleResponse {
        this['obs_addr'] = obsAddr;
        return this;
    }
    public set obsAddr(obsAddr: RecordObsFileAddr  | undefined) {
        this['obs_addr'] = obsAddr;
    }
    public get obsAddr(): RecordObsFileAddr | undefined {
        return this['obs_addr'];
    }
    public withRecordFormats(recordFormats: Array<ShowRecordRuleResponseRecordFormatsEnum> | Array<string>): ShowRecordRuleResponse {
        this['record_formats'] = recordFormats;
        return this;
    }
    public set recordFormats(recordFormats: Array<ShowRecordRuleResponseRecordFormatsEnum> | Array<string>  | undefined) {
        this['record_formats'] = recordFormats;
    }
    public get recordFormats(): Array<ShowRecordRuleResponseRecordFormatsEnum> | Array<string> | undefined {
        return this['record_formats'];
    }
    public withHlsConfig(hlsConfig: HLSRecordConfig): ShowRecordRuleResponse {
        this['hls_config'] = hlsConfig;
        return this;
    }
    public set hlsConfig(hlsConfig: HLSRecordConfig  | undefined) {
        this['hls_config'] = hlsConfig;
    }
    public get hlsConfig(): HLSRecordConfig | undefined {
        return this['hls_config'];
    }
    public withMp4Config(mp4Config: MP4RecordConfig): ShowRecordRuleResponse {
        this['mp4_config'] = mp4Config;
        return this;
    }
    public set mp4Config(mp4Config: MP4RecordConfig  | undefined) {
        this['mp4_config'] = mp4Config;
    }
    public get mp4Config(): MP4RecordConfig | undefined {
        return this['mp4_config'];
    }
    public withCreateTime(createTime: string): ShowRecordRuleResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowRecordRuleResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withXRequestId(xRequestId: string): ShowRecordRuleResponse {
        this['X-request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-Id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowRecordRuleResponseRecordFormatsEnum {
    HLS = 'HLS',
    MP4 = 'MP4'
}
