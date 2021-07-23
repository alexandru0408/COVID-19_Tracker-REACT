import CountUp from "react-countup";

const Card = ({ title, value, date, detail, type }) => {
  return (
    <div className={`card ${type}`}>
      <div className="card__title">{title}</div>
      <div className="card__date">{new Date(date).toDateString()}</div>
      <div className="card__value">
        <CountUp start={0} end={value} duration={2.5} separator="." />
      </div>
      <div className="card__content">{detail}</div>
    </div>
  );
};

export default Card;
