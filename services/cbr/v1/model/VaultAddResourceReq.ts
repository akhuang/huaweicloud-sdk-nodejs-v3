import { ResourceCreate } from './ResourceCreate';


export class VaultAddResourceReq {
    public resources?: Array<ResourceCreate>;
    public constructor(resources?: Array<ResourceCreate>) { 
        this['resources'] = resources;
    }
    public withResources(resources: Array<ResourceCreate>): VaultAddResourceReq {
        this['resources'] = resources;
        return this;
    }
}