import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const proj = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

test('capacitor android present', () => {
  for (const rel of ['package.json', 'capacitor.config.json', 'android', 'www/index.html']) {
    assert.ok(fs.existsSync(path.join(proj, rel)), `missing ${rel}`);
  }
});
