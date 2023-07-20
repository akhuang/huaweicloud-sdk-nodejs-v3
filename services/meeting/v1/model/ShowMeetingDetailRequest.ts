

export class ShowMeetingDetailRequest {
    public conferenceID?: string;
    public offset?: number;
    public limit?: number;
    public searchKey?: string;
    public userUUID?: string;
    private 'X-Type'?: string;
    private 'X-Query-Type'?: string;
    private 'X-Authorization-Type'?: string;
    private 'X-Site-Id'?: string;
    public constructor(conferenceID?: string) { 
        this['conferenceID'] = conferenceID;
    }
    public withConferenceID(conferenceID: string): ShowMeetingDetailRequest {
        this['conferenceID'] = conferenceID;
        return this;
    }
    public withOffset(offset: number): ShowMeetingDetailRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowMeetingDetailRequest {
        this['limit'] = limit;
        return this;
    }
    public withSearchKey(searchKey: string): ShowMeetingDetailRequest {
        this['searchKey'] = searchKey;
        return this;
    }
    public withUserUUID(userUUID: string): ShowMeetingDetailRequest {
        this['userUUID'] = userUUID;
        return this;
    }
    public withXType(xType: string): ShowMeetingDetailRequest {
        this['X-Type'] = xType;
        return this;
    }
    public set xType(xType: string  | undefined) {
        this['X-Type'] = xType;
    }
    public get xType(): string | undefined {
        return this['X-Type'];
    }
    public withXQueryType(xQueryType: string): ShowMeetingDetailRequest {
        this['X-Query-Type'] = xQueryType;
        return this;
    }
    public set xQueryType(xQueryType: string  | undefined) {
        this['X-Query-Type'] = xQueryType;
    }
    public get xQueryType(): string | undefined {
        return this['X-Query-Type'];
    }
    public withXAuthorizationType(xAuthorizationType: string): ShowMeetingDetailRequest {
        this['X-Authorization-Type'] = xAuthorizationType;
        return this;
    }
    public set xAuthorizationType(xAuthorizationType: string  | undefined) {
        this['X-Authorization-Type'] = xAuthorizationType;
    }
    public get xAuthorizationType(): string | undefined {
        return this['X-Authorization-Type'];
    }
    public withXSiteId(xSiteId: string): ShowMeetingDetailRequest {
        this['X-Site-Id'] = xSiteId;
        return this;
    }
    public set xSiteId(xSiteId: string  | undefined) {
        this['X-Site-Id'] = xSiteId;
    }
    public get xSiteId(): string | undefined {
        return this['X-Site-Id'];
    }
}