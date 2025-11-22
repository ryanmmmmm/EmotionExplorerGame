#!/usr/bin/env bash
set -euo pipefail

# Build and deploy to Heroku using container registry.
# Requires HEROKU_APP_NAME and HEROKU_AUTH_TOKEN env vars.

if [[ -z "${HEROKU_APP_NAME:-}" || -z "${HEROKU_AUTH_TOKEN:-}" ]]; then
  echo "HEROKU_APP_NAME and HEROKU_AUTH_TOKEN must be set" >&2
  exit 1
fi

heroku container:login <<<"${HEROKU_AUTH_TOKEN}"
docker build -t registry.heroku.com/${HEROKU_APP_NAME}/web -f backend/Dockerfile backend
heroku container:push web --app ${HEROKU_APP_NAME}
heroku container:release web --app ${HEROKU_APP_NAME}
