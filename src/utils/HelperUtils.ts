
export function convertBytesToMB(sizeInBytes: number, decimals: number = 2): string {
    if (sizeInBytes <= 0) {
      return '0 MB';
    }
  
    const sizeInMB = sizeInBytes / (1024 * 1024); // Convert bytes to MB
    return `${sizeInMB.toFixed(decimals)} MB`;   // Format to specified decimals
  }
  