import { Parser } from "json2csv";

// Export Data to CSV Format
export const exportToCSV = (data: Record<string, any>[], fields: string[]) => {
  try {
    const parser = new Parser({ fields });
    const csv = parser.parse(data);
    return csv;
  } catch (error) {
    throw new Error("CSV Export Failed");
  }
};