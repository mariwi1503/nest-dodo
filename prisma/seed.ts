import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const exampleUser = await prisma.user.upsert({
    where: { email: 'example@mail.com' },
    update: {},
    create: {
      email: 'example@mail.com',
      name: 'Example',
      password: 'Password1', // TODO = hash password
      posts: {
        create: [
          {
            title: 'Follow Prisma on Twitter',
            content: 'https://twitter.com/prisma',
            published: true,
          },
          {
            title: 'Follow Nexus on Twitter',
            content: 'https://twitter.com/nexusgql',
            published: true,
          },
        ],
      },
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
