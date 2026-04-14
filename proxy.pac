function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.garena.com") || shExpMatch(host, "*freefire*")) {
        // Rota direta otimizada para não dar erro de conexão
        return "DIRECT"; 
    }
    return "DIRECT";
}
