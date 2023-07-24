import { RunlogItem } from './RunlogItem';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ListRedislogResponse extends SdkResponse {
    private 'total_num'?: number | undefined;
    private 'file_list'?: Array<RunlogItem> | undefined;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListRedislogResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum() {
        return this['total_num'];
    }
    public withFileList(fileList: Array<RunlogItem>): ListRedislogResponse {
        this['file_list'] = fileList;
        return this;
    }
    public set fileList(fileList: Array<RunlogItem> | undefined) {
        this['file_list'] = fileList;
    }
    public get fileList() {
        return this['file_list'];
    }
}