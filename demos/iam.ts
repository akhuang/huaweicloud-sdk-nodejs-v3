/**
 * 根据配置的ak/sk，自动获取 domain_id,project_id
 * 1. 使用默认配置的 IAM Endpoint;
 * 2. 使用用户指定的 IAM Endpoint;
 */
import { IamService } from '../core/internal/services/iam.service';
import { BasicCredentials } from '../core/auth/BasicCredentials';
import { GlobalCredentials } from '../core/auth/GlobalCredentials';
import { HcClient } from '../core/HcClient';
import { DefaultHttpClient } from '../core/http/DefaultHttpClient';
import { Region } from '../core/region/region';
import * as dotenv from 'dotenv'

dotenv.config();

const ak = process.env.AK;
const sk = process.env.SK;

(async () => {
    const projectId = await fetchProjectId();
    console.log(`projectId:${projectId}`);

    const projectId1 = await fetchProjectId("https://iam.cn-east-3.myhuaweicloud.com");
    console.log(`projectId1:${projectId1}`);

    const domainId = await fetchDomainId();
    console.log(`domainId:${domainId}`);

    const domainId1 = await fetchDomainId("https://iam.cn-east-3.myhuaweicloud.com");
    console.log(`domainId1:${domainId1}`);
})();

async function fetchDomainId(iamEndpoint?: string) {
    const endpoint = "https://devstar.cn-north-4.myhuaweicloud.com";
    let credentials = new GlobalCredentials()
        .withAk(ak)
        .withSk(sk);
    if (iamEndpoint) {
        credentials = credentials.withIamEndpoint(iamEndpoint);
    }
    const axiosOptions = {};
    const client = new DefaultHttpClient(axiosOptions, [endpoint]);
    let hcClient = new HcClient(client).withEndpoints([endpoint])
        .withRegion(new Region("cn-north-4", "https://devstar.cn-north-4.myhuaweicloud.com"))
        .withCredential(credentials);
    const iamServivice = new IamService(hcClient);
    const domainId = await iamServivice.getDomainId();

    return domainId;
}

async function fetchProjectId(iamEndpoint?: string) {
    const endpoint = "https://vpc.cn-east-3.myhuaweicloud.com";
    let credentials = new BasicCredentials()
        .withAk(ak)
        .withSk(sk);
    if (iamEndpoint) {
        credentials = credentials.withIamEndpoint(iamEndpoint);
    }
    const axiosOptions = {};
    const client = new DefaultHttpClient(axiosOptions, [endpoint]);
    let hcClient = new HcClient(client).withEndpoints([endpoint])
        .withRegion(new Region("cn-east-3", "https://vpc.cn-east-3.myhuaweicloud.com"))
        .withCredential(credentials);

    const iamServivice = new IamService(hcClient);
    const projectId = await iamServivice.getProjecId("cn-east-3");
    return projectId;
}

