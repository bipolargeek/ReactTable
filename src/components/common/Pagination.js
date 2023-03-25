/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

export const Pagination = ({ activePage, count, rowsPerPage, totalPages, setActivePage }) => {
    const pages = [];
    let pagesButtons = [];

    for (let i = 1; i <= totalPages; i++) {
        pages.push(<option key={i} value={i}>{i}</option>);
    }

    let startPage = activePage - 1;
    let endPage = 0;

    if (startPage <= 0) {
        startPage = 1;
    }

    if (totalPages >= 3) {
        endPage = 3;
    } else {
        endPage = totalPages;
    }

    if (parseInt(activePage) === totalPages && totalPages >= 3) {
        startPage = activePage - 2;
    } else if (parseInt(activePage) === totalPages && totalPages > 1 && totalPages < 3) {
        startPage = activePage - 1;
    }

    for (let i = startPage; i < (startPage + endPage); i++) {
        pagesButtons.push(
            <li key={i} className={`page-item ${(i === activePage ? 'active' : '')}`}>
                <button className="page-link" onClick={({ target: { value } }) => setActivePage(parseInt(value))} value={i}>
                    {i}
                </button>
            </li>
        );
    }

    return (
        <>
            <nav aria-label="Page navigation">
                <ul className="list-group list-group-horizontal">
                    <li className="list-group-item">

                        <ul className="pagination no-text-select">
                            <li className={`page-item ${activePage === 1 ? 'disabled' : ''}`}>
                                <button className="page-link" aria-label="Previous" onClick={() => setActivePage(1)}>
                                    &#8676;
                                </button>
                            </li>
                            <li className={`page-item ${activePage === 1 ? 'disabled' : ''}`}>
                                <button className="page-link" aria-label="Previous" onClick={() => setActivePage(activePage - 1)}>
                                    &#8592;
                                </button>
                            </li>

                            {pagesButtons.map((item, index) => item)}

                            <li className={`page-item ${activePage === totalPages ? 'disabled' : ''}`}>
                                <button className="page-link" aria-label="Next" onClick={() => setActivePage(activePage + 1)}>
                                    &#8594;
                                </button>
                            </li>
                            <li className={`page-item ${activePage === totalPages ? 'disabled' : ''}`}>
                                <button className="page-link" aria-label="Next" onClick={() => setActivePage(totalPages)}>
                                    &#8677;
                                </button>
                            </li>
                        </ul>

                    </li>
                    <li className="list-group-item">
                        <select
                            className="form-control form-select"
                            style={{ 'width': '75px' }}
                            value={activePage}
                            onChange={({ target: { value } }) => setActivePage(parseInt(value))}>
                            {pages.map((item, index) => item)}
                        </select>
                    </li>
                    <li className="list-group-item pt-3">
                        Page {activePage} of {totalPages}
                    </li>
                </ul>

            </nav>

            
        </>
    )
}
