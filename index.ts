import Setting from "./Setting.ts";
import { Output } from "./AlfredInterface.ts";

const { args, readTextFileSync } = Deno;
import { parse } from "https://deno.land/std/flags/mod.ts";
import { getAllProjects } from "./repository/Local.ts";

const input: string = parse(args)._[0].toString();
const dirname = new URL(".", import.meta.url).pathname;
const setting: Setting = JSON.parse(readTextFileSync(dirname + 'setting.json')).setting;

const projects = getAllProjects(setting.dirs, input);

const output: Output = {
  "items": projects
}

console.log(JSON.stringify(output));