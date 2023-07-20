import { ListProductsRespIo } from './ListProductsRespIo';


export class ListProductsRespDetail {
    public storage?: string;
    private 'product_id'?: string;
    private 'spec_code'?: string;
    public io?: Array<ListProductsRespIo>;
    private 'unavailable_zones'?: Array<string>;
    private 'available_zones'?: Array<string>;
    private 'ecs_flavor_id'?: string;
    private 'arch_type'?: string;
    public constructor() { 
    }
    public withStorage(storage: string): ListProductsRespDetail {
        this['storage'] = storage;
        return this;
    }
    public withProductId(productId: string): ListProductsRespDetail {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withSpecCode(specCode: string): ListProductsRespDetail {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
    public withIo(io: Array<ListProductsRespIo>): ListProductsRespDetail {
        this['io'] = io;
        return this;
    }
    public withUnavailableZones(unavailableZones: Array<string>): ListProductsRespDetail {
        this['unavailable_zones'] = unavailableZones;
        return this;
    }
    public set unavailableZones(unavailableZones: Array<string>  | undefined) {
        this['unavailable_zones'] = unavailableZones;
    }
    public get unavailableZones(): Array<string> | undefined {
        return this['unavailable_zones'];
    }
    public withAvailableZones(availableZones: Array<string>): ListProductsRespDetail {
        this['available_zones'] = availableZones;
        return this;
    }
    public set availableZones(availableZones: Array<string>  | undefined) {
        this['available_zones'] = availableZones;
    }
    public get availableZones(): Array<string> | undefined {
        return this['available_zones'];
    }
    public withEcsFlavorId(ecsFlavorId: string): ListProductsRespDetail {
        this['ecs_flavor_id'] = ecsFlavorId;
        return this;
    }
    public set ecsFlavorId(ecsFlavorId: string  | undefined) {
        this['ecs_flavor_id'] = ecsFlavorId;
    }
    public get ecsFlavorId(): string | undefined {
        return this['ecs_flavor_id'];
    }
    public withArchType(archType: string): ListProductsRespDetail {
        this['arch_type'] = archType;
        return this;
    }
    public set archType(archType: string  | undefined) {
        this['arch_type'] = archType;
    }
    public get archType(): string | undefined {
        return this['arch_type'];
    }
}