import { ListVpcsRequest, VpcClient, VpcRegion } from "./vpc/huaweicloud-sdk-vpc";
import { BasicCredentials } from "../core/auth/BasicCredentials";
import * as dotenv from 'dotenv';
import { ShowQuotaRequest } from "@huaweicloud/huaweicloud-sdk-vpc";
import { CdnClient, CdnRegion } from "./cdn/huaweicloud-sdk-cdn";
import { GlobalCredentials } from "../core/auth/GlobalCredentials";
dotenv.config();

const ak = process.env.AK;
const sk = process.env.SK;
const projectId = process.env.PROJECT_ID;

let credentials = new BasicCredentials()
    .withAk(ak)
    .withSk(sk);

(async () => {
    await fetchDataUsingRegion();
    await fetchDataUsingMultiEndpoints();
    await fetchDataWithRetryForBasicCredentials();
    await fetchDataWithRetryForGlobalCredentials();
    await fetchDataWithRetryRegion();
})();

async function fetchDataWithRetryForBasicCredentials() {
    try {
        credentials = credentials.withProjectId(projectId);
        const client = VpcClient.newBuilder()
            .withCredential(credentials)
            .withEndpoint(["http://localhost:3000", "https://vpc.cn-east-3.myhuaweicloud.com"])
            .build();
        const request = new ListVpcsRequest();
        const result = await client.listVpcs(request);
        console.log("Result:", JSON.stringify(result, null, 2));

        const request1 = new ListVpcsRequest();
        const result2 = await client.listVpcs(request1);
        console.log("Result2:", JSON.stringify(result2, null, 2));
    } catch (error: any) {
        console.error("Exception:", JSON.stringify(error, null, 2));
    }
}

async function fetchDataWithRetryForGlobalCredentials() {
    try {
        let globalCredentials = new GlobalCredentials()
            .withAk(ak)
            .withSk(sk);

        const client = CdnClient.newBuilder()
            .withCredential(globalCredentials)
            .withEndpoint(["http://localhost:3000", "https://cdn.myhuaweicloud.com"])
            .build(); 
        const result = await client.showQuota();
        console.log("Result:", JSON.stringify(result, null, 2)); 
    } catch (error: any) {
        console.error("Exception:", JSON.stringify(error, null, 2));
    }
}

async function fetchDataWithRetryRegion() {
    try {
        let globalCredentials = new GlobalCredentials()
            .withAk(ak)
            .withSk(sk);

        const client = CdnClient.newBuilder()
            .withCredential(globalCredentials)
            .withRegion(CdnRegion.CN_NORTH_1)
            .build(); 
        const result = await client.showQuota();
        console.log("Result:", JSON.stringify(result, null, 2)); 
    } catch (error: any) {
        console.error("Exception:", JSON.stringify(error, null, 2));
    }
}

async function fetchDataUsingMultiEndpoints() {
    try {
        credentials = credentials.withProjectId(projectId);
        const client = VpcClient.newBuilder()
            .withCredential(credentials)
            .withEndpoint(["https://vpc.cn-east-3.myhuaweicloud.com", "https://vpc.cn-east-3.myhuaweicloud.com"])
            .build();
        const request = new ListVpcsRequest();
        const result = await client.listVpcs(request);
        console.log("Result:", JSON.stringify(result, null, 2));
    } catch (error: any) {
        console.error("Exception:", JSON.stringify(error, null, 2));
    }
}

async function fetchDataUsingRegion() {
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
}
