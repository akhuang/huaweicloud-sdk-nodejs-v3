import { ResourceCountsFilters } from './ResourceCountsFilters';


export class AggregateDiscoveredResourceCountsRequest {
    private 'aggregator_id'?: string;
    public filter?: ResourceCountsFilters;
    private 'group_by_key'?: string;
    public constructor(aggregatorId?: string, groupByKey?: string) { 
        this['aggregator_id'] = aggregatorId;
        this['group_by_key'] = groupByKey;
    }
    public withAggregatorId(aggregatorId: string): AggregateDiscoveredResourceCountsRequest {
        this['aggregator_id'] = aggregatorId;
        return this;
    }
    public set aggregatorId(aggregatorId: string  | undefined) {
        this['aggregator_id'] = aggregatorId;
    }
    public get aggregatorId(): string | undefined {
        return this['aggregator_id'];
    }
    public withFilter(filter: ResourceCountsFilters): AggregateDiscoveredResourceCountsRequest {
        this['filter'] = filter;
        return this;
    }
    public withGroupByKey(groupByKey: string): AggregateDiscoveredResourceCountsRequest {
        this['group_by_key'] = groupByKey;
        return this;
    }
    public set groupByKey(groupByKey: string  | undefined) {
        this['group_by_key'] = groupByKey;
    }
    public get groupByKey(): string | undefined {
        return this['group_by_key'];
    }
}