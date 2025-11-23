# Open/Closed Principle (OCP)

## Definição
Entidades de software (classes, módulos, funções) devem estar abertas para extensão, mas fechadas para modificação.

## Problema
Modificar código existente pode introduzir bugs e quebrar funcionalidades.

## Solução
Usar abstração (interfaces, classes abstratas) para permitir extensão sem modificar o código existente.

## Exemplos
- `bad-example.ts`: Exemplo violando o OCP
- `good-example.ts`: Exemplo seguindo o OCP
