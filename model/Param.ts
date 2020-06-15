
/*
 * プロジェクト名のみで検索する場合: 任意の文字列
 * ディレクトリ名で検索する場合: :任意の文字列
 * ディレクトリ名 + プロジェクト名で検索する場合: :ディレクトリ用文字列:プロジェクト用検索文字列
 *
 * 検索はいずれも部分一致となる
 */
class Param {

  private readonly _dirParam: string | null;
  private readonly _projectParam: string;

  get dirParam() {
    return this._dirParam;
  }

  get projectParam() {
    return this._projectParam;
  }

  constructor(param: string) {
    [this._dirParam, this._projectParam] = this.parse(param);
  }

  /*
   * return [dirParam, projectParam]
   */
  private parse = (param: string): [string | null, string] => {
    if (param.startsWith(':')) {
      // 3つ目の「:」は考慮しない
      const [_, dirParam, projectParam] = param.split(':');
      return [dirParam, projectParam ?? ''];
    } else {
      return [null, param];
    }
  }

  hasDirParam = (): boolean => {
    return this._dirParam !== null;
  }
}

export default Param;