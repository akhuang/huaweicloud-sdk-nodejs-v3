

export class HbaseClusterActionReq {
    public restart?: object;
    public constructor(restart?: object) { 
        this['restart'] = restart;
    }
    public withRestart(restart: object): HbaseClusterActionReq {
        this['restart'] = restart;
        return this;
    }
}