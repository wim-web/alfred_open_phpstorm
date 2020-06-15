
class Path {

  readonly path: string;

  get lastPath(): string {
    const last = this.path.split('/').pop();

    return last === '' ? '/' : last as string;
  }

  constructor(path: string) {
    if (! path.startsWith('/')) {
      throw new Error('絶対パスで指定してください');
    }
    this.path = path;
  }

}

export default Path;