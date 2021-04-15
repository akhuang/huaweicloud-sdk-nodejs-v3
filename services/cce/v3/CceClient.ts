import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AddonInstance } from './model/AddonInstance';
import { AddonInstanceStatus } from './model/AddonInstanceStatus';
import { AddonTemplate } from './model/AddonTemplate';
import { AuthenticatingProxy } from './model/AuthenticatingProxy';
import { Authentication } from './model/Authentication';
import { AwakeClusterRequest } from './model/AwakeClusterRequest';
import { AwakeClusterResponse } from './model/AwakeClusterResponse';
import { CCEClusterNodeInformation } from './model/CCEClusterNodeInformation';
import { CCEClusterNodeInformationMetadata } from './model/CCEClusterNodeInformationMetadata';
import { CCEJob } from './model/CCEJob';
import { CCEJobMetadata } from './model/CCEJobMetadata';
import { CCEJobSpec } from './model/CCEJobSpec';
import { CCEJobStatus } from './model/CCEJobStatus';
import { CertDuration } from './model/CertDuration';
import { ClusterCert } from './model/ClusterCert';
import { ClusterEndpoints } from './model/ClusterEndpoints';
import { ClusterInformation } from './model/ClusterInformation';
import { ClusterInformationSpec } from './model/ClusterInformationSpec';
import { ClusterMetadata } from './model/ClusterMetadata';
import { ClusterStatus } from './model/ClusterStatus';
import { Clusters } from './model/Clusters';
import { ContainerNetwork } from './model/ContainerNetwork';
import { Context } from './model/Context';
import { Contexts } from './model/Contexts';
import { CreateAddonInstanceRequest } from './model/CreateAddonInstanceRequest';
import { CreateAddonInstanceResponse } from './model/CreateAddonInstanceResponse';
import { CreateCloudPersistentVolumeClaimsRequest } from './model/CreateCloudPersistentVolumeClaimsRequest';
import { CreateCloudPersistentVolumeClaimsResponse } from './model/CreateCloudPersistentVolumeClaimsResponse';
import { CreateClusterRequest } from './model/CreateClusterRequest';
import { CreateClusterResponse } from './model/CreateClusterResponse';
import { CreateKubernetesClusterCertRequest } from './model/CreateKubernetesClusterCertRequest';
import { CreateKubernetesClusterCertResponse } from './model/CreateKubernetesClusterCertResponse';
import { CreateNodePoolRequest } from './model/CreateNodePoolRequest';
import { CreateNodePoolResponse } from './model/CreateNodePoolResponse';
import { CreateNodeRequest } from './model/CreateNodeRequest';
import { CreateNodeResponse } from './model/CreateNodeResponse';
import { DataVolumeMetadata } from './model/DataVolumeMetadata';
import { DeleteAddonInstanceRequest } from './model/DeleteAddonInstanceRequest';
import { DeleteAddonInstanceResponse } from './model/DeleteAddonInstanceResponse';
import { DeleteCloudPersistentVolumeClaimsRequest } from './model/DeleteCloudPersistentVolumeClaimsRequest';
import { DeleteCloudPersistentVolumeClaimsResponse } from './model/DeleteCloudPersistentVolumeClaimsResponse';
import { DeleteClusterRequest } from './model/DeleteClusterRequest';
import { DeleteClusterResponse } from './model/DeleteClusterResponse';
import { DeleteNodePoolRequest } from './model/DeleteNodePoolRequest';
import { DeleteNodePoolResponse } from './model/DeleteNodePoolResponse';
import { DeleteNodeRequest } from './model/DeleteNodeRequest';
import { DeleteNodeResponse } from './model/DeleteNodeResponse';
import { DeleteStatus } from './model/DeleteStatus';
import { EniNetwork } from './model/EniNetwork';
import { HibernateClusterRequest } from './model/HibernateClusterRequest';
import { HibernateClusterResponse } from './model/HibernateClusterResponse';
import { HostNetwork } from './model/HostNetwork';
import { InstanceRequest } from './model/InstanceRequest';
import { InstanceRequestSpec } from './model/InstanceRequestSpec';
import { InstanceSpec } from './model/InstanceSpec';
import { ListAddonInstancesRequest } from './model/ListAddonInstancesRequest';
import { ListAddonInstancesResponse } from './model/ListAddonInstancesResponse';
import { ListAddonTemplatesRequest } from './model/ListAddonTemplatesRequest';
import { ListAddonTemplatesResponse } from './model/ListAddonTemplatesResponse';
import { ListClustersRequest } from './model/ListClustersRequest';
import { ListClustersResponse } from './model/ListClustersResponse';
import { ListNodePoolsRequest } from './model/ListNodePoolsRequest';
import { ListNodePoolsResponse } from './model/ListNodePoolsResponse';
import { ListNodesRequest } from './model/ListNodesRequest';
import { ListNodesResponse } from './model/ListNodesResponse';
import { Login } from './model/Login';
import { MasterSpec } from './model/MasterSpec';
import { Metadata } from './model/Metadata';
import { NicSpec } from './model/NicSpec';
import { NodeManagement } from './model/NodeManagement';
import { NodeMetadata } from './model/NodeMetadata';
import { NodeNicSpec } from './model/NodeNicSpec';
import { NodePool } from './model/NodePool';
import { NodePoolMetadata } from './model/NodePoolMetadata';
import { NodePoolNodeAutoscaling } from './model/NodePoolNodeAutoscaling';
import { NodePoolSpec } from './model/NodePoolSpec';
import { NodePoolStatus } from './model/NodePoolStatus';
import { PersistentVolumeClaim } from './model/PersistentVolumeClaim';
import { PersistentVolumeClaimMetadata } from './model/PersistentVolumeClaimMetadata';
import { PersistentVolumeClaimSpec } from './model/PersistentVolumeClaimSpec';
import { PersistentVolumeClaimStatus } from './model/PersistentVolumeClaimStatus';
import { ResourceRequirements } from './model/ResourceRequirements';
import { ResourceTag } from './model/ResourceTag';
import { ShowAddonInstanceRequest } from './model/ShowAddonInstanceRequest';
import { ShowAddonInstanceResponse } from './model/ShowAddonInstanceResponse';
import { ShowClusterMetadata } from './model/ShowClusterMetadata';
import { ShowClusterRequest } from './model/ShowClusterRequest';
import { ShowClusterResponse } from './model/ShowClusterResponse';
import { ShowJobRequest } from './model/ShowJobRequest';
import { ShowJobResponse } from './model/ShowJobResponse';
import { ShowNodePoolRequest } from './model/ShowNodePoolRequest';
import { ShowNodePoolResponse } from './model/ShowNodePoolResponse';
import { ShowNodeRequest } from './model/ShowNodeRequest';
import { ShowNodeResponse } from './model/ShowNodeResponse';
import { SupportVersions } from './model/SupportVersions';
import { Taint } from './model/Taint';
import { Templatespec } from './model/Templatespec';
import { UpdateAddonInstanceRequest } from './model/UpdateAddonInstanceRequest';
import { UpdateAddonInstanceResponse } from './model/UpdateAddonInstanceResponse';
import { UpdateClusterRequest } from './model/UpdateClusterRequest';
import { UpdateClusterResponse } from './model/UpdateClusterResponse';
import { UpdateNodePoolRequest } from './model/UpdateNodePoolRequest';
import { UpdateNodePoolResponse } from './model/UpdateNodePoolResponse';
import { UpdateNodeRequest } from './model/UpdateNodeRequest';
import { UpdateNodeResponse } from './model/UpdateNodeResponse';
import { User } from './model/User';
import { UserPassword } from './model/UserPassword';
import { UserTag } from './model/UserTag';
import { Users } from './model/Users';
import { V3Cluster } from './model/V3Cluster';
import { V3ClusterSpec } from './model/V3ClusterSpec';
import { V3DataVolume } from './model/V3DataVolume';
import { V3Node } from './model/V3Node';
import { V3NodeBandwidth } from './model/V3NodeBandwidth';
import { V3NodeCreateRequest } from './model/V3NodeCreateRequest';
import { V3NodeEIPSpec } from './model/V3NodeEIPSpec';
import { V3NodePublicIP } from './model/V3NodePublicIP';
import { V3NodeSpec } from './model/V3NodeSpec';
import { V3NodeStatus } from './model/V3NodeStatus';
import { V3RootVolume } from './model/V3RootVolume';
import { Versions } from './model/Versions';

export class CceClient {
    public static newBuilder(): ClientBuilder<CceClient> {
        return new ClientBuilder<CceClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }

