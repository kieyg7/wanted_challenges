import { useRoute } from "../hooks/useRoute";

const About = () => {
  const { push } = useRoute();

  const onClick = () => {
    push("/");
  };

  return (
    <div>
      <h1>About</h1>
      <button onClick={onClick}>Home</button>
    </div>
  );
};

export default About;
