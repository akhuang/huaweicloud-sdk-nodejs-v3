
import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ValidateSignatureResponse extends SdkResponse {
    private 'key_id'?: string | undefined;
    private 'signature_valid'?: string | undefined;
    public constructor() { 
        super();
    }
    public withKeyId(keyId: string): ValidateSignatureResponse {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId() {
        return this['key_id'];
    }
    public withSignatureValid(signatureValid: string): ValidateSignatureResponse {
        this['signature_valid'] = signatureValid;
        return this;
    }
    public set signatureValid(signatureValid: string | undefined) {
        this['signature_valid'] = signatureValid;
    }
    public get signatureValid() {
        return this['signature_valid'];
    }
}