import Field from "../components/field/field";
import Button from "../components/button/button";
import Row from "../components/row/row";
import {broadcast} from "../services/signal.ts";

const Actions = () => {

  const long = () => {
    broadcast("long", null);
  };

  return (
      <Field cxl={2} cl={4} cm={2} cs={1} cxs={1}
             rxl={1} rl={1} rm={1} rs={1} rxs={1}>
        <small>Actions</small>
        <Row>
          <Button title="Short rest" onClick={() => {}}/>
          <Button title="Long rest" onClick={long}/>
        </Row>
      </Field>
  )
}

export default Actions;
