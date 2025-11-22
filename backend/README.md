# Emotion Explorer Backend

This is an Express + MongoDB API scaffold that powers the Emotion Explorer experiences.

## Features
- JWT authentication with optional parental oversight roles.
- Session tracking and structured entries for mood-meter, mind-map, body-awareness, letter, journal, trajectories, spiritual, intentions, collage, and next-steps activities.
- Collage storage with base64 or bucket key metadata, sharing states, and moderation workflow.
- Random affirmations endpoint and filtered entry listing.
- Mock profanity/image scanning hooks for future safety tooling.

## Getting Started
1. Install dependencies
   ```bash
   cd backend
   npm install
   ```
2. Configure environment (optional values shown)
   ```bash
   MONGO_URI=mongodb://localhost:27017/emotion_explorer
   JWT_SECRET=super-secret
   PORT=4000
   STORAGE_BUCKET=your-cloud-bucket
   ENABLE_MOCK_SCAN=true
   ```
3. Run the server
   ```bash
   npm run start
   ```

## Key Endpoints
- `POST /api/auth/register` and `POST /api/auth/login` for accounts.
- `POST /api/sessions/start` to begin a user session.
- `POST /api/entries/:category` for activity entries (categories above) with safety scan flags.
- `GET /api/entries` with `category`, `shared`, `from`, `to` filters.
- `POST /api/collages` to upload collage content tied to an entry.
- `GET /api/collages/gallery` for approved shared collages.
- `GET /api/collages/moderation`, `POST /api/collages/:id/approve`, `POST /api/collages/:id/reject` for reviewers.
- `GET /api/affirmations/random` for a random affirmation.

A simple `/health` endpoint is available for readiness checks.
