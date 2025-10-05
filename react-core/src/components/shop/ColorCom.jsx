export default function ColorCom({selectedColors, handleColorChange}){

const colors = ["red", "blue", "green", "gray", 'pink'];

    return(
        <>
        <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Color</h3>
                <div className="flex gap-2">
                    {colors.map(c => (
                    <span 
                    key={c}
                    onClick={() => handleColorChange(c)}
                    className={`w-6 h-6 rounded-full border cursor-pointer bg-${c}-500
                        ${selectedColors.includes(c.toLowerCase()) ? "ring-2 ring-offset-2 ring-amber-500" : ""}
                    `}>
                        
                    </span>
                    ))}
                    
                    
                </div>
            </div>
        </>
    );
}

