import Setting from "./Setting.ts";

const { readTextFileSync } = Deno;

const readSetting = (path: string): Setting | undefined => {
  try {

    const setting: Setting = JSON.parse(readTextFileSync(path)).setting;

    if (setting.paths === undefined) throw new TypeError('設定ファイルにpathsがありません');
    if (! (setting.paths instanceof Array)) throw new TypeError('設定ファイルのpathsは配列を指定してください');

    return setting as Setting;

  } catch (e) {

    const message = (e instanceof TypeError) ? e.message
                                             : '設定ファイルが見つかりません'

    console.log(JSON.stringify({
      "items": [
        {
          type: "default",
          title: "設定ファイルのエラー",
          subtitle: message,
        }
      ]
    }));

    throw e;
  }
}

export default readSetting;