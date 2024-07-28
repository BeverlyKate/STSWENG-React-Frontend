import { ReportButton } from "./ReportButton"

export function MainContent({ reportSelection, toggleOverlay }) {
    return (
        <div className="mainContent">
            <div className="reports-menu">
                {reportSelection.map(report => {
                    return <ReportButton report={report.reportName} key={report.id} toggleOverlay ={toggleOverlay}/>
                })}
            </div>
        </div>
    )
}