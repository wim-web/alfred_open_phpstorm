import { noProject, ScriptFilter } from "../AlfredInterface.ts";

const { readDirSync } = Deno;
import { join } from "https://deno.land/std/path/mod.ts";
import Path from "../model/Path.ts";
import Param from "../model/Param.ts";
import Paths from "../model/Paths.ts";

const getProjects = (path: Path, param: Param): ScriptFilter[] => {

  const items: ScriptFilter[] = [];

  const r = new RegExp(param.projectParam);

  for (const entry of readDirSync(path.path)) {

    if (entry.isFile) continue;
    if ((!! entry.name.match(r)) === false) continue;

    items.push({
      type: "file",
      title: entry.name,
      subtitle: join(path.path, entry.name),
      arg: join(path.path, entry.name)
    });
  }

  return items;
}

export const getAllProjects = (paths: Paths, param: Param): ScriptFilter[] => {

  const projects = paths.filter(param).flatMap(path => {
    return getProjects(path, param);
  });

  return projects.length === 0 ? noProject : projects;
}