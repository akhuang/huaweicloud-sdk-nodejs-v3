import { UpdateJobTemplatesRequestBody } from './UpdateJobTemplatesRequestBody';


export class UpdateJobTemplatesRequest {
    private 'template_id'?: string;
    public body?: UpdateJobTemplatesRequestBody;
    public constructor(templateId?: string) { 
        this['template_id'] = templateId;
    }
    public withTemplateId(templateId: string): UpdateJobTemplatesRequest {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withBody(body: UpdateJobTemplatesRequestBody): UpdateJobTemplatesRequest {
        this['body'] = body;
        return this;
    }
}