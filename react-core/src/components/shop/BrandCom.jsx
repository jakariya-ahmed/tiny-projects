import { useState } from "react";

export default function BrandCom({selectedBrands,handleBrandChange,}) {
    // Brand static json
const brands = [
  { id: 1, name: "Oppo", slug: "oppo" },
  { id: 2, name: "Lenovo", slug: "lenovo" },
  { id: 3, name: "Samsung ", slug: "samsung" },
  { id: 4, name: "Chic", slug: "chic" },
  { id: 5, name: "Nail", slug: "nail" },
  { id: 6, name: "Calvin", slug: "calvin" },
  { id: 7, name: "Realme", slug: "realme" },
  { id: 8, name: "HP", slug: "hp" },
  { id: 9, name: "Dell", slug: "dell" },
  { id: 10, name: "Dolce & Gabbana", slug: "dolce & Gabbana" },
];


return (
    <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Brand</h3>
        <ul className="space-y-2 text-gray-700">
            {brands.map((b) => (
            <li key={b.name}>
                <input 
                value={b.slug}
                checked={selectedBrands.includes(b.slug)}
                onChange={(e) => handleBrandChange(e.target.value, e.target.checked)}
                type="checkbox" /> <span className="pl-2">{b.name} </span>   
            </li>
            ))}
            
        </ul>
    </div>
);

}

