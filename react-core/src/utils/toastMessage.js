// src/utils/toastMessages.js
import toast from "react-hot-toast";

export const showCartToast = (productName) => {
  toast.success(`🛒 ${productName} added to cart!`, {
    style: {
      border: "1px solid #f59e0b",
      padding: "10px 16px",
      color: "#333",
    },
    iconTheme: {
      primary: "#f59e0b",
      secondary: "#fff",
    },
  });
};

export const showFavToast = (productName) => {
  toast(`💖 ${productName} added to favourites!`, {
    style: {
      border: "1px solid #ec4899",
      padding: "10px 16px",
      color: "#333",
    },
    iconTheme: {
      primary: "#ec4899",
      secondary: "#fff",
    },
  });
};

export const showRemoveToast = (productName) => {
  toast.error(`❌ ${productName} removed from cart.`, {
    style: {
      border: "1px solid #ef4444",
      padding: "10px 16px",
      color: "#333",
    },
  });
};

export const showCheckoutToast = () => {
  toast.success("✅ Checkout successful! Thanks for your purchase!", {
    style: {
      border: "1px solid #22c55e",
      padding: "10px 16px",
      color: "#333",
    },
  });
};
