

export class DeleteConnectorRequestBody {
    private 'order_id'?: string;
    private 'csb_instance_product_id'?: string;
    public constructor() { 
    }
    public withOrderId(orderId: string): DeleteConnectorRequestBody {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withCsbInstanceProductId(csbInstanceProductId: string): DeleteConnectorRequestBody {
        this['csb_instance_product_id'] = csbInstanceProductId;
        return this;
    }
    public set csbInstanceProductId(csbInstanceProductId: string  | undefined) {
        this['csb_instance_product_id'] = csbInstanceProductId;
    }
    public get csbInstanceProductId(): string | undefined {
        return this['csb_instance_product_id'];
    }
}