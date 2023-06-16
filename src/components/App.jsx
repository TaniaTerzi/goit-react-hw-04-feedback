// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };


  import { useState, useEffect } from "react";
  import FeedbackOptions from './FeedbackOptions/FeedbackOptions.js';
  import Section from "./Section/Section.js";
  import Statistics from "./Statistics/Statistics.js";
  import Notification from "./Notification/Notification.js";
  import css from './Ap.module.css'
  

  export const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [total, setTotal] = useState(0);
    const [percentage, setPercentage] = useState(0);

    
    const handleGood = () => {
      setGood(prevState => prevState + 1)
    };
    const handleNeutral = () => {
      setNeutral(prevState => prevState + 1)
    };
    const handleBad = () => {
      setBad(prevState => prevState + 1)
    };
    useEffect(() => {
      const totalFeedbacks = good + neutral + bad;
      setTotal(totalFeedbacks);

      const countPositiveFeedbackPercentage = Math.round(good / total * 100);
      setPercentage(countPositiveFeedbackPercentage);
    }, [good, neutral, bad, total, percentage]);

    const isFeedbsck = (total > 0);

    return (
        <div className={css.conteiner}>
          <Section title="Please leave feedback">
            <FeedbackOptions 
              onIncrementGood={handleGood}
              onIncrementNeutral={handleNeutral}
              onIncrementBad={handleBad} />
          </Section>
          <Section title="Statistiks">
            {isFeedbsck ?         
              (<Statistics              
                good={good}
                neutral={neutral}
                bad={bad} 
                total={total}
                percentage = {percentage}
              />)
            :
              (<Notification message="There is no feedback"/>)
            }
          </Section>
        </div>
      )
  };






