# HaulerJobDetailsPage

## Overview
The `HaulerJobDetailsPage` component is a React component in the CFH Marketplace that displays detailed information about a hauler's job, such as job ID, title, locations, date, price, status, and vehicle details (for Premium+ tiers). It fetches data using the `analyticsApi` and supports user-tier-based access control.

## Usage
```typescript
import { HaulerJobDetailsPage } from '@/components/hauler/HaulerJobDetailsPage';

// Render the component within a router
<Routes>
  <Route path="/job/:jobId" element={<HaulerJobDetailsPage userTier="Standard" />} />
</Routes>
```

## Props
- `userTier` (UserTier): The user's subscription tier (`Free`, `Standard`, `Premium`, or `Wow++`), determining access to features like vehicle details or PDF export.

## Features
- Displays core job details (ID, title, hauler, locations, date, price, status) for all users.
- Shows vehicle details (make, model, year) for Premium+ tiers.
- Includes an export to PDF button for Wow++ tier (placeholder functionality).
- Fetches job data using `analyticsApi.getJobDetails`.

## Dependencies
- `react`, `react-router-dom`: For component rendering and routing.
- `@/i18n`: For internationalization.
- `@/services/analyticsApi`: For fetching job data.

## Example
```typescript
import { HaulerJobDetailsPage } from '@/components/hauler/HaulerJobDetailsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/job/:jobId" element={<HaulerJobDetailsPage userTier="Premium" />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## Notes
- The component expects a `jobId` parameter in the URL (e.g., `/job/123`).
- Ensure the `analyticsApi.getJobDetails` endpoint is available and returns data in the expected `JobDetails` format.
- Translation keys (e.g., `haulerJobDetails.title`) must be defined in the i18n configuration.

## TODO
- Document PDF export integration once implemented.
- Add examples for editing job details.
- Include documentation for map view visualization when added.
- Provide troubleshooting tips for API or routing issues.