import Field from "../components/field/field";
import Detail from "../components/detail/detail";
import Row from "../components/row/row";

const Character = () => {

  return (
      <Field cxl={2} cl={4} cm={3} cs={2} cxs={1}
             rxl={1} rl={1} rm={1} rs={1} rxs={1}>
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
