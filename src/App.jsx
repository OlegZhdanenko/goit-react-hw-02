
import './App.css'
import Description from "./components/Description/Description.jsx";
import Options from './components/Options/Options.jsx';
import FedbackForm from './components/Feedback/Feedback.jsx';
import { useState, useEffect } from 'react';
import Notification from './components/Notification/Notification.jsx';


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
      <Description/>
      <Options  onTrack={updateFeedback} onReset={resetButton} totalFeedback={totalFeedback}/>
      {totalFeedback?<FedbackForm data={values} totalFeedback={totalFeedback} positive={Positive} />:
      <Notification/>}
    </div>
  )
}

export default App
