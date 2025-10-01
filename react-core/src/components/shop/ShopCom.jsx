import { Star } from "lucide-react";
export default function ShopCom(){
    const API_URL = `https://dummyjson.com/products?limit=200&skip=10`;

    //


    return (
        <div className="mt-6 grid sm:grid-cols-2 md:mx-4 md:grid-cols-3 lg:grid-cols-4">
            <div className="rounded-md shadow-md bg-amber-500">
                <img src="/public/images/product2.jpg" alt="t-shirt" />
                <div className="px-3 py-4">
                    <h2>New latest model t-shirt </h2>
                    <p><strong className="line-through text-red-500">3450 tk </strong> 
                    <strong>3200 tk</strong> </p>
                    <div className="flex items-center gap-2">
                        <div>
                            <Star className="inline-block text-gray-900-400" size={16} />
                            <Star className="inline-block text-gray-900-400" size={16} />
                            <Star className="inline-block text-gray-900-400" size={16} /> 
                            <Star className="inline-block text-gray-900-400" size={16} /> 
                            <Star className="inline-block text-gray-900-400" size={16} /> 
                        </div>
                        <button className="bg-white text-gray-700 px-4 py-1 rounded-md mt-2 hover:bg-amber-400 hover:text-white cursor-pointer">Add to cart</button >
                    </div>

                </div>
            </div>
        </div>
    );
}