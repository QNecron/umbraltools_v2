interface Props {
  children: React.ReactNode;
  gap?: string | number;
  desktop?: string | number;
  tablet?: string | number;
  mobile?: string | number;
}

export default function Grid({
  children, 
  gap = 16,
  desktop = 4,
  tablet = 4,
  mobile = 2
}: Props) {

  return(
    <div 
      className="grid" 
      data-gap={gap} 
      data-desktop={desktop} 
      data-tablet={tablet} 
      data-mobile={mobile}
    >
      {children}
    </div>
  );
  
}