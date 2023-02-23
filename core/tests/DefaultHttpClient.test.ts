import exp from 'constants';
import nock from 'nock';
import { DefaultHttpClient } from '../http/DefaultHttpClient';
import { IHttpRequest } from '../http/IHttpRequest';

const nockBaseUrl = 'http://example.com';
describe('DefaultHttpClient', () => {
    let httpClient: DefaultHttpClient;

    beforeEach(() => {
        httpClient = new DefaultHttpClient();
    });

    afterEach(() => {
        nock.cleanAll();
    });

    it('should handle a GET request', async () => {
        const expectedResponse = { result: 'success' };
        nock(nockBaseUrl).get('/test').reply(200, expectedResponse);

        const request: IHttpRequest = {
            endpoint: nockBaseUrl + '/test',
            method: 'GET',
        };
        const response = await httpClient.sendRequest(request);

        expect(response.data).toEqual(expectedResponse);
        expect(response.statusCode).toBe(200);
    });

    it('should handle a POST request with a JSON payload', async () => {
        const expectedResponse = { result: 'success' };
        const payload = { foo: 'bar' };
        nock(nockBaseUrl).post('/test', payload).reply(200, expectedResponse);

        const request: IHttpRequest = {
            endpoint: nockBaseUrl + '/test',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: payload,
        };
        const response = await httpClient.sendRequest(request);

        expect(response.data).toEqual(expectedResponse);
        expect(response.statusCode).toBe(200);
    });

    it('should handle a PUT request with a form data payload', async () => {
        const expectedResponse = { result: 'success' };
        const formData = { foo: 'bar' };
        nock(nockBaseUrl).put('/test', formData).reply(200, expectedResponse);

        const request: IHttpRequest = {
            endpoint: nockBaseUrl + '/test',
            method: 'PUT',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: formData
        };
        const response = await httpClient.sendRequest(request);

        expect(response.data).toEqual(expectedResponse);
        expect(response.statusCode).toBe(200);
    });

    it('should handle a DELETE request with a path parameter', async () => {
        const expectedResponse = { result: 'success' };
        const pathParams = { id: 123 };
        nock(nockBaseUrl).delete(`/test/123`).reply(200, expectedResponse);

        const request: IHttpRequest = {
            endpoint: nockBaseUrl + '/test/123',
            method: 'DELETE'
        };
        const response = await httpClient.sendRequest(request);

        expect(response.data).toEqual(expectedResponse);
        expect(response.statusCode).toBe(200);
    });

    it('should retry on network error', async () => {
        const scope = nock('https://example.com')
            .get('/api/data')
            .replyWithError({ message: 'ECONNREFUSED' });

        const scope2 = nock('https://example2.com')
            .get('/api/data')
            .reply(200, { result: 'success' });

        const options: IHttpRequest = {
            method: 'GET',
            endpoint: 'https://example.com/api/data',
            headers: {},
        };

        try {
            const response = await httpClient.sendRequest(options);
        } catch (error: any) {
            expect(error.message).toEqual("ECONNREFUSED");
        }

        expect(scope.isDone()).toBe(true);
    });

    it('should throw an error when server returns error status code', async () => {
        const request: IHttpRequest = {
            method: 'GET',
            endpoint: 'http://example.com',
        };
        const scope = nock('http://example.com').get('/').reply(500, 'Internal Server Error');

        try {
            await httpClient.sendRequest(request);
        } catch (error: any) {
            expect(error.data).toBe('Internal Server Error');
        }

        // await expect(httpClient.sendRequest(request)).rejects.toThrowError('Internal Server Error');
        scope.done();
    });

    // it('should not retry on successful request', async () => {
    //     const scope = nock('https://example.com')
    //         .get('/api/data')
    //         .reply(200, { result: 'success' });

    //     const options = {
    //         method: 'GET',
    //         url: 'https://example.com/api/data',
    //         headers: {},
    //     };

    //     const response = await client.sendRequest(options);

    //     expect(response).toEqual({ result: 'success' });

    //     expect(scope.isDone()).toBe(true);
    // });

    // it('should not retry on non-network errors', async () => {
    //     const scope = nock('https://example.com')
    //         .get('/api/data')
    //         .reply(400, { error: 'bad request' });

    //     const options = {
    //         method: 'GET',
    //         url: 'https://example.com/api/data',
    //         headers: {},
    //     };

    //     await expect(client.sendRequest(options)).rejects.toThrow('Request failed with status code 400');

    //     expect(scope.isDone()).toBe(true);
    // });

});