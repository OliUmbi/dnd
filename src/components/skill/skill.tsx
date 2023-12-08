import "./skill.scss";
import {SkillProps} from "./skill.props.ts";
import useProperty from "../../hooks/use-property.ts";

const Skill = (props: SkillProps) => {

  const [ability] = useProperty(props.ability)
  const [proficiency] = useProperty("Proficiency")

  const value = props.proficient ? ability + proficiency : ability

  return (
      <div className="skill">
        <small>{props.title} {props.proficient ? "*" : null}</small>
        <small>{value}</small>
      </div>
  )
}

export default Skill;
