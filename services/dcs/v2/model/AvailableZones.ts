

export class AvailableZones {
    public code?: string;
    public port?: string;
    public name?: string;
    public id?: string;
    private 'resource_availability'?: AvailableZonesResourceAvailabilityEnum | string;
    public constructor() { 
    }
    public withCode(code: string): AvailableZones {
        this['code'] = code;
        return this;
    }
    public withPort(port: string): AvailableZones {
        this['port'] = port;
        return this;
    }
    public withName(name: string): AvailableZones {
        this['name'] = name;
        return this;
    }
    public withId(id: string): AvailableZones {
        this['id'] = id;
        return this;
    }
    public withResourceAvailability(resourceAvailability: AvailableZonesResourceAvailabilityEnum | string): AvailableZones {
        this['resource_availability'] = resourceAvailability;
        return this;
    }
    public set resourceAvailability(resourceAvailability: AvailableZonesResourceAvailabilityEnum | string  | undefined) {
        this['resource_availability'] = resourceAvailability;
    }
    public get resourceAvailability(): AvailableZonesResourceAvailabilityEnum | string | undefined {
        return this['resource_availability'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AvailableZonesResourceAvailabilityEnum {
    TRUE = 'true',
    FALSE = 'false'
}
