import css from "../../styles/button.module.css";

interface IPrimaryButtonProps {
  text: string;
  color: string;
  fontSize?: string;
  submit?: boolean;
}

export function PrimaryButton({
  text,
  color,
  fontSize,
  submit,
}: IPrimaryButtonProps) {
  return (
    <button
      className={css["primary-button"]}
      style={{ backgroundColor: color, fontSize: fontSize }}
      type={submit ? "submit" : undefined}
    >
      {text}
    </button>
  );
}
