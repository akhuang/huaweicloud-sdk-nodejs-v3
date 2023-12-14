import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AppQualityInfo } from './model/AppQualityInfo';
import { BatchShowIpBelongsRequest } from './model/BatchShowIpBelongsRequest';
import { BatchShowIpBelongsResponse } from './model/BatchShowIpBelongsResponse';
import { CallbackUrl } from './model/CallbackUrl';
import { CdnIp } from './model/CdnIp';
import { CreateDomainMappingRequest } from './model/CreateDomainMappingRequest';
import { CreateDomainMappingResponse } from './model/CreateDomainMappingResponse';
import { CreateDomainRequest } from './model/CreateDomainRequest';
import { CreateDomainResponse } from './model/CreateDomainResponse';
import { CreateRecordCallbackConfigRequest } from './model/CreateRecordCallbackConfigRequest';
import { CreateRecordCallbackConfigResponse } from './model/CreateRecordCallbackConfigResponse';
import { CreateRecordIndexRequest } from './model/CreateRecordIndexRequest';
import { CreateRecordIndexResponse } from './model/CreateRecordIndexResponse';
import { CreateRecordRuleRequest } from './model/CreateRecordRuleRequest';
import { CreateRecordRuleResponse } from './model/CreateRecordRuleResponse';
import { CreateSnapshotConfigRequest } from './model/CreateSnapshotConfigRequest';
import { CreateSnapshotConfigResponse } from './model/CreateSnapshotConfigResponse';
import { CreateStreamForbiddenRequest } from './model/CreateStreamForbiddenRequest';
import { CreateStreamForbiddenResponse } from './model/CreateStreamForbiddenResponse';
import { CreateTranscodingsTemplateRequest } from './model/CreateTranscodingsTemplateRequest';
import { CreateTranscodingsTemplateResponse } from './model/CreateTranscodingsTemplateResponse';
import { CreateUrlAuthchainReq } from './model/CreateUrlAuthchainReq';
import { CreateUrlAuthchainRequest } from './model/CreateUrlAuthchainRequest';
import { CreateUrlAuthchainResponse } from './model/CreateUrlAuthchainResponse';
import { DecoupledLiveDomainInfo } from './model/DecoupledLiveDomainInfo';
import { DefaultRecordConfig } from './model/DefaultRecordConfig';
import { DelayConfig } from './model/DelayConfig';
import { DeleteDomainHttpsCertRequest } from './model/DeleteDomainHttpsCertRequest';
import { DeleteDomainHttpsCertResponse } from './model/DeleteDomainHttpsCertResponse';
import { DeleteDomainKeyChainRequest } from './model/DeleteDomainKeyChainRequest';
import { DeleteDomainKeyChainResponse } from './model/DeleteDomainKeyChainResponse';
import { DeleteDomainMappingRequest } from './model/DeleteDomainMappingRequest';
import { DeleteDomainMappingResponse } from './model/DeleteDomainMappingResponse';
import { DeleteDomainRequest } from './model/DeleteDomainRequest';
import { DeleteDomainResponse } from './model/DeleteDomainResponse';
import { DeletePublishTemplateRequest } from './model/DeletePublishTemplateRequest';
import { DeletePublishTemplateResponse } from './model/DeletePublishTemplateResponse';
import { DeleteRecordCallbackConfigRequest } from './model/DeleteRecordCallbackConfigRequest';
import { DeleteRecordCallbackConfigResponse } from './model/DeleteRecordCallbackConfigResponse';
import { DeleteRecordRuleRequest } from './model/DeleteRecordRuleRequest';
import { DeleteRecordRuleResponse } from './model/DeleteRecordRuleResponse';
import { DeleteSnapshotConfigRequest } from './model/DeleteSnapshotConfigRequest';
import { DeleteSnapshotConfigResponse } from './model/DeleteSnapshotConfigResponse';
import { DeleteStreamForbiddenRequest } from './model/DeleteStreamForbiddenRequest';
import { DeleteStreamForbiddenResponse } from './model/DeleteStreamForbiddenResponse';
import { DeleteTranscodingsTemplateRequest } from './model/DeleteTranscodingsTemplateRequest';
import { DeleteTranscodingsTemplateResponse } from './model/DeleteTranscodingsTemplateResponse';
import { DomainHttpsCertInfo } from './model/DomainHttpsCertInfo';
import { DomainIpv6SwitchReq } from './model/DomainIpv6SwitchReq';
import { DomainMapping } from './model/DomainMapping';
import { FLVRecordConfig } from './model/FLVRecordConfig';
import { GeoBlockingConfigInfo } from './model/GeoBlockingConfigInfo';
import { HLSRecordConfig } from './model/HLSRecordConfig';
import { IPAuthInfo } from './model/IPAuthInfo';
import { KeyChainInfo } from './model/KeyChainInfo';
import { ListDelayConfigRequest } from './model/ListDelayConfigRequest';
import { ListDelayConfigResponse } from './model/ListDelayConfigResponse';
import { ListGeoBlockingConfigRequest } from './model/ListGeoBlockingConfigRequest';
import { ListGeoBlockingConfigResponse } from './model/ListGeoBlockingConfigResponse';
import { ListIpAuthListRequest } from './model/ListIpAuthListRequest';
import { ListIpAuthListResponse } from './model/ListIpAuthListResponse';
import { ListLiveSampleLogsRequest } from './model/ListLiveSampleLogsRequest';
import { ListLiveSampleLogsResponse } from './model/ListLiveSampleLogsResponse';
import { ListLiveStreamsOnlineRequest } from './model/ListLiveStreamsOnlineRequest';
import { ListLiveStreamsOnlineResponse } from './model/ListLiveStreamsOnlineResponse';
import { ListPublishTemplateRequest } from './model/ListPublishTemplateRequest';
import { ListPublishTemplateResponse } from './model/ListPublishTemplateResponse';
import { ListRecordCallbackConfigsRequest } from './model/ListRecordCallbackConfigsRequest';
import { ListRecordCallbackConfigsResponse } from './model/ListRecordCallbackConfigsResponse';
import { ListRecordContentsRequest } from './model/ListRecordContentsRequest';
import { ListRecordContentsResponse } from './model/ListRecordContentsResponse';
import { ListRecordRulesRequest } from './model/ListRecordRulesRequest';
import { ListRecordRulesResponse } from './model/ListRecordRulesResponse';
import { ListSnapshotConfigsRequest } from './model/ListSnapshotConfigsRequest';
import { ListSnapshotConfigsResponse } from './model/ListSnapshotConfigsResponse';
import { ListStreamForbiddenRequest } from './model/ListStreamForbiddenRequest';
import { ListStreamForbiddenResponse } from './model/ListStreamForbiddenResponse';
import { LiveDomainCreateReq } from './model/LiveDomainCreateReq';
import { LiveDomainModifyReq } from './model/LiveDomainModifyReq';
import { LiveSnapshotConfig } from './model/LiveSnapshotConfig';
import { LogInfo } from './model/LogInfo';
import { MP4RecordConfig } from './model/MP4RecordConfig';
import { ModifyDelayConfig } from './model/ModifyDelayConfig';
import { ModifyPullSourcesConfig } from './model/ModifyPullSourcesConfig';
import { ObsAuthorityConfigV2 } from './model/ObsAuthorityConfigV2';
import { ObsFileAddr } from './model/ObsFileAddr';
import { OnlineInfo } from './model/OnlineInfo';
import { QualityInfo } from './model/QualityInfo';
import { RecordCallbackConfig } from './model/RecordCallbackConfig';
import { RecordCallbackConfigRequest } from './model/RecordCallbackConfigRequest';
import { RecordContentInfoV2 } from './model/RecordContentInfoV2';
import { RecordControlInfo } from './model/RecordControlInfo';
import { RecordIndexRequestBody } from './model/RecordIndexRequestBody';
import { RecordObsFileAddr } from './model/RecordObsFileAddr';
import { RecordRule } from './model/RecordRule';
import { RecordRuleRequest } from './model/RecordRuleRequest';
import { RunRecordRequest } from './model/RunRecordRequest';
import { RunRecordResponse } from './model/RunRecordResponse';
import { ShowDomainHttpsCertRequest } from './model/ShowDomainHttpsCertRequest';
import { ShowDomainHttpsCertResponse } from './model/ShowDomainHttpsCertResponse';
import { ShowDomainKeyChainRequest } from './model/ShowDomainKeyChainRequest';
import { ShowDomainKeyChainResponse } from './model/ShowDomainKeyChainResponse';
import { ShowDomainRequest } from './model/ShowDomainRequest';
import { ShowDomainResponse } from './model/ShowDomainResponse';
import { ShowPullSourcesConfigRequest } from './model/ShowPullSourcesConfigRequest';
import { ShowPullSourcesConfigResponse } from './model/ShowPullSourcesConfigResponse';
import { ShowRecordCallbackConfigRequest } from './model/ShowRecordCallbackConfigRequest';
import { ShowRecordCallbackConfigResponse } from './model/ShowRecordCallbackConfigResponse';
import { ShowRecordRuleRequest } from './model/ShowRecordRuleRequest';
import { ShowRecordRuleResponse } from './model/ShowRecordRuleResponse';
import { ShowTranscodingsTemplateRequest } from './model/ShowTranscodingsTemplateRequest';
import { ShowTranscodingsTemplateResponse } from './model/ShowTranscodingsTemplateResponse';
import { StreamForbiddenList } from './model/StreamForbiddenList';
import { StreamForbiddenSetting } from './model/StreamForbiddenSetting';
import { StreamTranscodingTemplate } from './model/StreamTranscodingTemplate';
import { UpdateDelayConfigRequest } from './model/UpdateDelayConfigRequest';
import { UpdateDelayConfigResponse } from './model/UpdateDelayConfigResponse';
import { UpdateDomainHttpsCertRequest } from './model/UpdateDomainHttpsCertRequest';
import { UpdateDomainHttpsCertResponse } from './model/UpdateDomainHttpsCertResponse';
import { UpdateDomainIp6SwitchRequest } from './model/UpdateDomainIp6SwitchRequest';
import { UpdateDomainIp6SwitchResponse } from './model/UpdateDomainIp6SwitchResponse';
import { UpdateDomainKeyChainRequest } from './model/UpdateDomainKeyChainRequest';
import { UpdateDomainKeyChainResponse } from './model/UpdateDomainKeyChainResponse';
import { UpdateDomainRequest } from './model/UpdateDomainRequest';
import { UpdateDomainResponse } from './model/UpdateDomainResponse';
import { UpdateGeoBlockingConfigRequest } from './model/UpdateGeoBlockingConfigRequest';
import { UpdateGeoBlockingConfigResponse } from './model/UpdateGeoBlockingConfigResponse';
import { UpdateIpAuthListRequest } from './model/UpdateIpAuthListRequest';
import { UpdateIpAuthListResponse } from './model/UpdateIpAuthListResponse';
import { UpdateObsBucketAuthorityPublicRequest } from './model/UpdateObsBucketAuthorityPublicRequest';
import { UpdateObsBucketAuthorityPublicResponse } from './model/UpdateObsBucketAuthorityPublicResponse';
import { UpdatePublishTemplateRequest } from './model/UpdatePublishTemplateRequest';
import { UpdatePublishTemplateResponse } from './model/UpdatePublishTemplateResponse';
import { UpdatePullSourcesConfigRequest } from './model/UpdatePullSourcesConfigRequest';
import { UpdatePullSourcesConfigResponse } from './model/UpdatePullSourcesConfigResponse';
import { UpdateRecordCallbackConfigRequest } from './model/UpdateRecordCallbackConfigRequest';
import { UpdateRecordCallbackConfigResponse } from './model/UpdateRecordCallbackConfigResponse';
import { UpdateRecordRuleRequest } from './model/UpdateRecordRuleRequest';
import { UpdateRecordRuleResponse } from './model/UpdateRecordRuleResponse';
import { UpdateSnapshotConfigRequest } from './model/UpdateSnapshotConfigRequest';
import { UpdateSnapshotConfigResponse } from './model/UpdateSnapshotConfigResponse';
import { UpdateStreamForbiddenRequest } from './model/UpdateStreamForbiddenRequest';
import { UpdateStreamForbiddenResponse } from './model/UpdateStreamForbiddenResponse';
import { UpdateTranscodingsTemplateRequest } from './model/UpdateTranscodingsTemplateRequest';
import { UpdateTranscodingsTemplateResponse } from './model/UpdateTranscodingsTemplateResponse';
import { VideoFormatVar } from './model/VideoFormatVar';
import { VodInfoV2 } from './model/VodInfoV2';

