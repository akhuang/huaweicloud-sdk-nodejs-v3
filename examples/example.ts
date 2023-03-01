import { ListVpcsRequest, VpcClient } from "@huaweicloud/huaweicloud-sdk-vpc";
import { BasicCredentials } from "@huaweicloud/huaweicloud-sdk-core/auth/BasicCredentials";

const ak = process.env.AK;
const sk = process.env.SK;
const domainId = process.env.DOMAIN_ID;
const projectId = process.env.PROJECT_ID;

const endpoint = "https://vpc.cn-east-3.myhuaweicloud.com";

const credentials = new BasicCredentials()
  .withAk(ak)
  .withSk(sk)
  .withProjectId(projectId);

const client = VpcClient.newBuilder()
  .withCredential(credentials)
  .withEndpoint(endpoint)
  .build();


(async () => {
  try {
    const request = new ListVpcsRequest();
    const result = await client.listVpcs(request);
    console.log("Result:", JSON.stringify(result, null, 2));
  } catch (error:any) {
    console.error("Exception:", JSON.stringify(error, null, 2));
  }
})();