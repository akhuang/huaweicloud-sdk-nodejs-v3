import { ReqDataByVideoAndIdCardImage } from './ReqDataByVideoAndIdCardImage';


export class IvsStandardByVideoAndIdCardImageRequestBodyData {
    private 'req_data'?: Array<ReqDataByVideoAndIdCardImage>;
    public constructor() { 
    }
    public withReqData(reqData: Array<ReqDataByVideoAndIdCardImage>): IvsStandardByVideoAndIdCardImageRequestBodyData {
        this['req_data'] = reqData;
        return this;
    }
    public set reqData(reqData: Array<ReqDataByVideoAndIdCardImage>  | undefined) {
        this['req_data'] = reqData;
    }
    public get reqData(): Array<ReqDataByVideoAndIdCardImage> | undefined {
        return this['req_data'];
    }
}