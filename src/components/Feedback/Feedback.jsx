import css from "../Feedback/Feedback.module.css"
export default function FedbackForm({ positive, totalFeedback, data }) {
    return (
        
        <div className={css.list}>
            <p>Good:{data.good}</p> 
            <p>Neutral:{data.neutral}</p> 
            <p>Bad:{data.bad}</p> 
            <p>Total:{totalFeedback}</p> 
            <p>Positive{ positive}</p> 
        </div>
    )
}