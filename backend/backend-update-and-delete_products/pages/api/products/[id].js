import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  //------- hole mir die daten
  if (request.method === "GET") {
    const product = await Product.findById(id).populate("reviews");

    if (!product) {
      response.status(404).json({ status: "Not Found" });
      return;
    }

    response.status(200).json(product);
    return;
  }

  //------------ update meine daten
  if (request.method === "PUT") {
    const updateProduct = request.body;
    //console.log(updateProduct);

    await Product.findByIdAndUpdate(id, updateProduct);

    response.status(200).json({ status: "Product successfully updated!" });
    return;
  }

  //----------- lösche meine daten
  if (request.method === "DELETE") {
    await Product.findByIdAndDelete(id);

    response.status(200).json({ status: "Product successfully deleted." });
    return;
  }

  response.status(405).json({ status: "Method not allowed." });
}
