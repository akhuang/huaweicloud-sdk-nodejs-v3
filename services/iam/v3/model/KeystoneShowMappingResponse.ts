import { MappingResult } from './MappingResult';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class KeystoneShowMappingResponse extends SdkResponse {
    public mapping?: MappingResult;
    public constructor() { 
        super();
    }
    public withMapping(mapping: MappingResult): KeystoneShowMappingResponse {
        this['mapping'] = mapping;
        return this;
    }
}