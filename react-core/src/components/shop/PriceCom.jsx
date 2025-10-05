import useDummyData from "../../hooks/useDummyData";

export default function PriceCom({handlePriceChange,priceRange}) {
    // Dummy API URL
    const API_URL = `https://dummyjson.com/products?limit=1200&skip=24`;
    // Get from custom hook useDummyData.js
    const {maxPrice } = useDummyData(API_URL);

    
    return (
        <>
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Price Range</h3>
                <div className="flex gap-4">
                    <input
                    type="number"
                    name="min"
                    value={priceRange[0]}
                    min={0}
                    max={priceRange[1]}
                    onChange={handlePriceChange}
                    className="w-24 border rounded px-2 py-1"
                    />
                    <span>-</span>
                    <input
                    type="number"
                    name="max"
                    value={priceRange[1]}
                    min={priceRange[0]}
                    max={maxPrice}
                    onChange={handlePriceChange}
                    className="w-24 border rounded px-2 py-1"
                    />
                </div>
            </div>
        </>
    );
}