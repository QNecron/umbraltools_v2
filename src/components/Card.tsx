interface Props {
  card?: string;
  image?: string;
  imageHeight?: number;
  imageWidth?: number;
  title: string;
  badge?: string | number;
  copy_1?: string | number | React.ReactNode;
  copy_2?: string | number | React.ReactNode;
  copy_3?: string | number | React.ReactNode;
  copy_4?: string | number | React.ReactNode;
  copy_5?: string | number | React.ReactNode;
}

export default function Card({
  card = "",
  image,
  imageHeight,
  imageWidth,
  title,
  badge,
  copy_1,
  copy_2,
  copy_3,
  copy_4,
  copy_5
}: Props) {

  return(
    <article className="card" data-card={card}>
      {image &&
        <div className="card__asset">
          <img 
            src={image} 
            className="card__asset-img" 
            height={imageHeight} 
            width={imageWidth} 
            alt="" 
            aria-hidden="true" 
          />
        </div>
      }
      <div className="card__content">
        <h2 className="card__title" data-heading="4">{title}</h2>
        {badge && <div className="card__badge">{badge}</div>}
        {copy_1 && <div className="card__copy card__copy_1">{copy_1}</div>}
        {copy_2 && <div className="card__copy card__copy_2">{copy_2}</div>}
        {copy_3 && <div className="card__copy card__copy_3">{copy_3}</div>}
        {copy_4 && <div className="card__copy card__copy_4">{copy_4}</div>}
        {copy_5 && <div className="card__copy card__copy_5">{copy_5}</div>}
      </div>
    </article>
  );
  
}