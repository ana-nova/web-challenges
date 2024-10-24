import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const product = await Product.find();
    response.status(200).json(product);
  }
  response.status(405).json({ status: "Method Not Allowed" });
}
