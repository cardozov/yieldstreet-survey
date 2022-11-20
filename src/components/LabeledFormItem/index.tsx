type LabeledFormItemType = {
  label?: string;
  name: string;
  children?: JSX.Element | JSX.Element[]
}

const LabeledFormItem = ({ label, name, children }: LabeledFormItemType) => {
  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor={name} className='form-label'>{label}</label>
      { children }
    </div>
  )
}

export default LabeledFormItem