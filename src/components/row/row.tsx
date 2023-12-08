import "./row.scss"
import {RowProps} from "./row.props";

const Row = (props: RowProps) => {

  return (
      <div className="row">
        {props.children}
      </div>
  )
}

export default Row;
