import useProperty from "../hooks/use-property.ts";
import Field from "../components/field/field.tsx";
import Input from "../components/input/input.tsx";
import Column from "../components/column/column.tsx";

const Health = () => {

  const [constitiution] = useProperty("Constitution")
  const [health, setHealth] = useProperty("Health")

  return (
      <Field cxl={2} cl={1} cm={1} cs={1} cxs={1}
             rxl={2} rl={1} rm={1} rs={1} rxs={1}>
        <Column>
          <small>Hit Points</small>
          <Input value={32 + constitiution} title="Max"/>
          <Input value={health} title="Current" onChange={value => setHealth(value)}/>
        </Column>
      </Field>
  )
}

export default Health;
