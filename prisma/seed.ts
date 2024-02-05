import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const productsData: Prisma.ProductCreateInput[] = [
    {
        name: 'Phone',
        price: 300,
    },
    {
        name: 'Tablet',
        price: 400,
    },
    {
        name: 'Laptop',
        price: 350,
    },
]

const storesData: Prisma.StoreCreateInput[] = [
    {
        name: 'Flipkart',
        location: 'India',
    },
    {
        name: 'Amazon',
        location: 'USA',
    },
    {
        name: 'Best Buy',
        location: 'Canada',
    },
]

async function main() {
    console.log(`Start seeding ...`)
    await prisma.product.createMany({
        data: productsData,
    })
    await prisma.store.createMany({
        data: storesData,
    })
    console.log(`Seeding finished.`)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })