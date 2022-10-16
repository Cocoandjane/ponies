import { prisma } from '../../server/db/client'

export default async function handler(req, res) {
    const ponies = await prisma.pony.findMany();
    res.status(200).json(ponies);

}

// export default function haldler(req, res) {
//     res.status(200).json([
//         {
//             id:1,
//             name: 'Alice',
//             federalResgistryNumber: 1,
//             color: 'PINK',
//             breed: 'PUG',
//         },
//         {
//             id:2,
//             name: 'Bob',
//             federalResgistryNumber: 2,
//             color: 'BLACK',
//             breed: 'PUG',
//         },
//     ])
// }

