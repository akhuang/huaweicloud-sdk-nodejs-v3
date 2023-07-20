

export class WaybillElectronicResult {
    public code?: string;
    private 'receiver_name'?: string;
    private 'receiver_phone'?: string;
    private 'receiver_address'?: string;
    private 'sender_name'?: string;
    private 'sender_phone'?: string;
    private 'sender_address'?: string;
    private 'waybill_number'?: string;
    public confidence?: object;
    public constructor() { 
    }
    public withCode(code: string): WaybillElectronicResult {
        this['code'] = code;
        return this;
    }
    public withReceiverName(receiverName: string): WaybillElectronicResult {
        this['receiver_name'] = receiverName;
        return this;
    }
    public set receiverName(receiverName: string  | undefined) {
        this['receiver_name'] = receiverName;
    }
    public get receiverName(): string | undefined {
        return this['receiver_name'];
    }
    public withReceiverPhone(receiverPhone: string): WaybillElectronicResult {
        this['receiver_phone'] = receiverPhone;
        return this;
    }
    public set receiverPhone(receiverPhone: string  | undefined) {
        this['receiver_phone'] = receiverPhone;
    }
    public get receiverPhone(): string | undefined {
        return this['receiver_phone'];
    }
    public withReceiverAddress(receiverAddress: string): WaybillElectronicResult {
        this['receiver_address'] = receiverAddress;
        return this;
    }
    public set receiverAddress(receiverAddress: string  | undefined) {
        this['receiver_address'] = receiverAddress;
    }
    public get receiverAddress(): string | undefined {
        return this['receiver_address'];
    }
    public withSenderName(senderName: string): WaybillElectronicResult {
        this['sender_name'] = senderName;
        return this;
    }
    public set senderName(senderName: string  | undefined) {
        this['sender_name'] = senderName;
    }
    public get senderName(): string | undefined {
        return this['sender_name'];
    }
    public withSenderPhone(senderPhone: string): WaybillElectronicResult {
        this['sender_phone'] = senderPhone;
        return this;
    }
    public set senderPhone(senderPhone: string  | undefined) {
        this['sender_phone'] = senderPhone;
    }
    public get senderPhone(): string | undefined {
        return this['sender_phone'];
    }
    public withSenderAddress(senderAddress: string): WaybillElectronicResult {
        this['sender_address'] = senderAddress;
        return this;
    }
    public set senderAddress(senderAddress: string  | undefined) {
        this['sender_address'] = senderAddress;
    }
    public get senderAddress(): string | undefined {
        return this['sender_address'];
    }
    public withWaybillNumber(waybillNumber: string): WaybillElectronicResult {
        this['waybill_number'] = waybillNumber;
        return this;
    }
    public set waybillNumber(waybillNumber: string  | undefined) {
        this['waybill_number'] = waybillNumber;
    }
    public get waybillNumber(): string | undefined {
        return this['waybill_number'];
    }
    public withConfidence(confidence: object): WaybillElectronicResult {
        this['confidence'] = confidence;
        return this;
    }
}