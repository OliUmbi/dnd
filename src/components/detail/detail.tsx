import {DetailProps} from "./detail.props";

const Detail = (props: DetailProps) => {
  return (
      <div>
        <small>{props.title}</small>
        <p>{props.value}</p>
      </div>
  )
}

export default Detail;