export class LiveClient {
    public static newBuilder(): ClientBuilder<LiveClient> {
            return new ClientBuilder<LiveClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 查询IP归属信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询IP归属信息
     * @param {Array<string>} ip IP地址列表，最多20个。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchShowIpBelongs(batchShowIpBelongsRequest?: BatchShowIpBelongsRequest): Promise<BatchShowIpBelongsResponse> {
        const options = ParamCreater().batchShowIpBelongs(batchShowIpBelongsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 可单独创建直播播放域名或推流域名，每个租户最多可配置64条域名记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建直播域名
     * @param {LiveDomainCreateReq} createDomainRequestBody 域名信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDomain(createDomainRequest?: CreateDomainRequest): Promise<CreateDomainResponse> {
        const options = ParamCreater().createDomain(createDomainRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将用户已创建的播放域名和推流域名建立域名映射关系
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 域名映射
     * @param {DomainMapping} createDomainMappingRequestBody 域名映射信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDomainMapping(createDomainMappingRequest?: CreateDomainMappingRequest): Promise<CreateDomainMappingResponse> {
        const options = ParamCreater().createDomainMapping(createDomainMappingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建录制回调配置接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建录制回调配置
     * @param {RecordCallbackConfigRequest} createRecordCallbackConfigRequestBody 录制回调配置
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRecordCallbackConfig(createRecordCallbackConfigRequest?: CreateRecordCallbackConfigRequest): Promise<CreateRecordCallbackConfigResponse> {
        const options = ParamCreater().createRecordCallbackConfig(createRecordCallbackConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Create Record Index
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建录制视频索引文件
     * @param {RecordIndexRequestBody} createRecordIndexRequestBody Create Record Index Body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRecordIndex(createRecordIndexRequest?: CreateRecordIndexRequest): Promise<CreateRecordIndexResponse> {
        const options = ParamCreater().createRecordIndex(createRecordIndexRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建录制规则接口，录制规则对新推送的流生效，对已经推送中的流不生效
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建录制规则
     * @param {RecordRuleRequest} createRecordRuleRequestBody 录制规则
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRecordRule(createRecordRuleRequest?: CreateRecordRuleRequest): Promise<CreateRecordRuleResponse> {
        const options = ParamCreater().createRecordRule(createRecordRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建直播截图配置接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建直播截图配置
     * @param {LiveSnapshotConfig} createSnapshotConfigRequestBody 直播截图配置
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSnapshotConfig(createSnapshotConfigRequest?: CreateSnapshotConfigRequest): Promise<CreateSnapshotConfigResponse> {
        const options = ParamCreater().createSnapshotConfig(createSnapshotConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 禁止直播推流
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 禁止直播推流
     * @param {StreamForbiddenSetting} createStreamForbiddenRequestBody 设置禁止直播推流信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createStreamForbidden(createStreamForbiddenRequest?: CreateStreamForbiddenRequest): Promise<CreateStreamForbiddenResponse> {
        const options = ParamCreater().createStreamForbidden(createStreamForbiddenRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建直播转码模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建直播转码模板
     * @param {StreamTranscodingTemplate} createTranscodingsTemplateRequestBody 流转码模板信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTranscodingsTemplate(createTranscodingsTemplateRequest?: CreateTranscodingsTemplateRequest): Promise<CreateTranscodingsTemplateResponse> {
        const options = ParamCreater().createTranscodingsTemplate(createTranscodingsTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 生成URL鉴权串
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 生成URL鉴权串
     * @param {CreateUrlAuthchainReq} createUrlAuthchainRequestBody 域名信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createUrlAuthchain(createUrlAuthchainRequest?: CreateUrlAuthchainRequest): Promise<CreateUrlAuthchainResponse> {
        const options = ParamCreater().createUrlAuthchain(createUrlAuthchainRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除域名。只有在域名停用（off）状态时才能删除。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除直播域名
     * @param {string} domain 直播域名
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDomain(deleteDomainRequest?: DeleteDomainRequest): Promise<DeleteDomainResponse> {
        const options = ParamCreater().deleteDomain(deleteDomainRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定域名的Key防盗链配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除指定域名的Key防盗链配置
     * @param {string} domain 直播域名，包括推流域名和播放域名
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDomainKeyChain(deleteDomainKeyChainRequest?: DeleteDomainKeyChainRequest): Promise<DeleteDomainKeyChainResponse> {
        const options = ParamCreater().deleteDomainKeyChain(deleteDomainKeyChainRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将播放域名和推流域名的域名映射关系删除
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除直播域名映射关系
     * @param {string} pullDomain 直播播放域名
     * @param {string} pushDomain 直播推流域名
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDomainMapping(deleteDomainMappingRequest?: DeleteDomainMappingRequest): Promise<DeleteDomainMappingResponse> {
        const options = ParamCreater().deleteDomainMapping(deleteDomainMappingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除直播推流通知配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除直播推流通知配置
     * @param {string} domain 推流域名
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePublishTemplate(deletePublishTemplateRequest?: DeletePublishTemplateRequest): Promise<DeletePublishTemplateResponse> {
        const options = ParamCreater().deletePublishTemplate(deletePublishTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除录制回调配置接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除录制回调配置
     * @param {string} id 配置ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRecordCallbackConfig(deleteRecordCallbackConfigRequest?: DeleteRecordCallbackConfigRequest): Promise<DeleteRecordCallbackConfigResponse> {
        const options = ParamCreater().deleteRecordCallbackConfig(deleteRecordCallbackConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除录制规则接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除录制规则
     * @param {string} id 规则ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRecordRule(deleteRecordRuleRequest?: DeleteRecordRuleRequest): Promise<DeleteRecordRuleResponse> {
        const options = ParamCreater().deleteRecordRule(deleteRecordRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除直播截图配置接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除直播截图配置
     * @param {string} domain 直播流播放域名
     * @param {string} appName 应用名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSnapshotConfig(deleteSnapshotConfigRequest?: DeleteSnapshotConfigRequest): Promise<DeleteSnapshotConfigResponse> {
        const options = ParamCreater().deleteSnapshotConfig(deleteSnapshotConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 恢复直播推流接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 禁推恢复
     * @param {string} domain 推流域名
     * @param {string} appName RTMP应用名称
     * @param {string} streamName 流名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteStreamForbidden(deleteStreamForbiddenRequest?: DeleteStreamForbiddenRequest): Promise<DeleteStreamForbiddenResponse> {
        const options = ParamCreater().deleteStreamForbidden(deleteStreamForbiddenRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除直播转码模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除直播转码模板
     * @param {string} domain 推流域名
     * @param {string} appName 应用名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTranscodingsTemplate(deleteTranscodingsTemplateRequest?: DeleteTranscodingsTemplateRequest): Promise<DeleteTranscodingsTemplateResponse> {
        const options = ParamCreater().deleteTranscodingsTemplate(deleteTranscodingsTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询播放域名延时配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询播放域名延时配置
     * @param {string} playDomain 播放域名
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDelayConfig(listDelayConfigRequest?: ListDelayConfigRequest): Promise<ListDelayConfigResponse> {
        const options = ParamCreater().listDelayConfig(listDelayConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询播放域名的地域限制列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取地域限制配置列表
     * @param {string} playDomain 播放域名
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGeoBlockingConfig(listGeoBlockingConfigRequest?: ListGeoBlockingConfigRequest): Promise<ListGeoBlockingConfigResponse> {
        const options = ParamCreater().listGeoBlockingConfig(listGeoBlockingConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询推流/播放域名的IP黑/白名单。
     * - 黑名单模式：禁止指定的IP或网段
     * - 白名单模式：仅允许指定的IP或网段
     * - 默认：全放通。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询IP黑/白名单
     * @param {string} domain 推流域名或播放域名
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listIpAuthList(listIpAuthListRequest?: ListIpAuthListRequest): Promise<ListIpAuthListResponse> {
        const options = ParamCreater().listIpAuthList(listIpAuthListRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取直播播放日志，基于域名以5分钟粒度进行打包，日志内容以 \&quot;|\&quot; 进行分隔。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取直播播放日志
     * @param {string} playDomain 播放域名。
     * @param {Date} startTime 查询开始时间，UTC时间：YYYY-MM-DDTHH:mm:ssZ，如北京时间2020年3月4日16点00分00秒可表示为2020-03-04T08:00:00Z。仅支持查询最近3个月内的数据。
     * @param {Date} endTime 查询结束时间，UTC时间：YYYY-MM-DDTHH:mm:ssZ，如北京时间2020年3月4日16点00分00秒可表示为2020-03-04T08:00:00Z。查询时间跨度不能大于7天。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLiveSampleLogs(listLiveSampleLogsRequest?: ListLiveSampleLogsRequest): Promise<ListLiveSampleLogsResponse> {
        const options = ParamCreater().listLiveSampleLogs(listLiveSampleLogsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询直播中的流信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询直播中的流信息
     * @param {string} publishDomain 推流域名
     * @param {string} [app] 应用名
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询， offset大于等于0
     * @param {number} [limit] 每页记录数，取值范围[1,100]，默认值10
     * @param {string} [stream] 流名，用于单流查询，携带stream参数时app不能缺省
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLiveStreamsOnline(listLiveStreamsOnlineRequest?: ListLiveStreamsOnlineRequest): Promise<ListLiveStreamsOnlineResponse> {
        const options = ParamCreater().listLiveStreamsOnline(listLiveStreamsOnlineRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询直播推流通知配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询直播推流通知配置
     * @param {string} domain 推流域名
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPublishTemplate(listPublishTemplateRequest?: ListPublishTemplateRequest): Promise<ListPublishTemplateResponse> {
        const options = ParamCreater().listPublishTemplate(listPublishTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询录制回调配置列表接口。通过指定条件，查询满足条件的配置列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询录制回调配置列表
     * @param {string} [publishDomain] 直播推流域名
     * @param {string} [app] 流应用名称
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，offset大于等于0
     * @param {number} [limit] 每页记录数，取值范围[1,100]，默认值10
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRecordCallbackConfigs(listRecordCallbackConfigsRequest?: ListRecordCallbackConfigsRequest): Promise<ListRecordCallbackConfigsResponse> {
        const options = ParamCreater().listRecordCallbackConfigs(listRecordCallbackConfigsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 录制完成的内容查询
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 录制完成内容的查询
     * @param {string} startTime 开始时间,格式为：yyyy-mm-ddThh:mm:ssZ，UTC时间
     * @param {string} [publishDomain] 直播推流域名
     * @param {string} [app] 流应用名称
     * @param {string} [stream] 流名称
     * @param {'CONTINUOUS_RECORD' | 'COMMAND_RECORD'} [recordType] 录制类型，包括：CONTINUOUS_RECORD，COMMAND_RECORD。默认CONTINUOUS_RECORD。 - CONTINUOUS_RECORD：持续录制，在该规则类型配置后，只要有流到推送到录制系统，就触发录制。 - COMMAND_RECORD：命令录制，在该规则类型配置后，在流推送到录制系统后，租户需要通过命令控制该流的录制开始和结束。 
     * @param {string} [endTime] 结束时间，格式为：yyyy-mm-ddThh:mm:ssZ，UTC时间
     * @param {number} [offset] 分页编号，从0开始算
     * @param {number} [limit] 每页记录数，取值范围[1,100]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRecordContents(listRecordContentsRequest?: ListRecordContentsRequest): Promise<ListRecordContentsResponse> {
        const options = ParamCreater().listRecordContents(listRecordContentsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询录制规则列表接口，通过指定条件，查询满足条件的录制规则列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询录制规则列表
     * @param {string} [publishDomain] 直播推流域名
     * @param {string} [app] 流应用名称
     * @param {string} [stream] 流名称
     * @param {'CONTINUOUS_RECORD' | 'COMMAND_RECORD' | 'PLAN_RECORD' | 'ON_DEMAND_RECORD'} [recordType] 录制类型，如果不填写则查询所有录制类型，包括：CONTINUOUS_RECORD，COMMAND_RECORD，PLAN_RECORD，ON_DEMAND_RECORD。默认CONTINUOUS_RECORD。 - CONTINUOUS_RECORD：持续录制，在该规则类型配置后，只要有流到推送到录制系统，就触发录制。 - COMMAND_RECORD：命令录制，在该规则类型配置后，在流推送到录制系统后，租户需要通过命令控制该流的录制开始和结束。 - PLAN_RECORD：计划录制，在该规则类型配置后，推的流如果在计划录制的时间区间则触发录制。 - ON_DEMAND_RECORD：按需录制，在该规则类型配置后，录制系统收到推流后，需要调用租户提供的接口查询录制规则，并根据规则录制。 
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，offset大于等于0
     * @param {number} [limit] 每页记录数，取值范围[1,100]，默认值10
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRecordRules(listRecordRulesRequest?: ListRecordRulesRequest): Promise<ListRecordRulesResponse> {
        const options = ParamCreater().listRecordRules(listRecordRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询直播截图配置接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询直播截图配置
     * @param {string} domain 域名
     * @param {string} [appName] 应用名称
     * @param {number} [limit] 每页记录数  取值范围[1,100]  默认值：10
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，offset大于等于0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSnapshotConfigs(listSnapshotConfigsRequest?: ListSnapshotConfigsRequest): Promise<ListSnapshotConfigsResponse> {
        const options = ParamCreater().listSnapshotConfigs(listSnapshotConfigsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询禁播黑名单列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询禁止直播推流列表
     * @param {string} domain 推流域名
     * @param {string} [appName] 应用名称，不指定则查询domain下所有应用的禁止直播推流信息
     * @param {string} [streamName] 流名称
     * @param {number} [page] 分页编号。 默认为0。 
     * @param {number} [size] 每页记录数。  取值范围：1-100。  默认为10。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listStreamForbidden(listStreamForbiddenRequest?: ListStreamForbiddenRequest): Promise<ListStreamForbiddenResponse> {
        const options = ParamCreater().listStreamForbidden(listStreamForbiddenRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 对单条流的实时录制控制接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 提交录制控制命令
     * @param {'START' | 'STOP'} action 操作行为。 取值如下： - START：对指定流开始录制，必须在直播流已经推送情况下才能正常启动，使用此命令启动录制的直播流如果发生了断流且超出断流时长，就会停止录制，并且重新推流后不会自动启动录制。 - STOP：对指定流停止录制。 
     * @param {RecordControlInfo} runRecordRequestBody 录制命令控制参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runRecord(runRecordRequest?: RunRecordRequest): Promise<RunRecordResponse> {
        const options = ParamCreater().runRecord(runRecordRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询直播域名
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询直播域名
     * @param {string} [domain] 直播域名，如果不设置此字段，则返回租户所有的域名信息
     * @param {string} [enterpriseProjectId] 企业项目ID，如果不设置此字段，则不进行该字段过滤，返回所有域名信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDomain(showDomainRequest?: ShowDomainRequest): Promise<ShowDomainResponse> {
        const options = ParamCreater().showDomain(showDomainRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定域名的Key防盗链配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定域名的Key防盗链配置
     * @param {string} domain 直播域名，包括推流域名和播放域名
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDomainKeyChain(showDomainKeyChainRequest?: ShowDomainKeyChainRequest): Promise<ShowDomainKeyChainResponse> {
        const options = ParamCreater().showDomainKeyChain(showDomainKeyChainRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询直播拉流回源配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询直播拉流回源配置
     * @param {string} playDomain 播放域名
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPullSourcesConfig(showPullSourcesConfigRequest?: ShowPullSourcesConfigRequest): Promise<ShowPullSourcesConfigResponse> {
        const options = ParamCreater().showPullSourcesConfig(showPullSourcesConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询录制回调配置接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询录制回调配置
     * @param {string} id 配置ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRecordCallbackConfig(showRecordCallbackConfigRequest?: ShowRecordCallbackConfigRequest): Promise<ShowRecordCallbackConfigResponse> {
        const options = ParamCreater().showRecordCallbackConfig(showRecordCallbackConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询录制规则接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询录制规则配置
     * @param {string} id 规则ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRecordRule(showRecordRuleRequest?: ShowRecordRuleRequest): Promise<ShowRecordRuleResponse> {
        const options = ParamCreater().showRecordRule(showRecordRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询直播转码模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询直播转码模板
     * @param {string} domain 推流域名
     * @param {string} [appName] 应用名称
     * @param {number} [page] 分页编号，默认为0。
     * @param {number} [size] 每页记录数。  取值范围：1-100。  默认为10。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTranscodingsTemplate(showTranscodingsTemplateRequest?: ShowTranscodingsTemplateRequest): Promise<ShowTranscodingsTemplateResponse> {
        const options = ParamCreater().showTranscodingsTemplate(showTranscodingsTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改播放域名延时配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改播放域名延时配置
     * @param {ModifyDelayConfig} updateDelayConfigRequestBody 延时配置
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDelayConfig(updateDelayConfigRequest?: UpdateDelayConfigRequest): Promise<UpdateDelayConfigResponse> {
        const options = ParamCreater().updateDelayConfig(updateDelayConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改直播播放、RTMP推流加速域名相关信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改直播域名
     * @param {LiveDomainModifyReq} updateDomainRequestBody 域名信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDomain(updateDomainRequest?: UpdateDomainRequest): Promise<UpdateDomainResponse> {
        const options = ParamCreater().updateDomain(updateDomainRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 配置IPV6开关
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 配置域名IPV6开关
     * @param {DomainIpv6SwitchReq} domainIpv6SwitchReq IPV6开关：true开启，false关闭，默认关闭
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDomainIp6Switch(updateDomainIp6SwitchRequest?: UpdateDomainIp6SwitchRequest): Promise<UpdateDomainIp6SwitchResponse> {
        const options = ParamCreater().updateDomainIp6Switch(updateDomainIp6SwitchRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新指定域名的Key防盗链配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新指定域名的Key防盗链配置
     * @param {string} domain 直播域名，包括推流域名和播放域名
     * @param {KeyChainInfo} [updateDomainKeyChainRequestBody] 防盗链Key信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDomainKeyChain(updateDomainKeyChainRequest?: UpdateDomainKeyChainRequest): Promise<UpdateDomainKeyChainResponse> {
        const options = ParamCreater().updateDomainKeyChain(updateDomainKeyChainRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改播放域名的地域限制，选中地域允许接入。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改地域限制配置
     * @param {string} playDomain 播放域名
     * @param {GeoBlockingConfigInfo} updateGeoBlockingConfigRequestBody 地域限制配置信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateGeoBlockingConfig(updateGeoBlockingConfigRequest?: UpdateGeoBlockingConfigRequest): Promise<UpdateGeoBlockingConfigResponse> {
        const options = ParamCreater().updateGeoBlockingConfig(updateGeoBlockingConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改推流/播放域名的IP黑/白名单，当前仅支持ipv4。
     * - 黑名单模式：禁止指定的IP或网段
     * - 白名单模式：仅允许指定的IP或网段
     * - 默认：全放通。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改IP黑/白名单
     * @param {IPAuthInfo} updateIpAuthListRequestBody IP黑名单信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateIpAuthList(updateIpAuthListRequest?: UpdateIpAuthListRequest): Promise<UpdateIpAuthListResponse> {
        const options = ParamCreater().updateIpAuthList(updateIpAuthListRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 新增、覆盖直播推流通知配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新增、覆盖直播推流通知配置
     * @param {string} domain 推流域名
     * @param {CallbackUrl} updatePublishTemplateRequestBody 推流通知配置
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePublishTemplate(updatePublishTemplateRequest?: UpdatePublishTemplateRequest): Promise<UpdatePublishTemplateResponse> {
        const options = ParamCreater().updatePublishTemplate(updatePublishTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改直播拉流回源配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改直播拉流回源配置
     * @param {ModifyPullSourcesConfig} updatePullSourcesConfigRequestBody 拉流回源配置
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePullSourcesConfig(updatePullSourcesConfigRequest?: UpdatePullSourcesConfigRequest): Promise<UpdatePullSourcesConfigResponse> {
        const options = ParamCreater().updatePullSourcesConfig(updatePullSourcesConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改录制回调配置接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改录制回调配置
     * @param {string} id 配置ID，在创建配置成功后返回
     * @param {RecordCallbackConfigRequest} updateRecordCallbackConfigRequestBody 录制回调修改请求
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRecordCallbackConfig(updateRecordCallbackConfigRequest?: UpdateRecordCallbackConfigRequest): Promise<UpdateRecordCallbackConfigResponse> {
        const options = ParamCreater().updateRecordCallbackConfig(updateRecordCallbackConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改录制规则接口，如果规则修改后，修改后的规则对正在录制的流无效，对新的流有效。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改录制规则
     * @param {string} id 规则ID，在创建成功规则后返回
     * @param {RecordRuleRequest} updateRecordRuleRequestBody 录制规则配置
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRecordRule(updateRecordRuleRequest?: UpdateRecordRuleRequest): Promise<UpdateRecordRuleResponse> {
        const options = ParamCreater().updateRecordRule(updateRecordRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改直播截图配置接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改直播截图配置
     * @param {LiveSnapshotConfig} updateSnapshotConfigRequestBody 直播截图配置
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSnapshotConfig(updateSnapshotConfigRequest?: UpdateSnapshotConfigRequest): Promise<UpdateSnapshotConfigResponse> {
        const options = ParamCreater().updateSnapshotConfig(updateSnapshotConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改禁推属性
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改禁推属性
     * @param {StreamForbiddenSetting} updateStreamForbiddenRequestBody 流禁推信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateStreamForbidden(updateStreamForbiddenRequest?: UpdateStreamForbiddenRequest): Promise<UpdateStreamForbiddenResponse> {
        const options = ParamCreater().updateStreamForbidden(updateStreamForbiddenRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改直播转码模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 配置直播转码模板
     * @param {StreamTranscodingTemplate} updateTranscodingsTemplateRequestBody 流转码模板信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTranscodingsTemplate(updateTranscodingsTemplateRequest?: UpdateTranscodingsTemplateRequest): Promise<UpdateTranscodingsTemplateResponse> {
        const options = ParamCreater().updateTranscodingsTemplate(updateTranscodingsTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定域名的https证书配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除指定域名的https证书配置
     * @param {string} domain 直播播放域名
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDomainHttpsCert(deleteDomainHttpsCertRequest?: DeleteDomainHttpsCertRequest): Promise<DeleteDomainHttpsCertResponse> {
        const options = ParamCreater().deleteDomainHttpsCert(deleteDomainHttpsCertRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定域名的https证书配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定域名的https证书配置
     * @param {string} domain 直播播放域名
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDomainHttpsCert(showDomainHttpsCertRequest?: ShowDomainHttpsCertRequest): Promise<ShowDomainHttpsCertResponse> {
        const options = ParamCreater().showDomainHttpsCert(showDomainHttpsCertRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改指定域名的https证书配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改指定域名的https证书配置
     * @param {string} domain 直播播放域名
     * @param {DomainHttpsCertInfo} [updateDomainHttpsCertRequestBody] https证书信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDomainHttpsCert(updateDomainHttpsCertRequest?: UpdateDomainHttpsCertRequest): Promise<UpdateDomainHttpsCertResponse> {
        const options = ParamCreater().updateDomainHttpsCert(updateDomainHttpsCertRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * OBS桶授权及取消授权
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary OBS桶授权及取消授权
     * @param {ObsAuthorityConfigV2} updateOBSBucketAuthorityPublicRequestBody 授权参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateObsBucketAuthorityPublic(updateObsBucketAuthorityPublicRequest?: UpdateObsBucketAuthorityPublicRequest): Promise<UpdateObsBucketAuthorityPublicResponse> {
        const options = ParamCreater().updateObsBucketAuthorityPublic(updateObsBucketAuthorityPublicRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 查询IP归属信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchShowIpBelongs(batchShowIpBelongsRequest?: BatchShowIpBelongsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cdn/ip-info",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let ip;

            if (batchShowIpBelongsRequest !== null && batchShowIpBelongsRequest !== undefined) {
                if (batchShowIpBelongsRequest instanceof BatchShowIpBelongsRequest) {
                    ip = batchShowIpBelongsRequest.ip;
                } else {
                    ip = batchShowIpBelongsRequest['ip'];
                }
            }

        
            if (ip === null || ip === undefined) {
                throw new RequiredError('ip','Required parameter ip was null or undefined when calling batchShowIpBelongs.');
            }
            if (ip !== null && ip !== undefined) {
                localVarQueryParameter['ip'] = ip;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 可单独创建直播播放域名或推流域名，每个租户最多可配置64条域名记录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDomain(createDomainRequest?: CreateDomainRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/domain",
                contentType: "application/json; charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createDomainRequest !== null && createDomainRequest !== undefined) {
                if (createDomainRequest instanceof CreateDomainRequest) {
                    body = createDomainRequest.body
                } else {
                    body = createDomainRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json; charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 将用户已创建的播放域名和推流域名建立域名映射关系
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDomainMapping(createDomainMappingRequest?: CreateDomainMappingRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/domains_mapping",
                contentType: "application/json; charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createDomainMappingRequest !== null && createDomainMappingRequest !== undefined) {
                if (createDomainMappingRequest instanceof CreateDomainMappingRequest) {
                    body = createDomainMappingRequest.body
                } else {
                    body = createDomainMappingRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json; charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建录制回调配置接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRecordCallbackConfig(createRecordCallbackConfigRequest?: CreateRecordCallbackConfigRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/record/callbacks",
                contentType: "application/json; charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createRecordCallbackConfigRequest !== null && createRecordCallbackConfigRequest !== undefined) {
                if (createRecordCallbackConfigRequest instanceof CreateRecordCallbackConfigRequest) {
                    body = createRecordCallbackConfigRequest.body
                } else {
                    body = createRecordCallbackConfigRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json; charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Create Record Index
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRecordIndex(createRecordIndexRequest?: CreateRecordIndexRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/record/indexes",
                contentType: "application/json; charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createRecordIndexRequest !== null && createRecordIndexRequest !== undefined) {
                if (createRecordIndexRequest instanceof CreateRecordIndexRequest) {
                    body = createRecordIndexRequest.body
                } else {
                    body = createRecordIndexRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json; charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建录制规则接口，录制规则对新推送的流生效，对已经推送中的流不生效
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRecordRule(createRecordRuleRequest?: CreateRecordRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/record/rules",
                contentType: "application/json; charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createRecordRuleRequest !== null && createRecordRuleRequest !== undefined) {
                if (createRecordRuleRequest instanceof CreateRecordRuleRequest) {
                    body = createRecordRuleRequest.body
                } else {
                    body = createRecordRuleRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json; charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建直播截图配置接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSnapshotConfig(createSnapshotConfigRequest?: CreateSnapshotConfigRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/stream/snapshot",
                contentType: "application/json; charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createSnapshotConfigRequest !== null && createSnapshotConfigRequest !== undefined) {
                if (createSnapshotConfigRequest instanceof CreateSnapshotConfigRequest) {
                    body = createSnapshotConfigRequest.body
                } else {
                    body = createSnapshotConfigRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json; charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 禁止直播推流
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createStreamForbidden(createStreamForbiddenRequest?: CreateStreamForbiddenRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/stream/blocks",
                contentType: "application/json; charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createStreamForbiddenRequest !== null && createStreamForbiddenRequest !== undefined) {
                if (createStreamForbiddenRequest instanceof CreateStreamForbiddenRequest) {
                    body = createStreamForbiddenRequest.body
                } else {
                    body = createStreamForbiddenRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json; charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建直播转码模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTranscodingsTemplate(createTranscodingsTemplateRequest?: CreateTranscodingsTemplateRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/template/transcodings",
                contentType: "application/json; charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createTranscodingsTemplateRequest !== null && createTranscodingsTemplateRequest !== undefined) {
                if (createTranscodingsTemplateRequest instanceof CreateTranscodingsTemplateRequest) {
                    body = createTranscodingsTemplateRequest.body
                } else {
                    body = createTranscodingsTemplateRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json; charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 生成URL鉴权串
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createUrlAuthchain(createUrlAuthchainRequest?: CreateUrlAuthchainRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/auth/chain",
                contentType: "application/json; charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createUrlAuthchainRequest !== null && createUrlAuthchainRequest !== undefined) {
                if (createUrlAuthchainRequest instanceof CreateUrlAuthchainRequest) {
                    body = createUrlAuthchainRequest.body
                } else {
                    body = createUrlAuthchainRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json; charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除域名。只有在域名停用（off）状态时才能删除。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDomain(deleteDomainRequest?: DeleteDomainRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/domain",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domain;

            if (deleteDomainRequest !== null && deleteDomainRequest !== undefined) {
                if (deleteDomainRequest instanceof DeleteDomainRequest) {
                    domain = deleteDomainRequest.domain;
                } else {
                    domain = deleteDomainRequest['domain'];
                }
            }

        
            if (domain === null || domain === undefined) {
                throw new RequiredError('domain','Required parameter domain was null or undefined when calling deleteDomain.');
            }
            if (domain !== null && domain !== undefined) {
                localVarQueryParameter['domain'] = domain;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定域名的Key防盗链配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDomainKeyChain(deleteDomainKeyChainRequest?: DeleteDomainKeyChainRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/guard/key-chain",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domain;

            if (deleteDomainKeyChainRequest !== null && deleteDomainKeyChainRequest !== undefined) {
                if (deleteDomainKeyChainRequest instanceof DeleteDomainKeyChainRequest) {
                    domain = deleteDomainKeyChainRequest.domain;
                } else {
                    domain = deleteDomainKeyChainRequest['domain'];
                }
            }

        
            if (domain === null || domain === undefined) {
                throw new RequiredError('domain','Required parameter domain was null or undefined when calling deleteDomainKeyChain.');
            }
            if (domain !== null && domain !== undefined) {
                localVarQueryParameter['domain'] = domain;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 将播放域名和推流域名的域名映射关系删除
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDomainMapping(deleteDomainMappingRequest?: DeleteDomainMappingRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/domains_mapping",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let pullDomain;
            
            let pushDomain;

            if (deleteDomainMappingRequest !== null && deleteDomainMappingRequest !== undefined) {
                if (deleteDomainMappingRequest instanceof DeleteDomainMappingRequest) {
                    pullDomain = deleteDomainMappingRequest.pullDomain;
                    pushDomain = deleteDomainMappingRequest.pushDomain;
                } else {
                    pullDomain = deleteDomainMappingRequest['pull_domain'];
                    pushDomain = deleteDomainMappingRequest['push_domain'];
                }
            }

        
            if (pullDomain === null || pullDomain === undefined) {
                throw new RequiredError('pullDomain','Required parameter pullDomain was null or undefined when calling deleteDomainMapping.');
            }
            if (pullDomain !== null && pullDomain !== undefined) {
                localVarQueryParameter['pull_domain'] = pullDomain;
            }
            if (pushDomain === null || pushDomain === undefined) {
                throw new RequiredError('pushDomain','Required parameter pushDomain was null or undefined when calling deleteDomainMapping.');
            }
            if (pushDomain !== null && pushDomain !== undefined) {
                localVarQueryParameter['push_domain'] = pushDomain;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除直播推流通知配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePublishTemplate(deletePublishTemplateRequest?: DeletePublishTemplateRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/notifications/publish",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domain;

            if (deletePublishTemplateRequest !== null && deletePublishTemplateRequest !== undefined) {
                if (deletePublishTemplateRequest instanceof DeletePublishTemplateRequest) {
                    domain = deletePublishTemplateRequest.domain;
                } else {
                    domain = deletePublishTemplateRequest['domain'];
                }
            }

        
            if (domain === null || domain === undefined) {
                throw new RequiredError('domain','Required parameter domain was null or undefined when calling deletePublishTemplate.');
            }
            if (domain !== null && domain !== undefined) {
                localVarQueryParameter['domain'] = domain;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除录制回调配置接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRecordCallbackConfig(deleteRecordCallbackConfigRequest?: DeleteRecordCallbackConfigRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/record/callbacks/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (deleteRecordCallbackConfigRequest !== null && deleteRecordCallbackConfigRequest !== undefined) {
                if (deleteRecordCallbackConfigRequest instanceof DeleteRecordCallbackConfigRequest) {
                    id = deleteRecordCallbackConfigRequest.id;
                } else {
                    id = deleteRecordCallbackConfigRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteRecordCallbackConfig.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除录制规则接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRecordRule(deleteRecordRuleRequest?: DeleteRecordRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/record/rules/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (deleteRecordRuleRequest !== null && deleteRecordRuleRequest !== undefined) {
                if (deleteRecordRuleRequest instanceof DeleteRecordRuleRequest) {
                    id = deleteRecordRuleRequest.id;
                } else {
                    id = deleteRecordRuleRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteRecordRule.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除直播截图配置接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSnapshotConfig(deleteSnapshotConfigRequest?: DeleteSnapshotConfigRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/stream/snapshot",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domain;
            
            let appName;

            if (deleteSnapshotConfigRequest !== null && deleteSnapshotConfigRequest !== undefined) {
                if (deleteSnapshotConfigRequest instanceof DeleteSnapshotConfigRequest) {
                    domain = deleteSnapshotConfigRequest.domain;
                    appName = deleteSnapshotConfigRequest.appName;
                } else {
                    domain = deleteSnapshotConfigRequest['domain'];
                    appName = deleteSnapshotConfigRequest['app_name'];
                }
            }

        
            if (domain === null || domain === undefined) {
                throw new RequiredError('domain','Required parameter domain was null or undefined when calling deleteSnapshotConfig.');
            }
            if (domain !== null && domain !== undefined) {
                localVarQueryParameter['domain'] = domain;
            }
            if (appName === null || appName === undefined) {
                throw new RequiredError('appName','Required parameter appName was null or undefined when calling deleteSnapshotConfig.');
            }
            if (appName !== null && appName !== undefined) {
                localVarQueryParameter['app_name'] = appName;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 恢复直播推流接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteStreamForbidden(deleteStreamForbiddenRequest?: DeleteStreamForbiddenRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/stream/blocks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domain;
            
            let appName;
            
            let streamName;

            if (deleteStreamForbiddenRequest !== null && deleteStreamForbiddenRequest !== undefined) {
                if (deleteStreamForbiddenRequest instanceof DeleteStreamForbiddenRequest) {
                    domain = deleteStreamForbiddenRequest.domain;
                    appName = deleteStreamForbiddenRequest.appName;
                    streamName = deleteStreamForbiddenRequest.streamName;
                } else {
                    domain = deleteStreamForbiddenRequest['domain'];
                    appName = deleteStreamForbiddenRequest['app_name'];
                    streamName = deleteStreamForbiddenRequest['stream_name'];
                }
            }

        
            if (domain === null || domain === undefined) {
                throw new RequiredError('domain','Required parameter domain was null or undefined when calling deleteStreamForbidden.');
            }
            if (domain !== null && domain !== undefined) {
                localVarQueryParameter['domain'] = domain;
            }
            if (appName === null || appName === undefined) {
                throw new RequiredError('appName','Required parameter appName was null or undefined when calling deleteStreamForbidden.');
            }
            if (appName !== null && appName !== undefined) {
                localVarQueryParameter['app_name'] = appName;
            }
            if (streamName === null || streamName === undefined) {
                throw new RequiredError('streamName','Required parameter streamName was null or undefined when calling deleteStreamForbidden.');
            }
            if (streamName !== null && streamName !== undefined) {
                localVarQueryParameter['stream_name'] = streamName;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除直播转码模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTranscodingsTemplate(deleteTranscodingsTemplateRequest?: DeleteTranscodingsTemplateRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/template/transcodings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domain;
            
            let appName;

            if (deleteTranscodingsTemplateRequest !== null && deleteTranscodingsTemplateRequest !== undefined) {
                if (deleteTranscodingsTemplateRequest instanceof DeleteTranscodingsTemplateRequest) {
                    domain = deleteTranscodingsTemplateRequest.domain;
                    appName = deleteTranscodingsTemplateRequest.appName;
                } else {
                    domain = deleteTranscodingsTemplateRequest['domain'];
                    appName = deleteTranscodingsTemplateRequest['app_name'];
                }
            }

        
            if (domain === null || domain === undefined) {
                throw new RequiredError('domain','Required parameter domain was null or undefined when calling deleteTranscodingsTemplate.');
            }
            if (domain !== null && domain !== undefined) {
                localVarQueryParameter['domain'] = domain;
            }
            if (appName === null || appName === undefined) {
                throw new RequiredError('appName','Required parameter appName was null or undefined when calling deleteTranscodingsTemplate.');
            }
            if (appName !== null && appName !== undefined) {
                localVarQueryParameter['app_name'] = appName;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询播放域名延时配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDelayConfig(listDelayConfigRequest?: ListDelayConfigRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/domain/delay",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let playDomain;

            if (listDelayConfigRequest !== null && listDelayConfigRequest !== undefined) {
                if (listDelayConfigRequest instanceof ListDelayConfigRequest) {
                    playDomain = listDelayConfigRequest.playDomain;
                } else {
                    playDomain = listDelayConfigRequest['play_domain'];
                }
            }

        
            if (playDomain === null || playDomain === undefined) {
                throw new RequiredError('playDomain','Required parameter playDomain was null or undefined when calling listDelayConfig.');
            }
            if (playDomain !== null && playDomain !== undefined) {
                localVarQueryParameter['play_domain'] = playDomain;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询播放域名的地域限制列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGeoBlockingConfig(listGeoBlockingConfigRequest?: ListGeoBlockingConfigRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/domain/geo-blocking",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let playDomain;

            if (listGeoBlockingConfigRequest !== null && listGeoBlockingConfigRequest !== undefined) {
                if (listGeoBlockingConfigRequest instanceof ListGeoBlockingConfigRequest) {
                    playDomain = listGeoBlockingConfigRequest.playDomain;
                } else {
                    playDomain = listGeoBlockingConfigRequest['play_domain'];
                }
            }

        
            if (playDomain === null || playDomain === undefined) {
                throw new RequiredError('playDomain','Required parameter playDomain was null or undefined when calling listGeoBlockingConfig.');
            }
            if (playDomain !== null && playDomain !== undefined) {
                localVarQueryParameter['play_domain'] = playDomain;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询推流/播放域名的IP黑/白名单。
         * - 黑名单模式：禁止指定的IP或网段
         * - 白名单模式：仅允许指定的IP或网段
         * - 默认：全放通。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listIpAuthList(listIpAuthListRequest?: ListIpAuthListRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/guard/ip",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domain;

            if (listIpAuthListRequest !== null && listIpAuthListRequest !== undefined) {
                if (listIpAuthListRequest instanceof ListIpAuthListRequest) {
                    domain = listIpAuthListRequest.domain;
                } else {
                    domain = listIpAuthListRequest['domain'];
                }
            }

        
            if (domain === null || domain === undefined) {
                throw new RequiredError('domain','Required parameter domain was null or undefined when calling listIpAuthList.');
            }
            if (domain !== null && domain !== undefined) {
                localVarQueryParameter['domain'] = domain;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取直播播放日志，基于域名以5分钟粒度进行打包，日志内容以 \&quot;|\&quot; 进行分隔。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLiveSampleLogs(listLiveSampleLogsRequest?: ListLiveSampleLogsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/logs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let playDomain;
            
            let startTime;
            
            let endTime;

            if (listLiveSampleLogsRequest !== null && listLiveSampleLogsRequest !== undefined) {
                if (listLiveSampleLogsRequest instanceof ListLiveSampleLogsRequest) {
                    playDomain = listLiveSampleLogsRequest.playDomain;
                    startTime = listLiveSampleLogsRequest.startTime;
                    endTime = listLiveSampleLogsRequest.endTime;
                } else {
                    playDomain = listLiveSampleLogsRequest['play_domain'];
                    startTime = listLiveSampleLogsRequest['start_time'];
                    endTime = listLiveSampleLogsRequest['end_time'];
                }
            }

        
            if (playDomain === null || playDomain === undefined) {
                throw new RequiredError('playDomain','Required parameter playDomain was null or undefined when calling listLiveSampleLogs.');
            }
            if (playDomain !== null && playDomain !== undefined) {
                localVarQueryParameter['play_domain'] = playDomain;
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listLiveSampleLogs.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listLiveSampleLogs.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询直播中的流信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLiveStreamsOnline(listLiveStreamsOnlineRequest?: ListLiveStreamsOnlineRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/realtime/streams",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let publishDomain;
            
            let app;
            
            let offset;
            
            let limit;
            
            let stream;

            if (listLiveStreamsOnlineRequest !== null && listLiveStreamsOnlineRequest !== undefined) {
                if (listLiveStreamsOnlineRequest instanceof ListLiveStreamsOnlineRequest) {
                    publishDomain = listLiveStreamsOnlineRequest.publishDomain;
                    app = listLiveStreamsOnlineRequest.app;
                    offset = listLiveStreamsOnlineRequest.offset;
                    limit = listLiveStreamsOnlineRequest.limit;
                    stream = listLiveStreamsOnlineRequest.stream;
                } else {
                    publishDomain = listLiveStreamsOnlineRequest['publish_domain'];
                    app = listLiveStreamsOnlineRequest['app'];
                    offset = listLiveStreamsOnlineRequest['offset'];
                    limit = listLiveStreamsOnlineRequest['limit'];
                    stream = listLiveStreamsOnlineRequest['stream'];
                }
            }

        
            if (publishDomain === null || publishDomain === undefined) {
                throw new RequiredError('publishDomain','Required parameter publishDomain was null or undefined when calling listLiveStreamsOnline.');
            }
            if (publishDomain !== null && publishDomain !== undefined) {
                localVarQueryParameter['publish_domain'] = publishDomain;
            }
            if (app !== null && app !== undefined) {
                localVarQueryParameter['app'] = app;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (stream !== null && stream !== undefined) {
                localVarQueryParameter['stream'] = stream;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询直播推流通知配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPublishTemplate(listPublishTemplateRequest?: ListPublishTemplateRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/notifications/publish",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domain;

            if (listPublishTemplateRequest !== null && listPublishTemplateRequest !== undefined) {
                if (listPublishTemplateRequest instanceof ListPublishTemplateRequest) {
                    domain = listPublishTemplateRequest.domain;
                } else {
                    domain = listPublishTemplateRequest['domain'];
                }
            }

        
            if (domain === null || domain === undefined) {
                throw new RequiredError('domain','Required parameter domain was null or undefined when calling listPublishTemplate.');
            }
            if (domain !== null && domain !== undefined) {
                localVarQueryParameter['domain'] = domain;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询录制回调配置列表接口。通过指定条件，查询满足条件的配置列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRecordCallbackConfigs(listRecordCallbackConfigsRequest?: ListRecordCallbackConfigsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/record/callbacks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let publishDomain;
            
            let app;
            
            let offset;
            
            let limit;

            if (listRecordCallbackConfigsRequest !== null && listRecordCallbackConfigsRequest !== undefined) {
                if (listRecordCallbackConfigsRequest instanceof ListRecordCallbackConfigsRequest) {
                    publishDomain = listRecordCallbackConfigsRequest.publishDomain;
                    app = listRecordCallbackConfigsRequest.app;
                    offset = listRecordCallbackConfigsRequest.offset;
                    limit = listRecordCallbackConfigsRequest.limit;
                } else {
                    publishDomain = listRecordCallbackConfigsRequest['publish_domain'];
                    app = listRecordCallbackConfigsRequest['app'];
                    offset = listRecordCallbackConfigsRequest['offset'];
                    limit = listRecordCallbackConfigsRequest['limit'];
                }
            }

        
            if (publishDomain !== null && publishDomain !== undefined) {
                localVarQueryParameter['publish_domain'] = publishDomain;
            }
            if (app !== null && app !== undefined) {
                localVarQueryParameter['app'] = app;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 录制完成的内容查询
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRecordContents(listRecordContentsRequest?: ListRecordContentsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/record/contents",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let startTime;
            
            let publishDomain;
            
            let app;
            
            let stream;
            
            let recordType;
            
            let endTime;
            
            let offset;
            
            let limit;

            if (listRecordContentsRequest !== null && listRecordContentsRequest !== undefined) {
                if (listRecordContentsRequest instanceof ListRecordContentsRequest) {
                    startTime = listRecordContentsRequest.startTime;
                    publishDomain = listRecordContentsRequest.publishDomain;
                    app = listRecordContentsRequest.app;
                    stream = listRecordContentsRequest.stream;
                    recordType = listRecordContentsRequest.recordType;
                    endTime = listRecordContentsRequest.endTime;
                    offset = listRecordContentsRequest.offset;
                    limit = listRecordContentsRequest.limit;
                } else {
                    startTime = listRecordContentsRequest['start_time'];
                    publishDomain = listRecordContentsRequest['publish_domain'];
                    app = listRecordContentsRequest['app'];
                    stream = listRecordContentsRequest['stream'];
                    recordType = listRecordContentsRequest['record_type'];
                    endTime = listRecordContentsRequest['end_time'];
                    offset = listRecordContentsRequest['offset'];
                    limit = listRecordContentsRequest['limit'];
                }
            }

        
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listRecordContents.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (publishDomain !== null && publishDomain !== undefined) {
                localVarQueryParameter['publish_domain'] = publishDomain;
            }
            if (app !== null && app !== undefined) {
                localVarQueryParameter['app'] = app;
            }
            if (stream !== null && stream !== undefined) {
                localVarQueryParameter['stream'] = stream;
            }
            if (recordType !== null && recordType !== undefined) {
                localVarQueryParameter['record_type'] = recordType;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询录制规则列表接口，通过指定条件，查询满足条件的录制规则列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRecordRules(listRecordRulesRequest?: ListRecordRulesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/record/rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let publishDomain;
            
            let app;
            
            let stream;
            
            let recordType;
            
            let offset;
            
            let limit;

            if (listRecordRulesRequest !== null && listRecordRulesRequest !== undefined) {
                if (listRecordRulesRequest instanceof ListRecordRulesRequest) {
                    publishDomain = listRecordRulesRequest.publishDomain;
                    app = listRecordRulesRequest.app;
                    stream = listRecordRulesRequest.stream;
                    recordType = listRecordRulesRequest.recordType;
                    offset = listRecordRulesRequest.offset;
                    limit = listRecordRulesRequest.limit;
                } else {
                    publishDomain = listRecordRulesRequest['publish_domain'];
                    app = listRecordRulesRequest['app'];
                    stream = listRecordRulesRequest['stream'];
                    recordType = listRecordRulesRequest['record_type'];
                    offset = listRecordRulesRequest['offset'];
                    limit = listRecordRulesRequest['limit'];
                }
            }

        
            if (publishDomain !== null && publishDomain !== undefined) {
                localVarQueryParameter['publish_domain'] = publishDomain;
            }
            if (app !== null && app !== undefined) {
                localVarQueryParameter['app'] = app;
            }
            if (stream !== null && stream !== undefined) {
                localVarQueryParameter['stream'] = stream;
            }
            if (recordType !== null && recordType !== undefined) {
                localVarQueryParameter['record_type'] = recordType;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询直播截图配置接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSnapshotConfigs(listSnapshotConfigsRequest?: ListSnapshotConfigsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/stream/snapshot",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domain;
            
            let appName;
            
            let limit;
            
            let offset;

            if (listSnapshotConfigsRequest !== null && listSnapshotConfigsRequest !== undefined) {
                if (listSnapshotConfigsRequest instanceof ListSnapshotConfigsRequest) {
                    domain = listSnapshotConfigsRequest.domain;
                    appName = listSnapshotConfigsRequest.appName;
                    limit = listSnapshotConfigsRequest.limit;
                    offset = listSnapshotConfigsRequest.offset;
                } else {
                    domain = listSnapshotConfigsRequest['domain'];
                    appName = listSnapshotConfigsRequest['app_name'];
                    limit = listSnapshotConfigsRequest['limit'];
                    offset = listSnapshotConfigsRequest['offset'];
                }
            }

        
            if (domain === null || domain === undefined) {
                throw new RequiredError('domain','Required parameter domain was null or undefined when calling listSnapshotConfigs.');
            }
            if (domain !== null && domain !== undefined) {
                localVarQueryParameter['domain'] = domain;
            }
            if (appName !== null && appName !== undefined) {
                localVarQueryParameter['app_name'] = appName;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询禁播黑名单列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listStreamForbidden(listStreamForbiddenRequest?: ListStreamForbiddenRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/stream/blocks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domain;
            
            let appName;
            
            let streamName;
            
            let page;
            
            let size;

            if (listStreamForbiddenRequest !== null && listStreamForbiddenRequest !== undefined) {
                if (listStreamForbiddenRequest instanceof ListStreamForbiddenRequest) {
                    domain = listStreamForbiddenRequest.domain;
                    appName = listStreamForbiddenRequest.appName;
                    streamName = listStreamForbiddenRequest.streamName;
                    page = listStreamForbiddenRequest.page;
                    size = listStreamForbiddenRequest.size;
                } else {
                    domain = listStreamForbiddenRequest['domain'];
                    appName = listStreamForbiddenRequest['app_name'];
                    streamName = listStreamForbiddenRequest['stream_name'];
                    page = listStreamForbiddenRequest['page'];
                    size = listStreamForbiddenRequest['size'];
                }
            }

        
            if (domain === null || domain === undefined) {
                throw new RequiredError('domain','Required parameter domain was null or undefined when calling listStreamForbidden.');
            }
            if (domain !== null && domain !== undefined) {
                localVarQueryParameter['domain'] = domain;
            }
            if (appName !== null && appName !== undefined) {
                localVarQueryParameter['app_name'] = appName;
            }
            if (streamName !== null && streamName !== undefined) {
                localVarQueryParameter['stream_name'] = streamName;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (size !== null && size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 对单条流的实时录制控制接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        runRecord(runRecordRequest?: RunRecordRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/record/control",
                contentType: "application/json; charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let action;

            if (runRecordRequest !== null && runRecordRequest !== undefined) {
                if (runRecordRequest instanceof RunRecordRequest) {
                    action = runRecordRequest.action;
                    body = runRecordRequest.body
                } else {
                    action = runRecordRequest['action'];
                    body = runRecordRequest['body'];
                }
            }

        
            if (action === null || action === undefined) {
                throw new RequiredError('action','Required parameter action was null or undefined when calling runRecord.');
            }
            if (action !== null && action !== undefined) {
                localVarQueryParameter['action'] = action;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json; charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询直播域名
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDomain(showDomainRequest?: ShowDomainRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/domain",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domain;
            
            let enterpriseProjectId;

            if (showDomainRequest !== null && showDomainRequest !== undefined) {
                if (showDomainRequest instanceof ShowDomainRequest) {
                    domain = showDomainRequest.domain;
                    enterpriseProjectId = showDomainRequest.enterpriseProjectId;
                } else {
                    domain = showDomainRequest['domain'];
                    enterpriseProjectId = showDomainRequest['enterprise_project_id'];
                }
            }

        
            if (domain !== null && domain !== undefined) {
                localVarQueryParameter['domain'] = domain;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定域名的Key防盗链配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDomainKeyChain(showDomainKeyChainRequest?: ShowDomainKeyChainRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/guard/key-chain",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domain;

            if (showDomainKeyChainRequest !== null && showDomainKeyChainRequest !== undefined) {
                if (showDomainKeyChainRequest instanceof ShowDomainKeyChainRequest) {
                    domain = showDomainKeyChainRequest.domain;
                } else {
                    domain = showDomainKeyChainRequest['domain'];
                }
            }

        
            if (domain === null || domain === undefined) {
                throw new RequiredError('domain','Required parameter domain was null or undefined when calling showDomainKeyChain.');
            }
            if (domain !== null && domain !== undefined) {
                localVarQueryParameter['domain'] = domain;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询直播拉流回源配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPullSourcesConfig(showPullSourcesConfigRequest?: ShowPullSourcesConfigRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/domain/pull-sources",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let playDomain;

            if (showPullSourcesConfigRequest !== null && showPullSourcesConfigRequest !== undefined) {
                if (showPullSourcesConfigRequest instanceof ShowPullSourcesConfigRequest) {
                    playDomain = showPullSourcesConfigRequest.playDomain;
                } else {
                    playDomain = showPullSourcesConfigRequest['play_domain'];
                }
            }

        
            if (playDomain === null || playDomain === undefined) {
                throw new RequiredError('playDomain','Required parameter playDomain was null or undefined when calling showPullSourcesConfig.');
            }
            if (playDomain !== null && playDomain !== undefined) {
                localVarQueryParameter['play_domain'] = playDomain;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询录制回调配置接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRecordCallbackConfig(showRecordCallbackConfigRequest?: ShowRecordCallbackConfigRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/record/callbacks/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (showRecordCallbackConfigRequest !== null && showRecordCallbackConfigRequest !== undefined) {
                if (showRecordCallbackConfigRequest instanceof ShowRecordCallbackConfigRequest) {
                    id = showRecordCallbackConfigRequest.id;
                } else {
                    id = showRecordCallbackConfigRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showRecordCallbackConfig.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询录制规则接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRecordRule(showRecordRuleRequest?: ShowRecordRuleRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/record/rules/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (showRecordRuleRequest !== null && showRecordRuleRequest !== undefined) {
                if (showRecordRuleRequest instanceof ShowRecordRuleRequest) {
                    id = showRecordRuleRequest.id;
                } else {
                    id = showRecordRuleRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showRecordRule.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询直播转码模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTranscodingsTemplate(showTranscodingsTemplateRequest?: ShowTranscodingsTemplateRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/template/transcodings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domain;
            
            let appName;
            
            let page;
            
            let size;

            if (showTranscodingsTemplateRequest !== null && showTranscodingsTemplateRequest !== undefined) {
                if (showTranscodingsTemplateRequest instanceof ShowTranscodingsTemplateRequest) {
                    domain = showTranscodingsTemplateRequest.domain;
                    appName = showTranscodingsTemplateRequest.appName;
                    page = showTranscodingsTemplateRequest.page;
                    size = showTranscodingsTemplateRequest.size;
                } else {
                    domain = showTranscodingsTemplateRequest['domain'];
                    appName = showTranscodingsTemplateRequest['app_name'];
                    page = showTranscodingsTemplateRequest['page'];
                    size = showTranscodingsTemplateRequest['size'];
                }
            }

        
            if (domain === null || domain === undefined) {
                throw new RequiredError('domain','Required parameter domain was null or undefined when calling showTranscodingsTemplate.');
            }
            if (domain !== null && domain !== undefined) {
                localVarQueryParameter['domain'] = domain;
            }
            if (appName !== null && appName !== undefined) {
                localVarQueryParameter['app_name'] = appName;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (size !== null && size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改播放域名延时配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDelayConfig(updateDelayConfigRequest?: UpdateDelayConfigRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/domain/delay",
                contentType: "application/json; charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateDelayConfigRequest !== null && updateDelayConfigRequest !== undefined) {
                if (updateDelayConfigRequest instanceof UpdateDelayConfigRequest) {
                    body = updateDelayConfigRequest.body
                } else {
                    body = updateDelayConfigRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json; charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改直播播放、RTMP推流加速域名相关信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDomain(updateDomainRequest?: UpdateDomainRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/domain",
                contentType: "application/json; charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateDomainRequest !== null && updateDomainRequest !== undefined) {
                if (updateDomainRequest instanceof UpdateDomainRequest) {
                    body = updateDomainRequest.body
                } else {
                    body = updateDomainRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json; charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 配置IPV6开关
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDomainIp6Switch(updateDomainIp6SwitchRequest?: UpdateDomainIp6SwitchRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/domain/ipv6-switch",
                contentType: "application/json; charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateDomainIp6SwitchRequest !== null && updateDomainIp6SwitchRequest !== undefined) {
                if (updateDomainIp6SwitchRequest instanceof UpdateDomainIp6SwitchRequest) {
                    body = updateDomainIp6SwitchRequest.body
                } else {
                    body = updateDomainIp6SwitchRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json; charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新指定域名的Key防盗链配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDomainKeyChain(updateDomainKeyChainRequest?: UpdateDomainKeyChainRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/guard/key-chain",
                contentType: "application/json; charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let domain;

            if (updateDomainKeyChainRequest !== null && updateDomainKeyChainRequest !== undefined) {
                if (updateDomainKeyChainRequest instanceof UpdateDomainKeyChainRequest) {
                    domain = updateDomainKeyChainRequest.domain;
                    body = updateDomainKeyChainRequest.body
                } else {
                    domain = updateDomainKeyChainRequest['domain'];
                    body = updateDomainKeyChainRequest['body'];
                }
            }

        
            if (domain === null || domain === undefined) {
                throw new RequiredError('domain','Required parameter domain was null or undefined when calling updateDomainKeyChain.');
            }
            if (domain !== null && domain !== undefined) {
                localVarQueryParameter['domain'] = domain;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json; charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改播放域名的地域限制，选中地域允许接入。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateGeoBlockingConfig(updateGeoBlockingConfigRequest?: UpdateGeoBlockingConfigRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/domain/geo-blocking",
                contentType: "application/json; charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let playDomain;

            if (updateGeoBlockingConfigRequest !== null && updateGeoBlockingConfigRequest !== undefined) {
                if (updateGeoBlockingConfigRequest instanceof UpdateGeoBlockingConfigRequest) {
                    playDomain = updateGeoBlockingConfigRequest.playDomain;
                    body = updateGeoBlockingConfigRequest.body
                } else {
                    playDomain = updateGeoBlockingConfigRequest['play_domain'];
                    body = updateGeoBlockingConfigRequest['body'];
                }
            }

        
            if (playDomain === null || playDomain === undefined) {
                throw new RequiredError('playDomain','Required parameter playDomain was null or undefined when calling updateGeoBlockingConfig.');
            }
            if (playDomain !== null && playDomain !== undefined) {
                localVarQueryParameter['play_domain'] = playDomain;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json; charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改推流/播放域名的IP黑/白名单，当前仅支持ipv4。
         * - 黑名单模式：禁止指定的IP或网段
         * - 白名单模式：仅允许指定的IP或网段
         * - 默认：全放通。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateIpAuthList(updateIpAuthListRequest?: UpdateIpAuthListRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/guard/ip",
                contentType: "application/json; charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateIpAuthListRequest !== null && updateIpAuthListRequest !== undefined) {
                if (updateIpAuthListRequest instanceof UpdateIpAuthListRequest) {
                    body = updateIpAuthListRequest.body
                } else {
                    body = updateIpAuthListRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json; charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 新增、覆盖直播推流通知配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePublishTemplate(updatePublishTemplateRequest?: UpdatePublishTemplateRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/notifications/publish",
                contentType: "application/json; charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let domain;

            if (updatePublishTemplateRequest !== null && updatePublishTemplateRequest !== undefined) {
                if (updatePublishTemplateRequest instanceof UpdatePublishTemplateRequest) {
                    domain = updatePublishTemplateRequest.domain;
                    body = updatePublishTemplateRequest.body
                } else {
                    domain = updatePublishTemplateRequest['domain'];
                    body = updatePublishTemplateRequest['body'];
                }
            }

        
            if (domain === null || domain === undefined) {
                throw new RequiredError('domain','Required parameter domain was null or undefined when calling updatePublishTemplate.');
            }
            if (domain !== null && domain !== undefined) {
                localVarQueryParameter['domain'] = domain;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json; charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改直播拉流回源配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePullSourcesConfig(updatePullSourcesConfigRequest?: UpdatePullSourcesConfigRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/domain/pull-sources",
                contentType: "application/json; charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updatePullSourcesConfigRequest !== null && updatePullSourcesConfigRequest !== undefined) {
                if (updatePullSourcesConfigRequest instanceof UpdatePullSourcesConfigRequest) {
                    body = updatePullSourcesConfigRequest.body
                } else {
                    body = updatePullSourcesConfigRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json; charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改录制回调配置接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateRecordCallbackConfig(updateRecordCallbackConfigRequest?: UpdateRecordCallbackConfigRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/record/callbacks/{id}",
                contentType: "application/json; charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (updateRecordCallbackConfigRequest !== null && updateRecordCallbackConfigRequest !== undefined) {
                if (updateRecordCallbackConfigRequest instanceof UpdateRecordCallbackConfigRequest) {
                    id = updateRecordCallbackConfigRequest.id;
                    body = updateRecordCallbackConfigRequest.body
                } else {
                    id = updateRecordCallbackConfigRequest['id'];
                    body = updateRecordCallbackConfigRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateRecordCallbackConfig.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json; charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改录制规则接口，如果规则修改后，修改后的规则对正在录制的流无效，对新的流有效。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateRecordRule(updateRecordRuleRequest?: UpdateRecordRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/record/rules/{id}",
                contentType: "application/json; charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (updateRecordRuleRequest !== null && updateRecordRuleRequest !== undefined) {
                if (updateRecordRuleRequest instanceof UpdateRecordRuleRequest) {
                    id = updateRecordRuleRequest.id;
                    body = updateRecordRuleRequest.body
                } else {
                    id = updateRecordRuleRequest['id'];
                    body = updateRecordRuleRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateRecordRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json; charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改直播截图配置接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSnapshotConfig(updateSnapshotConfigRequest?: UpdateSnapshotConfigRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/stream/snapshot",
                contentType: "application/json; charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateSnapshotConfigRequest !== null && updateSnapshotConfigRequest !== undefined) {
                if (updateSnapshotConfigRequest instanceof UpdateSnapshotConfigRequest) {
                    body = updateSnapshotConfigRequest.body
                } else {
                    body = updateSnapshotConfigRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json; charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改禁推属性
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateStreamForbidden(updateStreamForbiddenRequest?: UpdateStreamForbiddenRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/stream/blocks",
                contentType: "application/json; charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateStreamForbiddenRequest !== null && updateStreamForbiddenRequest !== undefined) {
                if (updateStreamForbiddenRequest instanceof UpdateStreamForbiddenRequest) {
                    body = updateStreamForbiddenRequest.body
                } else {
                    body = updateStreamForbiddenRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json; charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改直播转码模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTranscodingsTemplate(updateTranscodingsTemplateRequest?: UpdateTranscodingsTemplateRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/template/transcodings",
                contentType: "application/json; charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateTranscodingsTemplateRequest !== null && updateTranscodingsTemplateRequest !== undefined) {
                if (updateTranscodingsTemplateRequest instanceof UpdateTranscodingsTemplateRequest) {
                    body = updateTranscodingsTemplateRequest.body
                } else {
                    body = updateTranscodingsTemplateRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json; charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定域名的https证书配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDomainHttpsCert(deleteDomainHttpsCertRequest?: DeleteDomainHttpsCertRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/guard/https-cert",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domain;

            if (deleteDomainHttpsCertRequest !== null && deleteDomainHttpsCertRequest !== undefined) {
                if (deleteDomainHttpsCertRequest instanceof DeleteDomainHttpsCertRequest) {
                    domain = deleteDomainHttpsCertRequest.domain;
                } else {
                    domain = deleteDomainHttpsCertRequest['domain'];
                }
            }

        
            if (domain === null || domain === undefined) {
                throw new RequiredError('domain','Required parameter domain was null or undefined when calling deleteDomainHttpsCert.');
            }
            if (domain !== null && domain !== undefined) {
                localVarQueryParameter['domain'] = domain;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定域名的https证书配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDomainHttpsCert(showDomainHttpsCertRequest?: ShowDomainHttpsCertRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/guard/https-cert",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domain;

            if (showDomainHttpsCertRequest !== null && showDomainHttpsCertRequest !== undefined) {
                if (showDomainHttpsCertRequest instanceof ShowDomainHttpsCertRequest) {
                    domain = showDomainHttpsCertRequest.domain;
                } else {
                    domain = showDomainHttpsCertRequest['domain'];
                }
            }

        
            if (domain === null || domain === undefined) {
                throw new RequiredError('domain','Required parameter domain was null or undefined when calling showDomainHttpsCert.');
            }
            if (domain !== null && domain !== undefined) {
                localVarQueryParameter['domain'] = domain;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改指定域名的https证书配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDomainHttpsCert(updateDomainHttpsCertRequest?: UpdateDomainHttpsCertRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/guard/https-cert",
                contentType: "application/json; charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let domain;

            if (updateDomainHttpsCertRequest !== null && updateDomainHttpsCertRequest !== undefined) {
                if (updateDomainHttpsCertRequest instanceof UpdateDomainHttpsCertRequest) {
                    domain = updateDomainHttpsCertRequest.domain;
                    body = updateDomainHttpsCertRequest.body
                } else {
                    domain = updateDomainHttpsCertRequest['domain'];
                    body = updateDomainHttpsCertRequest['body'];
                }
            }

        
            if (domain === null || domain === undefined) {
                throw new RequiredError('domain','Required parameter domain was null or undefined when calling updateDomainHttpsCert.');
            }
            if (domain !== null && domain !== undefined) {
                localVarQueryParameter['domain'] = domain;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json; charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * OBS桶授权及取消授权
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateObsBucketAuthorityPublic(updateObsBucketAuthorityPublicRequest?: UpdateObsBucketAuthorityPublicRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/obs/authority",
                contentType: "application/json; charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateObsBucketAuthorityPublicRequest !== null && updateObsBucketAuthorityPublicRequest !== undefined) {
                if (updateObsBucketAuthorityPublicRequest instanceof UpdateObsBucketAuthorityPublicRequest) {
                    body = updateObsBucketAuthorityPublicRequest.body
                } else {
                    body = updateObsBucketAuthorityPublicRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json; charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): LiveClient {
    return new LiveClient(client);
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