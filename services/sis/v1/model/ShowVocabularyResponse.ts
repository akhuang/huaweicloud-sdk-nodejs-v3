
import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ShowVocabularyResponse extends SdkResponse {
    private 'vocabulary_id'?: string | undefined;
    public name?: string;
    public description?: string;
    public language?: ShowVocabularyResponseLanguageEnum;
    public contents?: Array<string>;
    public constructor() { 
        super();
    }
    public withVocabularyId(vocabularyId: string): ShowVocabularyResponse {
        this['vocabulary_id'] = vocabularyId;
        return this;
    }
    public set vocabularyId(vocabularyId: string | undefined) {
        this['vocabulary_id'] = vocabularyId;
    }
    public get vocabularyId() {
        return this['vocabulary_id'];
    }
    public withName(name: string): ShowVocabularyResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowVocabularyResponse {
        this['description'] = description;
        return this;
    }
    public withLanguage(language: ShowVocabularyResponseLanguageEnum): ShowVocabularyResponse {
        this['language'] = language;
        return this;
    }
    public withContents(contents: Array<string>): ShowVocabularyResponse {
        this['contents'] = contents;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowVocabularyResponseLanguageEnum {
    CHINESE_MANDARIN = 'chinese-mandarin',
    ENGLISH = ' english'
}
