import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { validateSampleRequest, sampleApplication, repaymentSchedule } from '../src/demo/model.mjs';

test('sample origination validates bounded amounts without approving a loan', () => {
  for (const value of ['', 'abc', '0', '-1', '100001', 'Infinity']) assert.ok(validateSampleRequest(value));
  assert.equal(validateSampleRequest('12000'), '');
  assert.equal(sampleApplication.status, 'Awaiting document review');
  assert.equal(repaymentSchedule.length, 3);
});
test('public demo has no network, persistence, or provider dependencies', () => {
  const source = readFileSync(new URL('../src/demo/Demo.jsx', import.meta.url), 'utf8');
  assert.doesNotMatch(source, /axios|fetch\(|localStorage|sessionStorage|Paystack|authContext/);
  const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
  assert.doesNotMatch(html, /js\.paystack/);
});


test('public query entry is explicit and only applies to the root path', async () => {
  const { isPublicDemoEntry } = await import('../src/demo/entry.mjs');
  for (const query of ['', '?demo=0', '?demo=true', '?other=1', '?demographic=1', '?demo=1&demo=0']) assert.equal(isPublicDemoEntry('/', query), false);
  assert.equal(isPublicDemoEntry('/', '?demo=1'), true);
  assert.equal(isPublicDemoEntry('/', '?source=portfolio&demo=1'), true);
  assert.equal(isPublicDemoEntry('/auth', '?demo=1'), false);
  assert.equal(isPublicDemoEntry('/borrower/dashboard', '?demo=1'), false);
});
