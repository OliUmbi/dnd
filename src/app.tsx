import "./app.scss";
import Character from "./fields/character";
import Abilities from "./fields/abilities";
import Title from "./fields/title";
import Level from "./fields/level";
import Actions from "./fields/actions";
import Proficiency from "./fields/proficiency";
import Saving from "./fields/saving.tsx";
import Skills from "./fields/skills.tsx";
import Armor from "./fields/armor.tsx";
import Initiative from "./fields/initiative.tsx";
import Speed from "./fields/speed.tsx";
import Health from "./fields/health.tsx";
import Hit from "./fields/hit.tsx";
import Death from "./fields/death.tsx";

const App = () => {

  return (
      <main>
        <Title/>

        <Character/>
        <Level/>
        <Actions/>

        <Abilities/>


        <Proficiency/>
        <Armor/>
        <Initiative/>
        <Speed/>

        <Saving/>
        <Health/>

        <Skills/>
            <Hit/>
            <Death/>
      </main>
  )
}

export default App;
