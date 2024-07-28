import { useState } from "react"
import { MainContent } from "./MainContent"
import { ReportFilter } from "./ReportFilter"
import Modal from "./Modal"

export default function Home() {
    var reportSelection =[
        {id: 1, reportName: 'Item Quantity Per Model'}, 
        {id: 2, reportName: 'Top Defects Per Model'}, 
        {id: 3, reportName: 'Pending Tasks Per Model'}
    ]

    const [filterData, setFilterData] = useState([])

    const [openOverlay, setOpenOverlay] = useState(false)

    const [currentOverlay, setCurrentOverlay] = useState("")

    function toggleOverlay(report) {
        setOpenOverlay(!openOverlay)
        setCurrentOverlay(report)
    }

    return (
    <>
        {/* <div className="navHolder"></div>  */}

        <MainContent reportSelection={reportSelection} toggleOverlay={toggleOverlay}/>

        {/* {openOverlay && (<FilterOverlay toggleOverlay={toggleOverlay} />)} */}

        <Modal openOverlay={openOverlay} toggleOverlay={toggleOverlay} >
            <ReportFilter toggleOverlay={toggleOverlay} currentOverlay={currentOverlay}/>
        </Modal>
    </>
    )
}
