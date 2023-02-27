import { ClientOptions, DefaultHttpClient } from '../http/DefaultHttpClient';

const f1 = async () => {
    const endpoints = ['https://httpbin.org', 'https://httpbin.org'];
    let httpService: DefaultHttpClient;
    const clientOptions: ClientOptions = {};
    httpService = new DefaultHttpClient(clientOptions, endpoints);
    const options = {
        method: 'GET',
        url: '/status/111',
        headers: {},
    };

    try {
        await httpService.sendRequest(options);
    } catch (err: any) {
        console.log(1);
    }

        try{
            await httpService.sendRequest(options);
       }catch(err:any){
           console.log(2);
       }
}

const f3 =async () => {
    const r1 =  await f1();
console.log('r1:' + r1);
}

f3();