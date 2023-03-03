import { HcClient } from "../../../core/HcClient";
import { ClientBuilder } from "../../../core/ClientBuilder";
import { SdkResponse } from "../../../core/SdkResponse";

import { ListVpcsRequest } from './model/ListVpcsRequest';
import { ListVpcsResponse } from './model/ListVpcsResponse';

export class CustomClient {
    public static newBuilder(): ClientBuilder<CustomClient> {
        return new ClientBuilder<CustomClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }

    /**
      * 查询虚拟私有云列表。
      * 
      * Please refer to HUAWEI cloud API Explorer for details.
      *
      * @summary 查询VPC列表
      * @param {number} [limit] 每页返回的个数
      * @param {string} [marker] 分页查询起始的资源ID，为空时查询第一页
      * @param {string} [id] 功能说明：虚拟私有云ID。可以使用该字段过滤某个ID的虚拟私有云。
      * @param {string} [enterpriseProjectId] 功能说明：企业项目ID。可以使用该字段过滤某个企业项目下的虚拟私有云。若未传值则默认返回所有企业项目绑定的虚拟私有云。  取值范围：最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。“0”表示默认企业项目。若需要查询当前用户所有企业项目绑定的虚拟私有云，请传参all_granted_eps。
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      */
    public listVpcs(listVpcsRequest?: ListVpcsRequest): Promise<ListVpcsResponse> {
        const options = ParamCreater().listVpcs(listVpcsRequest);

        // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
        /**
             * 查询虚拟私有云列表。
             * 
             * Please refer to HUAWEI cloud API Explorer for details.
             */
        listVpcs(listVpcsRequest?: ListVpcsRequest) {
            const options = {
                method: "GET",
                url: "/status/111",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            let limit;

            let marker;

            let id;

            let enterpriseProjectId;

            if (listVpcsRequest !== null && listVpcsRequest !== undefined) {
                if (listVpcsRequest instanceof ListVpcsRequest) {
                    limit = listVpcsRequest.limit;
                    marker = listVpcsRequest.marker;
                    id = listVpcsRequest.id;
                    enterpriseProjectId = listVpcsRequest.enterpriseProjectId;
                } else {
                    limit = listVpcsRequest['limit'];
                    marker = listVpcsRequest['marker'];
                    id = listVpcsRequest['id'];
                    enterpriseProjectId = listVpcsRequest['enterprise_project_id'];
                }
            }


            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        }
    }
}

function newClient(client: HcClient): VpcClient {
    return new VpcClient(client);
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