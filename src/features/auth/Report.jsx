import { useState } from "react"
import { Graph } from './Graph'
import { Table } from './Table'
import { ReportFooter } from './ReportFooter'

import React from 'react'

export default function Report() {
  const [label, setLabels] = useState(['Sample 1', 'Sample 2', 'Sample 3', 'Sample 4', 'Sample 5'])

  const [data, setData] = useState([10, 20, 40, 3, 7])

  return (
    <>
      <div class="ReportBody">
        <h3><span id="categoryChange"></span>Item Quantity for <span class="dateChange"></span></h3>
        <div className="graphData">
          <Graph label={label} graphData={data}/>
          <Table />
        </div>
      </div>
      <ReportFooter />
    </>
  )
}
