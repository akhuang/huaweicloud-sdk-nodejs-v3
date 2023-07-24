import { SearchFace } from './SearchFace';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class SearchFaceByFileResponse extends SdkResponse {
    public faces?: Array<SearchFace>;
    public constructor() { 
        super();
    }
    public withFaces(faces: Array<SearchFace>): SearchFaceByFileResponse {
        this['faces'] = faces;
        return this;
    }
}