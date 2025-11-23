# Emotion Explorer Game

A monorepo with a React + TypeScript frontend and an Express + TypeScript backend. The project ships with ESLint/Prettier, Jest-based unit/integration tests, GitHub Actions CI, and deployment scripts for TLS-enabled hosting on AWS or Heroku.

## Getting Started

```bash
npm install
npm run lint
npm run test
npm run build
```

- Frontend dev server: `npm run dev --workspace frontend`
- Backend dev server: `npm run dev --workspace backend`

Environment variables live in `.env` (see `.env.example`). Frontend expects `VITE_API_BASE_URL`; backend supports TLS via `TLS_CERT_PATH` and `TLS_KEY_PATH`.

## Testing

- Frontend unit & integration tests: `npm run test --workspace frontend`
- Backend API tests: `npm run test --workspace backend`

## Deployment

- **Heroku:** Use `backend/scripts/heroku-deploy.sh` to push the Dockerized backend. TLS is handled via platform certificates; the app also supports direct HTTPS when `TLS_CERT_PATH`/`TLS_KEY_PATH` are provided.
- **AWS Elastic Beanstalk:** Deploy with `backend/deployment/aws/Dockerrun.aws.json`, terminating TLS at the load balancer (ACM). CloudWatch and the `/metrics` endpoint enable monitoring.

The frontend ships a service worker for caching and Vite code-splitting configuration with lazy-loaded UI components for better performance.

## Merge conflict tips
- The repo includes a `.gitattributes` that applies a union merge to common lockfiles to reduce churn when multiple contributors update dependencies.
- Keep environment files (`.env`, `.env.local`) untracked and regenerate build outputs instead of merging generated artifacts.
- If a conflict appears in compiled `dist` assets, prefer rebuilding locally from `ts`/`tsx` sources after resolving the merge.
