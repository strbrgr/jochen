import fs from "fs";
import path from "path";

export function getFileLastModifiedDate(fileRelativePath: string) {
  const filePath = path.join(process.cwd(), fileRelativePath);
  const stats = fs.statSync(filePath);
  return stats.mtime.toISOString();
}
