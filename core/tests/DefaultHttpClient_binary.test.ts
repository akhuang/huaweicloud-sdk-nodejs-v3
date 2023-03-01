import { DefaultHttpClient } from '../http/DefaultHttpClient';
import { IHttpRequest } from '../http/IHttpRequest';
import FormData from 'form-data';
import fs from 'fs';
import nock from 'nock';
import path from 'path';
import exp from 'constants';

const nockBaseUrl = 'https://api.example.com';
describe('multipart/form-data', () => {
    let httpClient: DefaultHttpClient;

    beforeAll(() => {
        httpClient = new DefaultHttpClient();
    });

    afterEach(() => {
        nock.cleanAll();
    });

    it('should upload a file with multipart/form-data', async () => {
        /**
         * 
         * The "headers" need to explicitly define the "multipart/form-data" type.
         * The "form-data" type will be specially handled in DefaultHttpClient.ts to obtain its unique headers.
         * This is because it ultimately sends a request with the following format: 'content-type': 'multipart/form-data; boundary=xxxx'
         * 
        */
        const fileContent = 'Hello World!';
        const filePath = path.join(__dirname, 'test.txt');
        fs.writeFileSync(filePath, fileContent);

        const httpClient = new DefaultHttpClient();
        const endpoint = 'https://httpbin.org/post';
        // Create a FormData object and append the file
        const formData = new FormData();
        formData.append('myfile', fs.createReadStream(filePath));

        // Create the request
        const request: IHttpRequest = {
            endpoint,
            method: 'POST',
            data: formData,
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        const response = await httpClient.sendRequest(request);
        const responseBody = response.data;

        // 当 45 行的 content-type 不设置的时候，response 一样会成功，但是不会有正确的返回
        // 返回结果中 files 是一个空对象
        // 所以必须校验 files 的属性
        expect(responseBody.files).toBeDefined();
        expect(responseBody.files.myfile).toBeDefined();
        expect(responseBody.files.myfile).toEqual("Hello World!")

        fs.unlinkSync(filePath);
    });

    it('should upload a file using multipart/form-data and nock', async () => {
        const expectedResponse = {
            result: 'success',
            files: {
                myfile: 'Hello World!'
            }
        };
        const fileContent = 'Hello World!';
        const filePath = path.join(__dirname, 'test.txt');
        fs.writeFileSync(filePath, fileContent);
        const formData = new FormData();
        formData.append('myfile', fs.createReadStream(filePath));

        nock(nockBaseUrl)
            .post('/upload')
            .reply(200, expectedResponse);

        const request = {
            method: 'POST',
            endpoint: `${nockBaseUrl}/upload`,
            headers: {
                'content-type': 'multipart/form-data'
            },
            data: formData,
        };

        const response = await httpClient.sendRequest(request);

        expect(response.data).toEqual(expectedResponse);
        expect(response.data!.files).toBeDefined();
        expect(response.data!.files.myfile).toBeDefined();

        fs.unlinkSync(filePath);
    });
});

describe('application/octet-stream', () => {
    let httpClient: DefaultHttpClient;

    beforeAll(() => {
        httpClient = new DefaultHttpClient();
    });

    afterEach(() => {
        nock.cleanAll();
    });

    it('should send binary data using application/octet-stream with internet connectivity', async () => {
        const fileContents = Buffer.from('your binary file data');
        const request: IHttpRequest = {
            endpoint: 'https://httpbin.org//post',
            method: 'POST',
            headers: { 'content-type': 'application/octet-stream' },
            data: fileContents
        };

        // Send the request and validate the response
        const response = await httpClient.sendRequest(request);
        expect(response.data).toBeDefined();
        expect(response.data.data).toEqual('your binary file data')
        expect(response.headers['content-type']).toEqual('application/json')
    });

    it('should send binary data using application/octet-stream content type', async () => {
        const data = Buffer.from('Hello, world!', 'utf8');
        const expectedResponse = 'Hello, world!';
        // Mock the response
        const scope = nock(nockBaseUrl)
            .post('/test', data, {
                reqheaders: {
                    'Content-Type': 'application/octet-stream',
                },
            })
            .reply(200, data, {
                'Content-Type': 'application/octet-stream',
            });

        // Create the request
        const request: IHttpRequest = {
            endpoint: nockBaseUrl + '/test',
            method: 'POST',
            headers: { 'Content-Type': 'application/octet-stream' },
            data: data
        };

        // Send the request and validate the response
        const response = await httpClient.sendRequest(request);
        expect(response.data).toEqual(expectedResponse);

        // Verify that the mock was called
        scope.done();
    });

    /**
     * https://httpbin.org//bytes/10
     * httpbin.org provides an endpoint at /bytes/:n which allows you to download random data of the specified number of bytes.
     */
    it('should download file using octet-stream', async () => {  
        const request: IHttpRequest = {
            method: 'GET',
            endpoint: 'https://httpbin.org//bytes/10',
        };
        const response = await httpClient.sendRequest(request); 
        expect(response.headers['content-type']).toEqual('application/octet-stream');
    });


    it('should download file using octet-stream', async () => {
        const expectedResponse = 'file content';
        nock('http://example.com')
            .get('/file')
            .reply(200, expectedResponse, {
                'Content-Type': 'application/octet-stream',
                'Content-Disposition': 'attachment; filename="file.txt"',
            });

        const request: IHttpRequest = {
            method: 'GET',
            endpoint: 'http://example.com/file',
        };
        const response = await httpClient.sendRequest(request);
        expect(response.headers['content-disposition']).toBe('attachment; filename="file.txt"');
        expect(response.data).toBe(expectedResponse);
    });

    it('should download a file', async () => {
        const filePath = path.join(__dirname, 'test.zip'); 
        const fileContent = 'test zip file content';
        fs.writeFileSync(filePath, fileContent);
 
        nock(nockBaseUrl)
            .get('/download')
            .replyWithFile(200, filePath, {
                'Content-Type': 'application/zip',
            });

        const request = {
            method: 'GET',
            endpoint: `${nockBaseUrl}/download`,
        };

        const response = await httpClient.sendRequest(request);

        expect(response.headers['content-type']).toEqual('application/zip');
        expect(response.data).toEqual(fileContent);

        fs.unlinkSync(filePath);
    });

});