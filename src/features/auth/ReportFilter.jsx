import { useState } from "react"
import closeIcon from "./close.svg"
import { DateSelect } from "./DateSelect"
import { FormIQPM } from "./FormIQPM"
import { FormTDAndPTPM } from "./FormTDAndPTPM"
import { useNavigate } from "react-router-dom"

export function ReportFilter({ toggleOverlay, currentOverlay }){
    const [dateRange, setDateRange] = useState("")
    const [repairStatus, setRepairStatus] = useState("")
    const [itemCategory, setItemCategory] = useState("")
    const [modelCategory, setModelCategory] = useState("")
    const [formData, setFormData] = useState([{overlay: currentOverlay}, {date: ""}, {item: ""}, {model: ""}, {status: ""}])
    const navigate = useNavigate()

    function getDate(date) {
        setDateRange(date)
    }

    function getRepairStatus(status) {
        setRepairStatus(status)
    }

    function getItemCategory(item){
        setItemCategory(item)
    }

    function getModelCategory(model){
        setModelCategory(model)
    }

    function generateReport(e) {
        e.preventDefault()

        //var data = this.state.arr.slice()

        if(dateRange === "") return console.log("invalid date")
        
        //console.log(dateRange)

        if(currentOverlay === "Top Defects Per Model" || currentOverlay === "Pending Tasks Per Model"){
            if(repairStatus==="") return console.log("please select status")
        }

        formData.date = dateRange

        formData.item = itemCategory

        formData.model = modelCategory

        formData.status = repairStatus

        console.log(formData)

        formData.date = ""

        formData.item = ""

        formData.model = ""

        formData.status = ""

        navigate("/dash/report")

    }

    return(
        <div className="overlay-holder">
            <div className="dark-overlay"></div>
            <div className="popup">
                {/* <button 
                    className="on-close" 
                    onClick={() => toggleOverlay("")}
                >
                    
                </button> */}
                <form className ="hello" onSubmit={generateReport}>
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
                        <DateSelect getDate={getDate}/>
                        <div className="report-specifics-holder">
                            {currentOverlay === "Item Quantity Per Model" && (<FormIQPM getItemCategory={getItemCategory}/>) 
                            || (<FormTDAndPTPM getRepairStatus={getRepairStatus} 
                                                getItemCategory={getItemCategory} 
                                                getModelCategory={getModelCategory}/>)}
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