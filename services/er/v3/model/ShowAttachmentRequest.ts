

export class ShowAttachmentRequest {
    private 'er_id': string | undefined;
    private 'attachment_id': string | undefined;
    public constructor(erId?: any, attachmentId?: any) { 
        this['er_id'] = erId;
        this['attachment_id'] = attachmentId;
    }
    public withErId(erId: string): ShowAttachmentRequest {
        this['er_id'] = erId;
        return this;
    }
    public set erId(erId: string | undefined) {
        this['er_id'] = erId;
    }
    public get erId() {
        return this['er_id'];
    }
    public withAttachmentId(attachmentId: string): ShowAttachmentRequest {
        this['attachment_id'] = attachmentId;
        return this;
    }
    public set attachmentId(attachmentId: string | undefined) {
        this['attachment_id'] = attachmentId;
    }
    public get attachmentId() {
        return this['attachment_id'];
    }
}