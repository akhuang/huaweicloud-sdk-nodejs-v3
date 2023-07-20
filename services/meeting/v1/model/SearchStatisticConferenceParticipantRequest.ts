

export class SearchStatisticConferenceParticipantRequest {
    public offset?: number;
    public limit?: number;
    public timeUnit?: SearchStatisticConferenceParticipantRequestTimeUnitEnum | string;
    public startTime?: string;
    public endTime?: string;
    public category?: SearchStatisticConferenceParticipantRequestCategoryEnum | string;
    public constructor(timeUnit?: string, startTime?: string, endTime?: string, category?: string) { 
        this['timeUnit'] = timeUnit;
        this['startTime'] = startTime;
        this['endTime'] = endTime;
        this['category'] = category;
    }
    public withOffset(offset: number): SearchStatisticConferenceParticipantRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchStatisticConferenceParticipantRequest {
        this['limit'] = limit;
        return this;
    }
    public withTimeUnit(timeUnit: SearchStatisticConferenceParticipantRequestTimeUnitEnum | string): SearchStatisticConferenceParticipantRequest {
        this['timeUnit'] = timeUnit;
        return this;
    }
    public withStartTime(startTime: string): SearchStatisticConferenceParticipantRequest {
        this['startTime'] = startTime;
        return this;
    }
    public withEndTime(endTime: string): SearchStatisticConferenceParticipantRequest {
        this['endTime'] = endTime;
        return this;
    }
    public withCategory(category: SearchStatisticConferenceParticipantRequestCategoryEnum | string): SearchStatisticConferenceParticipantRequest {
        this['category'] = category;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SearchStatisticConferenceParticipantRequestTimeUnitEnum {
    D = 'D',
    M = 'M'
}
/**
    * @export
    * @enum {string}
    */
export enum SearchStatisticConferenceParticipantRequestCategoryEnum {
    USER_PARTICIPATE_INFO = 'user_participate_info',
    HARD_TERMINAL_PARTICIPATE_INFO = 'hard_terminal_participate_info',
    PARTICIPANT_TYPE_INFO = 'participant_type_info'
}
