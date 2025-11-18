# Arquitetura Componente - Angular 19

Projeto disponibilizado em aula, usado no módulo **DI e Zonas**, e o objetivo foi **estudar como funcionam os Providers no Angular 19**, entendendo a estrutura e funcionamento do código.

---

## O que foi estudado
- Conceito de **Injeção de Dependência** no Angular.
- Como os Providers funcionam internamente.
- Diferença entre `useClass`, `useValue`, `useFactory` e `useExisting`.
- Uso de Injection Tokens.
- Funcionamento do **NgZone** e impacto na detecção de mudanças.
- Separação de responsabilidades usando `question.service.ts` e `question-base.ts`.
- Como executar código dentro e fora da zona Angular.

---

## Estrutura principal do projeto
- `providers-useclass.ts` >> Demonstração prática do provider **useClass**.
- `providers-usevalue.ts` >> Exemplo de uso de constantes e objetos via **useValue**.
- `providers-usefactory.ts` >> Criação dinâmica de serviços com **useFactory**.
- `providers-useexisting.ts` >> Reaproveitamento de serviços usando **useExisting**.
- `injection-token.ts` >> Criação e utilização de tokens personalizados.
- `ngzones.component.ts` >> Exemplos práticos usando **run()** e **runOutsideAngular()**.

---

## Preview do projeto
<!--<img src="./nomeimagem.png" alt="Tela do Projeto FormsDinamicos" width="500"/>-->

## Tecnologias
- [Angular 19](https://angular.dev/)
- Typescript
- HTML / CSS

## Como executar
```bash```
- npm install
- ng serve
- Acesse no navegador: http://localhost:4200

---

## Anotações importantes
- Esse conteúdo foi usado apenas como exemplo prático em aula.
- Serve como referência para futuras implementações de DI avançada e uso de NgZone.
- Importante observar como cada tipo de provider é adequado para cenários específicos.
- NgZone pode melhorar performance quando bem utilizado.