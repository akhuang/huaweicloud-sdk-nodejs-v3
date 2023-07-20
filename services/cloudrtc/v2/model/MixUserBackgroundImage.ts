

export class MixUserBackgroundImage {
    private 'user_id'?: string;
    private 'image_uri'?: string;
    public constructor(userId?: string, imageUri?: string) { 
        this['user_id'] = userId;
        this['image_uri'] = imageUri;
    }
    public withUserId(userId: string): MixUserBackgroundImage {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withImageUri(imageUri: string): MixUserBackgroundImage {
        this['image_uri'] = imageUri;
        return this;
    }
    public set imageUri(imageUri: string  | undefined) {
        this['image_uri'] = imageUri;
    }
    public get imageUri(): string | undefined {
        return this['image_uri'];
    }
}