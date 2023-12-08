import "./ability.scss";
import {AbilityProps} from "./ability.props";
import Input from "../input/input";
import useProperty from "../../hooks/use-property";

const Ability = (props: AbilityProps) => {
  const [ability, setAbility] = useProperty(props.name);
  const [points, setPoints] = useProperty(props.name + "-points");

  const handleOnChange = (value: number) => {
    setPoints(value);
    setAbility(Math.floor((value - 10) / 2))
  };

  return (
      <div className="ability">
        <small className="ability__title">{props.name}</small>
        <Input value={ability}/>
        <Input value={points} onChange={handleOnChange}/>
      </div>
  )
}

export default Ability;
