import { ClientBuilder } from "../../../core/ClientBuilder";
import { HcClient } from "../../../core/HcClient";
import { CompareFaceByFileResponse } from "../../../services/frs/v2/model/CompareFaceByFileResponse";
import { CompareFaceByFileRequest } from "./model/CompareFaceByFileRequest";
import   FormData from 'form-data'

export class FrsClient {
    public static newBuilder(): ClientBuilder<FrsClient> {
        return new ClientBuilder<FrsClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }
    /**
        * 人脸比对是将两个人脸进行比对，来判断是否为同一个人，返回比对置信度。如果传入的图片中包含多个人脸，选取最大的人脸进行比对。
        * 
        * Please refer to HUAWEI cloud API Explorer for details.
        *
        * @summary 人脸比对
        * @param {any} image1File 本地图片文件，图片不能超过8MB。上传文件时，请求格式为multipart。
        * @param {any} image2File 本地图片文件，图片不能超过8MB。上传文件时，请求格式为multipart。
        * @param {string} [enterpriseProjectId] 企业项目ID。FRS支持通过企业项目管理（EPS）对不同用户组和用户的资源使用，进行分账。  获取方法：进入“[企业项目管理](https://console.huaweicloud.com/eps/?region&#x3D;cn-north-4#/projects/list)”页面，单击企业项目名称，在企业项目详情页获取Enterprise-Project-Id（企业项目ID）。  企业项目创建步骤请参见用户指南。 &gt; 说明： 创建企业项目后，在传参时，有以下三类场景。 - 携带正确的ID，正常使用FRS服务，账单归到企业ID对应的企业项目中。 - 携带错误的ID，正常使用FRS服务，账单的企业项目会被分类为“未归集”。 - 不携带ID，正常使用FRS服务，账单的企业项目会被分类为“未归集”。
        * @param {*} [options] Override http request option.
        * @throws {RequiredError}
        */
    public compareFaceByFile(compareFaceByFileRequest?: CompareFaceByFileRequest): Promise<CompareFaceByFileResponse> {
        const options = ParamCreater().compareFaceByFile(compareFaceByFileRequest);

        // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
        /**
        * 人脸比对是将两个人脸进行比对，来判断是否为同一个人，返回比对置信度。如果传入的图片中包含多个人脸，选取最大的人脸进行比对。
        * 
        * Please refer to HUAWEI cloud API Explorer for details.
        */
        compareFaceByFile(compareFaceByFileRequest?: CompareFaceByFileRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/face-compare",
                contentType: "multipart/form-data",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            const localVarFormParams = new FormData();
            var image1File;

            var image2File;


            let enterpriseProjectId;

            if (compareFaceByFileRequest !== null && compareFaceByFileRequest !== undefined) {
                if (compareFaceByFileRequest instanceof CompareFaceByFileRequest) {
                    image1File = compareFaceByFileRequest.body?.image1File;
                    image2File = compareFaceByFileRequest.body?.image2File;
                    enterpriseProjectId = compareFaceByFileRequest.enterpriseProjectId;
                } else {
                    image1File = compareFaceByFileRequest['body']['image1File'];
                    image2File = compareFaceByFileRequest['body']['image2File'];
                    enterpriseProjectId = compareFaceByFileRequest['Enterprise-Project-Id'];
                }
            }


            if (image1File === null || image1File === undefined) {
                throw new RequiredError('image1File', 'Required parameter image1File was null or undefined when calling compareFaceByFile.');
            }
            if (image2File === null || image2File === undefined) {
                throw new RequiredError('image2File', 'Required parameter image2File was null or undefined when calling compareFaceByFile.');
            }
            if (image1File !== undefined) {
                localVarFormParams.append('image1_file', image1File as any);
            }
            if (image2File !== undefined) {
                localVarFormParams.append('image2_file', image2File as any);
            }
            if (enterpriseProjectId !== undefined && enterpriseProjectId !== null) {
                localVarHeaderParameter['Enterprise-Project-Id'] = String(enterpriseProjectId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            options.data = localVarFormParams;
            options.headers = localVarHeaderParameter;
            return options;
        },
    }
}


function newClient(client: HcClient): FrsClient {
    return new FrsClient(client);
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