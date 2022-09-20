import { enablePromise, openDatabase, SQLiteDatabase } from "react-native-sqlite-storage";
import { Translation, ChineseQuestion, UserSet } from "./model/Types";

enablePromise(true);

const getDb = async (): Promise<SQLiteDatabase> => {
    return await openDatabase({name: 'Language_Learner.db', location : 'default'});
}

export const loadChinese = async (id: number): Promise<any> => {
    const db = await getDb();
    const resultSet = await db.executeSql(
        ' SELECT id, ChineseCharacter, EnglishTranslation ' +
        ' FROM Chinese ' + 
        ' WHERE id=? ',
        [id]);
    console.log('Result: ', JSON.stringify(resultSet));
    if (resultSet.length > 0 && resultSet[0].rows.length > 0) {
            return resultSet[0].rows.item(0) as ChineseQuestion;
    }
};

const createTranslation = async (setId: number, translation: Translation) : Promise<Translation> => {
    const db = await getDb();
    const result = await db.executeSql(
        'INSERT INTO translation (set_id, character, translation) VALUES (?, ?, ?)',
        [setId, translation.character, translation.translation]
    );

    const resultSet = await db.executeSql(
        'SELECT * FROM translation WHERE character = ?',
        [translation.character]
    );

    const insertedTranslation = resultSet[0].rows.item(0) as Translation;
    console.log('tranlation: ', JSON.stringify(insertedTranslation));
    return insertedTranslation;
 };

export const createSet = async ( userSet: UserSet, translations: Translation[] ): Promise<UserSet> => {
    const db = await getDb();

    // Create a new userset
    const result = await db.executeSql(
            'INSERT INTO user_set (name, language) VALUES(?, ?)',
            [userSet.name, userSet.language]);


    const resultSet = await db.executeSql(
        'SELECT * FROM user_set WHERE name = ?',
        [userSet.name]
    );

    const newSet = resultSet[0].rows.item(0) as UserSet;
    console.log('Userset: ', JSON.stringify(newSet));

    // Create all the translations in the new set
    translations.forEach((translation) => {
        createTranslation(newSet.id!, translation);
    });
    return newSet;
};