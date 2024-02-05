This is a Inters sample NextJs+Prisma(ORM) connected to mssql database boilerplate project.

## Getting Started

1) ```prisma/schema.prisma``` file contains all the tables and schema
2) ```app``` directory contains all the pages and componets code
3) ```api``` directory contains all the api endpoints code

Modify .env file with your mssql DB credentials and do ```npm install``` in the root directory


#### Run the development server:
```bash
npm run dev
```

#### Push schema changes to DB:
```bash
npx prisma db push
```

<!-- #### Generate seed data:
```bash
npx prisma db seed
```

#### Generate types for prisma client:
```bash
npx prisma generate
```

#### Run prisma studio:
```bash
npx prisma studio
``` -->


