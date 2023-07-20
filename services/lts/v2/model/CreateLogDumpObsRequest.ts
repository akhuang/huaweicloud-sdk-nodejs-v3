import { CreateLogDumpObsRequestBody } from './CreateLogDumpObsRequestBody';


export class CreateLogDumpObsRequest {
    private 'Content-Type'?: string;
    public body?: CreateLogDumpObsRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): CreateLogDumpObsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: CreateLogDumpObsRequestBody): CreateLogDumpObsRequest {
        this['body'] = body;
        return this;
    }
}