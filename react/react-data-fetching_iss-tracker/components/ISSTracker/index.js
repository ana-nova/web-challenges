import useSWR from "swr";
import Controls from "../Controls/index";
import Map from "../Map/index";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

// Fetcher function for SWR
const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }
  return response.json();
};

export default function ISSTracker() {
  // SWR hook to fetch the ISS coordinates
  const { data, error, isLoading, mutate } = useSWR(URL, fetcher, {
    refreshInterval: 5000, // Fetch every 5 seconds
  });

  // Loading and error handling
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Ensure data is available before accessing longitude and latitude
  const { longitude = 0, latitude = 0 } = data || {};

  return (
    <main>
      <Map longitude={longitude} latitude={latitude} />
      <Controls
        longitude={longitude}
        latitude={latitude}
        onRefresh={() => mutate()} // mutate() is the SWR method that forces a refetch of the data when called.
      />
    </main>
  );
}

/*
  const { longitude = 0, latitude = 0 } = data || {};
  The data || {} expression is used to handle cases where data is null or 
  undefined. It ensures that if data is falsy (e.g., null or undefined), an empty object ({}) will be used instead.
*/

/*
steps:
#1: den ISS Tracker umstrukturieren, um SWR für das Daten-Fetching zu nutzen, 
#2: die ursprüngliche Logik mit setInterval wurde durch die refreshInterval-Option von SWR ersetzt 
#3: durch die Nutzung von mutate() aktualisieren sich die ISS-Koordinaten auch manuell per Button

*/
