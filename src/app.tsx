import "./app.scss";
import Character from "./fields/character";
import Abilities from "./fields/abilities";
import Title from "./fields/title";

const App = () => {

  // todo add level

  return (
      <main>
        <Title/>
        <Character/>
        <Abilities/>
      </main>
  )
}

export default App;
