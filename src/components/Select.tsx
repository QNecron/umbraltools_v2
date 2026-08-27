interface Props {
  id: string;
  value?: string;
  change: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
  label: string;
}

export default function Select({
  id,
  value,
  change,
  disabled,
  children,
  label
}: Props ) {

  return(

    <div className="input" data-type="select">
      
      <select
        id={id}
        value={value}
        autoComplete="off"
        onChange={change}
        className="input__field"
        disabled={disabled}
      >
        {children}
      </select>
      
      <label 
        htmlFor={id} 
        className="input__label"
      >
        {label}
      </label>

    </div>

  );

};
