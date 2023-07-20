

export class RestSwitchModeReqBody {
    public switchMode?: string;
    public imageType?: number;
    public constructor(switchMode?: string, imageType?: number) { 
        this['switchMode'] = switchMode;
        this['imageType'] = imageType;
    }
    public withSwitchMode(switchMode: string): RestSwitchModeReqBody {
        this['switchMode'] = switchMode;
        return this;
    }
    public withImageType(imageType: number): RestSwitchModeReqBody {
        this['imageType'] = imageType;
        return this;
    }
}