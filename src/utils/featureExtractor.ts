export function extractFeatures(rawUrl: string): number[] {
  let urlString = rawUrl.trim().toLowerCase();
  if (!urlString.startsWith('http://') && !urlString.startsWith('https://')) {
    urlString = 'http://' + urlString; 
  }
  let parsedUrl: URL;
  try {
    parsedUrl = new URL(urlString);
  } catch (error) {
    return new Array(15).fill(0); 
  }
  const hostname = parsedUrl.hostname;
  const path = parsedUrl.pathname + parsedUrl.search;
  
  return [
    rawUrl.length,
    hostname.length,
    path.length,
    (rawUrl.match(/\./g) || []).length,
    (rawUrl.match(/-/g) || []).length,
    (rawUrl.match(/@/g) || []).length,
    (rawUrl.match(/\?/g) || []).length,
    (rawUrl.match(/&/g) || []).length,
    (rawUrl.match(/=/g) || []).length,
    (rawUrl.match(/_/g) || []).length,
    (rawUrl.match(/\d/g) || []).length,
    (rawUrl.match(/[a-z]/g) || []).length,
    rawUrl.startsWith('https') ? 1 : 0,
    /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/.test(hostname) ? 1 : 0,
    /bit\.ly|goo\.gl|t\.co|tinyurl|is\.gd/.test(hostname) ? 1 : 0 
  ];
}
