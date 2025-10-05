export default function SortComp({sortOption,setSortOption}) {
    return(
        <>
            <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400"
            >
                <option value="default">Default</option>
                <option value="priceHighLow">Price: Highest to Lowest</option>
                <option value="priceLowHigh">Price: Lowest to Highest</option>
                <option value="popular">Popular Products</option>
            </select>
        </>
    );
}