import Field from "../components/field/field.tsx";
import Column from "../components/column/column.tsx";
import Skill from "../components/skill/skill.tsx";

const Saving = () => {

  return (
      <Field cxl={1} cl={1} cm={1} cs={1} cxs={1}
             rxl={2} rl={1} rm={1} rs={1} rxs={1}>
        <Column>
          <small>Saving Throws</small>
          <Skill title="Strength" ability="Strength" proficient={false}/>
          <Skill title="Dexterity" ability="Dexterity" proficient={false}/>
          <Skill title="Constitution" ability="Constitution" proficient={false}/>
          <Skill title="Intelligence" ability="Intelligence" proficient={false}/>
          <Skill title="Wisdom" ability="Wisdom" proficient={true}/>
          <Skill title="Charisma" ability="Charisma" proficient={true}/>
        </Column>
      </Field>
  )
}

export default Saving;
