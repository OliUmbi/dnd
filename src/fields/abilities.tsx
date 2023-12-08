import Field from "../components/field/field";
import Column from "../components/column/column";
import Ability from "../components/ability/ability";

const Abilities = () => {

  return (
      <Field xl={1} l={1} m={1} s={1} xs={1}>
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
