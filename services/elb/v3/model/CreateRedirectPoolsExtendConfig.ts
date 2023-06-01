import { CreateRewriteUrlConfig } from './CreateRewriteUrlConfig';


export class CreateRedirectPoolsExtendConfig {
    private 'rewrite_url_enable'?: boolean | undefined;
    private 'rewrite_url_config'?: CreateRewriteUrlConfig | undefined;
    public constructor() { 
    }
    public withRewriteUrlEnable(rewriteUrlEnable: boolean): CreateRedirectPoolsExtendConfig {
        this['rewrite_url_enable'] = rewriteUrlEnable;
        return this;
    }
    public set rewriteUrlEnable(rewriteUrlEnable: boolean | undefined) {
        this['rewrite_url_enable'] = rewriteUrlEnable;
    }
    public get rewriteUrlEnable() {
        return this['rewrite_url_enable'];
    }
    public withRewriteUrlConfig(rewriteUrlConfig: CreateRewriteUrlConfig): CreateRedirectPoolsExtendConfig {
        this['rewrite_url_config'] = rewriteUrlConfig;
        return this;
    }
    public set rewriteUrlConfig(rewriteUrlConfig: CreateRewriteUrlConfig | undefined) {
        this['rewrite_url_config'] = rewriteUrlConfig;
    }
    public get rewriteUrlConfig() {
        return this['rewrite_url_config'];
    }
}