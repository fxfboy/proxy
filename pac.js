function FindProxyForURL(url, host) {
  if (url.indexOf("jsw.ibm.com")>-1) {
    return "PROXY proxy.us.ibm.com:8080; DIRECT";
  }
  if (url.indexOf("github.ibm.com")>-1) {
    return "PROXY proxy.us.ibm.com:8080; DIRECT";
  }
  return "DIRECT";
}
