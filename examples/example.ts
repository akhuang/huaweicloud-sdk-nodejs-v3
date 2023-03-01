import { DevStarClient } from "@huaweicloud/huaweicloud-sdk-devstar/v1/DevStarClient";
import { GlobalCredentials } from "@huaweicloud/huaweicloud-sdk-core/auth/GlobalCredentials";
import { ShowJobDetailRequest } from '@huaweicloud/huaweicloud-sdk-devstar/v1/model/ShowJobDetailRequest';

const ak: string = "{your ak string}";
const sk: string = "{your sk string}";
const domainId: string = "{your domain id}";
const endpoint: string = "{your endpoint}";
const jobId: string = "{your job id}";
const client = DevStarClient.newBuilder()
    .withCredential(new GlobalCredentials().withAk(ak).withSk(sk).withDomainId(domainId))
    .withEndpoint(endpoint)
    .build();

(async () => {
  try {
    const result = await client.showJobDetail(new ShowJobDetailRequest(jobId));
    console.log("Result:", JSON.stringify(result));
  } catch (error:any) {
    console.log("Exception:", JSON.stringify(ex));
  }
})();