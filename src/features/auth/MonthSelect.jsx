
export function MonthSelect() {
  return (
    <div className="popup-options date_range taskType" name="dateRange">
        <label className="btn-dropdown-mock taskOption">
            <input type="radio" className="radioCheck" name="dateRange" value="month" onclick="selectMonth()" />
            <span>Month</span>
        </label>
        <label className="btn-dropdown-mock taskOption" >
            <input type="radio" className="radioCheck" name="dateRange" value="quarter" onclick="selectQuarter()"/>
            <span>Quarter</span>
        </label>
        <label className="btn-dropdown-mock taskOption">
            <input type="radio" className="radioCheck" name="dateRange" value="year" onclick="selectYear()"/>
            <span>Year</span>
        </label>
    </div>
  )
}
