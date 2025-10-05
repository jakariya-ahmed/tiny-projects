export default function RatingCom({selectedRating,handleRatingChange}) {
    return (
        <>
        <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Rating</h3>
                <ul className="space-y-2">
                    {[5, 4, 3, 2, 1].map((r) => (
                    <li key={r}>
                        <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="rating"
                            value={r}
                            checked={selectedRating === r}
                            onChange={() => handleRatingChange(r)}
                        />
                        <span className="text-yellow-500">
                            {"★".repeat(r)} <span className="text-gray-500">& Up</span>
                        </span>
                        </label>
                    </li>
                    ))}
                    <li>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                        type="radio"
                        name="rating"
                        value={0}
                        checked={selectedRating === 0}
                        onChange={() => handleRatingChange(0)}
                        
                        />
                        <span className="text-gray-600">All Ratings</span>
                    </label>
                    </li>
                </ul>
            </div>
        </>
    );
}