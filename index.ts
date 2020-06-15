import Setting from "./Setting.ts";
import { Output } from "./AlfredInterface.ts";

const { args } = Deno;
import { parse } from "https://deno.land/std/flags/mod.ts";
import { getAllProjects } from "./repository/Local.ts";
import Path from "./model/Path.ts";
import Param from "./model/Param.ts";
import Paths from "./model/Paths.ts";
import readSetting from "./read_setting.ts";



const input: string = parse(args)._[0].toString();
const pathToSettingFile: string = parse(args)._[1].toString();

const param = new Param(input);

const setting = readSetting(pathToSettingFile) as Setting;

const paths = new Paths(setting.paths.map(path => {
  return new Path(path);
}));

const projects = getAllProjects(paths, param);

const output: Output = {
  "items": projects
}

console.log(JSON.stringify(output));