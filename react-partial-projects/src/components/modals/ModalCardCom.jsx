import { X, Zap } from "lucide-react";

export default function ModalCard({isOpen, onClose, title}) 

{
    if (!isOpen) return null;

    return (
    <>
      {/* Overlay */}
      {/* <div className="fixed inset-0 bg-black/70" aria-hidden="true" /> */}
        {/* <div className="fixed inset-0 w-full bg-gray-700 max-w-md rounded"> */}
            {/* Modal content  */}
            {/* <div className="flex justify-between p-6 ">
                <h2 className="text-xl font-bold text-gray-300">{title} </h2>
                <button onClick={onClose}
                    className="bg-gray-700 rounded-full p-1 text-gray-400 border border-gray-400 hover:bg-rose-700 cursor-pointer transition"
                >
                    <X size={26}/>
                </button>
            </div>
            <hr className="text-gray-600" />
        </div> */}

        
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 bg-opacity-50 z-50">
            <div className="bg-white w-full max-w-md p-6">
                    {/* header  */}
                    <div className="flex items-center justify-between my-3">
                        <h2>{title}</h2>
                        <button
                        className="cursor-pointer text-red-500"
                        onClick={onClose}
                        >
                            <X  size={26} />
                        </button>
                    </div>
                <div>
                    
                {/* body  */}

                <div className="text-gray-400">
                    <label htmlFor="">Email</label>
                    <input type="email"
                        className="w-full h-10 border border-gray-600 px-2 my-2 focus:border-gray-400 outline-none rounded transition"
                    />
                </div>

                <div className="text-gray-400">
                    <label htmlFor="">Password</label>
                    <input type="password"
                        className="w-full h-10 border border-gray-600 px-2 my-2 focus:border-gray-400 outline-none rounded transition"
                    />
                </div>
                <button
                    type="submit"
                    
                    className="bg-blue-300 px-6 py-2 rounded-full font-semibold hover:bg-blue-400 mt-4 transition cursor-pointer"
                >Login</button>

                </div>
            </div>
        </div>
        

    </>
  );
}