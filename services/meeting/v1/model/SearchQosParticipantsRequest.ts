

export class SearchQosParticipantsRequest {
    public confUUID?: string;
    public confType?: SearchQosParticipantsRequestConfTypeEnum | string;
    public offset?: number;
    public limit?: number;
    public searchKey?: string;
    public constructor(confUUID?: string, confType?: string) { 
        this['confUUID'] = confUUID;
        this['confType'] = confType;
    }
    public withConfUUID(confUUID: string): SearchQosParticipantsRequest {
        this['confUUID'] = confUUID;
        return this;
    }
    public withConfType(confType: SearchQosParticipantsRequestConfTypeEnum | string): SearchQosParticipantsRequest {
        this['confType'] = confType;
        return this;
    }
    public withOffset(offset: number): SearchQosParticipantsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchQosParticipantsRequest {
        this['limit'] = limit;
        return this;
    }
    public withSearchKey(searchKey: string): SearchQosParticipantsRequest {
        this['searchKey'] = searchKey;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SearchQosParticipantsRequestConfTypeEnum {
    ONLINE = 'online',
    HISTORY = 'history'
}
