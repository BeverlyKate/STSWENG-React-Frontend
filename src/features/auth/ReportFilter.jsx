// import closeIcon from "../../../public/close.svg"
import closeIcon from "./close.svg"
import { MonthSelect } from "./MonthSelect"

export function ReportFilter({ toggleOverlay, currentOverlay}){
    return(
        <div className="overlay-holder">
            <div className="dark-overlay"></div>
            <div className="popup">
                {/* <button 
                    className="on-close" 
                    onClick={() => toggleOverlay("")}
                >
                    
                </button> */}
                <form className ="hello">
                    <div className="popup-body">
                        <div className="popup-header">
                            <div className="popup-text">{currentOverlay}</div>
                            <button className="btn-close" onClick={() => toggleOverlay("")}><img src={closeIcon} alt="close popup"/></button>
                        </div>
                        <div className="popup-subheader">
                            <div className="dashed-line"></div>
                            <div className="popup-text-one">Date range</div>
                            <div className="dashed-line"></div>
                        </div>
                        <div className="report-specifics-holder">
                            <MonthSelect />
                        </div>
                        <button type="submit" className="btn-generate-report">
                            Generate Report
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}