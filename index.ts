import Setting from "./Setting.ts";
import {Output, ScriptFilter} from "./AlfredInterface.ts";

const { args, readDirSync, readTextFileSync } = Deno;
import { parse } from "https://deno.land/std/flags/mod.ts";
import { join } from "https://deno.land/std/path/mod.ts";

const input = parse(args)._;

const dirname = new URL(".", import.meta.url).pathname;

const data: Setting = JSON.parse(readTextFileSync(dirname + 'setting.json')).setting;

const getProject = (path: string): ScriptFilter[] => {

  const items: ScriptFilter[] = [];

  for (const item of readDirSync(path)) {
    if (item.isFile) continue;

    items.push({
      type: "file",
      title: item.name,
      subtitle: join(data.dirs[0], item.name),
      arg: item.name
    })
  }

  return items;
}

const items: ScriptFilter[] = data.dirs.flatMap(path => {
  return getProject(path);
});

if (items.length === 0) {
  items.push({
    type: "default",
    title: "no result",
    subtitle: "no",
    arg: "no"
  })
}

const output: Output = {
  "items": items
}

console.log(JSON.stringify(output));