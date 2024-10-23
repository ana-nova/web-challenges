import { getAllProducts } from "@/services/productServices";

export default function handler(request, response) {
  const products = getAllProducts(); // need a function call first
  response.status(200).json(products);
}
