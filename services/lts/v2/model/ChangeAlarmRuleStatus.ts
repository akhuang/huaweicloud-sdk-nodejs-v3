

export class ChangeAlarmRuleStatus {
    private 'alarm_rule_id'?: string;
    public status?: string;
    public type?: string;
    public constructor(alarmRuleId?: string, status?: string, type?: string) { 
        this['alarm_rule_id'] = alarmRuleId;
        this['status'] = status;
        this['type'] = type;
    }
    public withAlarmRuleId(alarmRuleId: string): ChangeAlarmRuleStatus {
        this['alarm_rule_id'] = alarmRuleId;
        return this;
    }
    public set alarmRuleId(alarmRuleId: string  | undefined) {
        this['alarm_rule_id'] = alarmRuleId;
    }
    public get alarmRuleId(): string | undefined {
        return this['alarm_rule_id'];
    }
    public withStatus(status: string): ChangeAlarmRuleStatus {
        this['status'] = status;
        return this;
    }
    public withType(type: string): ChangeAlarmRuleStatus {
        this['type'] = type;
        return this;
    }
}