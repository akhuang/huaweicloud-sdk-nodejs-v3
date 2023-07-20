import { CreateRewriteUrlConfig } from './CreateRewriteUrlConfig';


export class CreateRedirectPoolsExtendConfig {
    private 'rewrite_url_enable'?: boolean;
    private 'rewrite_url_config'?: CreateRewriteUrlConfig;
    public constructor() { 
    }
    public withRewriteUrlEnable(rewriteUrlEnable: boolean): CreateRedirectPoolsExtendConfig {
        this['rewrite_url_enable'] = rewriteUrlEnable;
        return this;
    }
    public set rewriteUrlEnable(rewriteUrlEnable: boolean  | undefined) {
        this['rewrite_url_enable'] = rewriteUrlEnable;
    }
    public get rewriteUrlEnable(): boolean | undefined {
        return this['rewrite_url_enable'];
    }
    public withRewriteUrlConfig(rewriteUrlConfig: CreateRewriteUrlConfig): CreateRedirectPoolsExtendConfig {
        this['rewrite_url_config'] = rewriteUrlConfig;
        return this;
    }
    public set rewriteUrlConfig(rewriteUrlConfig: CreateRewriteUrlConfig  | undefined) {
        this['rewrite_url_config'] = rewriteUrlConfig;
    }
    public get rewriteUrlConfig(): CreateRewriteUrlConfig | undefined {
        return this['rewrite_url_config'];
    }
}