import Field from "../components/field/field.tsx";
import Column from "../components/column/column.tsx";
import Input from "../components/input/input.tsx";
import useProperty from "../hooks/use-property.ts";
import {listen} from "../services/signal.ts";

const Hit = () => {

  const [level] = useProperty("Level")
  const [hit, setHit] = useProperty("Hit")

  const long = () => {
    setHit(level);
  };

  listen("long", long)

  return (
      <Field cxl={2} cl={1} cm={1} cs={1} cxs={1}
             rxl={2} rl={1} rm={1} rs={1} rxs={1}>
        <Column>
          <small>Hit Dice</small>
          <Input value={level} title="Total"/>
          <Input value={hit} title="Current" onChange={value => setHit(value)}/>
        </Column>
      </Field>
  )
}

export default Hit;
