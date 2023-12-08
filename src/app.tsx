import "./app.scss";
import Character from "./fields/character";
import Abilities from "./fields/abilities";
import Title from "./fields/title";
import Level from "./fields/level";
import Actions from "./fields/actions";
import Proficiency from "./fields/proficiency";

const App = () => {

  return (
      <main>
        <Title/>
        <Character/>
        <Level/>
        <Actions/>
        <Abilities/>
        <Proficiency/>
      </main>
  )
}

export default App;
