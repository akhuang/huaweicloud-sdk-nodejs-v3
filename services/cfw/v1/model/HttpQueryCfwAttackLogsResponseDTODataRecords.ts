import { Packet } from './Packet';
import { PacketMessage } from './PacketMessage';


export class HttpQueryCfwAttackLogsResponseDTODataRecords {
    public direction?: HttpQueryCfwAttackLogsResponseDTODataRecordsDirectionEnum | string;
    public action?: string;
    private 'event_time'?: string;
    private 'attack_type'?: string;
    private 'attack_rule'?: string;
    public level?: string;
    public source?: string;
    private 'packet_length'?: number;
    private 'attack_rule_id'?: number;
    private 'hit_time'?: number;
    private 'log_id'?: string;
    private 'src_ip'?: string;
    private 'src_port'?: number;
    private 'dst_ip'?: string;
    private 'dst_port'?: number;
    public protocol?: string;
    public packet?: Packet;
    public app?: string;
    public packetMessages?: Array<PacketMessage>;
    public constructor() { 
    }
    public withDirection(direction: HttpQueryCfwAttackLogsResponseDTODataRecordsDirectionEnum | string): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['direction'] = direction;
        return this;
    }
    public withAction(action: string): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['action'] = action;
        return this;
    }
    public withEventTime(eventTime: string): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['event_time'] = eventTime;
        return this;
    }
    public set eventTime(eventTime: string  | undefined) {
        this['event_time'] = eventTime;
    }
    public get eventTime(): string | undefined {
        return this['event_time'];
    }
    public withAttackType(attackType: string): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['attack_type'] = attackType;
        return this;
    }
    public set attackType(attackType: string  | undefined) {
        this['attack_type'] = attackType;
    }
    public get attackType(): string | undefined {
        return this['attack_type'];
    }
    public withAttackRule(attackRule: string): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['attack_rule'] = attackRule;
        return this;
    }
    public set attackRule(attackRule: string  | undefined) {
        this['attack_rule'] = attackRule;
    }
    public get attackRule(): string | undefined {
        return this['attack_rule'];
    }
    public withLevel(level: string): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['level'] = level;
        return this;
    }
    public withSource(source: string): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['source'] = source;
        return this;
    }
    public withPacketLength(packetLength: number): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['packet_length'] = packetLength;
        return this;
    }
    public set packetLength(packetLength: number  | undefined) {
        this['packet_length'] = packetLength;
    }
    public get packetLength(): number | undefined {
        return this['packet_length'];
    }
    public withAttackRuleId(attackRuleId: number): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['attack_rule_id'] = attackRuleId;
        return this;
    }
    public set attackRuleId(attackRuleId: number  | undefined) {
        this['attack_rule_id'] = attackRuleId;
    }
    public get attackRuleId(): number | undefined {
        return this['attack_rule_id'];
    }
    public withHitTime(hitTime: number): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['hit_time'] = hitTime;
        return this;
    }
    public set hitTime(hitTime: number  | undefined) {
        this['hit_time'] = hitTime;
    }
    public get hitTime(): number | undefined {
        return this['hit_time'];
    }
    public withLogId(logId: string): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['log_id'] = logId;
        return this;
    }
    public set logId(logId: string  | undefined) {
        this['log_id'] = logId;
    }
    public get logId(): string | undefined {
        return this['log_id'];
    }
    public withSrcIp(srcIp: string): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['src_ip'] = srcIp;
        return this;
    }
    public set srcIp(srcIp: string  | undefined) {
        this['src_ip'] = srcIp;
    }
    public get srcIp(): string | undefined {
        return this['src_ip'];
    }
    public withSrcPort(srcPort: number): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['src_port'] = srcPort;
        return this;
    }
    public set srcPort(srcPort: number  | undefined) {
        this['src_port'] = srcPort;
    }
    public get srcPort(): number | undefined {
        return this['src_port'];
    }
    public withDstIp(dstIp: string): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['dst_ip'] = dstIp;
        return this;
    }
    public set dstIp(dstIp: string  | undefined) {
        this['dst_ip'] = dstIp;
    }
    public get dstIp(): string | undefined {
        return this['dst_ip'];
    }
    public withDstPort(dstPort: number): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['dst_port'] = dstPort;
        return this;
    }
    public set dstPort(dstPort: number  | undefined) {
        this['dst_port'] = dstPort;
    }
    public get dstPort(): number | undefined {
        return this['dst_port'];
    }
    public withProtocol(protocol: string): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['protocol'] = protocol;
        return this;
    }
    public withPacket(packet: Packet): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['packet'] = packet;
        return this;
    }
    public withApp(app: string): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['app'] = app;
        return this;
    }
    public withPacketMessages(packetMessages: Array<PacketMessage>): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['packetMessages'] = packetMessages;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum HttpQueryCfwAttackLogsResponseDTODataRecordsDirectionEnum {
    OUT2IN = 'out2in',
    IN2OUT = 'in2out'
}
