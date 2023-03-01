##
```
将输出转成与 apigw 一致的输出
console.log(`canonicalRequest::${canonicalRequest.replace(/\n/g, '|')}`)

```
### verify aksk signature fail
service:
```
GET|/v1/086cc9ecba00267b2f36c00e44e5db7b/vpcs/||content-type:application/json|host:vpc.cn-east-3.myhuaweicloud.com|x-project-id:086cc9ecba00267b2f36c00e44e5db7b|x-sdk-date:20230301T084422Z||content-type;host;x-project-id;x-sdk-date|44136fa355b3678a1146ad16f7e8649e94fb4fc21fe77e8310c060f61caaff8a
```
apig:
```
GET|/v1/086cc9ecba00267b2f36c00e44e5db7b/vpcs/||content-type:application/json|host:vpc.cn-east-3.myhuaweicloud.com|x-project-id:086cc9ecba00267b2f36c00e44e5db7b|x-sdk-date:20230301T084422Z||content-type;host;x-project-id;x-sdk-date|44136fa355b3678a1146ad16f7e8649e94fb4fc21fe77e8310c060f61caaff8a

```
### apigw 报错信息
```
{
    error_msg: 'Incorrect IAM authentication information: verify aksk signature fail, canonicalRequest:GET|/v1/086cc9ecba00267b2f36c00e44e5db7b/vpcs/||content-type:application/json|host:vpc.cn-east-3.myhuaweicloud.com|x-project-id:086cc9ecba00267b2f36c00e44e5db7b|x-sdk-date:20230301T084422Z||content-type;host;x-project-id;x-sdk-date|44136fa355b3678a1146ad16f7e8649e94fb4fc21fe77e8310c060f61caaff8a',
    error_code: 'APIGW.0301',
    request_id: '85e1fdf826d0efb6218aad5e74203f76'
  },
```