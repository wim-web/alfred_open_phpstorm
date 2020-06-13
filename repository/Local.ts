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

const filterDir = (dirs: string[], searchWord: string): [string[], string] => {

  if (! searchWord.startsWith('/')) return [dirs, searchWord];

  const arr = searchWord.split('/');
  const searchDir = arr[1];

  const filtered = dirs.filter(dir => {
    const current = dir.split('/').pop();
    const r = new RegExp(searchDir);

    return !! current?.match(r);
  });

  return [filtered, arr[2]];

}

export const getAllProjects = (dirs: string[], searchWord: string): ScriptFilter[] => {

  const [filtered, word] = filterDir(dirs, searchWord);

  const projects = filtered.flatMap(dir => {
    return getProjects(dir, word);
  });

  return projects.length === 0 ? noProject : projects;
}

const noProject: ScriptFilter[] = [{
  type: "default",
  title: "no result",
  subtitle: "no",
  arg: "no"
}];