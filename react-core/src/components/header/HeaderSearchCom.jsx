import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
export default function HeaderSearchCom({products}){
    
    const [headerSearch, setHeaderSearch] = useState("");
    const [searchSuggestions, setSearchSuggestions] = useState([]);

    useEffect(()=>{
        if (headerSearch.trim() === "") {
            setSearchSuggestions([]);
        } else {
            const searchProducts = products.filter((p) => 
                p.title.toLowerCase().includes(headerSearch.toLowerCase())
            );
            setSearchSuggestions(searchProducts);
        }
    }, [headerSearch, products]);

    return(
        <>
        <div className="w-[50%] relative">
            <div className="flex">
                <input
                    type="text"
                    value={headerSearch}
                    onChange={(e) => setHeaderSearch(e.target.value)}
                    placeholder="Search products..."
                    className="w-full text-amber-800 border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-amber-200"
                />
                <button className="bg-amber-500 px-3 py-2 text-white cursor-pointer">
                    <SearchIcon size={26}/>
                </button>

            </div>
            {searchSuggestions.length > 0 && (
            <ul className="absolute left-0 right-0 bg-white border border-amber-200 rounded-lg mt-1 shadow-lg z-50 max-h-100 overflow-y-auto">
                {searchSuggestions.map((item) => (
                    <li
                    key={item.id}
                    className="px-3 py-2 hover:bg-amber-100 cursor-pointer flex items-center gap-2"
                    >
                        <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="w-10 h-10 object-cover rounded"
                        />
                    <span>{item.title}</span>
                    <span>tk{item.price}  </span>
                    </li>
                ))}
            </ul>
        )}
      </div>
        </>
    );
}