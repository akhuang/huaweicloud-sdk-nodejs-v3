import { Region } from "@huaweicloudtest/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class EipRegion {
    public static AF_SOUTH_1 = new Region("af-south-1", ["https://vpc.af-south-1.myhuaweicloud.com"]);
    public static CN_NORTH_4 = new Region("cn-north-4", ["https://vpc.cn-north-4.myhuaweicloud.com"]);
    public static CN_NORTH_1 = new Region("cn-north-1", ["https://vpc.cn-north-1.myhuaweicloud.com"]);
    public static CN_EAST_2 = new Region("cn-east-2", ["https://vpc.cn-east-2.myhuaweicloud.com"]);
    public static CN_EAST_3 = new Region("cn-east-3", ["https://vpc.cn-east-3.myhuaweicloud.com"]);
    public static CN_SOUTH_1 = new Region("cn-south-1", ["https://vpc.cn-south-1.myhuaweicloud.com"]);
    public static CN_SOUTHWEST_2 = new Region("cn-southwest-2", ["https://vpc.cn-southwest-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", ["https://vpc.ap-southeast-2.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://vpc.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://vpc.ap-southeast-3.myhuaweicloud.com"]);
    public static CN_NORTH_9 = new Region("cn-north-9", ["https://vpc.cn-north-9.myhuaweicloud.com"]);
    public static LA_NORTH_2 = new Region("la-north-2", ["https://vpc.la-north-2.myhuaweicloud.com"]);
    public static SA_BRAZIL_1 = new Region("sa-brazil-1", ["https://vpc.sa-brazil-1.myhuaweicloud.com"]);
    public static CN_NORTH_2 = new Region("cn-north-2", ["https://vpc.cn-north-2.myhuaweicloud.com"]);
    public static LA_SOUTH_2 = new Region("la-south-2", ["https://vpc.la-south-2.myhuaweicloud.com"]);
    public static NA_MEXICO_1 = new Region("na-mexico-1", ["https://vpc.na-mexico-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_4 = new Region("ap-southeast-4", ["https://vpc.ap-southeast-4.myhuaweicloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "af-south-1":EipRegion.AF_SOUTH_1,
        "cn-north-4":EipRegion.CN_NORTH_4,
        "cn-north-1":EipRegion.CN_NORTH_1,
        "cn-east-2":EipRegion.CN_EAST_2,
        "cn-east-3":EipRegion.CN_EAST_3,
        "cn-south-1":EipRegion.CN_SOUTH_1,
        "cn-southwest-2":EipRegion.CN_SOUTHWEST_2,
        "ap-southeast-2":EipRegion.AP_SOUTHEAST_2,
        "ap-southeast-1":EipRegion.AP_SOUTHEAST_1,
        "ap-southeast-3":EipRegion.AP_SOUTHEAST_3,
        "cn-north-9":EipRegion.CN_NORTH_9,
        "la-north-2":EipRegion.LA_NORTH_2,
        "sa-brazil-1":EipRegion.SA_BRAZIL_1,
        "cn-north-2":EipRegion.CN_NORTH_2,
        "la-south-2":EipRegion.LA_SOUTH_2,
        "na-mexico-1":EipRegion.NA_MEXICO_1,
        "ap-southeast-4":EipRegion.AP_SOUTHEAST_4
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
