interface Props {
  id: string;
  value?: string;
  cols?: number;
  rows?: number;
  change: () => void;
  disabled?: boolean;
  label: string;
}

export default function Textarea({
  id,
  value,
  cols,
  rows,
  change,
  disabled,
  label
}: Props ) {

  return(

    <div className="input" data-type="textarea">
      
      <textarea
        id={id}
        value={value}
        cols={cols}
        rows={rows}
        autoComplete="off"
        onChange={change}
        className="input__field"
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
