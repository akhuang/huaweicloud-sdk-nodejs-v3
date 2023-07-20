

export class ProgramItemRequestBase {
    public materialId?: string;
    public playTime?: number;
    public constructor(materialId?: string, playTime?: number) { 
        this['materialId'] = materialId;
        this['playTime'] = playTime;
    }
    public withMaterialId(materialId: string): ProgramItemRequestBase {
        this['materialId'] = materialId;
        return this;
    }
    public withPlayTime(playTime: number): ProgramItemRequestBase {
        this['playTime'] = playTime;
        return this;
    }
}