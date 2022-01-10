import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p className={s.Feedback}>
        Good: <span className={s.FeedbackGood}>{good}</span>
        Neutral: <span className={s.FeedbackNeutral}>{neutral}</span>
        Bad: <span className={s.FeedbackBad}>{bad}</span>
      </p>

      <p>Total: {total}</p>
      <p>Positive feedback: {Math.ceil(positivePercentage)}%</p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
