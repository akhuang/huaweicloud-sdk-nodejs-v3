

export class NeutronShowRouterRequest {
    private 'router_id'?: string;
    public constructor(routerId?: string) { 
        this['router_id'] = routerId;
    }
    public withRouterId(routerId: string): NeutronShowRouterRequest {
        this['router_id'] = routerId;
        return this;
    }
    public set routerId(routerId: string  | undefined) {
        this['router_id'] = routerId;
    }
    public get routerId(): string | undefined {
        return this['router_id'];
    }
}