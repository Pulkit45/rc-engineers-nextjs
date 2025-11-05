# R&C Engineers and Associates — Next.js Frontend

**Motto:** *A Perfect Lifeline for Steam Turbine*

This is a **pure frontend** Next.js site (App Router) with a light theme.
Pages: Home, Services, About, Contact (frontend-only mailto form).

## Quickstart
```bash
npm install
npm run dev
# visit http://localhost:3000
```

## Replace Images
Add real turbine/shop photos into `public/images/` and update hero/section backgrounds.

## Deploy
- Static hosting with Vercel or Netlify works great.
- The contact form currently opens your email client via `mailto:`.
  For production, integrate EmailJS or a serverless API route.
