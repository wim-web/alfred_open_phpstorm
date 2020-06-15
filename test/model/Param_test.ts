import Param from "../../model/Param.ts";

const { test } = Deno;
import * as a from "https://deno.land/std/testing/asserts.ts";

/*
 * プロジェクト名のみで検索する場合: 任意の文字列
 * ディレクトリ名で検索する場合: :任意の文字列
 * ディレクトリ名 + プロジェクト名で検索する場合: :ディレクトリ用文字列:プロジェクト用検索文字列
 */

test('only_project_name', () => {
  const param = new Param('project');

  a.assertStrictEquals('project', param.projectParam);
  a.assertStrictEquals(null, param.dirParam);
  a.assertStrictEquals(false, param.hasDirParam());
});

test('only_directory_name', () => {
  const param = new Param(':directory');

  a.assertStrictEquals(null, param.projectParam);
  a.assertStrictEquals('directory', param.dirParam);
  a.assertStrictEquals(true, param.hasDirParam());
});

test('both_project_name_and_directory_name', () => {
  const param = new Param(':directory:project');

  a.assertStrictEquals('project', param.projectParam);
  a.assertStrictEquals('directory', param.dirParam);
  a.assertStrictEquals(true, param.hasDirParam());
});