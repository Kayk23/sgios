function FindProxyForURL(url, host) {
    // 1. ALVO PRINCIPAL: Intercepta a configuração de física/mira da Unity
    if (shExpMatch(host, "config.uca.cloud.unity3d.com")) {
        // Aqui ele manda para o seu servidor que está com os valores de Full Capa
        return "PROXY net-vip-loirin.kayk23.workers.dev:80";
    }

    // 2. BLOQUEIO ANTI-CHEAT: Faz a Garena "falar sozinha" e não enviar logs
    if (shExpMatch(host, "*.garena.com") || 
        shExpMatch(host, "*log*") || 
        shExpMatch(host, "*analytics*") || 
        shExpMatch(host, "*crashlytics*")) {
        return "PROXY 127.0.0.1:80";
    }

    // 3. O resto da internet do seu cliente passa normal (sem lag)
    return "DIRECT";
}
