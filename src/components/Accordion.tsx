interface propsAccordion {
  children: React.ReactNode;
  id?: string;
  accordion?: string;
  open?: boolean;
  title: string;
  button: string;
}

export default function Accordion({
  children,
  id,
  accordion,
  open,
  title,
  button
}: propsAccordion) {

  return(
    <details 
      id={id} 
      className="accordion" 
      data-accordion={accordion || "default"} 
      open={open || false}
    >
      
      <summary className="accordion__title btn" data-btn={button}>
        {title}
      </summary>
      
      <div className="accordion__content">
        {children}
      </div>
      
    </details>
  );
  
}