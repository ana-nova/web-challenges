import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";
// export default function Character() {
//   const id = 1;

//   return (
//     <Layout>
//       <Card
//         id={id}
//         name={"Luke Skywalker"}
//         height={172}
//         eyeColor={"blue"}
//         birthYear={"19BBY"}
//       />
//     </Layout>
//   );
// }

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

export default function Character() {
  // Access the ID dynamically from the URL using useRouter
  const router = useRouter();
  const { id } = router.query;

  // ternary operater
  const { data, error, isLoading } = useSWR(
    id ? `https://swapi.py4e.com/api/people/${id}` : null,
    fetcher
  );

  // Handle loading state
  if (isLoading) return <p>Loading...</p>;

  // Handle error state
  if (error) return <p>Error: {error.message}</p>;

  // Ensure data is available before rendering
  if (!data) return null;

  // Pass the fetched data to the Card component
  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
