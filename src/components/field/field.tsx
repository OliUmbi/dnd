import "./field.scss";
import {FieldProps} from "./field.props";
import {CSSProperties} from "react";

const Field = (props: FieldProps) => {

  return (
      <div className="field" style={{
        "--field-xl": props.xl,
        "--field-l": props.l,
        "--field-m": props.m,
        "--field-s": props.s,
        "--field-xs": props.xs,
      } as CSSProperties}>
        {props.children}
      </div>
  )
}

export default Field;
