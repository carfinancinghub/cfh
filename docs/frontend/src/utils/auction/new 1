Auction Export Utilities Documentation
Author: Cod5 (07212245, July 21, 2025, 22:45 PDT)
Overview
The auctionExportUtils.ts utility, located at frontend/src/utils/auction/auctionExportUtils.ts, exports auction-related data (e.g., auction records, summaries, dispute data) as CSV or PDF, supporting analytics features across modules like GuestDashboard.tsx.
File Structure

Path: frontend/src/utils/auction/auctionExportUtils.ts
Alias: @utils/auction/auctionExportUtils
Test File: frontend/src/tests/auctionExportUtils.test.ts

Features by Tier

Free: Exports basic auction data (ID, title, current bid, time remaining) as CSV via exportAuctionDataAsCSV.
Premium: None (basic exports are free).
Wow++ (Enterprise): Exports detailed auction summaries (exportAuctionSummaryAsPDF) and dispute voting summaries (exportDisputeSummaryAsPDF) as PDF, gated by PremiumFeature (feature="auctionAnalytics").

Code Structure

Interfaces: Defines Auction, SummaryData, Vote, and DisputeSummary for type safety.
Functions:
exportAuctionDataAsCSV: Exports auction data to CSV.
exportAuctionSummaryAsPDF: Exports auction summaries to PDF (Enterprise).
exportDisputeSummaryAsPDF: Exports dispute voting summaries to PDF (Enterprise).


Error Handling: Uses @utils/logger and @utils/react-toastify for robust feedback.

TODOs and Suggestions

Support additional export formats (e.g., JSON, Excel).
Integrate with a reporting dashboard for export previews.
Add caching for frequent exports to reduce API calls.
