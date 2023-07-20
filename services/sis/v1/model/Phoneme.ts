import { PhonemeFluency } from './PhonemeFluency';
import { PhonemePronunciation } from './PhonemePronunciation';


export class Phoneme {
    public arpa?: string;
    public ipa?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public fluency?: PhonemeFluency;
    public pronunciation?: PhonemePronunciation;
    public constructor(arpa?: string, ipa?: string, startTime?: number, endTime?: number, fluency?: PhonemeFluency, pronunciation?: PhonemePronunciation) { 
        this['arpa'] = arpa;
        this['ipa'] = ipa;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['fluency'] = fluency;
        this['pronunciation'] = pronunciation;
    }
    public withArpa(arpa: string): Phoneme {
        this['arpa'] = arpa;
        return this;
    }
    public withIpa(ipa: string): Phoneme {
        this['ipa'] = ipa;
        return this;
    }
    public withStartTime(startTime: number): Phoneme {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): Phoneme {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withFluency(fluency: PhonemeFluency): Phoneme {
        this['fluency'] = fluency;
        return this;
    }
    public withPronunciation(pronunciation: PhonemePronunciation): Phoneme {
        this['pronunciation'] = pronunciation;
        return this;
    }
}