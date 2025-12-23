# Gerenciamento de estado com RxJS - Angular 19

Projeto de estudos utilizado no módulo **Gerenciamento de estado com RxJS (State Management)**, com foco em compreender como usar Observables, Subjects, BehaviorSubjects e padrões reativos para controlar o estado global e local de componentes no Angular 19.

---

## O que foi estudado
- Conceito de fluxo reativo no frontend.
- Uso de Observable, Subject, BehaviorSubject, ReplaySubject.
- Padrão de state store simples usando RxJS.
- Gerenciamento de estado local e global.
- Diferença entre cold e hot observables.
- Estratégias para imutabilidade e atualização de estado.
- Como usar scan, map, tap, distinctUntilChanged, etc.
- Como expor estado para componentes.
- Como evitar problemas como múltiplas emissões não desejadas.

---

## Estrutura principal do projeto
- todo-list:
    - componentes: 
        - tasks:
            - `tasks.component.html` >> 
            - `tasks.component.ts` >> 
        - tasks-iniciadas:    
            - `tasks.iniciadas.html` >> 
            - `tasks.iniciadas.component.ts` >>
        - tasks-finalizadas:      
            - `tasks.finalizadas.html` >> 
            - `tasks.finalizadas.component.ts` >> 
        - todo-list:
            - `todo-list.component.css` >> 
            - `todo-list.component.html` >> 
            - `todo-list.component.ts` >> 
    - `task.ts` >>
    - `todo.component.html` >>
    - `todo.component.ts` >>
    - `todo.db.json` >>
    - `todo.module.ts` >>
    - `todo.service.ts` >>

---

## Arquivo de dados (JSON utilizado como "banco de dados")
O projeto utiliza um arquivo JSON para simular uma fonte de dados local durante os estudos.

- Arquivo: `todo.db.json`
- Exemplo do conteúdo:
```
{
    "todolist": [
        {
            "id": 1,
            "nome": "Responder e-mails",
            "finalizado": false,
            "iniciado": true
        },
        {
            "id": 2,
            "nome": "Reunião com fornecedor",
            "finalizado": true,
            "iniciado": false
        },
        {
            "id": 3,
            "nome": "Finalizar curso de Angular",
            "finalizado": false,
            "iniciado": false
        }
    ]
}
```
- O arquivo é usado pelo json-server para criar um backend fake:
```
cd .\src\app\demos\todo-list\ 
json-server todo.db.json
```
---

## Preview do projeto
<img src="./Print-GerenciamentoRxJS.png" alt="Tela do Projeto Gerenciamento RxJS" width="500"/>

## Tecnologias
- [Angular 19](https://angular.dev/)
- RxJS
- Typescript
- HTML / CSS

## Como executar
```
- npm install
- ng serve
- Acesse no navegador: http://localhost:4200
```
---

## Anotações importantes
- Esse conteúdo mostra como implementar uma store simples sem NgRx.
- Útil como passo inicial para compreender padrões reativos.
- A abordagem com RxJS é leve e adequada para casos em que NgRx seria exagerado.
- Focar no entendimento profundo de subjects, streams e composição de operadores.