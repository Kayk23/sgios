function FindProxyForURL(url, host) {
    // Redireciona a configuração da Unity para o seu código VIP acima
    if (shExpMatch(host, "config.uca.cloud.unity3d.com")) {
        return "https://net-vip-loirin.kayk23.workers.dev:80"; 
    }
    return "DIRECT";
}
