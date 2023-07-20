import { UserAuth } from './UserAuth';


export class CreateNamespaceAuthRequest {
    private 'Content-Type'?: CreateNamespaceAuthRequestContentTypeEnum | string;
    public namespace?: string;
    public body?: Array<UserAuth>;
    public constructor(contentType?: string, namespace?: string) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
    }
    public withContentType(contentType: CreateNamespaceAuthRequestContentTypeEnum | string): CreateNamespaceAuthRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: CreateNamespaceAuthRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): CreateNamespaceAuthRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): CreateNamespaceAuthRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withBody(body: Array<UserAuth>): CreateNamespaceAuthRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateNamespaceAuthRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
