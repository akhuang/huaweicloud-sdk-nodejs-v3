import { ListResizeFlavorsResult } from './ListResizeFlavorsResult';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ListResizeFlavorsResponse extends SdkResponse {
    public flavors?: Array<ListResizeFlavorsResult>;
    public constructor() { 
        super();
    }
    public withFlavors(flavors: Array<ListResizeFlavorsResult>): ListResizeFlavorsResponse {
        this['flavors'] = flavors;
        return this;
    }
}