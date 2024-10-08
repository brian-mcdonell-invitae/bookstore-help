const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.book.createMany({
    data: [
      { title: '1984', author: 'George Orwell', price: 9.99 },
      { title: 'The Catcher in the Rye', author: 'J.D. Salinger', price: 8.99 },
      { title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 7.99 },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
