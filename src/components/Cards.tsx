import { PropsWithChildren } from "react";
import "./Cards.scss";

type CardProps = {
  id?: string;
  className?: string;
};

export const Card = ({
  id,
  className,
  children,
}: PropsWithChildren<CardProps>) => (
  <div className={`card ${className}`} id={id}>
    <div className='card-content'>{children}</div>
  </div>
);

type TitleCardProps = CardProps & {
  title: string;
};

export const TitleCard = ({
  id,
  className,
  title,
  children,
}: PropsWithChildren<TitleCardProps>) => (
  <Card id={id} className={className}>
    <div className='info'>
      <div className='header'>
        <div className='title'>{title}</div>
      </div>
    </div>
    {children}
  </Card>
);

type HeaderCardProps = {
  title: string;
  subtitle: string;
  img: string;
};

export const HeaderCard = ({
  title,
  subtitle,
  img,
  children,
}: PropsWithChildren<HeaderCardProps>) => (
  <div className='header-card'>
    <div className='card-content'>
      <div className='info'>
        <div className='header'>
          <div className='title'>{title}</div>
          <div className='subtitle'>{subtitle}</div>
        </div>
        {children}
      </div>
      <div className='image'>
        <img src={img} />
      </div>
    </div>
  </div>
);
