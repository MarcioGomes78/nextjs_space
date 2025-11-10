# Vitta Fisio & Movimento

Aplicação web moderna desenvolvida com Next.js para o centro de fisioterapia Vitta Fisio & Movimento.

## 🚀 Tecnologias

- **Next.js 14.2** - Framework React para produção
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **Prisma** - ORM para banco de dados
- **Radix UI** - Componentes acessíveis
- **Framer Motion** - Animações
- **React Hook Form** - Gerenciamento de formulários
- **NextAuth.js** - Autenticação
- **Zod/Yup** - Validação de schemas

## 📋 Pré-requisitos

- Node.js 18.x ou superior
- npm ou yarn
- Banco de dados (PostgreSQL, MySQL, etc.)

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd nextjs_space
```

2. Instale as dependências:
```bash
npm install --legacy-peer-deps
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

4. Execute as migrações do Prisma:
```bash
npx prisma migrate dev
```

5. (Opcional) Popule o banco de dados:
```bash
npm run seed
```

## 🏃 Executando o Projeto

### Modo Desenvolvimento
```bash
npm run dev
```
Acesse [http://localhost:3000](http://localhost:3000)

### Modo Produção
```bash
npm run build
npm start
```

## 📁 Estrutura do Projeto

```
nextjs_space/
├── app/                    # App Router do Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   └── globals.css        # Estilos globais
├── components/            # Componentes React
│   ├── ui/               # Componentes de UI reutilizáveis
│   ├── hero.tsx          # Seção Hero
│   ├── benefits.tsx      # Seção de Benefícios
│   ├── pain-points.tsx   # Seção de Pain Points
│   ├── testimonials.tsx  # Depoimentos
│   └── contact.tsx       # Formulário de Contato
├── lib/                   # Utilitários e helpers
│   ├── db.ts             # Cliente Prisma
│   ├── types.ts          # Definições de tipos
│   └── utils.ts          # Funções utilitárias
├── prisma/               # Schema e migrações do Prisma
│   └── schema.prisma     # Modelo do banco de dados
└── public/               # Arquivos estáticos
```

## 🎨 Componentes Principais

- **Hero**: Seção de apresentação principal
- **Pain Points**: Problemas que o serviço resolve
- **Benefits**: Benefícios da fisioterapia
- **Testimonials**: Depoimentos de clientes
- **Contact**: Formulário de contato

## 🛠️ Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm start` - Inicia servidor de produção
- `npm run lint` - Executa o linter

## 📦 Bibliotecas de UI

O projeto utiliza diversos componentes do **shadcn/ui** baseados em Radix UI:

- Accordion, Alert, Avatar, Badge
- Button, Card, Checkbox, Dialog
- Dropdown Menu, Form, Input, Select
- Tabs, Toast, Tooltip
- E muitos outros...

## 🎯 Features

- ✅ Design responsivo
- ✅ Modo claro/escuro (theme provider)
- ✅ Componentes acessíveis
- ✅ Animações suaves
- ✅ Formulários validados
- ✅ Integração com banco de dados
- ✅ Autenticação (NextAuth)
- ✅ Carregamento otimizado
- ✅ SEO friendly

## 🔐 Autenticação

O projeto está configurado com NextAuth.js e Prisma Adapter para autenticação segura.

## 📊 Banco de Dados

Utilizando Prisma ORM com suporte para múltiplos bancos de dados. Configure a `DATABASE_URL` no arquivo `.env`.

## 🤝 Contribuindo

1. Faça fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto é privado e pertence à Vitta Fisio & Movimento.

## 👥 Autores

Marcio Gomes - Web Desing - Design Gráfico - Portfolio

## 📞 Suporte

Para suporte, entre em contato através do formulário no site ou envie um email para contato@vittafisio.com.br

---

Desenvolvido com ❤️ para Vitta Fisio & Movimento
