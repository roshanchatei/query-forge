import { useState } from 'react';
const OutputTable = ({tableRef, result, pageSize, currentPage}) =>  {

    const getTableRowsFromData = (arr) => {
        const keys = Object.keys(arr[0]);
        return arr.map((item, rowIndex) => {
            return (
                <tr key={rowIndex}>
                    {keys.map((key, colIndex) => {
                        return (
                            <td key={key + rowIndex} headers={`col-${colIndex}`}>
                                {item[key]}
                            </td>
                        );
                    })}
                </tr>
            );
        });
    };

    const getTableHeadFromData = (arr) => {
        const keys = Object.keys(arr[0]);
        return (
            <tr style={{ backgroundColor: "#2026d2" }}>
                {keys.map((key, colIndex) => {
                    return (
                        <th key={key} id={`col-${colIndex}`}>
                            {key}
                        </th>
                    );
                })}
            </tr>
        );
    };



    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const visibleData = result.slice(startIndex, endIndex);

    return (
        <>
            {
                result.length > 0 ? (
                    <div ref={tableRef} className="table-container">
                        <table>
                            <thead>{getTableHeadFromData(result)}</thead>
                            <tbody>{getTableRowsFromData(visibleData)}</tbody>
                        </table>
                    </div>
                ) : (
                    <>Run a query to see the output</>
                )
            }
        </>
    );
}

export default OutputTable;
