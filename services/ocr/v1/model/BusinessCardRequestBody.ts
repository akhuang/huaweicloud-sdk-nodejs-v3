

export class BusinessCardRequestBody {
    public image?: string;
    public url?: string;
    private 'detect_direction'?: boolean;
    private 'return_adjusted_image'?: boolean;
    public constructor() { 
    }
    public withImage(image: string): BusinessCardRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): BusinessCardRequestBody {
        this['url'] = url;
        return this;
    }
    public withDetectDirection(detectDirection: boolean): BusinessCardRequestBody {
        this['detect_direction'] = detectDirection;
        return this;
    }
    public set detectDirection(detectDirection: boolean  | undefined) {
        this['detect_direction'] = detectDirection;
    }
    public get detectDirection(): boolean | undefined {
        return this['detect_direction'];
    }
    public withReturnAdjustedImage(returnAdjustedImage: boolean): BusinessCardRequestBody {
        this['return_adjusted_image'] = returnAdjustedImage;
        return this;
    }
    public set returnAdjustedImage(returnAdjustedImage: boolean  | undefined) {
        this['return_adjusted_image'] = returnAdjustedImage;
    }
    public get returnAdjustedImage(): boolean | undefined {
        return this['return_adjusted_image'];
    }
}