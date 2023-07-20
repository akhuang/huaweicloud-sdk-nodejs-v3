
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAlarmSubResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public enable?: number;
    private 'alarm_level'?: string;
    private 'project_id'?: string;
    private 'name_space'?: string;
    private 'notification_target'?: string;
    private 'notification_target_name'?: string;
    private 'notification_target_type'?: string;
    public language?: string;
    private 'time_zone'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateAlarmSubResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpdateAlarmSubResponse {
        this['name'] = name;
        return this;
    }
    public withEnable(enable: number): UpdateAlarmSubResponse {
        this['enable'] = enable;
        return this;
    }
    public withAlarmLevel(alarmLevel: string): UpdateAlarmSubResponse {
        this['alarm_level'] = alarmLevel;
        return this;
    }
    public set alarmLevel(alarmLevel: string  | undefined) {
        this['alarm_level'] = alarmLevel;
    }
    public get alarmLevel(): string | undefined {
        return this['alarm_level'];
    }
    public withProjectId(projectId: string): UpdateAlarmSubResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withNameSpace(nameSpace: string): UpdateAlarmSubResponse {
        this['name_space'] = nameSpace;
        return this;
    }
    public set nameSpace(nameSpace: string  | undefined) {
        this['name_space'] = nameSpace;
    }
    public get nameSpace(): string | undefined {
        return this['name_space'];
    }
    public withNotificationTarget(notificationTarget: string): UpdateAlarmSubResponse {
        this['notification_target'] = notificationTarget;
        return this;
    }
    public set notificationTarget(notificationTarget: string  | undefined) {
        this['notification_target'] = notificationTarget;
    }
    public get notificationTarget(): string | undefined {
        return this['notification_target'];
    }
    public withNotificationTargetName(notificationTargetName: string): UpdateAlarmSubResponse {
        this['notification_target_name'] = notificationTargetName;
        return this;
    }
    public set notificationTargetName(notificationTargetName: string  | undefined) {
        this['notification_target_name'] = notificationTargetName;
    }
    public get notificationTargetName(): string | undefined {
        return this['notification_target_name'];
    }
    public withNotificationTargetType(notificationTargetType: string): UpdateAlarmSubResponse {
        this['notification_target_type'] = notificationTargetType;
        return this;
    }
    public set notificationTargetType(notificationTargetType: string  | undefined) {
        this['notification_target_type'] = notificationTargetType;
    }
    public get notificationTargetType(): string | undefined {
        return this['notification_target_type'];
    }
    public withLanguage(language: string): UpdateAlarmSubResponse {
        this['language'] = language;
        return this;
    }
    public withTimeZone(timeZone: string): UpdateAlarmSubResponse {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
}