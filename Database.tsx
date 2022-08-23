import { enablePromise, openDatabase, SQLiteDatabase } from "react-native-sqlite-storage";

enablePromise(true);

const getDb = async (): Promise<SQLiteDatabase> => {
    return await openDatabase({name: 'Language_Learner.db', createFromLocation : 1});
}

export const loadChinese = async (id: number): Promise<> => {
    const db = await getDb();
    const resultSet = await db.executeSql(
        ' SELECT Chinese.id, Chinese.ChineseCharacter, Chinese.EnglishTranslation ' +
        ' FROM Chinese' + 
        ' WHERE id=?'
        [id]);

    console.log('Result: ', JSON.stringify(resultSet));
    if (resultSet.length > 0 && resultSet[0].rows.length > 0) {
        return resultSet[0].rows.item(0);
    } else {
        return Promise.reject();
    }
}