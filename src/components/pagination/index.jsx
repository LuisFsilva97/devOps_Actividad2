import { useState } from "react"
import { Container } from "./style"


export const Pagination = ({ pagination, fetchNextPage, fetchPreviousPage }) => {

    const [currentPage, serCurrentPage] = useState(1)

    const previousPage = pagination?.prev ? currentPage - 1 : null
    const nextPage = currentPage !== pagination?.pages ? currentPage + 1 : null;

    const previousPagedisabledButton = !previousPage
    const nextPagedisabledButton = currentPage === pagination?.pages

    const handlePreviousPage = () => {
        serCurrentPage((prevState) => prevState - 1)
        fetchPreviousPage(pagination?.prev)
    }

    const handleNextPage = () => {
        serCurrentPage((prevState) => prevState + 1)
        fetchNextPage(pagination?.next)
    }

    return (
        <Container>
            <button onClick={handlePreviousPage} disabled={previousPagedisabledButton}>
                &lt;
            </button>

            <div className="container-page">
                <p className="page">{previousPage}</p>
                <p className="current-page">{currentPage}</p>
                <p className="page">{nextPage}</p>
            </div>

            <button onClick={handleNextPage} disabled={nextPagedisabledButton}>
                &gt;
            </button>



        </Container>
    )

}