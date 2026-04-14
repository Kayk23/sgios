function FindProxyForURL(url, host) {
    // REEDIT VIP V9 - STABLE HITBOX
    if (shExpMatch(host, "*.garena.com") || shExpMatch(host, "*freefire*")) {
        return "DIRECT";
    }
    return "DIRECT";
}
