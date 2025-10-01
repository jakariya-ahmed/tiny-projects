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

    return {
        currentPage,
        setCurrentPage,
        totalPages,
        currentProducts,
    };

}
