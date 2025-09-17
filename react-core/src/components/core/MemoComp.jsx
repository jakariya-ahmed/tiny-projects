import { memo, useState } from "react";


function Swatch({ color }){
    console.log(`Swatch is rendered! ${color}`);
    return(
        <div className="w-20 h-20 rounded" style={{ backgroundColor: color}}>

        </div>
    );
}

const MemoedSwatch = memo(Swatch);

export default function MemoComp(){
    const[count, setCount] = useState(0);
    const[color, setColor] = useState('red');
    console.log('App is Rendered!');
    return (
        <div className="my-6 w-5xl mx-auto space-y-3">

            <div className="">
                <h1 className="bg-violet-400 px-3 py-2 w-20 text-4xl text-center">{count}</h1>    
                <button
                className="bg-amber-400 px-3 py-2"
                onClick={ () => setCount(count => count + 1)}
                >
                    Increment
                </button>
            </div>

            <div>
                <MemoedSwatch color={color} />
                <button
                className="bg-amber-400 px-3 py-2"
                onClick={ () => setColor(color === 'red' ? 'blue' : 'red')}
                >
                    Change Color
                </button>
            </div>
        </div>
    );
}