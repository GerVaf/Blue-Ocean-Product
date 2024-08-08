// models/Product.ts
import mongoose, { Schema, Document, Model } from "mongoose";

// Define an interface for the details sub-document
interface IProductDetails {
  Brand?: string;
  ConnectivityTechnology?: string;
  ConnectorType?: string;
  SpecialFeature?: string;
  Resolution?: string;
  SupportedInternetServices?: string;
  ControlType?: string;
  FormFactor?: string;
  Color?: string;
  ModelName?: string;
  ItemWeight?: string;
  ProductDimensions?: string;
  RamMemoryInstalledSize?: string;
  CompatibleDevices?: string;
}

// Define an interface for the product document
export interface IProduct extends Document {
  id: number;
  title: string;
  description: string;
  img: string[];
  price: string;
  details: IProductDetails;
}

// Create a schema for the details sub-document
const ProductDetailsSchema: Schema<IProductDetails> = new Schema({
  Brand: String,
  ConnectivityTechnology: String,
  ConnectorType: String,
  SpecialFeature: String,
  Resolution: String,
  SupportedInternetServices: String,
  ControlType: String,
  FormFactor: String,
  Color: String,
  ModelName: String,
  ItemWeight: String,
  ProductDimensions: String,
  RamMemoryInstalledSize: String,
  CompatibleDevices: String,
});

// Create a schema for the product document
const ProductSchema: Schema<IProduct> = new Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: [String], required: true },
  price: { type: String, required: true },
  details: { type: ProductDetailsSchema, required: false },
});

// Create the Product model
const Product: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);

export default Product;
