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

let hoge: ScriptFilter[] = [];

const searchWord = input[0]?.toString() ?? null;

if (items.length === 0) {
  hoge.push({
    type: "default",
    title: "no result",
    subtitle: "no",
    arg: "no"
  })
} else {
  if (searchWord == null) {
    hoge = items
  } else {
    const r = new RegExp(searchWord);
    hoge = items.filter(item => {
      const filename = item.title;
      return !!filename.match(r);
    })
  }
}

const output: Output = {
  "items": hoge
}

console.log(JSON.stringify(output));