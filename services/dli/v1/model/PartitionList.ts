import { Partition } from './Partition';


export class PartitionList {
    private 'total_count'?: number;
    private 'partition_infos'?: Array<Partition>;
    public constructor(totalCount?: number, partitionInfos?: Array<Partition>) { 
        this['total_count'] = totalCount;
        this['partition_infos'] = partitionInfos;
    }
    public withTotalCount(totalCount: number): PartitionList {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withPartitionInfos(partitionInfos: Array<Partition>): PartitionList {
        this['partition_infos'] = partitionInfos;
        return this;
    }
    public set partitionInfos(partitionInfos: Array<Partition>  | undefined) {
        this['partition_infos'] = partitionInfos;
    }
    public get partitionInfos(): Array<Partition> | undefined {
        return this['partition_infos'];
    }
}