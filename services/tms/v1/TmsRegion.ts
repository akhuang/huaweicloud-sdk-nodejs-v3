import { Region } from "@huaweicloudtest/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class TmsRegion {
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://tms.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "cn-north-4":TmsRegion.CN_NORTH_4
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
