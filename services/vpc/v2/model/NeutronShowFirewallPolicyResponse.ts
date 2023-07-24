import { NeutronFirewallPolicy } from './NeutronFirewallPolicy';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class NeutronShowFirewallPolicyResponse extends SdkResponse {
    private 'firewall_policy'?: NeutronFirewallPolicy | undefined;
    public constructor() { 
        super();
    }
    public withFirewallPolicy(firewallPolicy: NeutronFirewallPolicy): NeutronShowFirewallPolicyResponse {
        this['firewall_policy'] = firewallPolicy;
        return this;
    }
    public set firewallPolicy(firewallPolicy: NeutronFirewallPolicy | undefined) {
        this['firewall_policy'] = firewallPolicy;
    }
    public get firewallPolicy() {
        return this['firewall_policy'];
    }
}