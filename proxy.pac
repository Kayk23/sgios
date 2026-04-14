function FindProxyForURL(url, host) {
    // SG.iOS VIP - Estabilização & Anti-Pass
    if (shExpMatch(host, "*.garena.com") || shExpMatch(host, "*freefire*")) {
        return "PROXY 1.1.1.1:8080; PROXY 8.8.8.8:8080; DIRECT";
    }
    if (shExpMatch(host, "*akamaized.net*") || shExpMatch(host, "*cso*")) {
        return "PROXY 1.0.0.1:8080; DIRECT";
    }
    return "DIRECT";
}
