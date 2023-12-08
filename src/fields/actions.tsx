import Field from "../components/field/field";
import Button from "../components/button/button";
import Row from "../components/row/row";

const Actions = () => {

  return (
      <Field xl={2} l={4} m={2} s={1} xs={1}>
        <small>Actions</small>
        <Row>
          <Button title="Short rest" onClick={() => {}}/>
          <Button title="Long rest" onClick={() => {}}/>
        </Row>
      </Field>
  )
}

export default Actions;
