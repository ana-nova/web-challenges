import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const { data } = useSWR("/api/products", fetcher);

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>
          <p>{product.name}</p>
        </li>
      ))}
    </ul>
  );
}
