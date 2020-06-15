import Path from "../../model/Path.ts";

const { test } = Deno;
import * as a from "https://deno.land/std/testing/asserts.ts";


test('root_pass', () => {
  const path = new Path('/');

  a.assertStrictEquals('/', path.lastPath);
});

test('1_depth', () => {
  const path = new Path('/one');

  a.assertStrictEquals('one', path.lastPath);
});

test('2_depth', () => {
  const path = new Path('/one/two');

  a.assertStrictEquals('two', path.lastPath);
});

test('not_absolute_path', () => {
  a.assertThrows(() => {
    const path = new Path('./one/two');
  }, Error, '絶対パスで指定してください');
});