# Parking API 🏎️

Uma API de estacionamento buscando resolver um desafio proposto pelo meu amigo [Tiago Lopes](https://github.com/tiagolopesdev).

- [Parking API 🏎️](#parking-api-️)
  - [Desafio 🎯](#desafio-)
    - [Contexto](#contexto)
    - [Critérios](#critérios)
  - [Status do Projeto](#status-do-projeto)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Autor](#autor)

## Desafio 🎯

Desenvolva uma API rest para o gerenciamento de carros no estacionamento.

### Contexto

João tem um estacionamento que tem bastante fluxo de carros, pois tem seu negócio na capital. Contudo, os cliente estão chateados pois apesar de ser permitido a entrada no estacionamento muitas vezes não há vaga e os clientes perdem tempo entrando no estacionamento. Além disso, ele precisa fazer um levantamento diário de quanto ganha durante o dia. Como também, estabelecer um horario de funcionamento do estacionamento (aberto a partir das 9 AM à 18PM). O valor por cada hora no estacionamento é de R$ 20,00 (vinte reais).

### Critérios

- O sistema deve ter um banco de dados relacional.
- Organização miníma de pastas Services e Controllers.
- Em relação aos carros, deve-se guardar somente o nome do proprietario, placa do carro e telefone.
- O estacionamento tem somente 20 vagas, dessa forma não deve ser permitido a entrada caso já esteja lotado.
- Ao final do horário deve-se fechar o caixa e contabilizar o valor total obtido no dia.
- Documentar através do Swagger
- Será um diferencial se não utilizar TypeORM (utilizar conexão direta com o SGBD).

## Status do Projeto

O desafio foi concluído, mas há sempre algo que possa melhorar 🚀.

## Tecnologias Utilizadas

- `node.js`
- `TypeScript`
- `express`
- `pg`
- `PostgreSQL`
- `Day.js`
- `Swagger UI`
- `dotenv`
- `uuidV4`

## Autor

👤 José Vitor Soares

- LinkedIn: [@josevitorsoares](https://www.linkedin.com/in/josevitorsoares/) 🔗
- GitHub: [@josevitorsoares](https://github.com/josevitorsoares) 👨🏻‍💻
- Twitter: [@JseVitorSoares](https://twitter.com/JseVitorSoares) 🐦
