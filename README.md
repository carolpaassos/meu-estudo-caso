# 🧩 Prática 08 - Rotas

## 👨‍💻 Aluna  
**Carolina Ferreira Passos**

---

## 📁 Estrutura do Projeto

```
meu-estudo-caso/
├── web/ → Projeto React com rotas
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css
│
└── mobile/ → Projeto React Native com navegação
    ├── App.js
    ├── package.json
    └── screens/
        ├── HomeScreen.js
        └── DetailsScreen.js
```

---

## 🌐 Projeto Web (React + Vite)

### ⚙️ Instalação e Execução
```bash
cd web
npm install
npm run dev
```

Depois, abra no navegador:  
👉 **http://localhost:5173**

---

### 🧭 Funcionalidades
- Rota **“/”** → exibe a **lista de produtos** (Notebook Dell, Mouse Gamer, Monitor 27’’).  
- Rota **“/detalhes/:id”** → exibe os **detalhes** do produto selecionado.  
- Navegação entre as rotas utilizando o **React Router**.  

---

### 🧱 Bibliotecas Utilizadas
- **React** → Criação de componentes.  
- **React Router DOM** → Gerenciamento de rotas.  
- **Vite** → Ferramenta de build e servidor local.  

---

## 📱 Projeto Mobile (React Native + Expo)

### ⚙️ Instalação e Execução
```bash
cd mobile
npm install
npx expo start
```

Ao iniciar o servidor, será exibido um QR Code.  
Você pode:
- Escanear com o aplicativo **Expo Go** no celular;  
- Ou pressionar **“w”** para abrir no navegador.

---

### 🧭 Funcionalidades
- Tela **Home** → exibe a lista de produtos com botões para acessar os detalhes.  
- Tela **Detalhes** → mostra o nome e a descrição do produto selecionado.  
- Navegação realizada com o **React Navigation** (Stack Navigator).  

---

### 🧱 Bibliotecas Utilizadas
- **React Native** → Base do app mobile.  
- **Expo** → Ambiente de execução e build.  
- **@react-navigation/native** → Sistema de rotas.  
- **@react-navigation/native-stack** → Pilha de navegação.  

---

## 🧠 Observações Finais
- O projeto foi desenvolvido conforme os requisitos do professor na **Prática 08 - Rota**.  
- Inclui **versões separadas para Web e Mobile**, ambas funcionando corretamente.  
- As rotas e telas seguem o mesmo padrão e nomenclatura entre as duas plataformas.  

---

## 📸 Demonstração
- Web: React + Vite com React Router.  
- Mobile: Expo + React Navigation com duas telas.  

---

**Versão final revisada e testada - pronta para entrega.**
