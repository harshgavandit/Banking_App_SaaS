# LendFlow

LendFlow is a loan management app with separate dashboards for borrowers, lenders, and administrators. It covers loan requests, review decisions, investment records, and repayment tracking.

- **Borrowers** can submit a loan request with the amount, term, purpose, interest rate, and repayment schedule. They can also view their loan records, notifications, and account profile.
- **Lenders** can browse approved loans, record investments against a loan, view their investment details and repayment history, and manage their profile.
- **Administrators** can review loan requests, approve or reject them, manage user roles and account activation, and view loan reports. They can also update platform settings such as interest rates, repayment terms, and fees.

The app includes registration and sign-in, in-app notifications, and support requests. Users can raise a support request, while administrators can review it and update its status.

## Backend configuration

Create an ignored local environment file from the placeholder template:

```powershell
Copy-Item backend/.env.example backend/.env
```

On macOS/Linux, use `cp backend/.env.example backend/.env`. Fill in your own credentials before starting the backend:

| Variable | Used by |
| --- | --- |
| `DATABASE_URL` | Sequelize database connection in `backend/config.js`. |
| `JWT_SECRET` | JWT configuration in `backend/config.js`. Use a long, randomly generated value. |
| `PAYSTACK_SECRET_KEY` | Paystack requests in `backend/controllers/paymentController.js`. |
| `PORT` | Backend listener; defaults to `5000`. |

The template lists the configuration names consumed by the backend. The legacy environment file also contained `PUBLIC_KEY`, which the current backend does not read. Server credentials belong in `backend/.env` or the hosting provider's server-side environment settings, never in frontend source or committed files.

```powershell
cd backend
npm install
npm start
```

For hosted deployments, keep the existing server-side environment settings configured at the provider; a source checkout no longer supplies backend credentials. This cleanup does not change authentication code or deployed settings. New deployments must provide their own database and service credentials.

Previous commits tracked a backend environment file. Removing it from current source does not erase Git history or revoke the exposed credentials. Provider-side credential rotation and JWT secret rotation have not been verified here. Rotating a signing secret separately invalidates existing tokens, so plan that operation independently of this source cleanup.
