// export const getProductService = async () => {
//     try {
//         // Fetch all products from the database using Mongoose
//         const products = await ProductModel.find();
//         // const {availableStockQty} = products
//         //console.log(availableStockQt)


//         return products; // Return the fetched products
//     } catch (error) {
//         // Handle any errors that occur during the retrieval
//         console.error('Error in fetching products:', error);
//         throw new Error('Error in fetching products');
//     }
// };

import ProductModel from "../models/productModel.js";

export const getProductService = async () => {
    try {
      return await ProductModel.find();
    } catch (error) {
      console.error('Error in fetching products:', error);
      throw new Error('Error in fetching products');
    }
  };




  export const CreateProductSerivce = async (data, imageUrl) => {
    const productId = await generateProductId();
    try {
        const newProduct = new ProductModel({ ...data, imageURL: imageUrl, productId: productId });

        const savedProduct = await newProduct.save();
        console.log(savedProduct)
        return 'successfull';
    } catch (error) {
        if (error.name === 'ValidationError') {
            console.error("Validation error:", error.message);
            throw new Error("Validation error");
        } else {
            console.error("Error adding product:", error);
            throw new Error("Failed to add product");
        }
    }
};