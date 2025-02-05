import productModel from "../models/productModel.js";
import { getProductService } from "../services/productService.js";

export const getProduct = async (req, res) => {
  try {
    const products = await getProductService();

    // Sending a successful response with products
    res.status(200).json({ success: true, products:[]});

  } catch (error) {
    console.error("Error in getting products:", error);
    
    // Sending an error response
    res.status(500).json({ status: "error", message: "Error in getting products" });
  }
};



export const createProduct = async (req, res) => {
    try {
        // Destructure fields from the request body
        const { name, heading, offerprice, description, mrp, WeightSize, category, Seller, images } = req.body;

        // If files are uploaded, handle them
        if (req.files && req.files.length > 0) {
            imagePaths = req.files.map((file) => file.path); // Store image paths from file uploads
        }
        // Create product with the given data
        const product = new productModel({
            name,
            heading,
            offerprice,
            description,
            mrp,
            WeightSize,
            category,
            Seller,
            images, // Store the array of image paths (or URLs)
        });

        await product.save();

        res.status(201).json({ success: true, message: "Product created successfully", product });
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};


//Update Product


export const updateProduct = async (req, res) => {
    try {
        // Extract the product ID from the request params
        const { id } = req.params;
        // Extract the fields to update from the request body
        const { name, heading, offerprice, description, mrp, WeightSize, category, Seller, images } = req.body;

        // Find the product by ID
        const product = await productModel.findById(id);

        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        // Update the product fields
        product.name = name || product.name;
        product.heading = heading || product.heading;
        product.offerprice = offerprice || product.offerprice;
        product.description = description || product.description;
        product.mrp = mrp || product.mrp;
        product.WeightSize = WeightSize || product.WeightSize;
        product.category = category || product.category;
        product.Seller = Seller || product.Seller;
        product.images = images || product.images;  // Updating images (could be an array)

        // Save the updated product
        await product.save();

        res.status(200).json({ success: true, message: "Product updated successfully", product });

    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};


//Delete Products

export const deleteProduct = async (req, res) => {
  try {
      const { id } = req.params; // Extract product ID from URL

      // Find and delete the product by ID
      const deletedProduct = await productModel.findByIdAndDelete(id);

      if (!deletedProduct) {
          return res.status(404).json({ success: false, message: "Product not found" });
      }

      res.status(200).json({ success: true, message: "Product deleted successfully", deletedProduct });
  } catch (error) {
      console.log('Error:', error);
      res.status(500).json({ success: false, message: "Error deleting product" });
  }
};


























// export const createProduct = async (req, res) => {
//     try {
//         const { name, price, description, category } = req.body;

//         // Validate required fields
//         if (!name || !price || !description || !category) {
//             return res.status(400).json({ success: false, message: "All fields are required" });
//         }

//         // Ensure price is a number
//         const parsedPrice = parseFloat(price);
//         if (isNaN(parsedPrice)) {
//             return res.status(400).json({ success: false, message: "Price must be a valid number" });
//         }

//         // Create a new product instance
//         const newProduct = new Product({ 
//             name, 
//             price: parsedPrice, // Ensure price is stored as a number
//             description, 
//             category 
//         });

//         // Save to MongoDB
//         const savedProduct = await newProduct.save();

//         res.status(201).json({ success: true, message: "Product created successfully", product: savedProduct });
//     } catch (error) {
//         console.error("Error creating product:", error.message);
//         res.status(500).json({ success: false, message: "Internal server error" });
//     }
// };

  