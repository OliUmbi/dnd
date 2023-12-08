import Field from "../components/field/field";
import Detail from "../components/detail/detail";
import Row from "../components/row/row";

const Character = () => {

  return (
      <Field xl={6} l={5} m={3} s={2} xs={1}>
        <Row>
          <Detail title="Class" value="Paladin"/>
          <Detail title="Race" value="Tiefling"/>
          <Detail title="Alignment" value="Lawful Evil"/>
          <Detail title="Background" value="Haunted One"/>
          <Detail title="Age" value="34"/>
          <Detail title="Height" value="6ft"/>
          <Detail title="Weight" value="80kg"/>
        </Row>
      </Field>
  )
}

export default Character;
