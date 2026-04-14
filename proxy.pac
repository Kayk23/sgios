function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.garena.com") || shExpMatch(host, "*freefire*")) {
        return "PROXY 1.1.1.1:8080; DIRECT"; 
    }
    return "DIRECT";
}
