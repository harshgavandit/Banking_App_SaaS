# Frontend — Fintech Banking Application

The frontend for the Fintech Banking Application, built with **React 18** and **Vite**. It provides role-specific portals for Admins, Lenders, and Borrowers.

---

## Tech Stack

| Technology         | Purpose                              |
|--------------------|--------------------------------------|
| React 18           | UI framework                         |
| Vite               | Build tool & dev server              |
| React Router v6    | Client-side routing                  |
| Tailwind CSS       | Utility-first styling                |
| React Hook Form    | Form state management & validation   |
| Chart.js           | Data visualisation                   |
| React Toastify     | Toast notifications                  |
| Axios              | HTTP client for API calls            |
| jwt-decode         | Decoding JWT tokens on the client    |
| React Icons        | Icon library                         |
| React Google reCAPTCHA | Bot protection on auth forms    |

---

## Project Structure

```
src/
├── App.jsx                  # Root component with route definitions
├── main.jsx                 # Vite entry point
├── index.css / App.css      # Global styles
├── assets/                  # Static images and assets
├── auth/
│   ├── SignIn.jsx            # Login page
│   └── Register.jsx         # Registration page
├── components/
│   ├── Dashboard.jsx         # Shared dashboard component
│   ├── Navbar.jsx            # Top navigation bar
│   └── Sidebar.jsx           # Shared sidebar
├── pages/
│   ├── LandingPage/          # Public-facing landing page
│   ├── admin/
│   │   ├── AdminDashboard.jsx
│   │   ├── AdminNavbar.jsx
│   │   ├── AdminSidebar.jsx
│   │   ├── LoanManagement.jsx
│   │   ├── userManagement.jsx
│   │   ├── AdminNotifications.jsx
│   │   ├── SupportManagement.jsx
│   │   ├── PlatformSettings.jsx
│   │   └── Report.jsx
│   ├── Borrowers/
│   │   ├── Dashboard.jsx
│   │   ├── LoanList.jsx
│   │   ├── LoanRequestForm.jsx
│   │   ├── RepaymentManagement.jsx
│   │   ├── PaystackPayment.jsx
│   │   ├── Notifications.jsx
│   │   ├── SupportRequests.jsx
│   │   ├── BorrowerSidebar.jsx
│   │   ├── BorrowerUserProfile.jsx
│   │   └── RegisterUser.jsx
│   └── Lenders/
│       ├── Dashboard.jsx
│       ├── LoanList.jsx
│       ├── InvestIngLoan.jsx
│       ├── RepaymentManagement.jsx
│       ├── LenderNotifications.jsx
│       ├── LenderProfile.jsx
│       ├── LenderSidebar.jsx
│       └── Support.jsx
└── styles/
    └── globals.css
```

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm v9+
- Backend server running (see [backend setup](../README.md#getting-started))

### Install & Run

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

Output is placed in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## Environment Variables

Create a `.env` file in the `frontend/` directory:

```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_PAYSTACK_PUBLIC_KEY=your_paystack_public_key
```

> Vite exposes only variables prefixed with `VITE_` to the client bundle.

---

## Deployment

The frontend is configured for deployment on **Vercel**. The `vercel.json` file includes SPA rewrite rules so all routes resolve to `index.html`.

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

Push to your connected Vercel project or run:

```bash
vercel --prod
```
