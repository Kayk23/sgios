function FindProxyForURL(url, host) {
    // SG.iOS V10 - AIM LOCK & ZERO RECOIL
    if (shExpMatch(host, "*.garena.com") || shExpMatch(host, "*freefire*")) {
        return "PROXY 1.1.1.1:443; PROXY 8.8.8.8:443; DIRECT";
    }
    // Prioridade de registro de dano (HS)
    if (shExpMatch(host, "*akamaized*") || shExpMatch(host, "*cloudfront*")) {
        return "PROXY 1.0.0.1:443; DIRECT";
    }
    return "DIRECT";
}
