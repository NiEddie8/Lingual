import { enablePromise, openDatabase, SQLiteDatabase } from "react-native-sqlite-storage";
import { Translation, UserSet } from "./model/Types";

enablePromise(true);

const getDb = async (): Promise<SQLiteDatabase> => {
    return await openDatabase({name: 'Language_Learner.db', location : 'default'});
}

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

export const loadTranslation = async (set_id: number): Promise<Translation[]> => {
    const db = await getDb();
    const resultSet = await db.executeSql(
        ' SELECT id, set_id, character, translation ' +
        ' FROM translation ' + 
        ' WHERE set_id=? ',
        [set_id]);
    console.log('Result: ', JSON.stringify(resultSet));
    const translations: Translation[] = [];
    if (resultSet.length > 0 && resultSet[0].rows.length > 0) {
        for (let i = 0; i < resultSet[0].rows.length; i++) {
            const item = resultSet[0].rows.item(i);
            translations.push(item as Translation);
        }
    }
    return translations;
};

export const loadAllSets = async (): Promise<UserSet[]> => {
    const db = await getDb();
    const resultSet = await db.executeSql(
        ' SELECT id, name, language ' +
        ' FROM user_set ');
    console.log('Result: ', JSON.stringify(resultSet));
    const userSets: UserSet[] = [];
    if (resultSet.length > 0 && resultSet[0].rows.length > 0) {
        for (let i = 0; i < resultSet[0].rows.length; i++) {
            const item = resultSet[0].rows.item(i);
            userSets.push(item as UserSet);
        }
    }

    return userSets;
};