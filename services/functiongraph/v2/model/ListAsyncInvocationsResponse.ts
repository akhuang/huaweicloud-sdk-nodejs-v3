import { ListFunctionAsyncInvocationsResult } from './ListFunctionAsyncInvocationsResult';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ListAsyncInvocationsResponse extends SdkResponse {
    public invocations?: Array<ListFunctionAsyncInvocationsResult>;
    public constructor() { 
        super();
    }
    public withInvocations(invocations: Array<ListFunctionAsyncInvocationsResult>): ListAsyncInvocationsResponse {
        this['invocations'] = invocations;
        return this;
    }
}