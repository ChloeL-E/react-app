import { useState } from "react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status) return <IoMdHeart color="#ff6b81" size={40} onClick={toggle} />;
  return <IoMdHeartEmpty size={40} onClick={toggle}></IoMdHeartEmpty>;
};

export default Like;
