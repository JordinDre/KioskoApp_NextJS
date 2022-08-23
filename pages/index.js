import { PrismaClient } from "@prisma/client";

export default function Home({ categorias }) {
  console.log(categorias)
  return <div>Nextjs</div>;
}

export const getServerSideProps = async () => {
  const prisma = new PrismaClient();
  const categorias = await prisma.categoria.findMany();
  console.log(categorias);
  return {
    props: {
      categorias,
    },
  };
};
