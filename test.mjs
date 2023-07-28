import test from "node:test";
import assert from 'node:assert';

test('synchronous passing test', (t) => {
  assert.strictEqual(1,1);
});