    /**
     * 集群唤醒用于唤醒已休眠的集群，唤醒后，将继续收取控制节点资源费用。
     * @summary 集群唤醒
     * @param {string} clusterId 集群 ID，获取方式请参见[如何获取接口URI中参数](https://support.huaweicloud.com/api-cce/cce_02_0271.html)
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public awakeCluster(awakeClusterRequest?: AwakeClusterRequest): Promise<void> {
        // @ts-ignore
        return new Promise((resolve: (arg0: any) => any, reject: (arg0: any) => any) => {
            const options = ParamCreater().awakeCluster(awakeClusterRequest);
            options['responseHeaders'] = [''];

            return this.hcClient.sendRequest(options).then(
                (res: any) => {
                    return resolve(res);
                },
                (err: any) => {
                    return reject(err);
                });
        });
    }
    /**
     * 根据提供的插件模板，安装插件实例。 >插件管理的URL格式为：https://{clusterid}.Endpoint/uri。其中{clusterid}为集群ID，uri为资源路径，也即API访问的路径。 
     * @summary 创建AddonInstance
     * @param {string} contentType 消息体的类型（格式）
     * @param {InstanceRequest} createAddonInstanceRequestBody 请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAddonInstance(createAddonInstanceRequest?: CreateAddonInstanceRequest): Promise<CreateAddonInstanceResponse> {
        // @ts-ignore
        return new Promise((resolve: (arg0: any) => any, reject: (arg0: any) => any) => {
            const options = ParamCreater().createAddonInstance(createAddonInstanceRequest);
            options['responseHeaders'] = [''];

            return this.hcClient.sendRequest(options).then(
                (res: any) => {
                    return resolve(res);
                },
                (err: any) => {
                    return reject(err);
                });
        });
    }
    /**
     * 该API用于在指定的Namespace下通过云存储服务中的云存储（EVS、SFS、OBS）去创建PVC（PersistentVolumeClaim）。  >存储管理的URL格式为：https://{clusterid}.Endpoint/uri。其中{clusterid}为集群ID，uri为资源路径，也即API访问的路径。如果使用https://Endpoint/uri，则必须指定请求header中的X-Cluster-ID参数。 
     * @summary 创建PVC
     * @param {string} namespace Namespace是对一组资源和对象的抽象集合，用来将系统内部的对象划分为不同的项目组或用户组。以小写字母开头，由小写字母、数字、中划线（-）组成，且不能以中划线（-）结尾。  使用namespace有如下约束：  - 用户自定义的namespace，使用前必须先[创建Namespace](https://support.huaweicloud.com/api-cce/cce_02_0050.html)  - 系统自带的namespace：default  - 不能使用kube-system与kube-public 
     * @param {string} contentType 消息体的类型（格式）
     * @param {PersistentVolumeClaim} createCloudPersistentVolumeClaimsRequestBody 请求body参数说明；非单个参数名称
     * @param {string} [xClusterID] 集群 ID，使用**https://Endpoint/uri**这种URL格式时必须指定此参数。获取方式请参见[如何获取接口URI中参数](https://support.huaweicloud.com/api-cce/cce_02_0271.html)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCloudPersistentVolumeClaims(createCloudPersistentVolumeClaimsRequest?: CreateCloudPersistentVolumeClaimsRequest): Promise<CreateCloudPersistentVolumeClaimsResponse> {
        // @ts-ignore
        return new Promise((resolve: (arg0: any) => any, reject: (arg0: any) => any) => {
            const options = ParamCreater().createCloudPersistentVolumeClaims(createCloudPersistentVolumeClaimsRequest);
            options['responseHeaders'] = [''];

            return this.hcClient.sendRequest(options).then(
                (res: any) => {
                    return resolve(res);
                },
                (err: any) => {
                    return reject(err);
                });
        });
    }
    /**
     * 该API用于创建一个空集群（即只有控制节点Master，没有工作节点Node）。请在调用本接口完成集群创建之后，通过[创建节点](https://support.huaweicloud.com/api-cce/cce_02_0242.html)添加节点。   >   - 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。 >   - 调用该接口创建集群时，默认不安装ICAgent。ICAgent是应用性能管理APM的采集代理，运行在应用所在的服务器上，用于实时采集探针所获取的数据，安装ICAgent是使用应用性能管理APM的前提。若需安装ICAgent，请参照[安装ICAgent](https://support.huaweicloud.com/usermanual-apm/apm_02_0013.html)。 >   - 默认情况下，一个账户只能创建 5 个集群（每个Region下），如果您需要创建更多的集群，请[提交工单](https://console.huaweicloud.com/console/#/quota)申请增加配额。
     * @summary 创建集群
     * @param {string} contentType 消息体的类型（格式）
     * @param {V3Cluster} createClusterRequestBody 集群规格信息请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCluster(createClusterRequest?: CreateClusterRequest): Promise<CreateClusterResponse> {
        // @ts-ignore
        return new Promise((resolve: (arg0: any) => any, reject: (arg0: any) => any) => {
            const options = ParamCreater().createCluster(createClusterRequest);
            options['responseHeaders'] = [''];

            return this.hcClient.sendRequest(options).then(
                (res: any) => {
                    return resolve(res);
                },
                (err: any) => {
                    return reject(err);
                });
        });
    }
    /**
     * 该API用于获取指定集群的证书信息。
     * @summary 获取集群证书
     * @param {string} clusterId 集群 ID，获取方式请参见[如何获取接口URI中参数](https://support.huaweicloud.com/api-cce/cce_02_0271.html)
     * @param {string} contentType 消息体的类型（格式）
     * @param {CertDuration} createKubernetesClusterCertRequestBody 集群证书有效时间，单位为天，非管理员用户可申请 1~30天，管理员用户可申请 1-30天或无限制（-1）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createKubernetesClusterCert(createKubernetesClusterCertRequest?: CreateKubernetesClusterCertRequest): Promise<CreateKubernetesClusterCertResponse> {
        // @ts-ignore
        return new Promise((resolve: (arg0: any) => any, reject: (arg0: any) => any) => {
            const options = ParamCreater().createKubernetesClusterCert(createKubernetesClusterCertRequest);
            options['responseHeaders'] = [''];

            return this.hcClient.sendRequest(options).then(
                (res: any) => {
                    return resolve(res);
                },
                (err: any) => {
                    return reject(err);
                });
        });
    }
    /**
     * 该API用于在指定集群下创建节点。 > 若无集群，请先[创建集群](https://support.huaweicloud.com/api-cce/cce_02_0236.html)。 > 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     * @summary 创建节点
     * @param {string} clusterId 集群 ID，获取方式请参见[如何获取接口URI中参数](https://support.huaweicloud.com/api-cce/cce_02_0271.html)
     * @param {string} contentType 消息体的类型（格式）
     * @param {V3NodeCreateRequest} createNodeRequestBody 创建节点的请求体
     * @param {'NodepoolScaleUp'} [nodepoolScaleUp] 标明是否为nodepool下发的请求。若不为“NodepoolScaleUp”将自动更新对应节点池的实例数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createNode(createNodeRequest?: CreateNodeRequest): Promise<CreateNodeResponse> {
        // @ts-ignore
        return new Promise((resolve: (arg0: any) => any, reject: (arg0: any) => any) => {
            const options = ParamCreater().createNode(createNodeRequest);
            options['responseHeaders'] = [''];

            return this.hcClient.sendRequest(options).then(
                (res: any) => {
                    return resolve(res);
                },
                (err: any) => {
                    return reject(err);
                });
        });
    }
    /**
     * 该API用于在指定集群下创建节点池。仅支持集群在处于可用、扩容、缩容状态时调用。 > 若无集群，请先[创建集群](https://support.huaweicloud.com/api-cce/cce_02_0236.html)。 > 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径 
     * @summary 创建节点池
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} clusterId 集群 ID，获取方式请参见[如何获取接口URI中参数](https://support.huaweicloud.com/api-cce/cce_02_0271.html)
     * @param {NodePool} createNodePoolRequestBody 创建节点池的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createNodePool(createNodePoolRequest?: CreateNodePoolRequest): Promise<CreateNodePoolResponse> {
        // @ts-ignore
        return new Promise((resolve: (arg0: any) => any, reject: (arg0: any) => any) => {
            const options = ParamCreater().createNodePool(createNodePoolRequest);
            options['responseHeaders'] = [''];

            return this.hcClient.sendRequest(options).then(
                (res: any) => {
                    return resolve(res);
                },
                (err: any) => {
                    return reject(err);
                });
        });
    }
    /**
     * 删除插件实例的功能。 >插件管理的URL格式为：https://{clusterid}.Endpoint/uri。其中{clusterid}为集群ID，uri为资源路径，也即API访问的路径。 
     * @summary 删除AddonInstance
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} id 插件实例id
     * @param {string} clusterId 集群 ID，获取方式请参见[如何获取接口URI中参数](https://support.huaweicloud.com/api-cce/cce_02_0271.html)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAddonInstance(deleteAddonInstanceRequest?: DeleteAddonInstanceRequest): Promise<string> {
        // @ts-ignore
        return new Promise((resolve: (arg0: any) => any, reject: (arg0: any) => any) => {
            const options = ParamCreater().deleteAddonInstance(deleteAddonInstanceRequest);
            options['responseHeaders'] = [''];

            return this.hcClient.sendRequest(options).then(
                (res: any) => {
                    return resolve(res);
                },
                (err: any) => {
                    return reject(err);
                });
        });
    }
    /**
     * 该API用于删除指定Namespace下的PVC（PersistentVolumeClaim）对象，并可以选择保留后端的云存储。 >存储管理的URL格式为：https://{clusterid}.Endpoint/uri。其中{clusterid}为集群ID，uri为资源路径，也即API访问的路径。如果使用https://Endpoint/uri，则必须指定请求header中的X-Cluster-ID参数。 
     * @summary 删除PVC
     * @param {string} name 需要删除的PersistentVolumClaim的名称。 name格式为：Volume名称?deleteVolume&#x3D;BOOLEAN&amp;storageType&#x3D;云存储类型]，中括号内可省略，示例： - volume-49f1?deleteVolume&#x3D;true&amp;storageType&#x3D;bs - volume-49f1 其中： - deleteVolume：删除PersistentVolumeClaim后是否保留后端关联的云存储。false表示不删除，true表示删除，默认为false。   &gt;当为efs时，不支持删除存储，所以不能设为true。 - storageType：云存储的类型，和deleteVolume搭配使用。即deleteVolume和storageType必须同时配置。     - bs：EVS云存储     - nfs：SFS弹性文件存储     - obs：OBS对象存储     [- efs：SFS Turbo极速文件存储 
     * @param {string} namespace 指定PersistentVolumeClaim所在的命名空间。 
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} [xClusterID] 集群 ID，使用**https://Endpoint/uri**这种URL格式时必须指定此参数。获取方式请参见[如何获取接口URI中参数](https://support.huaweicloud.com/api-cce/cce_02_0271.html)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCloudPersistentVolumeClaims(deleteCloudPersistentVolumeClaimsRequest?: DeleteCloudPersistentVolumeClaimsRequest): Promise<DeleteCloudPersistentVolumeClaimsResponse> {
        // @ts-ignore
        return new Promise((resolve: (arg0: any) => any, reject: (arg0: any) => any) => {
            const options = ParamCreater().deleteCloudPersistentVolumeClaims(deleteCloudPersistentVolumeClaimsRequest);
            options['responseHeaders'] = [''];

            return this.hcClient.sendRequest(options).then(
                (res: any) => {
                    return resolve(res);
                },
                (err: any) => {
                    return reject(err);
                });
        });
    }
    /**
     * 该API用于删除一个指定的集群。 > 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     * @summary 删除集群
     * @param {string} clusterId 集群 ID，获取方式请参见[如何获取接口URI中参数](https://support.huaweicloud.com/api-cce/cce_02_0271.html)
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} [errorStatus] 集群状态兼容Error参数，用于API平滑切换。 兼容场景下，errorStatus为空则屏蔽Error状态为Deleting状态。
     * @param {'true' | 'block' | 'try' | 'false' | 'skip'} [deleteEfs] 是否删除efs.  枚举取值： - true or block (获取失败阻塞删除) - try (获取失败不阻塞删除) - false or skip (跳过不删除，默认选项)
     * @param {'true' | 'block' | 'try' | 'false' | 'skip'} [deleteEni] 是否删除eni ports 枚举取值： - true or block (获取失败阻塞删除) - try (获取失败不阻塞删除) - false or skip (跳过不删除，默认选项)
     * @param {'true' | 'block' | 'try' | 'false' | 'skip'} [deleteEvs] 是否删除evs 枚举取值： - true or block (获取失败阻塞删除) - try (获取失败不阻塞删除) - false or skip (跳过不删除，默认选项)
     * @param {'true' | 'block' | 'try' | 'false' | 'skip'} [deleteNet] 是否删除elb等集群Service/Ingress相关资源。 枚举取值： - true or block (获取失败阻塞删除) - try (获取失败不阻塞删除) - false or skip (跳过不删除，默认选项)
     * @param {'true' | 'block' | 'try' | 'false' | 'skip'} [deleteObs] 是否删除obs 枚举取值： - true or block (获取失败阻塞删除) - try (获取失败不阻塞删除) - false or skip (跳过不删除，默认选项)
     * @param {'true' | 'block' | 'try' | 'false' | 'skip'} [deleteSfs] 是否删除sfs 枚举取值： - true or block (获取失败阻塞删除) - try (获取失败不阻塞删除) - false or skip (跳过不删除，默认选项)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCluster(deleteClusterRequest?: DeleteClusterRequest): Promise<DeleteClusterResponse> {
        // @ts-ignore
        return new Promise((resolve: (arg0: any) => any, reject: (arg0: any) => any) => {
            const options = ParamCreater().deleteCluster(deleteClusterRequest);
            options['responseHeaders'] = [''];

            return this.hcClient.sendRequest(options).then(
                (res: any) => {
                    return resolve(res);
                },
                (err: any) => {
                    return reject(err);
                });
        });
    }
    /**
     * 该API用于删除指定的节点。 > - 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径 
     * @summary 删除节点
     * @param {string} clusterId 集群 ID，获取方式请参见[如何获取接口URI中参数](https://support.huaweicloud.com/api-cce/cce_02_0271.html)
     * @param {string} nodeId 节点ID，获取方式请参见[如何获取接口URI中参数](https://support.huaweicloud.com/api-cce/cce_02_0271.html)
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} [errorStatus] 集群状态兼容Error参数，用于API平滑切换。 兼容场景下，errorStatus为空则屏蔽Error状态为Deleting状态。
     * @param {'NoScaleDown'} [nodepoolScaleDown] 标明是否为nodepool下发的请求。若不为“NoScaleDown”将自动更新对应节点池的实例数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteNode(deleteNodeRequest?: DeleteNodeRequest): Promise<DeleteNodeResponse> {
        // @ts-ignore
        return new Promise((resolve: (arg0: any) => any, reject: (arg0: any) => any) => {
            const options = ParamCreater().deleteNode(deleteNodeRequest);
            options['responseHeaders'] = [''];

            return this.hcClient.sendRequest(options).then(
                (res: any) => {
                    return resolve(res);
                },
                (err: any) => {
                    return reject(err);
                });
        });
    }
    /**
     * 该API用于删除指定的节点池。 > 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径 
     * @summary 删除节点池
     * @param {string} clusterId 集群 ID，获取方式请参见[如何获取接口URI中参数](https://support.huaweicloud.com/api-cce/cce_02_0271.html)
     * @param {string} nodepoolId 节点池ID
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} [errorStatus] 集群状态兼容Error参数，用于API平滑切换。 兼容场景下，errorStatus为空则屏蔽Error状态为Deleting状态。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteNodePool(deleteNodePoolRequest?: DeleteNodePoolRequest): Promise<DeleteNodePoolResponse> {
        // @ts-ignore
        return new Promise((resolve: (arg0: any) => any, reject: (arg0: any) => any) => {
            const options = ParamCreater().deleteNodePool(deleteNodePoolRequest);
            options['responseHeaders'] = [''];

            return this.hcClient.sendRequest(options).then(
                (res: any) => {
                    return resolve(res);
                },
                (err: any) => {
                    return reject(err);
                });
        });
    }
    /**
     * 1、集群休眠后，将无法在此集群上创建和管理工作负载等资源。  2、按需付费集群休眠后，将暂停收取控制节点资源费用，集群所属的节点、绑定的弹性IP、带宽等资源按各自的计费方式（“包年/包月”或“按需付费”）进行收费。
     * @summary 集群休眠
     * @param {string} clusterId 集群 ID，获取方式请参见[如何获取接口URI中参数](https://support.huaweicloud.com/api-cce/cce_02_0271.html)
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public hibernateCluster(hibernateClusterRequest?: HibernateClusterRequest): Promise<void> {
        // @ts-ignore
        return new Promise((resolve: (arg0: any) => any, reject: (arg0: any) => any) => {
            const options = ParamCreater().hibernateCluster(hibernateClusterRequest);
            options['responseHeaders'] = [''];

            return this.hcClient.sendRequest(options).then(
                (res: any) => {
                    return resolve(res);
                },
                (err: any) => {
                    return reject(err);
                });
        });
    }
    /**
     * 获取集群所有已安装插件实例 >插件管理的URL格式为：https://{clusterid}.Endpoint/uri。其中{clusterid}为集群ID，uri为资源路径，也即API访问的路径。 
     * @summary 获取AddonInstance列表
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} clusterId 集群 ID，获取方式请参见[如何获取接口URI中参数](https://support.huaweicloud.com/api-cce/cce_02_0271.html)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAddonInstances(listAddonInstancesRequest?: ListAddonInstancesRequest): Promise<ListAddonInstancesResponse> {
        // @ts-ignore
        return new Promise((resolve: (arg0: any) => any, reject: (arg0: any) => any) => {
            const options = ParamCreater().listAddonInstances(listAddonInstancesRequest);
            options['responseHeaders'] = [''];

            return this.hcClient.sendRequest(options).then(
                (res: any) => {
                    return resolve(res);
                },
                (err: any) => {
                    return reject(err);
                });
        });
    }
    /**
     * 插件模板查询接口，查询插件信息。 >插件管理的URL格式为：https://{clusterid}.Endpoint/uri。其中{clusterid}为集群ID，uri为资源路径，也即API访问的路径。 
     * @summary 查询AddonTemplates列表
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} [addonTemplateName] 指定的模板名称，不填写则查询列表。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAddonTemplates(listAddonTemplatesRequest?: ListAddonTemplatesRequest): Promise<ListAddonTemplatesResponse> {
        // @ts-ignore
        return new Promise((resolve: (arg0: any) => any, reject: (arg0: any) => any) => {
            const options = ParamCreater().listAddonTemplates(listAddonTemplatesRequest);
            options['responseHeaders'] = [''];

            return this.hcClient.sendRequest(options).then(
                (res: any) => {
                    return resolve(res);
                },
                (err: any) => {
                    return reject(err);
                });
        });
    }
    /**
     * 该API用于获取指定项目下所有集群的详细信息。
     * @summary 获取指定项目下的集群
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} [errorStatus] 集群状态兼容Error参数，用于API平滑切换。 兼容场景下，errorStatus为空则屏蔽Error状态为Deleting状态。
     * @param {string} [detail] 查询集群详细信息。若设置为true，获取集群下节点总数(totalNodesNumber)、正常节点数(activeNodesNumber)、CPU总量(totalNodesCPU)、内存总量(totalNodesMemory)和已安装插件名称(installedAddonInstances)，放入到annotation中。
     * @param {'Available' | 'Unavailable' | 'ScalingUp' | 'ScalingDown' | 'Creating' | 'Deleting' | 'Upgrading' | 'Resizing' | 'Empty'} [status] 集群状态，取值如下 - Available：可用，表示集群处于正常状态。 - Unavailable：不可用，表示集群异常，需手动删除或联系管理员删除。 - ScalingUp：扩容中，表示集群正处于扩容过程中。 - ScalingDown：缩容中，表示集群正处于缩容过程中。 - Creating：创建中，表示集群正处于创建过程中。 - Deleting：删除中，表示集群正处于删除过程中。 - Upgrading：升级中，表示集群正处于升级过程中。 - Resizing：规格变更中，表示集群正处于变更规格中。 - Empty：集群无任何资源
     * @param {'VirtualMachine' | 'BareMetal' | 'ARM64'} [type] 集群类型： - VirtualMachine：混合集群 - BareMetal：裸金属集群 - ARM64：鲲鹏集群
     * @param {string} [version] 集群版本过滤
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClusters(listClustersRequest?: ListClustersRequest): Promise<ListClustersResponse> {
        // @ts-ignore
        return new Promise((resolve: (arg0: any) => any, reject: (arg0: any) => any) => {
            const options = ParamCreater().listClusters(listClustersRequest);
            options['responseHeaders'] = [''];

            return this.hcClient.sendRequest(options).then(
                (res: any) => {
                    return resolve(res);
                },
                (err: any) => {
                    return reject(err);
                });
        });
    }
    /**
     * 该API用于获取集群下所有节点池。 > - 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径 > - nodepool是集群中具有相同配置的节点实例的子集。 
     * @summary 获取集群下所有节点池
     * @param {string} clusterId 集群 ID，获取方式请参见[如何获取接口URI中参数](https://support.huaweicloud.com/api-cce/cce_02_0271.html)
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} [errorStatus] 集群状态兼容Error参数，用于API平滑切换。 兼容场景下，errorStatus为空则屏蔽Error状态为Deleting状态。
     * @param {string} [showDefaultNodePool] 是否展示默认节点池。默认不展示，指定为“true”时展示默认节点池。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNodePools(listNodePoolsRequest?: ListNodePoolsRequest): Promise<ListNodePoolsResponse> {
        // @ts-ignore
        return new Promise((resolve: (arg0: any) => any, reject: (arg0: any) => any) => {
            const options = ParamCreater().listNodePools(listNodePoolsRequest);
            options['responseHeaders'] = [''];

            return this.hcClient.sendRequest(options).then(
                (res: any) => {
                    return resolve(res);
                },
                (err: any) => {
                    return reject(err);
                });
        });
    }
    /**
     * 该API用于通过集群ID获取指定集群下所有节点的详细信息。 > 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     * @summary 获取集群下所有节点
     * @param {string} clusterId 集群 ID，获取方式请参见[如何获取接口URI中参数](https://support.huaweicloud.com/api-cce/cce_02_0271.html)
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} [errorStatus] 集群状态兼容Error参数，用于API平滑切换。 兼容场景下，errorStatus为空则屏蔽Error状态为Deleting状态。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNodes(listNodesRequest?: ListNodesRequest): Promise<ListNodesResponse> {
        // @ts-ignore
        return new Promise((resolve: (arg0: any) => any, reject: (arg0: any) => any) => {
            const options = ParamCreater().listNodes(listNodesRequest);
            options['responseHeaders'] = [''];

            return this.hcClient.sendRequest(options).then(
                (res: any) => {
                    return resolve(res);
                },
                (err: any) => {
                    return reject(err);
                });
        });
    }
    /**
     * 获取插件实例详情。 >插件管理的URL格式为：https://{clusterid}.Endpoint/uri。其中{clusterid}为集群ID，uri为资源路径，也即API访问的路径。 
     * @summary 获取AddonInstance详情
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} id 插件实例id
     * @param {string} clusterId 集群 ID，获取方式请参见[如何获取接口URI中参数](https://support.huaweicloud.com/api-cce/cce_02_0271.html)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAddonInstance(showAddonInstanceRequest?: ShowAddonInstanceRequest): Promise<ShowAddonInstanceResponse> {
        // @ts-ignore
        return new Promise((resolve: (arg0: any) => any, reject: (arg0: any) => any) => {
            const options = ParamCreater().showAddonInstance(showAddonInstanceRequest);
            options['responseHeaders'] = [''];

            return this.hcClient.sendRequest(options).then(
                (res: any) => {
                    return resolve(res);
                },
                (err: any) => {
                    return reject(err);
                });
        });
    }
    /**
     * 该API用于获取指定集群的详细信息。 > 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     * @summary 获取指定的集群
     * @param {string} clusterId 集群 ID，获取方式请参见[如何获取接口URI中参数](https://support.huaweicloud.com/api-cce/cce_02_0271.html)
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} [errorStatus] 集群状态兼容Error参数，用于API平滑切换。 兼容场景下，errorStatus为空则屏蔽Error状态为Deleting状态。
     * @param {string} [detail] 查询集群详细信息。若设置为true，获取集群下节点总数(totalNodesNumber)、正常节点数(activeNodesNumber)、CPU总量(totalNodesCPU)、内存总量(totalNodesMemory)和已安装插件名称(installedAddonInstances)，放入到annotation中。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCluster(showClusterRequest?: ShowClusterRequest): Promise<ShowClusterResponse> {
        // @ts-ignore
        return new Promise((resolve: (arg0: any) => any, reject: (arg0: any) => any) => {
            const options = ParamCreater().showCluster(showClusterRequest);
            options['responseHeaders'] = [''];

            return this.hcClient.sendRequest(options).then(
                (res: any) => {
                    return resolve(res);
                },
                (err: any) => {
                    return reject(err);
                });
        });
    }
    /**
     * 该API用于获取任务信息。通过某一任务请求下发后返回的jobID来查询指定任务的进度。 > - 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径 > - 该接口通常使用场景为： >   - 创建、删除集群时，查询相应任务的进度。 >   - 创建、删除节点时，查询相应任务的进度。 
     * @summary 获取任务信息
     * @param {string} jobId 作业ID，获取方式请参见[如何获取接口URI中参数](https://support.huaweicloud.com/api-cce/cce_02_0271.html)
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJob(showJobRequest?: ShowJobRequest): Promise<ShowJobResponse> {
        // @ts-ignore
        return new Promise((resolve: (arg0: any) => any, reject: (arg0: any) => any) => {
            const options = ParamCreater().showJob(showJobRequest);
            options['responseHeaders'] = [''];

            return this.hcClient.sendRequest(options).then(
                (res: any) => {
                    return resolve(res);
                },
                (err: any) => {
                    return reject(err);
                });
        });
    }
    /**
     * 该API用于通过节点ID获取指定节点的详细信息。 > 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     * @summary 获取指定的节点
     * @param {string} clusterId 集群 ID，获取方式请参见[如何获取接口URI中参数](https://support.huaweicloud.com/api-cce/cce_02_0271.html)
     * @param {string} nodeId 节点ID，获取方式请参见[如何获取接口URI中参数](https://support.huaweicloud.com/api-cce/cce_02_0271.html)
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} [errorStatus] 集群状态兼容Error参数，用于API平滑切换。 兼容场景下，errorStatus为空则屏蔽Error状态为Deleting状态。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showNode(showNodeRequest?: ShowNodeRequest): Promise<ShowNodeResponse> {
        // @ts-ignore
        return new Promise((resolve: (arg0: any) => any, reject: (arg0: any) => any) => {
            const options = ParamCreater().showNode(showNodeRequest);
            options['responseHeaders'] = [''];

            return this.hcClient.sendRequest(options).then(
                (res: any) => {
                    return resolve(res);
                },
                (err: any) => {
                    return reject(err);
                });
        });
    }
    /**
     * 该API用于获取指定节点池的详细信息。 > 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径 
     * @summary 获取指定的节点池
     * @param {string} clusterId 集群 ID，获取方式请参见[如何获取接口URI中参数](https://support.huaweicloud.com/api-cce/cce_02_0271.html)
     * @param {string} nodepoolId 节点池ID
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} [errorStatus] 集群状态兼容Error参数，用于API平滑切换。 兼容场景下，errorStatus为空则屏蔽Error状态为Deleting状态。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showNodePool(showNodePoolRequest?: ShowNodePoolRequest): Promise<ShowNodePoolResponse> {
        // @ts-ignore
        return new Promise((resolve: (arg0: any) => any, reject: (arg0: any) => any) => {
            const options = ParamCreater().showNodePool(showNodePoolRequest);
            options['responseHeaders'] = [''];

            return this.hcClient.sendRequest(options).then(
                (res: any) => {
                    return resolve(res);
                },
                (err: any) => {
                    return reject(err);
                });
        });
    }
    /**
     * 更新插件实例的功能。 >插件管理的URL格式为：https://{clusterid}.Endpoint/uri。其中{clusterid}为集群ID，uri为资源路径，也即API访问的路径。 
     * @summary 更新AddonInstance
     * @param {string} id 插件实例id
     * @param {string} contentType 消息体的类型（格式）
     * @param {InstanceRequest} updateAddonInstanceRequestBody 请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAddonInstance(updateAddonInstanceRequest?: UpdateAddonInstanceRequest): Promise<UpdateAddonInstanceResponse> {
        // @ts-ignore
        return new Promise((resolve: (arg0: any) => any, reject: (arg0: any) => any) => {
            const options = ParamCreater().updateAddonInstance(updateAddonInstanceRequest);
            options['responseHeaders'] = [''];

            return this.hcClient.sendRequest(options).then(
                (res: any) => {
                    return resolve(res);
                },
                (err: any) => {
                    return reject(err);
                });
        });
    }
    /**
     * 该API用于更新指定的集群。 > 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     * @summary 更新指定的集群
     * @param {string} clusterId 集群 ID，获取方式请参见[如何获取接口URI中参数](https://support.huaweicloud.com/api-cce/cce_02_0271.html)
     * @param {string} contentType 消息体的类型（格式）
     * @param {ClusterInformation} updateClusterRequestBody spec是集合类的元素类型，用户对需要管理的集群对象进行详细描述的主体部分都在spec中给出。系统通过spec的描述来创建或更新对象。
     * @param {string} [errorStatus] 集群状态兼容Error参数，用于API平滑切换。 兼容场景下，errorStatus为空则屏蔽Error状态为Deleting状态。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateCluster(updateClusterRequest?: UpdateClusterRequest): Promise<UpdateClusterResponse> {
        // @ts-ignore
        return new Promise((resolve: (arg0: any) => any, reject: (arg0: any) => any) => {
            const options = ParamCreater().updateCluster(updateClusterRequest);
            options['responseHeaders'] = [''];

            return this.hcClient.sendRequest(options).then(
                (res: any) => {
                    return resolve(res);
                },
                (err: any) => {
                    return reject(err);
                });
        });
    }
    /**
     * 该API用于更新指定的节点。 > - 当前仅支持更新metadata下的name字段，即节点的名字。 > - 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。 
     * @summary 更新指定的节点
     * @param {string} clusterId 集群 ID，获取方式请参见[如何获取接口URI中参数](https://support.huaweicloud.com/api-cce/cce_02_0271.html)
     * @param {string} nodeId 节点ID，获取方式请参见[如何获取接口URI中参数](https://support.huaweicloud.com/api-cce/cce_02_0271.html)
     * @param {string} contentType 消息体的类型（格式）
     * @param {CCEClusterNodeInformation} updateNodeRequestBody metadata是节点对象的元数据定义，是集合类的元素类型，包含一组由不同名称定义的属性。
     * @param {string} [errorStatus] 集群状态兼容Error参数，用于API平滑切换。 兼容场景下，errorStatus为空则屏蔽Error状态为Deleting状态。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateNode(updateNodeRequest?: UpdateNodeRequest): Promise<UpdateNodeResponse> {
        // @ts-ignore
        return new Promise((resolve: (arg0: any) => any, reject: (arg0: any) => any) => {
            const options = ParamCreater().updateNode(updateNodeRequest);
            options['responseHeaders'] = [''];

            return this.hcClient.sendRequest(options).then(
                (res: any) => {
                    return resolve(res);
                },
                (err: any) => {
                    return reject(err);
                });
        });
    }
    /**
     * 该API用于更新指定的节点池。仅支持集群在处于可用、扩容、缩容状态时调用。 > - 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径 > - 当前仅支持更新节点池名称，spec下的initialNodeCount，k8sTags， taints，login，userTags与节点池的扩缩容配置相关字段。
     * @summary 更新指定节点池
     * @param {string} clusterId 集群 ID，获取方式请参见[如何获取接口URI中参数](https://support.huaweicloud.com/api-cce/cce_02_0271.html)
     * @param {string} nodepoolId 节点池ID
     * @param {string} contentType 消息体的类型（格式）
     * @param {NodePool} updateNodePoolRequestBody 更新节点池的请求体
     * @param {string} [errorStatus] 集群状态兼容Error参数，用于API平滑切换。 兼容场景下，errorStatus为空则屏蔽Error状态为Deleting状态。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateNodePool(updateNodePoolRequest?: UpdateNodePoolRequest): Promise<UpdateNodePoolResponse> {
        // @ts-ignore
        return new Promise((resolve: (arg0: any) => any, reject: (arg0: any) => any) => {
            const options = ParamCreater().updateNodePool(updateNodePoolRequest);
            options['responseHeaders'] = [''];

            return this.hcClient.sendRequest(options).then(
                (res: any) => {
                    return resolve(res);
                },
                (err: any) => {
                    return reject(err);
                });
        });
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 集群唤醒用于唤醒已休眠的集群，唤醒后，将继续收取控制节点资源费用。
         */
        awakeCluster(awakeClusterRequest?: AwakeClusterRequest) {
            const options = {
                method: "POST",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/operation/awake",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let clusterId;
            let contentType;

            if (awakeClusterRequest !== null && awakeClusterRequest !== undefined) {
                if (awakeClusterRequest instanceof AwakeClusterRequest) {
                    clusterId = awakeClusterRequest.clusterId;
                    contentType = awakeClusterRequest.contentType;
                } else {
                    clusterId = awakeClusterRequest['cluster_id'];
                    contentType = awakeClusterRequest['Content-Type'];
                }
            }
        
            if (clusterId === null || clusterId === undefined) {
                throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling awakeCluster.');
            }
            if (contentType === null || contentType === undefined) {
                throw new RequiredError('contentType','Required parameter contentType was null or undefined when calling awakeCluster.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据提供的插件模板，安装插件实例。 &gt;插件管理的URL格式为：https://{clusterid}.Endpoint/uri。其中{clusterid}为集群ID，uri为资源路径，也即API访问的路径。 
         */
        createAddonInstance(createAddonInstanceRequest?: CreateAddonInstanceRequest) {
            const options = {
                method: "POST",
                url: "/api/v3/addons",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let contentType;

            if (createAddonInstanceRequest !== null && createAddonInstanceRequest !== undefined) {
                if (createAddonInstanceRequest instanceof CreateAddonInstanceRequest) {
                    contentType = createAddonInstanceRequest.contentType;
                    body = createAddonInstanceRequest.body
                } else {
                    contentType = createAddonInstanceRequest['Content-Type'];
                    body = createAddonInstanceRequest['body'];
                }
            }
        
            if (contentType === null || contentType === undefined) {
                throw new RequiredError('contentType','Required parameter contentType was null or undefined when calling createAddonInstance.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于在指定的Namespace下通过云存储服务中的云存储（EVS、SFS、OBS）去创建PVC（PersistentVolumeClaim）。  &gt;存储管理的URL格式为：https://{clusterid}.Endpoint/uri。其中{clusterid}为集群ID，uri为资源路径，也即API访问的路径。如果使用https://Endpoint/uri，则必须指定请求header中的X-Cluster-ID参数。 
         */
        createCloudPersistentVolumeClaims(createCloudPersistentVolumeClaimsRequest?: CreateCloudPersistentVolumeClaimsRequest) {
            const options = {
                method: "POST",
                url: "/api/v1/namespaces/{namespace}/cloudpersistentvolumeclaims",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let namespace;
            let contentType;
            let xClusterID;

            if (createCloudPersistentVolumeClaimsRequest !== null && createCloudPersistentVolumeClaimsRequest !== undefined) {
                if (createCloudPersistentVolumeClaimsRequest instanceof CreateCloudPersistentVolumeClaimsRequest) {
                    namespace = createCloudPersistentVolumeClaimsRequest.namespace;
                    contentType = createCloudPersistentVolumeClaimsRequest.contentType;
                    body = createCloudPersistentVolumeClaimsRequest.body
                    xClusterID = createCloudPersistentVolumeClaimsRequest.xClusterID;
                } else {
                    namespace = createCloudPersistentVolumeClaimsRequest['namespace'];
                    contentType = createCloudPersistentVolumeClaimsRequest['Content-Type'];
                    body = createCloudPersistentVolumeClaimsRequest['body'];
                    xClusterID = createCloudPersistentVolumeClaimsRequest['X-Cluster-ID'];
                }
            }
        
            if (namespace === null || namespace === undefined) {
                throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling createCloudPersistentVolumeClaims.');
            }
            if (contentType === null || contentType === undefined) {
                throw new RequiredError('contentType','Required parameter contentType was null or undefined when calling createCloudPersistentVolumeClaims.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            if (xClusterID !== undefined && xClusterID !== null) {
                localVarHeaderParameter['X-Cluster-ID'] = String(xClusterID);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'namespace': namespace, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于创建一个空集群（即只有控制节点Master，没有工作节点Node）。请在调用本接口完成集群创建之后，通过[创建节点](https://support.huaweicloud.com/api-cce/cce_02_0242.html)添加节点。   &gt;   - 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。 &gt;   - 调用该接口创建集群时，默认不安装ICAgent。ICAgent是应用性能管理APM的采集代理，运行在应用所在的服务器上，用于实时采集探针所获取的数据，安装ICAgent是使用应用性能管理APM的前提。若需安装ICAgent，请参照[安装ICAgent](https://support.huaweicloud.com/usermanual-apm/apm_02_0013.html)。 &gt;   - 默认情况下，一个账户只能创建 5 个集群（每个Region下），如果您需要创建更多的集群，请[提交工单](https://console.huaweicloud.com/console/#/quota)申请增加配额。
         */
        createCluster(createClusterRequest?: CreateClusterRequest) {
            const options = {
                method: "POST",
                url: "/api/v3/projects/{project_id}/clusters",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let contentType;

            if (createClusterRequest !== null && createClusterRequest !== undefined) {
                if (createClusterRequest instanceof CreateClusterRequest) {
                    contentType = createClusterRequest.contentType;
                    body = createClusterRequest.body
                } else {
                    contentType = createClusterRequest['Content-Type'];
                    body = createClusterRequest['body'];
                }
            }
        
            if (contentType === null || contentType === undefined) {
                throw new RequiredError('contentType','Required parameter contentType was null or undefined when calling createCluster.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于获取指定集群的证书信息。
         */
        createKubernetesClusterCert(createKubernetesClusterCertRequest?: CreateKubernetesClusterCertRequest) {
            const options = {
                method: "POST",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/clustercert",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let clusterId;
            let contentType;

            if (createKubernetesClusterCertRequest !== null && createKubernetesClusterCertRequest !== undefined) {
                if (createKubernetesClusterCertRequest instanceof CreateKubernetesClusterCertRequest) {
                    clusterId = createKubernetesClusterCertRequest.clusterId;
                    contentType = createKubernetesClusterCertRequest.contentType;
                    body = createKubernetesClusterCertRequest.body
                } else {
                    clusterId = createKubernetesClusterCertRequest['cluster_id'];
                    contentType = createKubernetesClusterCertRequest['Content-Type'];
                    body = createKubernetesClusterCertRequest['body'];
                }
            }
        
            if (clusterId === null || clusterId === undefined) {
                throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createKubernetesClusterCert.');
            }
            if (contentType === null || contentType === undefined) {
                throw new RequiredError('contentType','Required parameter contentType was null or undefined when calling createKubernetesClusterCert.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于在指定集群下创建节点。 &gt; 若无集群，请先[创建集群](https://support.huaweicloud.com/api-cce/cce_02_0236.html)。 &gt; 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
         */
        createNode(createNodeRequest?: CreateNodeRequest) {
            const options = {
                method: "POST",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/nodes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            let clusterId;
            let contentType;
            let nodepoolScaleUp;

            if (createNodeRequest !== null && createNodeRequest !== undefined) {
                if (createNodeRequest instanceof CreateNodeRequest) {
                    clusterId = createNodeRequest.clusterId;
                    contentType = createNodeRequest.contentType;
                    body = createNodeRequest.body
                    nodepoolScaleUp = createNodeRequest.nodepoolScaleUp;
                } else {
                    clusterId = createNodeRequest['cluster_id'];
                    contentType = createNodeRequest['Content-Type'];
                    body = createNodeRequest['body'];
                    nodepoolScaleUp = createNodeRequest['nodepoolScaleUp'];
                }
            }
        
            if (clusterId === null || clusterId === undefined) {
                throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createNode.');
            }
            if (contentType === null || contentType === undefined) {
                throw new RequiredError('contentType','Required parameter contentType was null or undefined when calling createNode.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (nodepoolScaleUp !== null && nodepoolScaleUp !== undefined) {
                localVarQueryParameter['nodepoolScaleUp'] = nodepoolScaleUp;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于在指定集群下创建节点池。仅支持集群在处于可用、扩容、缩容状态时调用。 &gt; 若无集群，请先[创建集群](https://support.huaweicloud.com/api-cce/cce_02_0236.html)。 &gt; 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径 
         */
        createNodePool(createNodePoolRequest?: CreateNodePoolRequest) {
            const options = {
                method: "POST",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/nodepools",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let contentType;
            let clusterId;

            if (createNodePoolRequest !== null && createNodePoolRequest !== undefined) {
                if (createNodePoolRequest instanceof CreateNodePoolRequest) {
                    contentType = createNodePoolRequest.contentType;
                    clusterId = createNodePoolRequest.clusterId;
                    body = createNodePoolRequest.body
                } else {
                    contentType = createNodePoolRequest['Content-Type'];
                    clusterId = createNodePoolRequest['cluster_id'];
                    body = createNodePoolRequest['body'];
                }
            }
        
            if (contentType === null || contentType === undefined) {
                throw new RequiredError('contentType','Required parameter contentType was null or undefined when calling createNodePool.');
            }
            if (clusterId === null || clusterId === undefined) {
                throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createNodePool.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除插件实例的功能。 &gt;插件管理的URL格式为：https://{clusterid}.Endpoint/uri。其中{clusterid}为集群ID，uri为资源路径，也即API访问的路径。 
         */
        deleteAddonInstance(deleteAddonInstanceRequest?: DeleteAddonInstanceRequest) {
            const options = {
                method: "DELETE",
                url: "/api/v3/addons/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let contentType;
            let id;
            let clusterId;

            if (deleteAddonInstanceRequest !== null && deleteAddonInstanceRequest !== undefined) {
                if (deleteAddonInstanceRequest instanceof DeleteAddonInstanceRequest) {
                    contentType = deleteAddonInstanceRequest.contentType;
                    id = deleteAddonInstanceRequest.id;
                    clusterId = deleteAddonInstanceRequest.clusterId;
                } else {
                    contentType = deleteAddonInstanceRequest['Content-Type'];
                    id = deleteAddonInstanceRequest['id'];
                    clusterId = deleteAddonInstanceRequest['cluster_id'];
                }
            }
        
            if (contentType === null || contentType === undefined) {
                throw new RequiredError('contentType','Required parameter contentType was null or undefined when calling deleteAddonInstance.');
            }
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteAddonInstance.');
            }
            if (clusterId === null || clusterId === undefined) {
                throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteAddonInstance.');
            }
            if (clusterId !== null && clusterId !== undefined) {
                localVarQueryParameter['cluster_id'] = clusterId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于删除指定Namespace下的PVC（PersistentVolumeClaim）对象，并可以选择保留后端的云存储。 &gt;存储管理的URL格式为：https://{clusterid}.Endpoint/uri。其中{clusterid}为集群ID，uri为资源路径，也即API访问的路径。如果使用https://Endpoint/uri，则必须指定请求header中的X-Cluster-ID参数。 
         */
        deleteCloudPersistentVolumeClaims(deleteCloudPersistentVolumeClaimsRequest?: DeleteCloudPersistentVolumeClaimsRequest) {
            const options = {
                method: "DELETE",
                url: "/api/v1/namespaces/{namespace}/cloudpersistentvolumeclaims/{name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let name;
            let namespace;
            let contentType;
            let xClusterID;

            if (deleteCloudPersistentVolumeClaimsRequest !== null && deleteCloudPersistentVolumeClaimsRequest !== undefined) {
                if (deleteCloudPersistentVolumeClaimsRequest instanceof DeleteCloudPersistentVolumeClaimsRequest) {
                    name = deleteCloudPersistentVolumeClaimsRequest.name;
                    namespace = deleteCloudPersistentVolumeClaimsRequest.namespace;
                    contentType = deleteCloudPersistentVolumeClaimsRequest.contentType;
                    xClusterID = deleteCloudPersistentVolumeClaimsRequest.xClusterID;
                } else {
                    name = deleteCloudPersistentVolumeClaimsRequest['name'];
                    namespace = deleteCloudPersistentVolumeClaimsRequest['namespace'];
                    contentType = deleteCloudPersistentVolumeClaimsRequest['Content-Type'];
                    xClusterID = deleteCloudPersistentVolumeClaimsRequest['X-Cluster-ID'];
                }
            }
        
            if (name === null || name === undefined) {
                throw new RequiredError('name','Required parameter name was null or undefined when calling deleteCloudPersistentVolumeClaims.');
            }
            if (namespace === null || namespace === undefined) {
                throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling deleteCloudPersistentVolumeClaims.');
            }
            if (contentType === null || contentType === undefined) {
                throw new RequiredError('contentType','Required parameter contentType was null or undefined when calling deleteCloudPersistentVolumeClaims.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            if (xClusterID !== undefined && xClusterID !== null) {
                localVarHeaderParameter['X-Cluster-ID'] = String(xClusterID);
            }

            options.pathParams = { 'name': name,'namespace': namespace, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于删除一个指定的集群。 &gt; 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
         */
        deleteCluster(deleteClusterRequest?: DeleteClusterRequest) {
            const options = {
                method: "DELETE",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let clusterId;
            let contentType;
            let errorStatus;
            let deleteEfs;
            let deleteEni;
            let deleteEvs;
            let deleteNet;
            let deleteObs;
            let deleteSfs;

            if (deleteClusterRequest !== null && deleteClusterRequest !== undefined) {
                if (deleteClusterRequest instanceof DeleteClusterRequest) {
                    clusterId = deleteClusterRequest.clusterId;
                    contentType = deleteClusterRequest.contentType;
                    errorStatus = deleteClusterRequest.errorStatus;
                    deleteEfs = deleteClusterRequest.deleteEfs;
                    deleteEni = deleteClusterRequest.deleteEni;
                    deleteEvs = deleteClusterRequest.deleteEvs;
                    deleteNet = deleteClusterRequest.deleteNet;
                    deleteObs = deleteClusterRequest.deleteObs;
                    deleteSfs = deleteClusterRequest.deleteSfs;
                } else {
                    clusterId = deleteClusterRequest['cluster_id'];
                    contentType = deleteClusterRequest['Content-Type'];
                    errorStatus = deleteClusterRequest['errorStatus'];
                    deleteEfs = deleteClusterRequest['delete_efs'];
                    deleteEni = deleteClusterRequest['delete_eni'];
                    deleteEvs = deleteClusterRequest['delete_evs'];
                    deleteNet = deleteClusterRequest['delete_net'];
                    deleteObs = deleteClusterRequest['delete_obs'];
                    deleteSfs = deleteClusterRequest['delete_sfs'];
                }
            }
        
            if (clusterId === null || clusterId === undefined) {
                throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteCluster.');
            }
            if (contentType === null || contentType === undefined) {
                throw new RequiredError('contentType','Required parameter contentType was null or undefined when calling deleteCluster.');
            }
            if (errorStatus !== null && errorStatus !== undefined) {
                localVarQueryParameter['errorStatus'] = errorStatus;
            }
            if (deleteEfs !== null && deleteEfs !== undefined) {
                localVarQueryParameter['delete_efs'] = deleteEfs;
            }
            if (deleteEni !== null && deleteEni !== undefined) {
                localVarQueryParameter['delete_eni'] = deleteEni;
            }
            if (deleteEvs !== null && deleteEvs !== undefined) {
                localVarQueryParameter['delete_evs'] = deleteEvs;
            }
            if (deleteNet !== null && deleteNet !== undefined) {
                localVarQueryParameter['delete_net'] = deleteNet;
            }
            if (deleteObs !== null && deleteObs !== undefined) {
                localVarQueryParameter['delete_obs'] = deleteObs;
            }
            if (deleteSfs !== null && deleteSfs !== undefined) {
                localVarQueryParameter['delete_sfs'] = deleteSfs;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于删除指定的节点。 &gt; - 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径 
         */
        deleteNode(deleteNodeRequest?: DeleteNodeRequest) {
            const options = {
                method: "DELETE",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/nodes/{node_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let clusterId;
            let nodeId;
            let contentType;
            let errorStatus;
            let nodepoolScaleDown;

            if (deleteNodeRequest !== null && deleteNodeRequest !== undefined) {
                if (deleteNodeRequest instanceof DeleteNodeRequest) {
                    clusterId = deleteNodeRequest.clusterId;
                    nodeId = deleteNodeRequest.nodeId;
                    contentType = deleteNodeRequest.contentType;
                    errorStatus = deleteNodeRequest.errorStatus;
                    nodepoolScaleDown = deleteNodeRequest.nodepoolScaleDown;
                } else {
                    clusterId = deleteNodeRequest['cluster_id'];
                    nodeId = deleteNodeRequest['node_id'];
                    contentType = deleteNodeRequest['Content-Type'];
                    errorStatus = deleteNodeRequest['errorStatus'];
                    nodepoolScaleDown = deleteNodeRequest['nodepoolScaleDown'];
                }
            }
        
            if (clusterId === null || clusterId === undefined) {
                throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteNode.');
            }
            if (nodeId === null || nodeId === undefined) {
                throw new RequiredError('nodeId','Required parameter nodeId was null or undefined when calling deleteNode.');
            }
            if (contentType === null || contentType === undefined) {
                throw new RequiredError('contentType','Required parameter contentType was null or undefined when calling deleteNode.');
            }
            if (errorStatus !== null && errorStatus !== undefined) {
                localVarQueryParameter['errorStatus'] = errorStatus;
            }
            if (nodepoolScaleDown !== null && nodepoolScaleDown !== undefined) {
                localVarQueryParameter['nodepoolScaleDown'] = nodepoolScaleDown;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId,'node_id': nodeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于删除指定的节点池。 &gt; 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径 
         */
        deleteNodePool(deleteNodePoolRequest?: DeleteNodePoolRequest) {
            const options = {
                method: "DELETE",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/nodepools/{nodepool_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let clusterId;
            let nodepoolId;
            let contentType;
            let errorStatus;

            if (deleteNodePoolRequest !== null && deleteNodePoolRequest !== undefined) {
                if (deleteNodePoolRequest instanceof DeleteNodePoolRequest) {
                    clusterId = deleteNodePoolRequest.clusterId;
                    nodepoolId = deleteNodePoolRequest.nodepoolId;
                    contentType = deleteNodePoolRequest.contentType;
                    errorStatus = deleteNodePoolRequest.errorStatus;
                } else {
                    clusterId = deleteNodePoolRequest['cluster_id'];
                    nodepoolId = deleteNodePoolRequest['nodepool_id'];
                    contentType = deleteNodePoolRequest['Content-Type'];
                    errorStatus = deleteNodePoolRequest['errorStatus'];
                }
            }
        
            if (clusterId === null || clusterId === undefined) {
                throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteNodePool.');
            }
            if (nodepoolId === null || nodepoolId === undefined) {
                throw new RequiredError('nodepoolId','Required parameter nodepoolId was null or undefined when calling deleteNodePool.');
            }
            if (contentType === null || contentType === undefined) {
                throw new RequiredError('contentType','Required parameter contentType was null or undefined when calling deleteNodePool.');
            }
            if (errorStatus !== null && errorStatus !== undefined) {
                localVarQueryParameter['errorStatus'] = errorStatus;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId,'nodepool_id': nodepoolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 1、集群休眠后，将无法在此集群上创建和管理工作负载等资源。  2、按需付费集群休眠后，将暂停收取控制节点资源费用，集群所属的节点、绑定的弹性IP、带宽等资源按各自的计费方式（“包年/包月”或“按需付费”）进行收费。
         */
        hibernateCluster(hibernateClusterRequest?: HibernateClusterRequest) {
            const options = {
                method: "POST",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/operation/hibernate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let clusterId;
            let contentType;

            if (hibernateClusterRequest !== null && hibernateClusterRequest !== undefined) {
                if (hibernateClusterRequest instanceof HibernateClusterRequest) {
                    clusterId = hibernateClusterRequest.clusterId;
                    contentType = hibernateClusterRequest.contentType;
                } else {
                    clusterId = hibernateClusterRequest['cluster_id'];
                    contentType = hibernateClusterRequest['Content-Type'];
                }
            }
        
            if (clusterId === null || clusterId === undefined) {
                throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling hibernateCluster.');
            }
            if (contentType === null || contentType === undefined) {
                throw new RequiredError('contentType','Required parameter contentType was null or undefined when calling hibernateCluster.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取集群所有已安装插件实例 &gt;插件管理的URL格式为：https://{clusterid}.Endpoint/uri。其中{clusterid}为集群ID，uri为资源路径，也即API访问的路径。 
         */
        listAddonInstances(listAddonInstancesRequest?: ListAddonInstancesRequest) {
            const options = {
                method: "GET",
                url: "/api/v3/addons",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let contentType;
            let clusterId;

            if (listAddonInstancesRequest !== null && listAddonInstancesRequest !== undefined) {
                if (listAddonInstancesRequest instanceof ListAddonInstancesRequest) {
                    contentType = listAddonInstancesRequest.contentType;
                    clusterId = listAddonInstancesRequest.clusterId;
                } else {
                    contentType = listAddonInstancesRequest['Content-Type'];
                    clusterId = listAddonInstancesRequest['cluster_id'];
                }
            }
        
            if (contentType === null || contentType === undefined) {
                throw new RequiredError('contentType','Required parameter contentType was null or undefined when calling listAddonInstances.');
            }
            if (clusterId === null || clusterId === undefined) {
                throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listAddonInstances.');
            }
            if (clusterId !== null && clusterId !== undefined) {
                localVarQueryParameter['cluster_id'] = clusterId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 插件模板查询接口，查询插件信息。 &gt;插件管理的URL格式为：https://{clusterid}.Endpoint/uri。其中{clusterid}为集群ID，uri为资源路径，也即API访问的路径。 
         */
        listAddonTemplates(listAddonTemplatesRequest?: ListAddonTemplatesRequest) {
            const options = {
                method: "GET",
                url: "/api/v3/addontemplates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let contentType;
            let addonTemplateName;

            if (listAddonTemplatesRequest !== null && listAddonTemplatesRequest !== undefined) {
                if (listAddonTemplatesRequest instanceof ListAddonTemplatesRequest) {
                    contentType = listAddonTemplatesRequest.contentType;
                    addonTemplateName = listAddonTemplatesRequest.addonTemplateName;
                } else {
                    contentType = listAddonTemplatesRequest['Content-Type'];
                    addonTemplateName = listAddonTemplatesRequest['addon_template_name'];
                }
            }
        
            if (contentType === null || contentType === undefined) {
                throw new RequiredError('contentType','Required parameter contentType was null or undefined when calling listAddonTemplates.');
            }
            if (addonTemplateName !== null && addonTemplateName !== undefined) {
                localVarQueryParameter['addon_template_name'] = addonTemplateName;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于获取指定项目下所有集群的详细信息。
         */
        listClusters(listClustersRequest?: ListClustersRequest) {
            const options = {
                method: "GET",
                url: "/api/v3/projects/{project_id}/clusters",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let contentType;
            let errorStatus;
            let detail;
            let status;
            let type;
            let version;

            if (listClustersRequest !== null && listClustersRequest !== undefined) {
                if (listClustersRequest instanceof ListClustersRequest) {
                    contentType = listClustersRequest.contentType;
                    errorStatus = listClustersRequest.errorStatus;
                    detail = listClustersRequest.detail;
                    status = listClustersRequest.status;
                    type = listClustersRequest.type;
                    version = listClustersRequest.version;
                } else {
                    contentType = listClustersRequest['Content-Type'];
                    errorStatus = listClustersRequest['errorStatus'];
                    detail = listClustersRequest['detail'];
                    status = listClustersRequest['status'];
                    type = listClustersRequest['type'];
                    version = listClustersRequest['version'];
                }
            }
        
            if (contentType === null || contentType === undefined) {
                throw new RequiredError('contentType','Required parameter contentType was null or undefined when calling listClusters.');
            }
            if (errorStatus !== null && errorStatus !== undefined) {
                localVarQueryParameter['errorStatus'] = errorStatus;
            }
            if (detail !== null && detail !== undefined) {
                localVarQueryParameter['detail'] = detail;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (version !== null && version !== undefined) {
                localVarQueryParameter['version'] = version;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于获取集群下所有节点池。 &gt; - 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径 &gt; - nodepool是集群中具有相同配置的节点实例的子集。 
         */
        listNodePools(listNodePoolsRequest?: ListNodePoolsRequest) {
            const options = {
                method: "GET",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/nodepools",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let clusterId;
            let contentType;
            let errorStatus;
            let showDefaultNodePool;

            if (listNodePoolsRequest !== null && listNodePoolsRequest !== undefined) {
                if (listNodePoolsRequest instanceof ListNodePoolsRequest) {
                    clusterId = listNodePoolsRequest.clusterId;
                    contentType = listNodePoolsRequest.contentType;
                    errorStatus = listNodePoolsRequest.errorStatus;
                    showDefaultNodePool = listNodePoolsRequest.showDefaultNodePool;
                } else {
                    clusterId = listNodePoolsRequest['cluster_id'];
                    contentType = listNodePoolsRequest['Content-Type'];
                    errorStatus = listNodePoolsRequest['errorStatus'];
                    showDefaultNodePool = listNodePoolsRequest['showDefaultNodePool'];
                }
            }
        
            if (clusterId === null || clusterId === undefined) {
                throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listNodePools.');
            }
            if (contentType === null || contentType === undefined) {
                throw new RequiredError('contentType','Required parameter contentType was null or undefined when calling listNodePools.');
            }
            if (errorStatus !== null && errorStatus !== undefined) {
                localVarQueryParameter['errorStatus'] = errorStatus;
            }
            if (showDefaultNodePool !== null && showDefaultNodePool !== undefined) {
                localVarQueryParameter['showDefaultNodePool'] = showDefaultNodePool;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于通过集群ID获取指定集群下所有节点的详细信息。 &gt; 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
         */
        listNodes(listNodesRequest?: ListNodesRequest) {
            const options = {
                method: "GET",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/nodes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let clusterId;
            let contentType;
            let errorStatus;

            if (listNodesRequest !== null && listNodesRequest !== undefined) {
                if (listNodesRequest instanceof ListNodesRequest) {
                    clusterId = listNodesRequest.clusterId;
                    contentType = listNodesRequest.contentType;
                    errorStatus = listNodesRequest.errorStatus;
                } else {
                    clusterId = listNodesRequest['cluster_id'];
                    contentType = listNodesRequest['Content-Type'];
                    errorStatus = listNodesRequest['errorStatus'];
                }
            }
        
            if (clusterId === null || clusterId === undefined) {
                throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listNodes.');
            }
            if (contentType === null || contentType === undefined) {
                throw new RequiredError('contentType','Required parameter contentType was null or undefined when calling listNodes.');
            }
            if (errorStatus !== null && errorStatus !== undefined) {
                localVarQueryParameter['errorStatus'] = errorStatus;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取插件实例详情。 &gt;插件管理的URL格式为：https://{clusterid}.Endpoint/uri。其中{clusterid}为集群ID，uri为资源路径，也即API访问的路径。 
         */
        showAddonInstance(showAddonInstanceRequest?: ShowAddonInstanceRequest) {
            const options = {
                method: "GET",
                url: "/api/v3/addons/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let contentType;
            let id;
            let clusterId;

            if (showAddonInstanceRequest !== null && showAddonInstanceRequest !== undefined) {
                if (showAddonInstanceRequest instanceof ShowAddonInstanceRequest) {
                    contentType = showAddonInstanceRequest.contentType;
                    id = showAddonInstanceRequest.id;
                    clusterId = showAddonInstanceRequest.clusterId;
                } else {
                    contentType = showAddonInstanceRequest['Content-Type'];
                    id = showAddonInstanceRequest['id'];
                    clusterId = showAddonInstanceRequest['cluster_id'];
                }
            }
        
            if (contentType === null || contentType === undefined) {
                throw new RequiredError('contentType','Required parameter contentType was null or undefined when calling showAddonInstance.');
            }
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling showAddonInstance.');
            }
            if (clusterId === null || clusterId === undefined) {
                throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showAddonInstance.');
            }
            if (clusterId !== null && clusterId !== undefined) {
                localVarQueryParameter['cluster_id'] = clusterId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于获取指定集群的详细信息。 &gt; 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
         */
        showCluster(showClusterRequest?: ShowClusterRequest) {
            const options = {
                method: "GET",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let clusterId;
            let contentType;
            let errorStatus;
            let detail;

            if (showClusterRequest !== null && showClusterRequest !== undefined) {
                if (showClusterRequest instanceof ShowClusterRequest) {
                    clusterId = showClusterRequest.clusterId;
                    contentType = showClusterRequest.contentType;
                    errorStatus = showClusterRequest.errorStatus;
                    detail = showClusterRequest.detail;
                } else {
                    clusterId = showClusterRequest['cluster_id'];
                    contentType = showClusterRequest['Content-Type'];
                    errorStatus = showClusterRequest['errorStatus'];
                    detail = showClusterRequest['detail'];
                }
            }
        
            if (clusterId === null || clusterId === undefined) {
                throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showCluster.');
            }
            if (contentType === null || contentType === undefined) {
                throw new RequiredError('contentType','Required parameter contentType was null or undefined when calling showCluster.');
            }
            if (errorStatus !== null && errorStatus !== undefined) {
                localVarQueryParameter['errorStatus'] = errorStatus;
            }
            if (detail !== null && detail !== undefined) {
                localVarQueryParameter['detail'] = detail;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于获取任务信息。通过某一任务请求下发后返回的jobID来查询指定任务的进度。 &gt; - 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径 &gt; - 该接口通常使用场景为： &gt;   - 创建、删除集群时，查询相应任务的进度。 &gt;   - 创建、删除节点时，查询相应任务的进度。 
         */
        showJob(showJobRequest?: ShowJobRequest) {
            const options = {
                method: "GET",
                url: "/api/v3/projects/{project_id}/jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let jobId;
            let contentType;

            if (showJobRequest !== null && showJobRequest !== undefined) {
                if (showJobRequest instanceof ShowJobRequest) {
                    jobId = showJobRequest.jobId;
                    contentType = showJobRequest.contentType;
                } else {
                    jobId = showJobRequest['job_id'];
                    contentType = showJobRequest['Content-Type'];
                }
            }
        
            if (jobId === null || jobId === undefined) {
                throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showJob.');
            }
            if (contentType === null || contentType === undefined) {
                throw new RequiredError('contentType','Required parameter contentType was null or undefined when calling showJob.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于通过节点ID获取指定节点的详细信息。 &gt; 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
         */
        showNode(showNodeRequest?: ShowNodeRequest) {
            const options = {
                method: "GET",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/nodes/{node_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let clusterId;
            let nodeId;
            let contentType;
            let errorStatus;

            if (showNodeRequest !== null && showNodeRequest !== undefined) {
                if (showNodeRequest instanceof ShowNodeRequest) {
                    clusterId = showNodeRequest.clusterId;
                    nodeId = showNodeRequest.nodeId;
                    contentType = showNodeRequest.contentType;
                    errorStatus = showNodeRequest.errorStatus;
                } else {
                    clusterId = showNodeRequest['cluster_id'];
                    nodeId = showNodeRequest['node_id'];
                    contentType = showNodeRequest['Content-Type'];
                    errorStatus = showNodeRequest['errorStatus'];
                }
            }
        
            if (clusterId === null || clusterId === undefined) {
                throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showNode.');
            }
            if (nodeId === null || nodeId === undefined) {
                throw new RequiredError('nodeId','Required parameter nodeId was null or undefined when calling showNode.');
            }
            if (contentType === null || contentType === undefined) {
                throw new RequiredError('contentType','Required parameter contentType was null or undefined when calling showNode.');
            }
            if (errorStatus !== null && errorStatus !== undefined) {
                localVarQueryParameter['errorStatus'] = errorStatus;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId,'node_id': nodeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于获取指定节点池的详细信息。 &gt; 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径 
         */
        showNodePool(showNodePoolRequest?: ShowNodePoolRequest) {
            const options = {
                method: "GET",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/nodepools/{nodepool_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let clusterId;
            let nodepoolId;
            let contentType;
            let errorStatus;

            if (showNodePoolRequest !== null && showNodePoolRequest !== undefined) {
                if (showNodePoolRequest instanceof ShowNodePoolRequest) {
                    clusterId = showNodePoolRequest.clusterId;
                    nodepoolId = showNodePoolRequest.nodepoolId;
                    contentType = showNodePoolRequest.contentType;
                    errorStatus = showNodePoolRequest.errorStatus;
                } else {
                    clusterId = showNodePoolRequest['cluster_id'];
                    nodepoolId = showNodePoolRequest['nodepool_id'];
                    contentType = showNodePoolRequest['Content-Type'];
                    errorStatus = showNodePoolRequest['errorStatus'];
                }
            }
        
            if (clusterId === null || clusterId === undefined) {
                throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showNodePool.');
            }
            if (nodepoolId === null || nodepoolId === undefined) {
                throw new RequiredError('nodepoolId','Required parameter nodepoolId was null or undefined when calling showNodePool.');
            }
            if (contentType === null || contentType === undefined) {
                throw new RequiredError('contentType','Required parameter contentType was null or undefined when calling showNodePool.');
            }
            if (errorStatus !== null && errorStatus !== undefined) {
                localVarQueryParameter['errorStatus'] = errorStatus;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId,'nodepool_id': nodepoolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新插件实例的功能。 &gt;插件管理的URL格式为：https://{clusterid}.Endpoint/uri。其中{clusterid}为集群ID，uri为资源路径，也即API访问的路径。 
         */
        updateAddonInstance(updateAddonInstanceRequest?: UpdateAddonInstanceRequest) {
            const options = {
                method: "PUT",
                url: "/api/v3/addons/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let id;
            let contentType;

            if (updateAddonInstanceRequest !== null && updateAddonInstanceRequest !== undefined) {
                if (updateAddonInstanceRequest instanceof UpdateAddonInstanceRequest) {
                    id = updateAddonInstanceRequest.id;
                    contentType = updateAddonInstanceRequest.contentType;
                    body = updateAddonInstanceRequest.body
                } else {
                    id = updateAddonInstanceRequest['id'];
                    contentType = updateAddonInstanceRequest['Content-Type'];
                    body = updateAddonInstanceRequest['body'];
                }
            }
        
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling updateAddonInstance.');
            }
            if (contentType === null || contentType === undefined) {
                throw new RequiredError('contentType','Required parameter contentType was null or undefined when calling updateAddonInstance.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于更新指定的集群。 &gt; 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
         */
        updateCluster(updateClusterRequest?: UpdateClusterRequest) {
            const options = {
                method: "PUT",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            let clusterId;
            let contentType;
            let errorStatus;

            if (updateClusterRequest !== null && updateClusterRequest !== undefined) {
                if (updateClusterRequest instanceof UpdateClusterRequest) {
                    clusterId = updateClusterRequest.clusterId;
                    contentType = updateClusterRequest.contentType;
                    body = updateClusterRequest.body
                    errorStatus = updateClusterRequest.errorStatus;
                } else {
                    clusterId = updateClusterRequest['cluster_id'];
                    contentType = updateClusterRequest['Content-Type'];
                    body = updateClusterRequest['body'];
                    errorStatus = updateClusterRequest['errorStatus'];
                }
            }
        
            if (clusterId === null || clusterId === undefined) {
                throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateCluster.');
            }
            if (contentType === null || contentType === undefined) {
                throw new RequiredError('contentType','Required parameter contentType was null or undefined when calling updateCluster.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (errorStatus !== null && errorStatus !== undefined) {
                localVarQueryParameter['errorStatus'] = errorStatus;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于更新指定的节点。 &gt; - 当前仅支持更新metadata下的name字段，即节点的名字。 &gt; - 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。 
         */
        updateNode(updateNodeRequest?: UpdateNodeRequest) {
            const options = {
                method: "PUT",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/nodes/{node_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            let clusterId;
            let nodeId;
            let contentType;
            let errorStatus;

            if (updateNodeRequest !== null && updateNodeRequest !== undefined) {
                if (updateNodeRequest instanceof UpdateNodeRequest) {
                    clusterId = updateNodeRequest.clusterId;
                    nodeId = updateNodeRequest.nodeId;
                    contentType = updateNodeRequest.contentType;
                    body = updateNodeRequest.body
                    errorStatus = updateNodeRequest.errorStatus;
                } else {
                    clusterId = updateNodeRequest['cluster_id'];
                    nodeId = updateNodeRequest['node_id'];
                    contentType = updateNodeRequest['Content-Type'];
                    body = updateNodeRequest['body'];
                    errorStatus = updateNodeRequest['errorStatus'];
                }
            }
        
            if (clusterId === null || clusterId === undefined) {
                throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateNode.');
            }
            if (nodeId === null || nodeId === undefined) {
                throw new RequiredError('nodeId','Required parameter nodeId was null or undefined when calling updateNode.');
            }
            if (contentType === null || contentType === undefined) {
                throw new RequiredError('contentType','Required parameter contentType was null or undefined when calling updateNode.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (errorStatus !== null && errorStatus !== undefined) {
                localVarQueryParameter['errorStatus'] = errorStatus;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId,'node_id': nodeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于更新指定的节点池。仅支持集群在处于可用、扩容、缩容状态时调用。 &gt; - 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径 &gt; - 当前仅支持更新节点池名称，spec下的initialNodeCount，k8sTags， taints，login，userTags与节点池的扩缩容配置相关字段。
         */
        updateNodePool(updateNodePoolRequest?: UpdateNodePoolRequest) {
            const options = {
                method: "PUT",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/nodepools/{nodepool_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            let clusterId;
            let nodepoolId;
            let contentType;
            let errorStatus;

            if (updateNodePoolRequest !== null && updateNodePoolRequest !== undefined) {
                if (updateNodePoolRequest instanceof UpdateNodePoolRequest) {
                    clusterId = updateNodePoolRequest.clusterId;
                    nodepoolId = updateNodePoolRequest.nodepoolId;
                    contentType = updateNodePoolRequest.contentType;
                    body = updateNodePoolRequest.body
                    errorStatus = updateNodePoolRequest.errorStatus;
                } else {
                    clusterId = updateNodePoolRequest['cluster_id'];
                    nodepoolId = updateNodePoolRequest['nodepool_id'];
                    contentType = updateNodePoolRequest['Content-Type'];
                    body = updateNodePoolRequest['body'];
                    errorStatus = updateNodePoolRequest['errorStatus'];
                }
            }
        
            if (clusterId === null || clusterId === undefined) {
                throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateNodePool.');
            }
            if (nodepoolId === null || nodepoolId === undefined) {
                throw new RequiredError('nodepoolId','Required parameter nodepoolId was null or undefined when calling updateNodePool.');
            }
            if (contentType === null || contentType === undefined) {
                throw new RequiredError('contentType','Required parameter contentType was null or undefined when calling updateNodePool.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (errorStatus !== null && errorStatus !== undefined) {
                localVarQueryParameter['errorStatus'] = errorStatus;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId,'nodepool_id': nodepoolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): CceClient {
    return new CceClient(client);
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