

export class DeleteVpcPeeringRequest {
    private 'peering_id'?: string;
    public constructor(peeringId?: string) { 
        this['peering_id'] = peeringId;
    }
    public withPeeringId(peeringId: string): DeleteVpcPeeringRequest {
        this['peering_id'] = peeringId;
        return this;
    }
    public set peeringId(peeringId: string  | undefined) {
        this['peering_id'] = peeringId;
    }
    public get peeringId(): string | undefined {
        return this['peering_id'];
    }
}