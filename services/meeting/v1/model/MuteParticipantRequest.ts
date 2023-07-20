import { RestMuteParticipantReqBody } from './RestMuteParticipantReqBody';


export class MuteParticipantRequest {
    public conferenceID?: string;
    public participantID?: string;
    private 'X-Conference-Authorization'?: string;
    public body?: RestMuteParticipantReqBody;
    public constructor(conferenceID?: string, participantID?: string, xConferenceAuthorization?: string) { 
        this['conferenceID'] = conferenceID;
        this['participantID'] = participantID;
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public withConferenceID(conferenceID: string): MuteParticipantRequest {
        this['conferenceID'] = conferenceID;
        return this;
    }
    public withParticipantID(participantID: string): MuteParticipantRequest {
        this['participantID'] = participantID;
        return this;
    }
    public withXConferenceAuthorization(xConferenceAuthorization: string): MuteParticipantRequest {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
        return this;
    }
    public set xConferenceAuthorization(xConferenceAuthorization: string  | undefined) {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public get xConferenceAuthorization(): string | undefined {
        return this['X-Conference-Authorization'];
    }
    public withBody(body: RestMuteParticipantReqBody): MuteParticipantRequest {
        this['body'] = body;
        return this;
    }
}