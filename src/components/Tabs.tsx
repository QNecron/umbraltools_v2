interface Props {
  children?: React.ReactNode;
  classes?: string;
  data: ({})[];
  state: string;
  update: (item: string) => void;
}

export default function Tabs({
  children, 
  classes, 
  data,
  state,
  update
}: Props) {

  return(
    <>
    
    {children}
    
    <div className={classes ? "tabs " + classes : "tabs"}>
      {data.map((info: any, index: number) =>
        <button
          className="btn"
          data-button="tab primary"
          aria-selected={state === info ? "true" : "false"}
          key={info + '-' + index}
          onClick={() => update(info)}
        >
          {info}
        </button>
      )}
    </div>
    
    </>
  );
  
}