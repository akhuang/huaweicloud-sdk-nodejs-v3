import { Resources } from './Resources';


export class ListQuotasResult {
    public resources?: Array<Resources>;
    public constructor(resources?: Array<Resources>) { 
        this['resources'] = resources;
    }
    public withResources(resources: Array<Resources>): ListQuotasResult {
        this['resources'] = resources;
        return this;
    }
}