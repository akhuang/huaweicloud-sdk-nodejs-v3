import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class MeetingRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://api.meeting.huaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://api-intl.meeting.huaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":MeetingRegion.CN_NORTH_4,
        "ap-southeast-1":MeetingRegion.AP_SOUTHEAST_1
    };
  
    public static valueOf(regionId: string) {
        if (!regionId) {  
          throw new Error("Unexpected empty parameter: regionId.");
        }
        const result = this.REGION_MAP[regionId];
        if (result) {
          return result;
        }
        throw new Error(`Unexpected regionId: ${regionId}.`)
    }
}
