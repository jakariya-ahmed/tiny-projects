import { useEffect, useState } from "react";

export default function ProductCom() {
    const API_URL = `https://dummyjson.com/products?limit=200&skip=10`;
  // State for products, loading, and errors
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // Get data form dummujson.com using Fetch Api
    useEffect(() => {
      fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not fine");
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      })
    }, []);


    // Pagination show 10 products on per page
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    const indexOfLast = currentPage * productsPerPage;
    const indexOfFirst = indexOfLast - productsPerPage;

    const totalPages = Math.ceil(products.length / productsPerPage);
    
    const currentProducts = products.slice(indexOfFirst, indexOfLast);

    // Dynamic pagination buttons show
    const maxPageBtns = 10;
    const half = Math.floor(maxPageBtns / 2);

    let startPage = Math.max(1, currentPage - half);
    let endPage = startPage + maxPageBtns - 1;
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxPageBtns + 1);
    } 

    const pageNumbers = [];

    for (let i=startPage; i <= endPage; i++) pageNumbers.push(i);


  // --- Handlers ---
  const goToPage = (p) => setCurrentPage(p);
  const nextPage = () => setCurrentPage((p) => Math.min(p + 1, totalPages));
  const prevPage = () => setCurrentPage((p) => Math.max(p - 1, 1));

    if (loading) return <p> Products are loading...</p>
    if (error) return <p> Error: {error}</p>
    return(
        <section className="my-6">
          <aside>
            
          </aside>
          {/* Product card  */}
            <div className="grid sm:grid-cols-2 md:px-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                { currentProducts.map((p) => (
                <div key={p.id} className="shadow-md rounded-md">
                    <img src={p.thumbnail} alt="skin-product" />
                    <div className="p-4">
                        <h2 className="text-lg">{p.title}</h2>
                        <p><del>{p.discountPercentage}tk </del> <strong>{p.price} tk </strong></p>
                        <button className="bg-amber-500 text-white px-4 py-1 rounded-md mt-2 hover:bg-amber-600 cursor-pointer">Add to cart</button>
                    </div>
                </div>
                ))}
            </div>
            {/* Pagination buttons  */}
             <div className="flex justify-center mt-6 flex-wrap gap-1">
                <button
                  onClick={() => goToPage(1)}
                  disabled={currentPage === 1}
                  className="px-2 py-1 border rounded disabled:opacity-50"
                >
                  First
                </button>
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className="px-2 py-1 border rounded disabled:opacity-50"
                >
                  Prev
                </button>

                {pageNumbers.map((num) => (
                  <button
                    key={num}
                    onClick={() => goToPage(num)}
                    className={`px-3 py-1 border rounded ${
                      num === currentPage ? "bg-blue-500 text-white" : "bg-white"
                    }`}
                  >
                    {num}
                  </button>
                ))}

                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                  className="px-2 py-1 border rounded disabled:opacity-50"
                >
                  Next
                </button>
                <button
                  onClick={() => goToPage(totalPages)}
                  disabled={currentPage === totalPages}
                  className="px-2 py-1 border rounded disabled:opacity-50"
                >
                  Last
                </button>
              </div>
            
        </section>
    );
}







