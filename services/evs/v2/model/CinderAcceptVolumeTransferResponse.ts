import { VolumeTransferSummary } from './VolumeTransferSummary';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class CinderAcceptVolumeTransferResponse extends SdkResponse {
    public transfer?: VolumeTransferSummary;
    public constructor() { 
        super();
    }
    public withTransfer(transfer: VolumeTransferSummary): CinderAcceptVolumeTransferResponse {
        this['transfer'] = transfer;
        return this;
    }
}