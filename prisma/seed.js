import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
    const alice = await prisma.pony.upsert({
        where: { federalResgistryNumber: 1 },
        update: {},
        create: {
            name: 'Alice',
            federalResgistryNumber: 1,
            color: 'PINK',
            breed: 'PUG',
        },
    })
    const bob = await prisma.pony.upsert({
        where: { federalResgistryNumber:2},
        update: {},
        create: {
            name: 'Bob',
            federalResgistryNumber: 2,
            color: 'BLACK',
            breed: 'PUG',
        },
    })
    console.log({ alice, bob })
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