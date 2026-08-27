interface Props {
  id: string;
  type: 'checkbox' | 'file' | 'number' | 'radio' | 'search' | 'text';
  accept?: string;
  value?: string;
  min?: number;
  max?: number;
  change: () => void;
  checked?: boolean;
  disabled?: boolean;
  label: string;
}

export default function Input({
  id,
  type,
  accept,
  value,
  min,
  max,
  change,
  checked,
  disabled,
  label
}: Props ) {

  return(

    <div className="input" data-type={type}>
      
      <input
        id={id}
        type={type}
        accept={accept}
        value={value}
        autoComplete="off"
        min={min}
        max={max}
        onChange={change}
        className="input__field"
        checked={checked}
        disabled={disabled}
      />
      
      <label 
        htmlFor={id} 
        className="input__label"
      >
        {label}
      </label>

    </div>

  );

};
