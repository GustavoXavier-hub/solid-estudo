# Liskov Substitution Principle (LSP)

## Definição
Objetos de uma classe derivada devem poder substituir objetos da classe base sem alterar a correção do programa.

## Problema
Subclasses que violam o contrato da classe base podem causar comportamentos inesperados.

## Solução
Garantir que subclasses mantenham o comportamento esperado da classe base.

## Exemplos
- `bad-example.ts`: Exemplo violando o LSP
- `good-example.ts`: Exemplo seguindo o LSP
