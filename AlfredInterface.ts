export interface ScriptFilter {
  uid?: string;
  type: "default" | "file" | "file:skipcheck";
  title: string;
  subtitle: string;
  arg: string;
  icon?: Icon;
  valid?: boolean;
  match?: string;
  autocomplete?: string;
  mods?: object;
  text?: object;
  quicklookurl?: string;
}

interface Icon {
  type: string;
  path: string;
}

export interface Output {
  items: ScriptFilter[]
}