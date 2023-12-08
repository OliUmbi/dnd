import "./button.scss";
import {ButtonProps} from "./button.props";

const Button = (props: ButtonProps) => {

  return (
      <button className="button" onClick={() => props.onClick()}>
        {props.title}
      </button>
  )
}

export default Button;
