export default function ClikcTracker({ children, data, onTrack }) {
    return (
        
            <button  onClick={onTrack}>{children}{ data}</button>
            
        
    )
}