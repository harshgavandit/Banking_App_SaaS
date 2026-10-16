import { useState } from 'react';
import { Link } from 'react-router-dom';
import { sampleApplication as loan, repaymentSchedule, validateSampleRequest } from './model.mjs';
import './demo.css';

const money = value => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);

export default function Demo() {
  const [view, setView] = useState('Borrower origination');
  const [amount, setAmount] = useState('12000');
  const [message, setMessage] = useState('');
  return <div className="lend-demo">
    <header className="lend-top"><Link to="/" className="lend-brand">LendFlow <span> / product demo</span></Link><Link to="/signin">Live app sign in →</Link></header>
    <main className="lend-main">
      <div className="lend-intro"><p className="lend-eyebrow">BORROW · REVIEW · REPAY</p><h1>A loan journey, made visible.</h1><p>Explore how borrowers and lenders move through the same application.</p></div>
      <aside className="lend-notice"><strong>Read-only sample workspace.</strong> All names, amounts, statuses and dates are fictional fixtures. Nothing is submitted, approved, funded or paid. This demo uses no account, payment provider, credit check or live underwriting.</aside>
      <div className="lend-layout">
        <nav className="lend-sidebar" aria-label="Sample workflow">{['Borrower origination', 'Lender review', 'Repayments'].map((label, index) => <button key={label} aria-pressed={view === label} onClick={() => setView(label)}><span>0{index + 1}</span>{label}</button>)}<p>One application.<br />Three perspectives.<br /><strong>LF-1042 · Sample</strong></p></nav>
        <section className="lend-panel" aria-labelledby="workflow-title">
          <div className="lend-panel-title"><div><p className="lend-eyebrow">SAMPLE APPLICATION / {loan.id}</p><h2 id="workflow-title">{view}</h2></div><span className="lend-status">{loan.status}</span></div>
          {view === 'Borrower origination' && <><p>A workshop is requesting equipment finance. Preview the fields and validation before the document review stage.</p><dl className="lend-summary"><div><dt>Requested amount</dt><dd>{money(loan.amount)}</dd></div><div><dt>Term</dt><dd>{loan.term} months</dd></div><div><dt>Purpose</dt><dd>{loan.purpose}</dd></div></dl><form className="lend-form" onSubmit={event => { event.preventDefault(); setMessage(validateSampleRequest(amount) || 'Sample amount is valid. Preview only: no application submitted and no eligibility decision made.'); }}><label htmlFor="sample-amount">Try amount validation (sample USD)</label><input id="sample-amount" type="text" inputMode="decimal" value={amount} onChange={event => { setAmount(event.target.value); setMessage(''); }} aria-describedby="amount-help amount-result" /><p id="amount-help">Try 500 to see the invalid amount state, or 12000 for a valid preview.</p><button type="submit">Check sample amount</button><p id="amount-result" role="status">{message}</p></form></>}
          {view === 'Lender review' && <><p>Review a fictional request using the lender queue pattern. The status is a stored sample, not a risk score or automated recommendation.</p><dl className="lend-summary"><div><dt>Borrower</dt><dd>{loan.borrower}</dd></div><div><dt>Requested</dt><dd>{money(loan.amount)}</dd></div><div><dt>Review stage</dt><dd>Document checks</dd></div></dl><h3>Review checklist</h3><ul className="lend-checklist"><li>✓ Purpose of funds supplied</li><li>✓ Requested term supplied</li><li>○ Identity and income evidence awaiting review</li></ul><div className="lend-inactive">Approval and investment actions are unavailable in this public workspace.</div></>}
          {view === 'Repayments' && <><p>Illustrative schedule for a separate funded sample loan. Amounts are fixtures and are not calculated offers or payment instructions.</p><div className="lend-table-scroll"><table><caption>Sample repayment schedule · LF-0988</caption><thead><tr><th scope="col">Due date</th><th scope="col">Amount</th><th scope="col">Status</th></tr></thead><tbody>{repaymentSchedule.map(row => <tr key={row.date}><td>{row.date}</td><td>{money(row.amount)}</td><td>{row.status}</td></tr>)}</tbody></table></div><div className="lend-inactive">Payments and bank details are unavailable. No money can move from this demo.</div></>}
        </section>
      </div><footer className="lend-footer">LendFlow · Independent lending workflow portfolio project · <Link to="/">About the project</Link></footer>
    </main>
  </div>;
}
