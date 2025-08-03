# User Profile Routes

**Author**: CFH Dev Team

## Overview
The `userProfileRoutes.ts` module, located at `backend/controllers/userProfileRoutes.ts`, defines Express routes for managing user profiles in the CFH Marketplace. It supports fetching and updating user profile data with user-tier-based access control.

## File Structure
- **Path**: `C:\CFH\backend\controllers\userProfileRoutes.ts`
- **Alias**: `@controllers/userProfileRoutes`
- **Test File**: `C:\CFH\backend\controllers\__tests__\userProfileRoutes.test.ts`

## Features by Tier
- **Free**: No access to profile routes.
- **Standard**: Can fetch user profile data (GET /profiles/:userId).
- **Premium**: Can fetch and update profile data (PUT /profiles/:userId).
- **Wow++**: Same as Premium, with potential for future delete route.

## Endpoints
- **GET /profiles/:userId**
  - **Purpose**: Fetches user profile data by ID.
  - **Parameters**: `userId` (path), `user-tier` (header).
  - **Response**: JSON with `UserProfile` object or error.
  - **Requires**: Standard+ tier.
- **PUT /profiles/:userId**
  - **Purpose**: Updates user profile data (username, email).
  - **Parameters**: `userId` (path), `UpdateProfileRequest` (body), `user-tier` (header).
  - **Response**: JSON with success message or error.
  - **Requires**: Premium+ tier.

## Dependencies
- `express`: For routing.
- `@services/analyticsApi`: For profile data operations.
- `@i18n`: For internationalization.
- `@utils/logger`: For error logging.

## Usage
```typescript
import userProfileRoutes from '@controllers/userProfileRoutes';
import express from 'express';

const app = express();
app.use('/profiles', userProfileRoutes);
```

## Example
```bash
# Fetch user profile
curl -H "user-tier: Standard" http://localhost:3000/profiles/user-123

# Update user profile
curl -X PUT -H "user-tier: Premium" -H "Content-Type: application/json" \
  -d '{"username":"newuser","email":"new@example.com"}' \
  http://localhost:3000/profiles/user-123
```

## Notes
- Ensure `analyticsApi.getUserProfile` and `analyticsApi.updateUserProfile` endpoints are available.
- Translation keys (e.g., `userProfileRoutes.error.noPermission`) must be defined in the i18n configuration.
- The `user-tier` header is required for access control.

## TODOs and Suggestions
- Add DELETE /profiles/:userId endpoint for Wow++ tier (PURCHASE-125).
- Implement input validation for username and email formats.
- Add rate limiting middleware to prevent abuse.
- Document authentication token integration when implemented.