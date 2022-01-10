import { useState } from 'react';
import Section from 'components/section';
import Container from 'components/container';
import FeedbackOptions from 'components/feedbackOptions';
import Statistics from 'components/statistics';
import Notification from 'components/notification';

const App = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });
  const { good, neutral, bad } = state;

  const onLeaveFeedback = el =>
    setState(prevState => ({ ...prevState, [el]: prevState[el] + 1 }));

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () =>
    (good / countTotalFeedback()) * 100;

  return (
    <>
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(state)}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {countTotalFeedback() === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Container>
    </>
  );
};

/* class oldApp extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = el =>
    this.setState(prevState => {
      return { [el]: prevState[el] + 1 };
    });

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () =>
    (this.state.good / this.countTotalFeedback()) * 100;

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();

    return (
      <>
        <Container>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          </Section>

          <Section title="Statistics">
            {total === 0 ? (
              <Notification message="No feedback given" />
            ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback}
                positivePercentage={this.countPositiveFeedbackPercentage}
              />
            )}
          </Section>
        </Container>
      </>
    );
  }
} */

export default App;
