const API_URL = "https://fakestoreapi.com/products";

export const fetchProducts = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Xatolik: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("API xatosi:", error);
        return [];
    }
};

export const fetchCategories = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products/categories");
        if(!response.ok) {
            throw new Error(`Xatolik : ${response.status}`);
        };
        return await response.json();
    } catch (error) {
        console.error("API xatosi:", error);
        return [];
    };
};