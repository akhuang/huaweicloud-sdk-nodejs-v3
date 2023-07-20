import { UpdateDbUserReq } from './UpdateDbUserReq';


export class UpdateDbUserCommentRequest {
    private 'instance_id'?: string;
    private 'user_name'?: string;
    public body?: UpdateDbUserReq;
    public constructor(instanceId?: string, userName?: string) { 
        this['instance_id'] = instanceId;
        this['user_name'] = userName;
    }
    public withInstanceId(instanceId: string): UpdateDbUserCommentRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withUserName(userName: string): UpdateDbUserCommentRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withBody(body: UpdateDbUserReq): UpdateDbUserCommentRequest {
        this['body'] = body;
        return this;
    }
}