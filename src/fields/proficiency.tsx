import Field from "../components/field/field";
import Input from "../components/input/input";
import useProperty from "../hooks/use-property";
import {useEffect} from "react";

const Proficiency = () => {

  const [level] = useProperty("Level")

  const [proficiency, setProficiency] = useProperty("Proficiency");


  useEffect(() => {

    if (level <= 0) {
      setProficiency(-1);
      return;
    }
    if (level <= 4) {
      setProficiency(2);
      return;
    }
    if (level <= 8) {
      setProficiency(3);
      return;
    }
    if (level <= 12) {
      setProficiency(4);
      return;
    }
    if (level <= 16) {
      setProficiency(5);
      return;
    }
    if (level <= 20) {
      setProficiency(6);
      return;
    }
  }, [level])

  return (
      <Field cxl={1} cl={1} cm={1} cs={1} cxs={1}
             rxl={1} rl={1} rm={1} rs={1} rxs={1}>
        <Input value={proficiency} title="proficiency bonus"/>
      </Field>
  )
}

export default Proficiency;
