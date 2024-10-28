import dbConnect from "@/db/connect";
import Places from "@/db/model/Places";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  //------- hole mir die daten
  if (request.method === "GET") {
    const places = await Places.findById(id);
    //.populate("reviews");

    if (!places) {
      response.status(404).json({ status: "Not Found" });
      return;
    }

    response.status(200).json(places);
    return;
  }

  //------------ update meine daten
  if (request.method === "PUT") {
    const updatePlaces = request.body;
    //console.log(updateProduct);

    await Places.findByIdAndUpdate(id, updatePlaces);

    response.status(200).json({ status: "Places successfully updated!" });
    return;
  }

  //----------- lösche meine daten
  if (request.method === "DELETE") {
    await Places.findByIdAndDelete(id);

    response.status(200).json({ status: "Places successfully deleted." });
    return;
  }

  response.status(405).json({ status: "Method not allowed." });
}
