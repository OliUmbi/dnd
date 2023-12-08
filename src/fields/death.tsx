import Field from "../components/field/field.tsx";
import Column from "../components/column/column.tsx";
import Input from "../components/input/input.tsx";
import useProperty from "../hooks/use-property.ts";

const Death = () => {

  const [success, setSuccess] = useProperty("Success");
  const [fail, setFail] = useProperty("Fail");

  return (
      <Field cxl={2} cl={1} cm={1} cs={1} cxs={1}
             rxl={2} rl={1} rm={1} rs={1} rxs={1}>
        <Column>
          <small>Death Saves</small>
          <Input value={success} title="Success" onChange={value => setSuccess(value)}/>
          <Input value={fail} title="Fail" onChange={value => setFail(value)}/>
        </Column>
      </Field>
  )
}

export default Death;
