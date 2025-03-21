## Requirement
```
Allow a user to filter bills by Bill type field. 
```
`bill_type` param is not available in api request, instead user will be able to filter by `bill_status`.

We could eventually let user filter by `bill type` but it would be in scope of current data in table(filter displayed records). It makes no sense to me as all filters should be applied on the server.

## Running Project

Navigate into root folder and run

```
npm run dev
```

To run tests
```
npm run test
```

Tests are available for global components.

React Context is used to store user data. We could use redux or zustand as well.  

Axios is used for https request.

React query is used for fetching data, it allows you client side caching.

## Project structure

Api - Api calls and axios instance

Assets - Custom icons and images

Components - Reusable components

Contexts - Place for contexts and context providers.

Hooks - Custom hooks for reusable logic.

Pages - Page components 

Router - Routes and router config files

Services - eg. DateService, SocketService, MockDataService 

Styles - Reusable styles, theme overrides etc

Types - global Types and Intefaces

Utilities - utility functions and helpers

## Component Structure
```
 ├── ComponentA/
 │   ├── ComponentA.tsx
 │   ├── ComponentA.test.tsx
 │   ├── ComponentA.styles.css
 │   └── index.ts
```



