import { Flavor } from './Flavor';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ListFlavorsResponse extends SdkResponse {
    public flavors?: Array<Flavor>;
    public constructor() { 
        super();
    }
    public withFlavors(flavors: Array<Flavor>): ListFlavorsResponse {
        this['flavors'] = flavors;
        return this;
    }
}