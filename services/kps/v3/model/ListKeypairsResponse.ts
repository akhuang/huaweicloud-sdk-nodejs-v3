import { Keypairs } from './Keypairs';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ListKeypairsResponse extends SdkResponse {
    public keypairs?: Array<Keypairs>;
    private 'page_info'?: PageInfo | undefined;
    public constructor() { 
        super();
    }
    public withKeypairs(keypairs: Array<Keypairs>): ListKeypairsResponse {
        this['keypairs'] = keypairs;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListKeypairsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo() {
        return this['page_info'];
    }
}