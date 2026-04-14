function FindProxyForURL(url, host) {
    // SG.iOS V7 - AIM LOCK & NO RECOIL ROUTE
    if (shExpMatch(host, "*.garena.com") || shExpMatch(host, "*freefire*") || shExpMatch(host, "*ff-aws*")) {
        return "PROXY 1.1.1.1:80; DIRECT"; 
    }
    // Rota para destravar miras 2x e 4x
    if (shExpMatch(host, "*cdn*") || shExpMatch(host, "*akamaized*")) {
        return "DIRECT";
    }
    return "DIRECT";
}
