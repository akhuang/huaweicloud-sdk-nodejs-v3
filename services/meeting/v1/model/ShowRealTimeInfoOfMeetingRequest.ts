

export class ShowRealTimeInfoOfMeetingRequest {
    public conferenceID?: string;
    private 'X-Conference-Authorization'?: string;
    public constructor(conferenceID?: string, xConferenceAuthorization?: string) { 
        this['conferenceID'] = conferenceID;
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public withConferenceID(conferenceID: string): ShowRealTimeInfoOfMeetingRequest {
        this['conferenceID'] = conferenceID;
        return this;
    }
    public withXConferenceAuthorization(xConferenceAuthorization: string): ShowRealTimeInfoOfMeetingRequest {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
        return this;
    }
    public set xConferenceAuthorization(xConferenceAuthorization: string  | undefined) {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public get xConferenceAuthorization(): string | undefined {
        return this['X-Conference-Authorization'];
    }
}