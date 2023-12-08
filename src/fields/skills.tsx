import Field from "../components/field/field.tsx";
import Column from "../components/column/column.tsx";
import Skill from "../components/skill/skill.tsx";

const Skills = () => {

  return (
      <Field cxl={2} cl={1} cm={1} cs={1} cxs={1}
             rxl={4} rl={1} rm={1} rs={1} rxs={1}>
        <Column>
          <small>Skills</small>
          <Skill title="Acrobatics" ability="Dexterity" proficient={false}/>
          <Skill title="Animal Handling" ability="Wisdom" proficient={false}/>
          <Skill title="Arcana" ability="Intelligence" proficient={false}/>
          <Skill title="Athletics" ability="Strength" proficient={true}/>
          <Skill title="Deception" ability="Charisma" proficient={false}/>
          <Skill title="History" ability="Intelligence" proficient={false}/>
          <Skill title="Insight" ability="Wisdom" proficient={false}/>
          <Skill title="Intimidation" ability="Charisma" proficient={true}/>
          <Skill title="Investigation" ability="Intelligence" proficient={true}/>
          <Skill title="Medicine" ability="Wisdom" proficient={false}/>
          <Skill title="Nature" ability="Intelligence" proficient={false}/>
          <Skill title="Perception" ability="Wisdom" proficient={false}/>
          <Skill title="Performance" ability="Charisma" proficient={false}/>
          <Skill title="Persuasion" ability="Charisma" proficient={true}/>
          <Skill title="Religion" ability="Intelligence" proficient={false}/>
          <Skill title="Sleight of Hand" ability="Dexterity" proficient={false}/>
          <Skill title="Stealth" ability="Dexterity" proficient={false}/>
          <Skill title="Survival" ability="Wisdom" proficient={false}/>
        </Column>
      </Field>
  )
}

export default Skills;
