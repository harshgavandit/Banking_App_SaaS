# Fintech Banking Application

## Public read-only portfolio demo

The `frontend` client includes `/demo`: a public sample workspace requiring no account, database, provider credentials or API server. All records are fictional local fixtures. Existing account sign-in routes remain available separately.

LendFlow shows borrower origination with amount validation (try `500` and `12000`), a lender document-review checklist, and a fictional repayment schedule. Nothing is submitted, approved, invested or paid. The payment SDK loads only from the existing payment action, never from the public demo. The authenticated application remains an educational prototype; this change does not assert production credit, payment or security readiness.

```powershell
cd frontend
npm ci
npm run dev -- --host 127.0.0.1 --port 5192 --strictPort
# Open http://127.0.0.1:5192/demo
node --test tests/demo.test.mjs
npm run build
```

Static hosting must rewrite client-side routes such as `/demo` to `index.html`. Local build and sample checks do not prove the deployed site has received this revision or that live authenticated services work.


A full-stack peer-to-peer lending platform that connects **Admins**, **Lenders**, and **Borrowers** through a secure, role-based web application. The platform handles the complete loan lifecycle — from application and review to disbursement, repayment tracking, and reporting.

---

Live Link - https://banking-app-saas.onrender.com/

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [User Roles](#user-roles)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Overview

This application provides a complete fintech solution for managing loans between lenders and borrowers. It includes:

- Role-based access control (Admin, Lender, Borrower)
- Loan application, review, and approval workflow
- Real-time repayment tracking and notifications
- Investment management for lenders
- Payment integration via Paystack
- Reports and analytics dashboards
- Platform-wide settings and support management

---

## Features

### Admin
- Full user management (create, update, deactivate accounts)
- Loan oversight — approve, reject, or flag loans
- Platform settings configuration
- Support ticket management
- Reports and analytics across all users

### Lender
- Browse and invest in available loans
- View repayment schedules and histories
- Manage lender profile
- Receive notifications on loan activity
- Access support

### Borrower
- Submit loan requests with custom or predefined interest rates
- Track loan status and repayment schedules
- Make repayments via Paystack payment gateway
- Receive notifications on loan updates
- Access support and manage profile

---

## Tech Stack

| Layer       | Technology                                       |
|-------------|--------------------------------------------------|
| Frontend    | React 18, Vite, React Router v6, Tailwind CSS    |
| State/Forms | React Hook Form, React Toastify                  |
| Charts      | Chart.js, React-Chartjs-2                        |
| Auth        | JWT (jsonwebtoken), jwt-decode, bcryptjs         |
| Backend     | Node.js, Express.js (ES Modules)                 |
| ORM         | Sequelize v6                                     |
| Database    | PostgreSQL (hosted on Neon)                      |
| Payments    | Paystack                                         |
| Validation  | express-validator                                |
| Deployment  | Vercel (frontend)                                |

---

## Project Structure

```
BankingApp/
├── backend/
│   ├── config.js                  # Database (Sequelize) & app config
│   ├── index.js                   # Express app entry point
│   ├── package.json
│   ├── controllers/               # Business logic per feature
│   │   ├── userController.js
│   │   ├── loanController.js
│   │   ├── borrowerLoanController.js
│   │   ├── borrowerRepaymentController.js
│   │   ├── borrowerNotificationController.js
│   │   ├── investmentController.js
│   │   ├── lenderProfileController.js
│   │   ├── notificationController.js
│   │   ├── paymentController.js
│   │   ├── repaymentController.js
│   │   ├── reviewloansController.js
│   │   ├── loanReportController.js
│   │   ├── settingsController.js
│   │   └── supportController.js
│   ├── middleware/
│   │   └── authMiddleware.js      # JWT authentication middleware
│   ├── models/                    # Sequelize models (PostgreSQL tables)
│   ├── routers/                   # Express route definitions
│   └── utils/
│       └── dateUtils.js
│
└── frontend/
    ├── index.html
    ├── vite.config.js
    ├── tailwind.config.js
    ├── vercel.json                # Vercel deployment config
    └── src/
        ├── App.jsx
        ├── main.jsx
        ├── auth/
        │   ├── SignIn.jsx
        │   └── Register.jsx
        ├── components/
        │   ├── Dashboard.jsx
        │   ├── Navbar.jsx
        │   └── Sidebar.jsx
        ├── pages/
        │   ├── admin/             # Admin dashboard & management pages
        │   ├── Borrowers/         # Borrower portal pages
        │   ├── Lenders/           # Lender portal pages
        │   └── LandingPage/
        └── styles/
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- [npm](https://www.npmjs.com/) v9 or later
- A [PostgreSQL](https://www.postgresql.org/) database (e.g., [Neon](https://neon.tech/))

### 1. Clone the Repository

```bash
git clone https://github.com/yatunyi15075/Banking-Application.git
cd Banking-Application
```

### 2. Install Dependencies

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the `backend/` directory (see [Environment Variables](#environment-variables) below).

### 4. Run the Application

**Start the backend server:**
```bash
cd backend
npm start
```
The API server will start on `http://localhost:5000` (or the port defined in your `.env`).

**Start the frontend development server:**
```bash
cd frontend
npm run dev
```
The frontend will be available at `http://localhost:5173`.

---

## Environment Variables

Create a `backend/.env` file with the following variables:

```env
# Database
DATABASE_URL=postgresql://user:password@host/dbname

# Server
PORT=5000

# Authentication
JWT_SECRET=your_jwt_secret_key

# Paystack
PAYSTACK_SECRET_KEY=your_paystack_secret_key
```

> **Never commit your `.env` file to version control.** Add it to `.gitignore`.

---

## API Endpoints

All API routes are prefixed with `/api`.

| Method | Endpoint                      | Description                          | Auth Required |
|--------|-------------------------------|--------------------------------------|---------------|
| POST   | `/api/users/register`         | Register a new user                  | No            |
| POST   | `/api/users/login`            | Authenticate and receive JWT         | No            |
| GET    | `/api/users`                  | List all users (admin)               | Yes           |
| GET    | `/api/loans`                  | Fetch all loans                      | Yes           |
| POST   | `/api/loans`                  | Create a new loan                    | Yes           |
| GET    | `/api/borrower-loan`          | Get loans for a borrower             | Yes           |
| POST   | `/api/borrower-loan`          | Submit a loan request                | Yes           |
| GET    | `/api/repayments`             | View repayment records               | Yes           |
| POST   | `/api/repayments`             | Record a repayment                   | Yes           |
| GET    | `/api/borrower-repayment`     | Get borrower repayment records       | Yes           |
| GET    | `/api/investment`             | View investments                     | Yes           |
| POST   | `/api/investment`             | Create an investment                 | Yes           |
| GET    | `/api/notifications`          | Get admin/lender notifications       | Yes           |
| GET    | `/api/borrower-notification`  | Get borrower notifications           | Yes           |
| GET    | `/api/review-loan`            | Get loans pending review             | Yes           |
| PATCH  | `/api/review-loan/:id`        | Approve or reject a loan             | Yes           |
| GET    | `/api/lender-profile`         | Get lender profile                   | Yes           |
| PUT    | `/api/lender-profile`         | Update lender profile                | Yes           |
| GET    | `/api/loan-report`            | Generate loan reports                | Yes           |
| GET    | `/api/settings`               | Get platform settings                | Yes           |
| PUT    | `/api/settings`               | Update platform settings             | Yes           |
| GET    | `/api/support`                | List support tickets                 | Yes           |
| POST   | `/api/support`                | Submit a support ticket              | Yes           |
| POST   | `/api/pay`                    | Initiate Paystack payment            | Yes           |

---

## User Roles

### Admin
Accessed at `/admin/*`. Manages the entire platform — users, loans, settings, reports, and support tickets.

### Lender
Accessed at `/lender/*`. Funds loans, tracks investments and repayment activity, manages their profile and notifications.

### Borrower
Accessed at `/borrower/*`. Applies for loans, tracks loan status, makes repayments via Paystack, and manages notifications.

---

## Contributing

Contributions are welcome. Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to your branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

Please ensure your code follows the existing style and all linting checks pass (`npm run lint` in the frontend).

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For questions, feedback, or collaboration:

- **Email:** harshgavand2@gmail.com

---

> Thank you for checking out the Fintech Banking Application!
