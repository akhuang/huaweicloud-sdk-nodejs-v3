import { IpsSwitchResponseDTO } from './IpsSwitchResponseDTO';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ListIpsSwitchStatusUsingGetResponse extends SdkResponse {
    public data?: IpsSwitchResponseDTO;
    public constructor() { 
        super();
    }
    public withData(data: IpsSwitchResponseDTO): ListIpsSwitchStatusUsingGetResponse {
        this['data'] = data;
        return this;
    }
}