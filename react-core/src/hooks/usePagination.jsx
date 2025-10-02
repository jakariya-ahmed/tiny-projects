import { useMemo } from "react";
import { useEffect, useState } from "react";
export default function usePagination(data=[], itemsPerPage=items) {
    
    const [currentPage, setCurrentPage] = useState(1);
    // Get total pages
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const currentProducts = useMemo(() => {
    // Index of last item on the current page
    const lastIndex = currentPage * itemsPerPage;
    // Index of first item on the current page
    const firstIndex = lastIndex - itemsPerPage;
    
    // Get current page products 
    return data.slice(firstIndex, lastIndex);

    }, [data, currentPage, itemsPerPage]);

    // Page numbers (only show 10 buttons at a time)
    const maxButtons = 10;
    let startPage = Math.max(currentPage - Math.floor(maxButtons / 2), 1)
    let endPage = startPage + maxButtons - 1;
    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(endPage - maxButtons + 1, 1);
    }

    const pageNumbers = Array.from(
        { length: endPage - startPage + 1},
        (_, i) => startPage + i
    );

    // const pageNumbers = [];
    // for (let i = startPage; i <= endPage; i++) pageNumbers.push(i);


    return {
        currentPage,
        setCurrentPage,
        totalPages,
        currentProducts,
        pageNumbers,
    };

}
