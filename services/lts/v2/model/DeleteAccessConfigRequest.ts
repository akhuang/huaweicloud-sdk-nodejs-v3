import { DeleteAccessConfigRequestBody } from './DeleteAccessConfigRequestBody';


export class DeleteAccessConfigRequest {
    private 'Content-Type'?: string;
    public body?: DeleteAccessConfigRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): DeleteAccessConfigRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: DeleteAccessConfigRequestBody): DeleteAccessConfigRequest {
        this['body'] = body;
        return this;
    }
}