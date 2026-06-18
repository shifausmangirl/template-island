const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const templates = [
    {
      title: 'Elegant Floral Watercolor',
      category: 'wedding',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=600&fit=crop'
    },
    {
      title: 'Golden 30th Birthday Bash',
      category: 'birthday',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=600&fit=crop'
    },
    {
      title: 'Minimalist Thank You Note',
      category: 'greeting',
      image: 'https://images.unsplash.com/photo-1513311160371-60f78c9ce9cb?w=400&h=600&fit=crop'
    },
    {
      title: 'Retro Disco Celebration',
      category: 'birthday',
      image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=600&fit=crop'
    },
    {
      title: 'Botanical Wildflower Frame',
      category: 'wedding',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop'
    },
    {
      title: 'Neon Splash Geometric',
      category: 'greeting',
      image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=600&fit=crop'
    }
  ];

  for (const template of templates) {
    await prisma.template.create({
      data: template
    });
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
