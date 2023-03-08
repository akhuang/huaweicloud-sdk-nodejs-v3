import { Region } from "../../../core/region/region";

interface RegionMap {
  [key: string]: Region;
}

export class CdnRegion {
  public static CN_NORTH_1 = new Region("cn-north-1", ["https://cdn.myhuaweicloud.com"]);
  public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://cdn.myhuaweicloud.com"]);

  private static REGION_MAP: RegionMap = {
    "cn-north-1": CdnRegion.CN_NORTH_1,
    "cn-southeast-1": CdnRegion.AP_SOUTHEAST_1
  };
  public static valueOf(regionId: string): Region {
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
