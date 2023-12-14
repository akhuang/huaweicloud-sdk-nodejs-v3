
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPullSourcesConfigResponse extends SdkResponse {
    private 'play_domain'?: string;
    private 'source_type'?: ShowPullSourcesConfigResponseSourceTypeEnum | string;
    public sources?: Array<string>;
    private 'sources_ip'?: Array<string>;
    public scheme?: ShowPullSourcesConfigResponseSchemeEnum | string;
    private 'additional_args'?: { [key: string]: string; };
    public constructor() { 
        super();
    }
    public withPlayDomain(playDomain: string): ShowPullSourcesConfigResponse {
        this['play_domain'] = playDomain;
        return this;
    }
    public set playDomain(playDomain: string  | undefined) {
        this['play_domain'] = playDomain;
    }
    public get playDomain(): string | undefined {
        return this['play_domain'];
    }
    public withSourceType(sourceType: ShowPullSourcesConfigResponseSourceTypeEnum | string): ShowPullSourcesConfigResponse {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: ShowPullSourcesConfigResponseSourceTypeEnum | string  | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType(): ShowPullSourcesConfigResponseSourceTypeEnum | string | undefined {
        return this['source_type'];
    }
    public withSources(sources: Array<string>): ShowPullSourcesConfigResponse {
        this['sources'] = sources;
        return this;
    }
    public withSourcesIp(sourcesIp: Array<string>): ShowPullSourcesConfigResponse {
        this['sources_ip'] = sourcesIp;
        return this;
    }
    public set sourcesIp(sourcesIp: Array<string>  | undefined) {
        this['sources_ip'] = sourcesIp;
    }
    public get sourcesIp(): Array<string> | undefined {
        return this['sources_ip'];
    }
    public withScheme(scheme: ShowPullSourcesConfigResponseSchemeEnum | string): ShowPullSourcesConfigResponse {
        this['scheme'] = scheme;
        return this;
    }
    public withAdditionalArgs(additionalArgs: { [key: string]: string; }): ShowPullSourcesConfigResponse {
        this['additional_args'] = additionalArgs;
        return this;
    }
    public set additionalArgs(additionalArgs: { [key: string]: string; }  | undefined) {
        this['additional_args'] = additionalArgs;
    }
    public get additionalArgs(): { [key: string]: string; } | undefined {
        return this['additional_args'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowPullSourcesConfigResponseSourceTypeEnum {
    DOMAIN = 'domain',
    IPADDR = 'ipaddr',
    HUAWEI = 'huawei'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowPullSourcesConfigResponseSchemeEnum {
    HTTP = 'http',
    RTMP = 'rtmp'
}
