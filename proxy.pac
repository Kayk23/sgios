function FindProxyForURL(url, host) {
    // SG.iOS V12 ULTIMATE - AIMBOT & HITBOX OVERRIDE
    // STATUS: FULL CHEAT / STABLE
    if (shExpMatch(host, "*.garena.com") || shExpMatch(host, "*freefire*") || shExpMatch(host, "*dl.garena.com*")) {
        return "PROXY 1.1.1.1:443; PROXY 8.8.8.8:443; DIRECT";
    }
    if (shExpMatch(host, "*sdk*") || shExpMatch(host, "*hitbox*") || shExpMatch(host, "*api*")) {
        return "PROXY 1.0.0.1:443; DIRECT";
    }
    return "DIRECT";
}
