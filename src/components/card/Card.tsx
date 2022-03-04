import { FC } from "react";
import "./card.css";

interface Props {
  children: JSX.Element;
}

const Card: FC<Props> = ({ children }) => {
  return <div className="card">{children}</div>;
};
export default Card;
