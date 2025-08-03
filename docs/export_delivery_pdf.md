# exportDeliveryPDF

## Overview
The `exportDeliveryPDF` function is a utility in the CFH Marketplace that generates a PDF document containing delivery details for a specified delivery ID. It fetches data from the `analyticsApi` and uses the `jsPDF` library to create a downloadable PDF.

## Usage
```typescript
import { exportDeliveryPDF } from '@/utils/exportDeliveryPDF';

// Generate a PDF for a delivery
await exportDeliveryPDF('123', {
  fileName: 'delivery-123.pdf',
  title: 'Delivery Details',
  includeHeader: true,
});
```

## Parameters
- `deliveryId` (string): The ID of the delivery to export.
- `options` (PDFOptions, optional):
  - `fileName` (string): Name of the output PDF file (default: `delivery-${deliveryId}.pdf`).
  - `title` (string): Title to display in the PDF (default: 'Delivery Details').
  - `includeHeader` (boolean): Whether to include a header with the title and generation date (default: `true`).

## Return Value
- `Promise<void>`: Resolves when the PDF is generated and downloaded, or throws an error if generation fails.

## Example
```typescript
try {
  await exportDeliveryPDF('123', { fileName: 'custom-delivery.pdf' });
  console.log('PDF generated successfully');
} catch (error) {
  console.error('PDF generation failed:', error);
}
```

## Dependencies
- `jsPDF`: For PDF generation.
- `@/services/analyticsApi`: For fetching delivery data.

## Notes
- Ensure the `analyticsApi.getDeliveryDetails` endpoint is available and returns data in the expected `DeliveryData` format.
- The PDF includes key delivery details such as ID, hauler name, job title, locations, date, price, and status.

## TODO
- Document custom template support once implemented.
- Add examples for batch PDF generation.
- Include troubleshooting tips for common PDF generation issues.