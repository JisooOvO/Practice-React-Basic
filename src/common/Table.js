const Table = ({colName, tableData}) => {
  const tableHead = colName.map((item,idx) => 
    <th key={`idx${idx}`} className="text-[#08769B] font-bold w-96">{item}</th>
  )
  return (
    <table className="mt-4 table-auto">
        <thead>
            <tr>
              {tableHead}
            </tr>
        </thead>
        <tbody>
            {tableData}
        </tbody>
    </table>
  )
}

export default Table