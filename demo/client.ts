import { ListVpcsRequest, VpcClient, VpcRegion } from "./vpc/huaweicloud-sdk-vpc";
import { BasicCredentials } from "../core/auth/BasicCredentials";
import * as dotenv from 'dotenv';
import { Region } from "../core/region/region";
dotenv.config();

const ak = process.env.AK;
const sk = process.env.SK;

const credentials = new BasicCredentials()
    .withAk(ak)
    .withSk(sk);




(async () => {
    try {
        const client = VpcClient.newBuilder()
            .withCredential(credentials)
            .withRegion(VpcRegion.CN_EAST_3)
            .build();
        const request = new ListVpcsRequest();
        const result = await client.listVpcs(request);
        console.log("Result:", JSON.stringify(result, null, 2));
    } catch (error: any) {
        console.error("Exception:", JSON.stringify(error, null, 2));
    }
    
})();

(async () => {
    try {
        const client = VpcClient.newBuilder()
            .withCredential(credentials)
            .withRegion(new Region("cn-east-3",["https://vpc.cn-east-xx.myhuaweicloud.xx","https://vpc.cn-east-3.myhuaweicloud.com"]))
            .build();
        const request = new ListVpcsRequest();
        const result = await client.listVpcs(request);
        console.log("Result:", JSON.stringify(result, null, 2));
    } catch (error: any) {
        console.error("Exception:", JSON.stringify(error, null, 2));
    }
    
})();