import { ConditionGroup } from './ConditionGroup';
import { RuleAction } from './RuleAction';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRuleResponse extends SdkResponse {
    private 'rule_id'?: string | undefined;
    public name?: string;
    public description?: string;
    private 'condition_group'?: ConditionGroup | undefined;
    public actions?: Array<RuleAction>;
    private 'rule_type'?: string | undefined;
    public status?: string;
    private 'app_id'?: string | undefined;
    private 'edge_node_ids'?: Array<string> | undefined;
    private 'last_update_time'?: string | undefined;
    public constructor() { 
        super();
    }
    public withRuleId(ruleId: string): ShowRuleResponse {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId() {
        return this['rule_id'];
    }
    public withName(name: string): ShowRuleResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowRuleResponse {
        this['description'] = description;
        return this;
    }
    public withConditionGroup(conditionGroup: ConditionGroup): ShowRuleResponse {
        this['condition_group'] = conditionGroup;
        return this;
    }
    public set conditionGroup(conditionGroup: ConditionGroup | undefined) {
        this['condition_group'] = conditionGroup;
    }
    public get conditionGroup() {
        return this['condition_group'];
    }
    public withActions(actions: Array<RuleAction>): ShowRuleResponse {
        this['actions'] = actions;
        return this;
    }
    public withRuleType(ruleType: string): ShowRuleResponse {
        this['rule_type'] = ruleType;
        return this;
    }
    public set ruleType(ruleType: string | undefined) {
        this['rule_type'] = ruleType;
    }
    public get ruleType() {
        return this['rule_type'];
    }
    public withStatus(status: string): ShowRuleResponse {
        this['status'] = status;
        return this;
    }
    public withAppId(appId: string): ShowRuleResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
    public withEdgeNodeIds(edgeNodeIds: Array<string>): ShowRuleResponse {
        this['edge_node_ids'] = edgeNodeIds;
        return this;
    }
    public set edgeNodeIds(edgeNodeIds: Array<string> | undefined) {
        this['edge_node_ids'] = edgeNodeIds;
    }
    public get edgeNodeIds() {
        return this['edge_node_ids'];
    }
    public withLastUpdateTime(lastUpdateTime: string): ShowRuleResponse {
        this['last_update_time'] = lastUpdateTime;
        return this;
    }
    public set lastUpdateTime(lastUpdateTime: string | undefined) {
        this['last_update_time'] = lastUpdateTime;
    }
    public get lastUpdateTime() {
        return this['last_update_time'];
    }
}