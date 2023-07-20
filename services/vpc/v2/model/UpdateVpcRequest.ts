import { UpdateVpcRequestBody } from './UpdateVpcRequestBody';


export class UpdateVpcRequest {
    private 'vpc_id'?: string;
    public body?: UpdateVpcRequestBody;
    public constructor(vpcId?: string) { 
        this['vpc_id'] = vpcId;
    }
    public withVpcId(vpcId: string): UpdateVpcRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withBody(body: UpdateVpcRequestBody): UpdateVpcRequest {
        this['body'] = body;
        return this;
    }
}