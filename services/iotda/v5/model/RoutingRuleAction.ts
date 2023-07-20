import { ChannelDetail } from './ChannelDetail';


export class RoutingRuleAction {
    private 'action_id'?: string;
    private 'rule_id'?: string;
    private 'app_id'?: string;
    public channel?: string;
    private 'channel_detail'?: ChannelDetail;
    public constructor() { 
    }
    public withActionId(actionId: string): RoutingRuleAction {
        this['action_id'] = actionId;
        return this;
    }
    public set actionId(actionId: string  | undefined) {
        this['action_id'] = actionId;
    }
    public get actionId(): string | undefined {
        return this['action_id'];
    }
    public withRuleId(ruleId: string): RoutingRuleAction {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withAppId(appId: string): RoutingRuleAction {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withChannel(channel: string): RoutingRuleAction {
        this['channel'] = channel;
        return this;
    }
    public withChannelDetail(channelDetail: ChannelDetail): RoutingRuleAction {
        this['channel_detail'] = channelDetail;
        return this;
    }
    public set channelDetail(channelDetail: ChannelDetail  | undefined) {
        this['channel_detail'] = channelDetail;
    }
    public get channelDetail(): ChannelDetail | undefined {
        return this['channel_detail'];
    }
}