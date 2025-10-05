export default function SizeCom({selectedSizes, handleSizeChange}){
    return (
        <>
            <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Size</h3>
            <div className="flex gap-2 flex-wrap">
                {["S", "M", "L", "XL"].map((s) => (
                <button
                    key={s}
                    type="button"
                    onClick={() => handleSizeChange(s.toLowerCase())}
                    className={`px-3 py-1 border rounded 
                        ${selectedSizes.includes(s.toLowerCase()) ? "bg-amber-500 text-white" : ""}
                    `}
                    >
                    {s}
                    </button>
                ))}
            </div>
        </div>
        </>
    );
}