import css from "../Options/Options.module.css"
export default function Options({ totalFeedback, onTrack, onReset }) {
    return (
        <div className={css.list}>
            <button onClick={()=>onTrack("good")}>Good</button>
            <button onClick={()=>onTrack("neutral")}>Neutral</button>
            <button onClick={()=>onTrack("bad")}>Bad</button>
            {totalFeedback>=1 && <button  onClick={onReset}>Reset</button>}
            </div>
        
    )
}