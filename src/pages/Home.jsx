import useMenuStore from "../shared/store/useMenuStore";

const Home = () => {
  const { selectedMenu } = useMenuStore();

  return (
    <main>
      <h1 className="text-2xl font-bold">{selectedMenu}</h1>
    </main>
  );
};

export default Home;
