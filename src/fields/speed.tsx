import Field from "../components/field/field.tsx";
import Input from "../components/input/input.tsx";

const Speed = () => {

  // todo shield +2

  return (
      <Field cxl={1} cl={1} cm={1} cs={1} cxs={1}
             rxl={1} rl={1} rm={1} rs={1} rxs={1}>
        <Input value={30} title="Speed"/>
      </Field>
  )
}

export default Speed;
