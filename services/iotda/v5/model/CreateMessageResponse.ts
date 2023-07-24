import { MessageResult } from './MessageResult';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class CreateMessageResponse extends SdkResponse {
    private 'message_id'?: string | undefined;
    public result?: MessageResult;
    public constructor() { 
        super();
    }
    public withMessageId(messageId: string): CreateMessageResponse {
        this['message_id'] = messageId;
        return this;
    }
    public set messageId(messageId: string | undefined) {
        this['message_id'] = messageId;
    }
    public get messageId() {
        return this['message_id'];
    }
    public withResult(result: MessageResult): CreateMessageResponse {
        this['result'] = result;
        return this;
    }
}