
# Desafio - Abrigo de Animais 🐾

Este projeto foi desenvolvido por Tatiana como parte do desafio proposto pela StartDB 2025.  
O objetivo é implementar uma lógica que permita identificar quais pessoas estão aptas a adotar animais de um abrigo, com base em seus brinquedos favoritos e regras específicas.

---

## 🚀 Como executar o projeto

Certifique-se de ter o [Node.js](https://nodejs.org/en/) instalado.  
Instale as dependências do projeto:

```bash
npm install
```

Execute os testes para validar a solução:

```bash
npm test
```

---

## 📋 Regras de Adoção

- O animal vai para a pessoa que mostrar todos seus brinquedos favoritos na ordem desejada.
- É permitido intercalar brinquedos que o animal não goste, desde que a ordem dos favoritos seja respeitada.
- Gatos não dividem seus brinquedos.
- Se ambas as pessoas forem elegíveis, o animal permanece no abrigo.
- Cada pessoa pode adotar no máximo 3 animais.
- O jabuti **Loco** não exige ordem dos brinquedos, mas só pode ser adotado se houver outro animal adotado.

---

## 🧠 Lógica Implementada

A lógica principal está no método `encontraPessoas`, localizado no arquivo `src/abrigo-animais.js`.  
Ele recebe três parâmetros:

- Brinquedos da pessoa 1 (string separada por vírgulas)
- Brinquedos da pessoa 2 (string separada por vírgulas)
- Ordem dos animais (string separada por vírgulas)

**Exemplo:**

```javascript
new AbrigoAnimais().encontraPessoas('RATO,BOLA', 'RATO,NOVELO', 'Rex,Fofo');
```

---

## ✅ Testes Automatizados

Os testes estão no arquivo `src/abrigo-animais.test.js` e cobrem os seguintes cenários:

- Validação de entradas inválidas (brinquedos ou animais duplicados/inexistentes)
- Adoção por ordem correta de brinquedos
- Regra especial do jabuti Loco
- Limite de adoção por pessoa

A cobertura de código está em **100%** para *statements*, *functions* e *lines*, e **97.05%** para *branches*.

---

## 📦 Estrutura de Entrega

- Repositório público no GitHub com nome: `desafio-TatianaModelGBock-2025`
- Branch principal: `main`
- Código em JavaScript com estrutura original preservada

---

## 📎 Links úteis

- [Documentação do Jest](https://jest-archive-august-2023.netlify.app/pt-BR/docs/getting-started)
- [Como usar Git e GitHub na prática](https://www.youtube.com/watch?v=UBAX-13g8OM)

---
