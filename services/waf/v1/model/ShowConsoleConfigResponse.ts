
import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ShowConsoleConfigResponse extends SdkResponse {
    public eps?: boolean;
    public tls?: boolean;
    public ipv6?: boolean;
    public alert?: boolean;
    public custom?: boolean;
    private 'elb_mode'?: boolean | undefined;
    private 'event_lts'?: boolean | undefined;
    private 'multi_dns'?: boolean | undefined;
    private 'search_ip'?: boolean | undefined;
    private 'cc_enhance'?: boolean | undefined;
    private 'cname_switch'?: boolean | undefined;
    private 'custom_block'?: boolean | undefined;
    private 'advanced_ignore'?: boolean | undefined;
    private 'js_crawler_enable'?: boolean | undefined;
    private 'deep_decode_enable'?: boolean | undefined;
    private 'overview_bandwidth'?: boolean | undefined;
    private 'proxy_use_oldcname'?: boolean | undefined;
    private 'check_all_headers_enable'?: boolean | undefined;
    private 'geoip_enable'?: boolean | undefined;
    private 'load_balance_enable'?: boolean | undefined;
    private 'ipv6_protection_enable'?: boolean | undefined;
    private 'policy_sharing_enable'?: boolean | undefined;
    private 'ip_group'?: boolean | undefined;
    private 'robot_action_enable'?: boolean | undefined;
    private 'http2_enable'?: boolean | undefined;
    private 'timeout_config_enable'?: boolean | undefined;
    public constructor() { 
        super();
    }
    public withEps(eps: boolean): ShowConsoleConfigResponse {
        this['eps'] = eps;
        return this;
    }
    public withTls(tls: boolean): ShowConsoleConfigResponse {
        this['tls'] = tls;
        return this;
    }
    public withIpv6(ipv6: boolean): ShowConsoleConfigResponse {
        this['ipv6'] = ipv6;
        return this;
    }
    public withAlert(alert: boolean): ShowConsoleConfigResponse {
        this['alert'] = alert;
        return this;
    }
    public withCustom(custom: boolean): ShowConsoleConfigResponse {
        this['custom'] = custom;
        return this;
    }
    public withElbMode(elbMode: boolean): ShowConsoleConfigResponse {
        this['elb_mode'] = elbMode;
        return this;
    }
    public set elbMode(elbMode: boolean | undefined) {
        this['elb_mode'] = elbMode;
    }
    public get elbMode() {
        return this['elb_mode'];
    }
    public withEventLts(eventLts: boolean): ShowConsoleConfigResponse {
        this['event_lts'] = eventLts;
        return this;
    }
    public set eventLts(eventLts: boolean | undefined) {
        this['event_lts'] = eventLts;
    }
    public get eventLts() {
        return this['event_lts'];
    }
    public withMultiDns(multiDns: boolean): ShowConsoleConfigResponse {
        this['multi_dns'] = multiDns;
        return this;
    }
    public set multiDns(multiDns: boolean | undefined) {
        this['multi_dns'] = multiDns;
    }
    public get multiDns() {
        return this['multi_dns'];
    }
    public withSearchIp(searchIp: boolean): ShowConsoleConfigResponse {
        this['search_ip'] = searchIp;
        return this;
    }
    public set searchIp(searchIp: boolean | undefined) {
        this['search_ip'] = searchIp;
    }
    public get searchIp() {
        return this['search_ip'];
    }
    public withCcEnhance(ccEnhance: boolean): ShowConsoleConfigResponse {
        this['cc_enhance'] = ccEnhance;
        return this;
    }
    public set ccEnhance(ccEnhance: boolean | undefined) {
        this['cc_enhance'] = ccEnhance;
    }
    public get ccEnhance() {
        return this['cc_enhance'];
    }
    public withCnameSwitch(cnameSwitch: boolean): ShowConsoleConfigResponse {
        this['cname_switch'] = cnameSwitch;
        return this;
    }
    public set cnameSwitch(cnameSwitch: boolean | undefined) {
        this['cname_switch'] = cnameSwitch;
    }
    public get cnameSwitch() {
        return this['cname_switch'];
    }
    public withCustomBlock(customBlock: boolean): ShowConsoleConfigResponse {
        this['custom_block'] = customBlock;
        return this;
    }
    public set customBlock(customBlock: boolean | undefined) {
        this['custom_block'] = customBlock;
    }
    public get customBlock() {
        return this['custom_block'];
    }
    public withAdvancedIgnore(advancedIgnore: boolean): ShowConsoleConfigResponse {
        this['advanced_ignore'] = advancedIgnore;
        return this;
    }
    public set advancedIgnore(advancedIgnore: boolean | undefined) {
        this['advanced_ignore'] = advancedIgnore;
    }
    public get advancedIgnore() {
        return this['advanced_ignore'];
    }
    public withJsCrawlerEnable(jsCrawlerEnable: boolean): ShowConsoleConfigResponse {
        this['js_crawler_enable'] = jsCrawlerEnable;
        return this;
    }
    public set jsCrawlerEnable(jsCrawlerEnable: boolean | undefined) {
        this['js_crawler_enable'] = jsCrawlerEnable;
    }
    public get jsCrawlerEnable() {
        return this['js_crawler_enable'];
    }
    public withDeepDecodeEnable(deepDecodeEnable: boolean): ShowConsoleConfigResponse {
        this['deep_decode_enable'] = deepDecodeEnable;
        return this;
    }
    public set deepDecodeEnable(deepDecodeEnable: boolean | undefined) {
        this['deep_decode_enable'] = deepDecodeEnable;
    }
    public get deepDecodeEnable() {
        return this['deep_decode_enable'];
    }
    public withOverviewBandwidth(overviewBandwidth: boolean): ShowConsoleConfigResponse {
        this['overview_bandwidth'] = overviewBandwidth;
        return this;
    }
    public set overviewBandwidth(overviewBandwidth: boolean | undefined) {
        this['overview_bandwidth'] = overviewBandwidth;
    }
    public get overviewBandwidth() {
        return this['overview_bandwidth'];
    }
    public withProxyUseOldcname(proxyUseOldcname: boolean): ShowConsoleConfigResponse {
        this['proxy_use_oldcname'] = proxyUseOldcname;
        return this;
    }
    public set proxyUseOldcname(proxyUseOldcname: boolean | undefined) {
        this['proxy_use_oldcname'] = proxyUseOldcname;
    }
    public get proxyUseOldcname() {
        return this['proxy_use_oldcname'];
    }
    public withCheckAllHeadersEnable(checkAllHeadersEnable: boolean): ShowConsoleConfigResponse {
        this['check_all_headers_enable'] = checkAllHeadersEnable;
        return this;
    }
    public set checkAllHeadersEnable(checkAllHeadersEnable: boolean | undefined) {
        this['check_all_headers_enable'] = checkAllHeadersEnable;
    }
    public get checkAllHeadersEnable() {
        return this['check_all_headers_enable'];
    }
    public withGeoipEnable(geoipEnable: boolean): ShowConsoleConfigResponse {
        this['geoip_enable'] = geoipEnable;
        return this;
    }
    public set geoipEnable(geoipEnable: boolean | undefined) {
        this['geoip_enable'] = geoipEnable;
    }
    public get geoipEnable() {
        return this['geoip_enable'];
    }
    public withLoadBalanceEnable(loadBalanceEnable: boolean): ShowConsoleConfigResponse {
        this['load_balance_enable'] = loadBalanceEnable;
        return this;
    }
    public set loadBalanceEnable(loadBalanceEnable: boolean | undefined) {
        this['load_balance_enable'] = loadBalanceEnable;
    }
    public get loadBalanceEnable() {
        return this['load_balance_enable'];
    }
    public withIpv6ProtectionEnable(ipv6ProtectionEnable: boolean): ShowConsoleConfigResponse {
        this['ipv6_protection_enable'] = ipv6ProtectionEnable;
        return this;
    }
    public set ipv6ProtectionEnable(ipv6ProtectionEnable: boolean | undefined) {
        this['ipv6_protection_enable'] = ipv6ProtectionEnable;
    }
    public get ipv6ProtectionEnable() {
        return this['ipv6_protection_enable'];
    }
    public withPolicySharingEnable(policySharingEnable: boolean): ShowConsoleConfigResponse {
        this['policy_sharing_enable'] = policySharingEnable;
        return this;
    }
    public set policySharingEnable(policySharingEnable: boolean | undefined) {
        this['policy_sharing_enable'] = policySharingEnable;
    }
    public get policySharingEnable() {
        return this['policy_sharing_enable'];
    }
    public withIpGroup(ipGroup: boolean): ShowConsoleConfigResponse {
        this['ip_group'] = ipGroup;
        return this;
    }
    public set ipGroup(ipGroup: boolean | undefined) {
        this['ip_group'] = ipGroup;
    }
    public get ipGroup() {
        return this['ip_group'];
    }
    public withRobotActionEnable(robotActionEnable: boolean): ShowConsoleConfigResponse {
        this['robot_action_enable'] = robotActionEnable;
        return this;
    }
    public set robotActionEnable(robotActionEnable: boolean | undefined) {
        this['robot_action_enable'] = robotActionEnable;
    }
    public get robotActionEnable() {
        return this['robot_action_enable'];
    }
    public withHttp2Enable(http2Enable: boolean): ShowConsoleConfigResponse {
        this['http2_enable'] = http2Enable;
        return this;
    }
    public set http2Enable(http2Enable: boolean | undefined) {
        this['http2_enable'] = http2Enable;
    }
    public get http2Enable() {
        return this['http2_enable'];
    }
    public withTimeoutConfigEnable(timeoutConfigEnable: boolean): ShowConsoleConfigResponse {
        this['timeout_config_enable'] = timeoutConfigEnable;
        return this;
    }
    public set timeoutConfigEnable(timeoutConfigEnable: boolean | undefined) {
        this['timeout_config_enable'] = timeoutConfigEnable;
    }
    public get timeoutConfigEnable() {
        return this['timeout_config_enable'];
    }
}