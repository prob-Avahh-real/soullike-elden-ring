const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

test('index.html includes core soulslike mechanics', () => {
  assert.match(html, /stamina/i);
  assert.match(html, /dodge/i);
  assert.match(html, /bonfire/i);
  assert.match(html, /souls/i);
  assert.match(html, /lockOn|lock-on/i);
});

test('index.html includes mobile and smart device support', () => {
  assert.match(html, /touch-action:none/);
  assert.match(html, /DeviceOrientationEvent/);
  assert.match(html, /DeviceMotionEvent/);
  assert.match(html, /max-width:280px/);
  assert.match(html, /joystick/i);
});

test('package.json has required npm scripts', () => {
  const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
  assert.ok(pkg.scripts.build);
  assert.ok(pkg.scripts.start);
  assert.ok(pkg.scripts.test);
});
