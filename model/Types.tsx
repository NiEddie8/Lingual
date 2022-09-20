export class ChineseQuestion {
    id?: number;
    ChineseCharacter: string;
    EnglishTranslation: string;

    constructor(chineseCharacter: string, englishTranslation: string) {
        this.ChineseCharacter = chineseCharacter;
        this.EnglishTranslation = englishTranslation;
    }
}

export class Translation {
    id?: number;
    setId?: number;
    character: string;
    translation: string;

    constructor(character: string, translation: string) {
        this.character = character;
        this.translation = translation;
    }
}

export class UserSet {
    id?: number;
    name: string;
    language: string;

    constructor(name: string, language: string) {
        this.name = name;
        this.language = language;
    }
}