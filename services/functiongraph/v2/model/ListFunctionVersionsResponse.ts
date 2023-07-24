import { ListFunctionVersionResult } from './ListFunctionVersionResult';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ListFunctionVersionsResponse extends SdkResponse {
    public versions?: Array<ListFunctionVersionResult>;
    private 'next_marker'?: number | undefined;
    public count?: number;
    public constructor() { 
        super();
    }
    public withVersions(versions: Array<ListFunctionVersionResult>): ListFunctionVersionsResponse {
        this['versions'] = versions;
        return this;
    }
    public withNextMarker(nextMarker: number): ListFunctionVersionsResponse {
        this['next_marker'] = nextMarker;
        return this;
    }
    public set nextMarker(nextMarker: number | undefined) {
        this['next_marker'] = nextMarker;
    }
    public get nextMarker() {
        return this['next_marker'];
    }
    public withCount(count: number): ListFunctionVersionsResponse {
        this['count'] = count;
        return this;
    }
}