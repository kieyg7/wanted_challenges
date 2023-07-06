import { useRoute } from "../hooks/useRoute";

const Home = () => {
  const { push } = useRoute();

  const onClick = () => {
    push("/about");
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={onClick}>About</button>
    </div>
  );
};

export default Home;
