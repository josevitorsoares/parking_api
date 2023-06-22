# parking_api

Uma API de estacionamento buscando resolver um desafio.

Desafio -> Desenvolva uma API rest para o gerenciamento de carros no estacionamento.

Contexto -> João tem um estacionamento que tem bastante fluxo de carros, pois tem seu negócio na capital. Contudo, os cliente estão chateados pois apesar de ser permitido a entrada no estacionamento muitas vezes não há vaga e os clientes perdem tempo entrando no estacionamento. Além disso, ele precisa fazer um levantamento diário de quanto ganha durante o dia. Como também, estabelecer um horario de funcionamento do estacionamento (aberto a partir das 9 AM à 18PM).

Critérios

- O sistema deve ter um banco de dados relacional.
- Organização miníma de pastas service e repository.
- Controllers.
- Em relação aos carros, deve-se guardar somente o nome do proprietario, placa do carro e telefone.
- O estacionamento tem somente 20 vagas, dessa forma não deve ser permitido a entrada caso já esteja lotado.
- Ao final do horário deve-se fechar o caixa e contabilizar o valor total obtido no dia.
- Documentar através do Swagger
- Será um diferencial se não utilizar TypeORM (utilizar SQL)
