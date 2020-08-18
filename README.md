# Mysql nodejs fastify Api

## Inicialización :bomb:

Lo primero es correr las migraciones, para ello debemos hacer:

```(bash)
bg$bg ~\ npm run knex:migrate:latest
```

Luego debemos correr el archivo seeder para añadir al usuario admin

```(bash)
bg$bg ~\ npm run knex:migrate:seed
```

## Como crear una nueva migración

```(bash)
bg$bg ~\ npm run knex:migrate:make <nombre_migración>
```
