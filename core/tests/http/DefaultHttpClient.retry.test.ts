import nock from 'nock';
import { ClientOptions, DefaultHttpClient } from '../../http/DefaultHttpClient';

describe('DefaultHttpClient', () => {

    afterEach(() => {
        nock.cleanAll();
    });

    it('should not retry when primaryUrl succeeds', async () => {
        const endpoints = ['http://example.com', 'http://backup.example.com'];
        const primaryUrl = endpoints[0];
        const backupUrl = endpoints[1];
        let httpService: DefaultHttpClient;
        const clientOptions: ClientOptions = {};
        httpService = new DefaultHttpClient(clientOptions, endpoints);

        const scope = nock(primaryUrl)
            .get('/api/data')
            .reply(200, { result: 'success' });

        const scope2 = nock(backupUrl)
            .get('/api/data')
            .reply(200, { result: 'success' });

        const options = {
            method: 'GET',
            url: '/api/data',
            headers: {},
        };

        const response = await httpService.sendRequest(options);

        expect(response.statusCode).toEqual(200);
        expect(httpService['retryCount']).toEqual(0);
        expect(response.data).toEqual({ result: 'success' });

        expect(scope.isDone()).toBe(true);
        expect(scope2.isDone()).toBe(false);

        // Ensure endpoint order has been flipped after successful retry
        expect(httpService['endpoints']).toEqual([primaryUrl, backupUrl]);

        scope.done();
        // scope2.done();
    });

    it('should retry with backupUrl when primaryUrl fails', async () => {
        const endpoints = ['http://example.com', 'http://backup.example.com'];
        const primaryUrl = endpoints[0];
        const backupUrl = endpoints[1];
        let httpService: DefaultHttpClient;
        const clientOptions: ClientOptions = {};
        httpService = new DefaultHttpClient(clientOptions, endpoints);

        const scope = nock(primaryUrl)
            .get('/api/data')
            .replyWithError({ code: 'ECONNREFUSED' });

        const scope2 = nock(backupUrl)
            .get('/api/data')
            .reply(200, { result: 'success' });

        const options = {
            method: 'GET',
            url: '/api/data',
            headers: {},
        };

        const response = await httpService.sendRequest(options);

        expect(response.statusCode).toEqual(200);
        expect(httpService['retryCount']).toEqual(1);
        expect(response.data).toEqual({ result: 'success' });

        expect(scope.isDone()).toBe(true);
        expect(scope2.isDone()).toBe(true);

        // Ensure endpoint order has been flipped after successful retry
        expect(httpService['endpoints']).toEqual([backupUrl, primaryUrl]);

        scope.done();
        scope2.done();
    });

    it('should fail if both primary and backup Urls fail', async () => {
        const endpoints = ['http://example.com', 'http://backup.example.com'];
        const primaryUrl = endpoints[0];
        const backupUrl = endpoints[1];
        let httpService: DefaultHttpClient;
        const clientOptions: ClientOptions = {};
        httpService = new DefaultHttpClient(clientOptions, endpoints);

        const scope = nock(primaryUrl)
            .get('/api/data')
            .replyWithError({ code: 'ECONNREFUSED' });

        nock.enableNetConnect()
        const scope2 = nock(backupUrl)
            .get('/api/data')
            .replyWithError({ code: 'ECONNREFUSED' });
        const options = {
            method: 'GET',
            url: '/api/data',
            headers: {},
        };

        await expect(httpService.sendRequest(options)).rejects.toThrow();

        expect(scope.isDone()).toBe(true);
        expect(scope2.isDone()).toBe(true);

        // Ensure endpoint order has not been flipped after failed retry
        expect(httpService['endpoints']).toEqual([primaryUrl, backupUrl]);

        scope.done();
        scope2.done();
    });

    it('should fail if both primary and backup Urls fail', async () => {
        const endpoints = ['https://httpbin.org', 'https://httpbin.org'];
        const primaryUrl = endpoints[0];
        const backupUrl = endpoints[1];
        let httpService: DefaultHttpClient;
        const clientOptions: ClientOptions = {};
        httpService = new DefaultHttpClient(clientOptions, endpoints);

        const options = {
            method: 'GET',
            url: '/status/111',
            headers: {},
        };

        // await httpService.sendRequest(options);
        await expect(httpService.sendRequest(options)).rejects.toThrow();

        // Ensure endpoint order has not been flipped after failed retry
        expect(httpService['endpoints']).toEqual([primaryUrl, backupUrl]);
    });
});