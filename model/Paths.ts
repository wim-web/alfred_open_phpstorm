import Path from "./Path.ts";
import Param from "./Param.ts";

class Paths {

  constructor(readonly paths: Path[]) {}

  filter = (param: Param): Path[] => {
    if (param.hasDirParam()) {
      const r = new RegExp(param.dirParam as string);
      return this.paths.filter(path => {
        return !! path.lastPath.match(r);
      });
    } else {
      return this.paths;
    }
  }
}

export default Paths;