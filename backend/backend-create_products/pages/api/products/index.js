import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const products = await Product.find();

    response.status(200).json(products);
    return;
  }

  // if (request.method === "POST") {
  //   const newProduct = request.body;   // speichert meine daten in der variable
  //   console.log(newProduct);           // fügt meine erstellten daten in die datenbank

  //   await Product.create(newProduct);

  //   response.status(201).json({ status: "Product created!" });
  //   return;
  // }

  if (request.method === "POST") {
    try {
      const productData = request.body;
      await Product.create(productData);
      response.status(201).json({ status: "Product created." });
    } catch (error) {
      //     console.log(error);
      response.status(400).json({ error: error.message });
    }
    return;
  }

  response.status(400).json({ error: error.message });
}
