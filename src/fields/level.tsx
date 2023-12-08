import Field from "../components/field/field";
import Input from "../components/input/input";
import useProperty from "../hooks/use-property";

const Level = () => {
  const [level, setLevel] = useProperty("Level");

  return (
      <Field cxl={1} cl={1} cm={1} cs={1} cxs={1}
             rxl={1} rl={1} rm={1} rs={1} rxs={1}>
        <Input value={level} title="Level" onChange={value => setLevel(value)}/>
      </Field>
  )
}

export default Level;
