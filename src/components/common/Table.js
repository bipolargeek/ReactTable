import { useState, useMemo } from 'react'
import { sortRows, filterRows, paginateRows } from './helpers'
import { Pagination } from './Pagination'
import { ThreeStateCheckbox } from './ThreeStateCheckbox'

export const Table = ({ columns, rows }) => {
    const [activePage, setActivePage] = useState(1)
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState({ order: 'asc', orderBy: 'id' })
    const rowsPerPage = 10

    const filteredRows = useMemo(() => filterRows(rows, filters), [rows, filters])
    const sortedRows = useMemo(() => sortRows(filteredRows, sort), [filteredRows, sort])
    const calculatedRows = paginateRows(sortedRows, activePage, rowsPerPage)

    const count = filteredRows.length
    const totalPages = Math.ceil(count / rowsPerPage)

    const handleSearch = (value, fieldname) => {
        setActivePage(1)

        if (value) {
            setFilters((prevFilters) => ({
                ...prevFilters,
                [fieldname]: value,
            }))
        } else {
            setFilters((prevFilters) => {
                const updatedFilters = { ...prevFilters }
                delete updatedFilters[fieldname]

                return updatedFilters
            })
        }
    }

    const handleSort = (fieldname) => {
        setActivePage(1)
        setSort((prevSort) => ({
            order: prevSort.order === 'asc' && prevSort.orderBy === fieldname ? 'desc' : 'asc',
            orderBy: fieldname,
        }))
    }

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        {columns.map((column) => {
                            const sortIcon = () => {
                                if (column.fieldname === sort.orderBy) {
                                    if (sort.order === 'asc') {
                                        return <>&#8593;</>
                                    }
                                    return <>&#8595;</>
                                } else {
                                    return <>&#8597;</>
                                }
                            }
                            return (
                                <th className={'no-text-select'} key={column.fieldname} onClick={() => {
                                    if (!column.command) {
                                        handleSort(column.fieldname)
                                    }
                                }}>
                                    <span>{column.headertext}</span>
                                    <span>{(!column.command ? sortIcon() : '')}</span>
                                </th>
                            )
                        })}
                    </tr>
                    <tr>
                        {columns.map((column) => {
                            if (column.command) {
                                return (
                                    <th key={column.fieldname}>
                                        <span>&nbsp;</span>
                                    </th>
                                )
                            } else if ((column.datatype || '').toLowerCase() === 'date') {
                                return (
                                    <th key={column.fieldname}>
                                        <input
                                            key={`${column.fieldname}-filter`}
                                            type="date"
                                            className="form-control"
                                            placeholder={`Search ${column.headertext}`}
                                            value={(filters[column.fieldname] || '')}
                                            onChange={(event) => {
                                                handleSearch(event.target.value, column.fieldname)
                                            }}
                                        />
                                    </th>
                                )
                            } else if ((column.datatype || '').toLowerCase() !== 'boolean') {
                                return (
                                    <th key={column.fieldname}>
                                        <input
                                            key={`${column.fieldname}-filter`}
                                            type="search"
                                            className="form-control"
                                            placeholder={`Search ${column.headertext}`}
                                            value={(filters[column.fieldname] || '')}
                                            onChange={(event) => handleSearch(event.target.value, column.fieldname)}
                                        />
                                    </th>
                                )
                            } else {
                                return (
                                    <th key={column.fieldname} style={column.style}>
                                        <ThreeStateCheckbox
                                            key={`${column.fieldname}-filter`}
                                            className="form-check-input"
                                            placeholder={`Search ${column.headertext}`}
                                            checked={(filters[column.fieldname] || '')}
                                            onChange={(value) => {
                                                handleSearch(value.toString(), column.fieldname);
                                            }}
                                        />
                                    </th>
                                )
                            }
                        })}
                    </tr>
                </thead>
                <tbody>
                    {calculatedRows.map((row, index) => {
                        return (
                            <tr key={index}>
                                {columns.map((column) => {
                                    if (column.command) {
                                        return (
                                            <td key={column.fieldname}>
                                                <button
                                                    key={`${column.fieldname}-command`}
                                                    className="btn btn-primary"
                                                    placeholder={`Search ${column.commandtext}`}
                                                    value={row.id}
                                                    onClick={column.command}>
                                                    {column.commandtext}
                                                </button>
                                            </td>
                                        )
                                    } else if ((column.datatype || '').toLowerCase() === 'boolean') {
                                        return <td className="boolean-align" key={column.fieldname}>{(column.format ? column.format(row[column.fieldname]) : <input type="checkbox" className="form-check-input" onClick={(event) => { event.preventDefault(); }} checked={row[column.fieldname]} defaultChecked={row[column.fieldname]}></input>)}</td>
                                    } else if ((column.datatype || '').toLowerCase() === 'number') {
                                        return <td className="number-align" key={column.fieldname}>{(column.format ? column.format(row[column.fieldname]) : row[column.fieldname])}</td>
                                    } else if ((column.datatype || '').toLowerCase() === 'date') {
                                        return <td className="date-align" key={column.fieldname}>{(column.format ? column.format(row[column.fieldname]) : row[column.fieldname])}</td>
                                    } else {
                                        return <td className="string-align" key={column.fieldname}>{(column.format ? column.format(row[column.fieldname]) : row[column.fieldname])}</td>
                                    }
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            {count > 0 ? (
                <Pagination
                    activePage={activePage}
                    count={count}
                    rowsPerPage={rowsPerPage}
                    totalPages={totalPages}
                    setActivePage={setActivePage}
                />
            ) : (
                <p>No data found</p>
            )}
        </>
    )
}


export default Table