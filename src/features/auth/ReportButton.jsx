
export function ReportButton({ report, toggleOverlay }) {
    return (
        <div className="btn-report-holder" data-report="IQPM">
            <button 
                onClick={() => toggleOverlay(report)}
                className="report-name"
            >
                {report}
            </button>
        </div>
    )
}