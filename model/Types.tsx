export class ChineseQuestion {
    id?: number;
    ChineseCharacter: string;
    EnglishTranslation: string;

    constructor(chineseCharacter: string, englishTranslation: string) {
        this.ChineseCharacter = chineseCharacter;
        this.EnglishTranslation = englishTranslation;
    }
}