 Middleware Implementation for Logging and Bearer Token Authentication

Objective
Implement middleware in an Express.js server to log requests and protect routes using a Bearer token.

---

 Features
- Logging Middleware: Logs method, URL, and timestamp for every request.
- Authentication Middleware: Validates Authorization: Bearer mysecrettoken.
- Public Route: `/public` — accessible without authentication.
- Protected Route: `/protected` — accessible only with the correct Bearer token.

---

 Setup Instructions

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd middleware-auth-app
