import Paths from "../../model/Paths.ts";
import Path from "../../model/Path.ts";

const { test } = Deno;
import * as a from "https://deno.land/std/testing/asserts.ts";
import Param from "../../model/Param.ts";

const path_one = new Path('/one');
const path_two = new Path('/one/two');
const path_three = new Path('/one/two/three');

const paths = new Paths([
  path_one,
  path_two,
  path_three
]);

const dirParam_three = new Param(':three');
const dirParam_o = new Param(':o');
const noDirParam = new Param('hoge');

test('when_noDirParam', () => {
  const filtered = paths.filter(noDirParam);

  a.assertStrictEquals(true, filtered.includes(path_one));
  a.assertStrictEquals(true, filtered.includes(path_two));
  a.assertStrictEquals(true, filtered.includes(path_three));
});

test('filter_by_three', () => {
  const filtered = paths.filter(dirParam_three);

  a.assertStrictEquals(false, filtered.includes(path_one));
  a.assertStrictEquals(false, filtered.includes(path_two));
  a.assertStrictEquals(true, filtered.includes(path_three));
});

test('filter_by_o', () => {
  const filtered = paths.filter(dirParam_o);

  a.assertStrictEquals(true, filtered.includes(path_one));
  a.assertStrictEquals(true, filtered.includes(path_two));
  a.assertStrictEquals(false, filtered.includes(path_three));
});