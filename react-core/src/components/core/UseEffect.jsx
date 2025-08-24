import { useState ,useEffect } from "react";

export default function UseEffect() {
    const [count, setCount] = useState(0);
    

    console.log('Component Rendered, connt = ', count);

    useEffect(() => {
        console.log('useEffect Called After render & paint');
    }, [count]);


    return (
    <div className="flex justify-center gap-3 mt-5">
        
        <button
            className="px-4 py-2 bg-gray-500 text-white rounded-sm"
            onClick={() => setCount(prev => prev + 1)}

        >
            +
        </button>
        
            <h1 className="text-3xl"> { count } </h1>

        <button
             className="px-4 py-2 bg-gray-500 text-white rounded-sm disabled:opacity-40"
             onClick={ () => setCount(prev => (prev > 0 ? prev - 1 : 0))}
             disabled= {count === 0 }
        >
            -
        </button>

    </div>
  )
}

