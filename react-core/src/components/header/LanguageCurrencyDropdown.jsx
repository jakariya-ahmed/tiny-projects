import { useState } from "react";
import { Globe, ChevronDown, DollarSign } from "lucide-react";

export default function LanguageCurrencyDropdown() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isCurrOpen, setIsCurrOpen] = useState(false);
  const [language, setLanguage] = useState("English");
  const [currency, setCurrency] = useState("USD");

  const languages = ["English", "বাংলা", "Español", "Français"];
  const currencies = ["USD", "EUR", "BDT", "INR"];

  return (
    <div className="flex items-center gap-4 text-sm font-medium text-gray-700">
      {/* 🌐 Language Dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsLangOpen(!isLangOpen)}
          className="flex items-center gap-1 hover:text-amber-500 transition"
        >
          <Globe size={16} />
          {language}
          <ChevronDown size={14} className="mt-[2px]" />
        </button>

        {isLangOpen && (
          <div className="absolute top-8 left-0 w-36 bg-white border border-gray-200 rounded-md shadow-lg z-20">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  setLanguage(lang);
                  setIsLangOpen(false);
                }}
                className={`w-full text-left px-4 py-2 hover:bg-amber-50 hover:text-amber-600 ${
                  language === lang ? "text-amber-600 font-semibold" : ""
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* 💰 Currency Dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsCurrOpen(!isCurrOpen)}
          className="flex items-center gap-1 hover:text-amber-500 transition"
        >
          <DollarSign size={16} />
          {currency}
          <ChevronDown size={14} className="mt-[2px]" />
        </button>

        {isCurrOpen && (
          <div className="absolute top-8 left-0 w-28 bg-white border border-gray-200 rounded-md shadow-lg z-20">
            {currencies.map((curr) => (
              <button
                key={curr}
                onClick={() => {
                  setCurrency(curr);
                  setIsCurrOpen(false);
                }}
                className={`w-full text-left px-4 py-2 hover:bg-amber-50 hover:text-amber-600 ${
                  currency === curr ? "text-amber-600 font-semibold" : ""
                }`}
              >
                {curr}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
