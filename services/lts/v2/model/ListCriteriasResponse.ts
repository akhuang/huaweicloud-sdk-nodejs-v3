import { GetQuerySearchCriteriasBody } from './GetQuerySearchCriteriasBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCriteriasResponse extends SdkResponse {
    private 'search_criterias'?: Array<GetQuerySearchCriteriasBody>;
    public constructor() { 
        super();
    }
    public withSearchCriterias(searchCriterias: Array<GetQuerySearchCriteriasBody>): ListCriteriasResponse {
        this['search_criterias'] = searchCriterias;
        return this;
    }
    public set searchCriterias(searchCriterias: Array<GetQuerySearchCriteriasBody>  | undefined) {
        this['search_criterias'] = searchCriterias;
    }
    public get searchCriterias(): Array<GetQuerySearchCriteriasBody> | undefined {
        return this['search_criterias'];
    }
}