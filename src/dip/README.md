# Dependency Inversion Principle (DIP)

## Definição
- Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.
- Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.

## Problema
Dependências diretas em implementações concretas tornam o código rígido e difícil de testar.

## Solução
Depender de interfaces/abstrações em vez de classes concretas.

## Exemplos
- `bad-example.ts`: Exemplo violando o DIP
- `good-example.ts`: Exemplo seguindo o DIP
