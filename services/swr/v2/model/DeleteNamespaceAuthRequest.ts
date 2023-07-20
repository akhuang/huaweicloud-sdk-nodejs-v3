

export class DeleteNamespaceAuthRequest {
    private 'Content-Type'?: DeleteNamespaceAuthRequestContentTypeEnum | string;
    public namespace?: string;
    public body?: Array<string>;
    public constructor(contentType?: string, namespace?: string) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
    }
    public withContentType(contentType: DeleteNamespaceAuthRequestContentTypeEnum | string): DeleteNamespaceAuthRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: DeleteNamespaceAuthRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): DeleteNamespaceAuthRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): DeleteNamespaceAuthRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withBody(body: Array<string>): DeleteNamespaceAuthRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteNamespaceAuthRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
