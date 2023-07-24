import { AddressItemListResponseDTOData } from './AddressItemListResponseDTOData';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ListAddressItemsUsingGetResponse extends SdkResponse {
    public data?: AddressItemListResponseDTOData;
    public constructor() { 
        super();
    }
    public withData(data: AddressItemListResponseDTOData): ListAddressItemsUsingGetResponse {
        this['data'] = data;
        return this;
    }
}