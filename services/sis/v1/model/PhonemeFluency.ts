

export class PhonemeFluency {
    public score?: number;
    public rhythm?: number;
    public constructor(score?: number, rhythm?: number) { 
        this['score'] = score;
        this['rhythm'] = rhythm;
    }
    public withScore(score: number): PhonemeFluency {
        this['score'] = score;
        return this;
    }
    public withRhythm(rhythm: number): PhonemeFluency {
        this['rhythm'] = rhythm;
        return this;
    }
}