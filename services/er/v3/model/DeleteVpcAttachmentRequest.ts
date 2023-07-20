

export class DeleteVpcAttachmentRequest {
    private 'er_id'?: string;
    private 'vpc_attachment_id'?: string;
    public constructor(erId?: string, vpcAttachmentId?: string) { 
        this['er_id'] = erId;
        this['vpc_attachment_id'] = vpcAttachmentId;
    }
    public withErId(erId: string): DeleteVpcAttachmentRequest {
        this['er_id'] = erId;
        return this;
    }
    public set erId(erId: string  | undefined) {
        this['er_id'] = erId;
    }
    public get erId(): string | undefined {
        return this['er_id'];
    }
    public withVpcAttachmentId(vpcAttachmentId: string): DeleteVpcAttachmentRequest {
        this['vpc_attachment_id'] = vpcAttachmentId;
        return this;
    }
    public set vpcAttachmentId(vpcAttachmentId: string  | undefined) {
        this['vpc_attachment_id'] = vpcAttachmentId;
    }
    public get vpcAttachmentId(): string | undefined {
        return this['vpc_attachment_id'];
    }
}