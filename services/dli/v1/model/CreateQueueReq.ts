import { TmsTagEntity } from './TmsTagEntity';


export class CreateQueueReq {
    private 'queue_name'?: string;
    private 'queue_type'?: string;
    public description?: string;
    private 'cu_count'?: number;
    private 'charging_mode'?: number;
    private 'enterprise_project_id'?: string;
    public platform?: string;
    private 'resource_mode'?: number;
    public labels?: Array<object>;
    public feature?: string;
    public tags?: Array<TmsTagEntity>;
    private 'elastic_resource_pool_name'?: string;
    public constructor(queueName?: string, cuCount?: number) { 
        this['queue_name'] = queueName;
        this['cu_count'] = cuCount;
    }
    public withQueueName(queueName: string): CreateQueueReq {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withQueueType(queueType: string): CreateQueueReq {
        this['queue_type'] = queueType;
        return this;
    }
    public set queueType(queueType: string  | undefined) {
        this['queue_type'] = queueType;
    }
    public get queueType(): string | undefined {
        return this['queue_type'];
    }
    public withDescription(description: string): CreateQueueReq {
        this['description'] = description;
        return this;
    }
    public withCuCount(cuCount: number): CreateQueueReq {
        this['cu_count'] = cuCount;
        return this;
    }
    public set cuCount(cuCount: number  | undefined) {
        this['cu_count'] = cuCount;
    }
    public get cuCount(): number | undefined {
        return this['cu_count'];
    }
    public withChargingMode(chargingMode: number): CreateQueueReq {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: number  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): number | undefined {
        return this['charging_mode'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateQueueReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withPlatform(platform: string): CreateQueueReq {
        this['platform'] = platform;
        return this;
    }
    public withResourceMode(resourceMode: number): CreateQueueReq {
        this['resource_mode'] = resourceMode;
        return this;
    }
    public set resourceMode(resourceMode: number  | undefined) {
        this['resource_mode'] = resourceMode;
    }
    public get resourceMode(): number | undefined {
        return this['resource_mode'];
    }
    public withLabels(labels: Array<object>): CreateQueueReq {
        this['labels'] = labels;
        return this;
    }
    public withFeature(feature: string): CreateQueueReq {
        this['feature'] = feature;
        return this;
    }
    public withTags(tags: Array<TmsTagEntity>): CreateQueueReq {
        this['tags'] = tags;
        return this;
    }
    public withElasticResourcePoolName(elasticResourcePoolName: string): CreateQueueReq {
        this['elastic_resource_pool_name'] = elasticResourcePoolName;
        return this;
    }
    public set elasticResourcePoolName(elasticResourcePoolName: string  | undefined) {
        this['elastic_resource_pool_name'] = elasticResourcePoolName;
    }
    public get elasticResourcePoolName(): string | undefined {
        return this['elastic_resource_pool_name'];
    }
}