import "./input.scss";
import {InputProps} from "./input.props";
import {ChangeEvent} from "react";

const Input = (props: InputProps) => {
  const handleOnChange = (value: ChangeEvent<HTMLInputElement>) => {
    value.preventDefault()

    props.onChange?.(value.target.valueAsNumber)
  }

  return (
      <label className="input">
        {
          props.title !== undefined ? (
              <small>{props.title}</small>
          ) : null
        }
        <input type="number" value={props.value} onChange={handleOnChange} disabled={props.onChange === undefined}/>
      </label>
  )
}

export default Input;
