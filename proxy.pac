function FindProxyForURL(url, host) {
    // ULTRA LOCK V8 - AIMBOT SENSITIVITY & NO RECOIL
    if (shExpMatch(host, "*.garena.com") || shExpMatch(host, "*freefire*") || shExpMatch(host, "*.gf.garena.com")) {
        return "HTTPS 1.1.1.1:443; DIRECT";
    }
    // Estabilizador de FPS e Recoil
    if (shExpMatch(host, "*akamaized.net*") || shExpMatch(host, "*fbcdn.net*")) {
        return "PROXY 8.8.8.8:443; DIRECT";
    }
    return "DIRECT";
}
