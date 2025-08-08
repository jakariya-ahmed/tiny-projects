import { X } from "lucide-react";

export default function ModalCard({
    isOpen, onClose, title
}) 

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
        
    </>
  );
}