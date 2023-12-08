import Field from "../components/field/field";
import Input from "../components/input/input";
import useProperty from "../hooks/use-property";

const Level = () => {
  const [level, setLevel] = useProperty("Level");

  return (
      <Field xl={1} l={1} m={1} s={1} xs={1}>
        <Input value={level} title="Level" onChange={value => setLevel(value)}/>
      </Field>
  )
}

export default Level;
