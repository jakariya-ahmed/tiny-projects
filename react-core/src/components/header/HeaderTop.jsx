import { NavLink } from "react-router-dom";

export default function HeaderTop() {
    return(
        <div className=" border-b-2 border-gray-100">
            <div className="flex sm:max-w-[90%] md:max-w-[90%] xl:max-w-[70%] mx-auto justify-between py-2">
                <div className="">
                    <ul className="flex gap-3">
                        <li className="text-[15px] font-semi-bold hover:text-amber-500 transition"><NavLink>Account </NavLink></li>
                        <li className="text-[15px] font-semi-bold hover:text-amber-500 transition"><NavLink>Tract Order </NavLink></li>
                        <li className="text-[15px] font-semi-bold hover:text-amber-500 transition"><NavLink>Support </NavLink></li>
                    </ul>
                </div>
                <div>
                    <ul className="flex gap-3">
                        <li className="text-[15px] font-semi-bold hover:text-amber-500 transition">Bangla</li>
                        <li className="text-[15px] font-semi-bold hover:text-amber-500 transition">BD</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

