
import './App.css'
import Description from "./components/Description/Description.jsx";
import ClikcTracker from './components/Options/Options.jsx';
import FedbackForm from './components/Feedback/Feedback.jsx';
import { useState, useEffect } from 'react';
import css from "../src/components/Options/Options.module.css"


function App() {
  const [values, setValues] = useState(() => {
    const savedClicks = localStorage.getItem("my-clicks")
    return savedClicks !== null ? JSON.parse(savedClicks) :
      {
        good: 0,
        neutral: 0,
        bad: 0
      }
  })
  useEffect(() => {
    localStorage.setItem("my-clicks",JSON.stringify(values))
  }, [values]);

  const updateFeedback = feedbackType => {
	setValues({
		...values,
		[feedbackType]: values[feedbackType] + 1,
	})
  };
  const resetButton = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0
	})
  }

  const { good, neutral, bad } = values;
  const totalFeedback = good + neutral + bad;
  const Positive = Math.round(((good + neutral) / totalFeedback) * 100);


  return (
    <div>
      <Description />
      <div className={css.list}>
      <ClikcTracker data={values.good} onTrack={()=>updateFeedback("good")}>Good:</ClikcTracker>
      <ClikcTracker data={values.neutral} onTrack={()=>updateFeedback("neutral")}>Neutral:</ClikcTracker>
      <ClikcTracker data={values.bad} onTrack={() => updateFeedback("bad")}>Bad:</ClikcTracker>
        {totalFeedback >= 1 && <ClikcTracker onTrack={resetButton}>Reset</ClikcTracker>}
        </div>
      {totalFeedback >=1 ?
      <FedbackForm  data={values} totalFeedback={totalFeedback} positive={Positive}/>
      : <p>No feedback yet</p>}
    </div>
  )
}

export default App
