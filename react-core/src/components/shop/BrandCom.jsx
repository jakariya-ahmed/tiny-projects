import { useState } from "react";

export default function BrandCom() {
    // Brand static json
const brands = [
  { id: 1, name: "Apple", slug: "apple" },
  { id: 2, name: "Samsung", slug: "samsung" },
  { id: 3, name: "Huawei", slug: "huawei" },
  { id: 4, name: "Microsoft", slug: "microsoft" },
  { id: 5, name: "Infinix", slug: "infinix" },
  { id: 6, name: "OPPO", slug: "oppo" },
  { id: 7, name: "Realme", slug: "realme" },
  { id: 8, name: "HP", slug: "hp" },
  { id: 9, name: "Dell", slug: "dell" },
  { id: 10, name: "Lenovo", slug: "lenovo" },
];


return (
    <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Brand</h3>
        <ul className="space-y-2 text-gray-700">
            {brands.map((b) => (
            <li key={b.slug}>
                <input type="checkbox" /> <span className="pl-2">{b.name} </span>   
            </li>
            ))}
            
        </ul>
    </div>
);

}

