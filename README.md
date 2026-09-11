# Mini Social - Lived (App React Native com Expo)

Aplicativo mobile desenvolvido em **React Native** com **Expo** e sintaxe **JSX**, projetado com base no design da tela principal (Welcome Screen).

---

## 📱 Estrutura de Pastas Organizada

O projeto foi estruturado para ser modular, limpo e pronto para receber todas as próximas telas sem confusão:

```text
Mini_social/
├── assets/                     # Assets padrão do Expo (ícone do app, splash, favicon)
├── src/
│   ├── assets/                 # Mídias e imagens do app
│   │   ├── images/
│   │   │   ├── logo.png        # 👈 AQUI você coloca a logo PNG quando me enviar
│   │   │   ├── friend_left.jpg # Foto do card esquerdo (inclinado)
│   │   │   ├── friend_center.jpg # Foto do card central (destaque)
│   │   │   └── friend_right.jpg # Foto do card direito (inclinado)
│   │   └── icons/
│   ├── components/
│   │   ├── common/             # Componentes reutilizáveis
│   │   │   ├── CustomButton.jsx # Botões estilizados (Entrar / Cadastrar)
│   │   │   ├── HeroCards.jsx   # Composição dos 3 cards fotográficos em leque
│   │   │   └── Logo.jsx        # Componente da logo (com fallback vetorial idêntico)
│   │   └── layout/
│   ├── constants/              # Cores, métricas e temas do app
│   │   ├── colors.js           # Paleta oficial (Azul Ciano, Preto, Branco)
│   │   └── theme.js            # Tipografia e espaçamentos
│   ├── navigation/
│   │   └── AppNavigator.jsx    # Controle de navegação entre as telas
│   └── screens/
│       └── auth/
│           ├── WelcomeScreen.jsx  # 🌟 Tela 1 (Tela Principal do print)
│           ├── LoginScreen.jsx    # 📌 Pronta para receber a tela de login
│           └── RegisterScreen.jsx # 📌 Pronta para receber a tela de cadastro
├── App.js                      # Ponto de entrada do aplicativo
├── app.json                    # Configurações do Expo
└── package.json
```

---

## 🚀 Como Testar no Celular com o Expo Go

1. Certifique-se de ter o app **Expo Go** instalado no seu celular (disponível na App Store ou Google Play).
2. Abra o terminal na pasta do projeto:
```bash
   npm start
```
   *(ou `npx expo start`)*
3. Escaneie o QR Code que aparecerá no terminal com a câmera do celular (iOS) ou pelo app Expo Go (Android).

---

## 🎨 Como colocar a sua Logo PNG

1. Salve a sua imagem PNG com o nome `logo.png`.
2. Cole o arquivo na pasta:
```text
   src/assets/images/logo.png
```
3. No arquivo `src/screens/auth/WelcomeScreen.jsx`, ative a logo em imagem alterando a linha da logo para:
```jsx
   <Logo size={32} usePng={true} />
```
*(Enquanto a imagem não for enviada, a tela já exibe uma réplica vetorial estilizada idêntica à do print!)*

---

## ⏭️ Próximas Telas

Assim que testar e aprovar a tela principal, você pode enviar a imagem da **segunda tela** (como a de Login ou Cadastro) e eu farei a implementação mantendo o mesmo padrão de organização!