import { ChannelDetail } from './ChannelDetail';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class UpdateRuleActionResponse extends SdkResponse {
    private 'action_id'?: string | undefined;
    private 'rule_id'?: string | undefined;
    private 'app_id'?: string | undefined;
    public channel?: string;
    private 'channel_detail'?: ChannelDetail | undefined;
    public constructor() { 
        super();
    }
    public withActionId(actionId: string): UpdateRuleActionResponse {
        this['action_id'] = actionId;
        return this;
    }
    public set actionId(actionId: string | undefined) {
        this['action_id'] = actionId;
    }
    public get actionId() {
        return this['action_id'];
    }
    public withRuleId(ruleId: string): UpdateRuleActionResponse {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId() {
        return this['rule_id'];
    }
    public withAppId(appId: string): UpdateRuleActionResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
    public withChannel(channel: string): UpdateRuleActionResponse {
        this['channel'] = channel;
        return this;
    }
    public withChannelDetail(channelDetail: ChannelDetail): UpdateRuleActionResponse {
        this['channel_detail'] = channelDetail;
        return this;
    }
    public set channelDetail(channelDetail: ChannelDetail | undefined) {
        this['channel_detail'] = channelDetail;
    }
    public get channelDetail() {
        return this['channel_detail'];
    }
}