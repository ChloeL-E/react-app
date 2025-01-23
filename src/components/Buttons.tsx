interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger"; // using ? lets react know this prop is optional. using pipes can seperate options.
  onClick: () => void;
}

const Buttons = ({ children, color, onClick }: Props) => {
  return (
    <div>
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Buttons;
