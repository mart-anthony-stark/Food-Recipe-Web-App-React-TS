import { FC } from "react";

interface Props {
  title: string;
}

const Heading: FC<Props> = ({ title }) => {
  return (
    <div className="heading center-items">
      <h1>{title}</h1>
    </div>
  );
};

export default Heading;
