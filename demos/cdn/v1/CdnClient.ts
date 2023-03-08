import { HcClient } from "../../../core/HcClient";
import { ClientBuilder } from "../../../core/ClientBuilder";
import { SdkResponse } from "../../../core/SdkResponse";

import { ShowQuotaRequest } from './model/ShowQuotaRequest';
import { ShowQuotaResponse } from './model/ShowQuotaResponse';

export class CdnClient {
    public static newBuilder(): ClientBuilder<CdnClient> {
            return new ClientBuilder<CdnClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


     

    /**
     * 查询当前用户域名、刷新文件、刷新目录和预热的配额
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户配额
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showQuota(): Promise<ShowQuotaResponse> {
        const options = ParamCreater().showQuota();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        
    
        /**
         * 查询当前用户域名、刷新文件、刷新目录和预热的配额
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showQuota() {
            const options = {
                method: "GET",
                url: "/v1.0/cdn/quota",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        }
    }
};

function newClient(client: HcClient): CdnClient {
    return new CdnClient(client);
}

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name: "RequiredError" = "RequiredError";
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}