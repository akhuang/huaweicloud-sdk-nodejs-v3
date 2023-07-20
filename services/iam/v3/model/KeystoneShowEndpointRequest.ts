

export class KeystoneShowEndpointRequest {
    private 'endpoint_id'?: string;
    public constructor(endpointId?: string) { 
        this['endpoint_id'] = endpointId;
    }
    public withEndpointId(endpointId: string): KeystoneShowEndpointRequest {
        this['endpoint_id'] = endpointId;
        return this;
    }
    public set endpointId(endpointId: string  | undefined) {
        this['endpoint_id'] = endpointId;
    }
    public get endpointId(): string | undefined {
        return this['endpoint_id'];
    }
}