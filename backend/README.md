# Backend

You should do the following to run backend:

##1) Install PostgreSQL and pgAdmin4
##2) In pgAdmin 4 create a server and a database
Server should be created with options:
```json
host: 'localhost',
port: 5432,
username: 'postgres',
password: 'root',
 ```
*After that you need to create a database with the name **nest** in newly created server.*

##3) Install modules and their dependencies
```bash
$ npm install
```

##4) Add movies to the database
```bash
$ npm run typeorm migration:run -- -d ormconfig.ts
```

##5) Run the app
```bash
$ npm run start
```