# 🚗 Vehicle Tracker

Projeto de sistema web para **rastreamento veicular em tempo real**, sendo desenvolvido com:

- **Frontend:** React + TypeScript
- **Backend:** Java + Spring Boot

Este repositório contém **todo o código (frontend + backend)** organizado em um único projeto.

---

## 📌 Status

🚧 **Projeto em estágio inicial de desenvolvimento**  
Primeiro commit — estrutura inicial sendo definida.

---

## 📦 Tecnologias

### Frontend
- React
- TypeScript
- Axios
- React Router
- TailwindCSS

### Backend
- Java 17+
- Spring Boot (Web, JPA)
- PostgreSQL
- Lombok
---

## 📁 Estrutura do Projeto

```

vehicle-tracker/
├── backend/                # Aplicação Spring Boot
│   ├── src/
│   ├── pom.xml
│   └── ...
│
├── frontend/               # Aplicação React + TypeScript
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md

````

---

## ⚙️ Requisitos

- Java 17+
- Node.js 18+
- PostgreSQL (local ou container)
- Maven
- Docker (opcional)

---

## 🚀 Como rodar o projeto

### 1. Banco de dados

Configure um banco PostgreSQL local ou use Docker:

```bash
docker run --name rastreio-db -e POSTGRES_PASSWORD=123456 -e POSTGRES_DB=tracker -p 5432:5432 -d postgres
````

### 2. Backend (Spring Boot)

```bash
cd backend

# Edite o application.yml com as credenciais do seu banco
./mvnw spring-boot:run
```

A API ficará disponível em: `http://localhost:8080`

### 3. Frontend (React + TS)

```bash
cd frontend

npm install
npm run dev
```

O frontend estará em: `http://localhost:5173`

---

## 🌐 Funcionalidades

* Rastreamento de veículos em tempo real
* Visualização em mapa (Leaflet ou Google Maps)
* Histórico de posições
* Cadastro de veículos
* Alertas configuráveis (ignição, velocidade, etc.)

---

## 🧪 Testes

### Backend

```bash
cd backend
./mvnw test
```

### Frontend

```bash
cd frontend
npm run test
```

---

## ✅ TODO

* [ ] Autenticação com JWT
* [ ] Integração com dispositivos GPS reais
* [ ] Painel administrativo
* [ ] Deploy (Vercel + Render ou Docker Compose)

---

## 📌 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Fork este repositório
2. Crie uma nova branch: `git checkout -b minha-feature`
3. Faça suas alterações e commit: `git commit -m 'Minha contribuição'`
4. Envie um PR ❤️

---
