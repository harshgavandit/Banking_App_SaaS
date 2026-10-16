export const sampleApplication = Object.freeze({ id: 'LF-1042', borrower: 'Sample workshop', amount: 12000, term: 12, purpose: 'Equipment upgrade', status: 'Awaiting document review' });
export const repaymentSchedule = Object.freeze([
  { date: '01 Nov 2026', amount: 1050, status: 'Paid (sample)' },
  { date: '01 Dec 2026', amount: 1050, status: 'Upcoming' },
  { date: '01 Jan 2027', amount: 1050, status: 'Scheduled' },
]);
export function validateSampleRequest(value) {
  const amount = Number(value);
  return !String(value).trim() || !Number.isFinite(amount) || amount < 1000 || amount > 100000
    ? 'Enter a sample amount between $1,000 and $100,000. No application will be submitted.' : '';
}
