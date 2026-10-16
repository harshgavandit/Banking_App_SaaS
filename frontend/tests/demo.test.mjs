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
