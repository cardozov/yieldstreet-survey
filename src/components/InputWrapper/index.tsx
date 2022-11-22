import LabeledFormItem from "../LabeledFormItem";

type InputWrapperType = {
  label?: string;
  name: string;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const InputWrapper = ({
  label,
  name,
  className = "",
  ...rest
}: InputWrapperType) => {
  return (
    <LabeledFormItem label={label} name={name}>
      <input id={name} className={"form-input" + className} {...rest} />
    </LabeledFormItem>
  );
};

export default InputWrapper;
