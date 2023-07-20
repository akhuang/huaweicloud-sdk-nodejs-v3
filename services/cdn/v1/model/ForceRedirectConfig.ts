

export class ForceRedirectConfig {
    public status?: string;
    public type?: string;
    private 'redirect_code'?: number;
    public constructor(status?: string) { 
        this['status'] = status;
    }
    public withStatus(status: string): ForceRedirectConfig {
        this['status'] = status;
        return this;
    }
    public withType(type: string): ForceRedirectConfig {
        this['type'] = type;
        return this;
    }
    public withRedirectCode(redirectCode: number): ForceRedirectConfig {
        this['redirect_code'] = redirectCode;
        return this;
    }
    public set redirectCode(redirectCode: number  | undefined) {
        this['redirect_code'] = redirectCode;
    }
    public get redirectCode(): number | undefined {
        return this['redirect_code'];
    }
}