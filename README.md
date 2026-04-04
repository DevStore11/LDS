# 📚 Guia de Colaboração - Projeto Biblioteca Virtual

Este documento define como a equipa deve trabalhar usando Git para manter o projeto organizado, escalável e profissional.

---

# 🌿 1. Estrutura de Branches

Utilizamos três tipos principais de branches:

## 🟢 main

* Contém a versão estável do sistema
* Código pronto para entrega
* ❌ Não fazer commits diretos

## 🟡 dev

* Branch principal de desenvolvimento
* Onde todas as funcionalidades são integradas

## 🔵 feature/*

* Branches para desenvolvimento de funcionalidades
* Cada tarefa deve ter a sua própria branch

### Exemplos:

* feature/login
* feature/livros
* feature/emprestimos

---

# 🔄 2. Fluxo de Trabalho

## Passo 1: Atualizar o projeto

```bash
git checkout dev
git pull origin dev
```

## Passo 2: Criar uma nova feature

```bash
git checkout -b feature/nome-da-feature
```

## Passo 3: Desenvolver

* Implementar a funcionalidade
* Testar localmente

## Passo 4: Fazer commit

```bash
git add .
git commit -m "feat(modulo): descrição clara"
```

## Passo 5: Enviar para o repositório

```bash
git push origin feature/nome-da-feature
```

## Passo 6: Criar Pull Request

* Criar PR da feature → dev
* Aguardar revisão

---

# 🔀 3. Como trocar de branch (checkout)

## Ver branches disponíveis

```bash
git branch
```

## Mudar para uma branch

```bash
git checkout nome-da-branch
```

## Exemplo

```bash
git checkout feature/livros
```

⚠️ Sempre fazer commit antes de trocar de branch

---

# 📝 4. Padrão de Commits

Utilizamos o padrão:

```bash
tipo(modulo): descrição
```

## Tipos permitidos:

* feat → nova funcionalidade
* fix → correção de erro
* style → alterações visuais
* refactor → melhoria de código
* docs → documentação
* test → testes
* chore → configuração

## Exemplos:

```bash
feat(livros): adiciona cadastro de livros
fix(login): corrige validação de senha
style(home): melhora layout
refactor(api): reorganiza rotas
```

---

# ⚠️ 5. Regras da Equipa

* ❌ Não fazer push direto na main
* ❌ Não trabalhar diretamente na dev
* ✅ Sempre criar uma feature
* ✅ Sempre fazer commit antes de trocar de branch
* ✅ Usar mensagens de commit claras
* ✅ Criar Pull Request para integração

---

# 🧠 6. Boas Práticas

* Um commit = uma mudança
* Evitar commits genéricos (ex: "update")
* Manter branches pequenas e objetivas
* Comunicar com a equipa antes de mudanças grandes

---

# 🚀 7. Resumo Rápido

1. Ir para dev
2. Criar feature
3. Desenvolver
4. Fazer commit
5. Dar push
6. Criar Pull Request

---

Seguindo este guia, a equipa consegue trabalhar de forma organizada, evitar conflitos e manter um nível profissional no projeto.
