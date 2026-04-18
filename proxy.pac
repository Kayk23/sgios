export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const host = request.headers.get('Host');

    // 1. O ALVO: Intercepta a configuração de física e mira da Unity
    if (host === 'config.uca.cloud.unity3d.com') {
      const fullCapaConfig = {
        "analytics": { "enabled": true },
        "connect": { "enabled": true },
        "performance": { 
          "enabled": true, 
          "headshot_scale": 8.5,    // Valor máximo para puxar só na cabeça
          "hitbox_scale": 5.0       // Aumenta o tamanho do alvo da mira
        },
        "dynamic": {
          "analytics": { 
            "head_aim_assist": 3.0, 
            "aim_lock": "head_only", 
            "neck_hit_priority": false // Desliga o pescoço pra focar só no topo
          }
        }
      };
      return new Response(JSON.stringify(fullCapaConfig), {
        headers: { 'content-type': 'application/json' }
      });
    }

    // 2. ANTI-CHEAT: Bloqueia envio de logs de detecção
    if (host.includes('log') || host.includes('analytics') || host.includes('crashlytics')) {
      return new Response(null, { status: 403 });
    }

    // 3. SEGURANÇA: Mantém o seu servidor online para o resto das requisições
    return fetch(request);
  },
};
