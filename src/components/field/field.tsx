import "./field.scss";
import {FieldProps} from "./field.props";
import {CSSProperties} from "react";

const Field = (props: FieldProps) => {

  return (
      <div className="field" style={{
        "--field-column-xl": props.cxl,
        "--field-column-l": props.cl,
        "--field-column-m": props.cm,
        "--field-column-s": props.cs,
        "--field-column-xs": props.cxs,
        "--field-row-xl": props.rxl,
        "--field-row-l": props.rl,
        "--field-row-m": props.rm,
        "--field-row-s": props.rs,
        "--field-row-xs": props.rxs,
      } as CSSProperties}>
        {props.children}
      </div>
  )
}

export default Field;
