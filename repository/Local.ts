import {ScriptFilter} from "../AlfredInterface.ts";

const {readDirSync} = Deno;
import {join} from "https://deno.land/std/path/mod.ts";

const getProjects = (path: string, searchWord: string): ScriptFilter[] => {

  const items: ScriptFilter[] = [];
  const r = new RegExp(searchWord);

  for (const item of readDirSync(path)) {

    if (item.isFile) continue;
    if ((!!item.name.match(r)) === false) continue;

    items.push({
      type: "file",
      title: item.name,
      subtitle: join(path, item.name),
      arg: item.name
    });
  }

  return items;
}

export const getAllProjects = (dirs: string[], searchWord: string): ScriptFilter[] => {
  const projects = dirs.flatMap(dir => {
    return getProjects(dir, searchWord);
  });

  return projects.length === 0 ? noProject : projects;
}

const noProject: ScriptFilter[] = [{
  type: "default",
  title: "no result",
  subtitle: "no",
  arg: "no"
}];