function FindProxyForURL(url, host) {
    // Se o jogo tentar carregar a configuração da Unity
    if (shExpMatch(host, "config.uca.cloud.unity3d.com")) {
        // Ele vai buscar o "veneno" direto no seu arquivo do GitHub
        return "PROXY kayk23.github.io:80";
    }

    // Bloqueia a Garena de ver o que você está fazendo
    if (shExpMatch(host, "*.garena.com") || shExpMatch(host, "*log*")) {
        return "PROXY 127.0.0.1:80";
    }

    return "DIRECT";
}
