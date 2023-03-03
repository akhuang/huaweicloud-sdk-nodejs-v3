import { FrsClient, CompareFaceByFileRequest, CompareFaceByFileRequestBody, FrsRegion } from "./frs/huaweicloud-sdk-frs";
import { BasicCredentials } from "../core/auth/BasicCredentials";
import * as dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

const ak = process.env.AK;
const sk = process.env.SK;
const projectId = process.env.PROJECT_ID;

let credentials = new BasicCredentials()
    .withAk(ak)
    .withSk(sk);

(async () => {
    await fetchDataWithRetry();
})();

async function fetchDataWithRetry() {
    try {
        credentials = credentials.withProjectId(projectId);
        const client = FrsClient.newBuilder()
            .withCredential(credentials)
            .withRegion(FrsRegion.CN_EAST_3)
            .build();
        const request = new CompareFaceByFileRequest();

        const body: CompareFaceByFileRequestBody = new CompareFaceByFileRequestBody();

        const filePath = path.join(__dirname, 'frs/images/1.jpeg');
        body.withImage1File(fs.createReadStream(filePath))
        body.withImage2File(fs.createReadStream(filePath))
        request.withBody(body)
        const result = await client.compareFaceByFile(request);
        console.log("Result:", JSON.stringify(result, null, 2));

        /*
        {
            "image1_face": {
              "bounding_box": {
                "width": 261,
                "top_left_x": 170,
                "top_left_y": 90,
                "height": 364
              }
            },
            "similarity": 1,
            "image2_face": {
              "bounding_box": {
                "width": 261,
                "top_left_x": 170,
                "top_left_y": 90,
                "height": 364
              }
            },
            "httpStatusCode": 200
        }
        */
    } catch (error: any) {
        console.error("Exception:", JSON.stringify(error, null, 2));
    }
}