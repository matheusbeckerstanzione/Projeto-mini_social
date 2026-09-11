# FrontEnd - Tela Mobile "Nova Publicação" (JavaScript / JSX)

Implementação fiel ao design de referência do aplicativo mobile, desenvolvida em **React Native (Expo + JSX)** e acompanhada de um **simulador web interativo** (`index.html`).

---

## 📱 Estrutura do Projeto (JSX)

```
FrontEnd/
├── index.html                  # Simulador Web Interativo (abra diretamente no navegador)
├── App.jsx                     # Ponto de entrada do app React Native
├── App.js                      # Re-export padrão para o Metro Bundler
├── package.json                # Dependências configuradas (Expo, React Navigation, etc.)
├── babel.config.js             # Configuração do Babel Expo
├── app.json                    # Configuração do Expo
├── README.md                   # Instruções de uso
└── src/
    ├── navigation/
    │   ├── TabNavigator.jsx    # Barra de navegação inferior (4 abas)
    │   ├── RootNavigator.jsx   # Stack Navigator principal
    │   └── types.ts            # Constantes de rotas
    └── screens/
        ├── NewPostScreen.jsx   # ⭐ Tela principal idêntica à captura
        ├── HomeScreen.jsx      # Aba Início (Feed)
        ├── NotificationsScreen.jsx # Aba Notificações
        └── ProfileScreen.jsx   # Aba Perfil
```

---

## 🚀 Como Executar

### Opção 1: Visualização Imediata no Navegador (Sem Instalação)
Basta dar um duplo clique no arquivo [`index.html`](file:///c:/Users/52233506855/Desktop/FrontEnd/index.html) para testar no Chrome ou Edge.

### Opção 2: Rodar no Celular via Expo
1. No terminal:
   ```bash
   npm install
   ```
2. Inicie o app:
   ```bash
   npx expo start
   ```
3. Abra o app **Expo Go** no celular e leia o QR Code.
