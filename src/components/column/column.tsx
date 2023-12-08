import "./column.scss"
import {ColumnProps} from "./column.props";

const Column = (props: ColumnProps) => {

  return (
      <div className="column">
        {props.children}
      </div>
  )
}

export default Column;
