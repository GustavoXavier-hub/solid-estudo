# SOLID - Estudo de Arquitetura

Este repositório contém exemplos práticos e didáticos dos princípios SOLID de programação orientada a objetos.

## 📚 O que é SOLID?

SOLID é um acrônimo que representa cinco princípios fundamentais da programação orientada a objetos, criados por Robert C. Martin (Uncle Bob). Estes princípios ajudam a criar software mais manutenível, flexível e escalável.

## 🎯 Os 5 Princípios

### 1. **S** - Single Responsibility Principle (Princípio da Responsabilidade Única)
- **Definição**: Uma classe deve ter apenas uma razão para mudar
- **Objetivo**: Cada classe deve ter apenas uma responsabilidade bem definida
- [Ver exemplos](src/srp/)

### 2. **O** - Open/Closed Principle (Princípio Aberto/Fechado)
- **Definição**: Entidades devem estar abertas para extensão, mas fechadas para modificação
- **Objetivo**: Permitir adicionar novas funcionalidades sem alterar código existente
- [Ver exemplos](src/ocp/)

### 3. **L** - Liskov Substitution Principle (Princípio da Substituição de Liskov)
- **Definição**: Objetos derivados devem poder substituir seus objetos base
- **Objetivo**: Garantir que subclasses mantenham o comportamento esperado da classe base
- [Ver exemplos](src/lsp/)

### 4. **I** - Interface Segregation Principle (Princípio da Segregação de Interface)
- **Definição**: Clientes não devem ser forçados a depender de interfaces que não utilizam
- **Objetivo**: Criar interfaces específicas em vez de interfaces genéricas
- [Ver exemplos](src/isp/)

### 5. **D** - Dependency Inversion Principle (Princípio da Inversão de Dependência)
- **Definição**: Dependa de abstrações, não de implementações concretas
- **Objetivo**: Reduzir o acoplamento entre módulos
- [Ver exemplos](src/dip/)

## 🚀 Como executar

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação
```bash
npm install
```

### Compilar TypeScript
```bash
npx tsc
```

### Executar exemplos
```bash
# Single Responsibility Principle
npx ts-node src/srp/bad-example.ts
npx ts-node src/srp/good-example.ts

# Open/Closed Principle
npx ts-node src/ocp/bad-example.ts
npx ts-node src/ocp/good-example.ts

# Liskov Substitution Principle
npx ts-node src/lsp/bad-example.ts
npx ts-node src/lsp/good-example.ts

# Interface Segregation Principle
npx ts-node src/isp/bad-example.ts
npx ts-node src/isp/good-example.ts

# Dependency Inversion Principle
npx ts-node src/dip/bad-example.ts
npx ts-node src/dip/good-example.ts
```

## 📖 Estrutura do Projeto

```
solid-estudo/
├── src/
│   ├── srp/          # Single Responsibility Principle
│   │   ├── README.md
│   │   ├── bad-example.ts
│   │   └── good-example.ts
│   ├── ocp/          # Open/Closed Principle
│   │   ├── README.md
│   │   ├── bad-example.ts
│   │   └── good-example.ts
│   ├── lsp/          # Liskov Substitution Principle
│   │   ├── README.md
│   │   ├── bad-example.ts
│   │   └── good-example.ts
│   ├── isp/          # Interface Segregation Principle
│   │   ├── README.md
│   │   ├── bad-example.ts
│   │   └── good-example.ts
│   └── dip/          # Dependency Inversion Principle
│       ├── README.md
│       ├── bad-example.ts
│       └── good-example.ts
├── package.json
├── tsconfig.json
└── README.md
```

## 🎓 Benefícios de aplicar SOLID

1. **Manutenibilidade**: Código mais fácil de entender e modificar
2. **Escalabilidade**: Facilita a adição de novas funcionalidades
3. **Testabilidade**: Código mais fácil de testar
4. **Reutilização**: Componentes mais reutilizáveis
5. **Redução de bugs**: Menos efeitos colaterais em mudanças

## 📚 Referências

- [SOLID Principles - Wikipedia](https://en.wikipedia.org/wiki/SOLID)
- [Clean Code - Robert C. Martin](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)
- [The Clean Coder - Robert C. Martin](https://www.amazon.com/Clean-Coder-Conduct-Professional-Programmers/dp/0137081073)

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:
- Adicionar mais exemplos
- Melhorar a documentação
- Reportar problemas
- Sugerir melhorias

## 📝 Licença

Este projeto é open source e está disponível para fins educacionais.