import Field from "../components/field/field";
import Column from "../components/column/column";
import Ability from "../components/ability/ability";

const Abilities = () => {

  return (
      <Field cxl={1} cl={1} cm={1} cs={1} cxs={1}
             rxl={7} rl={1} rm={1} rs={1} rxs={1}>
        <Column>
          <Ability name="Strength"/>
          <Ability name="Dexterity"/>
          <Ability name="Constitution"/>
          <Ability name="Intelligence"/>
          <Ability name="Wisdom"/>
          <Ability name="Charisma"/>
        </Column>
      </Field>
  )
}

export default Abilities;
