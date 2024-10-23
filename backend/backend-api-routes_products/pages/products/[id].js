import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(id ? `/api/products/${id}` : null, fetcher);

  if (!data && !error) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Failed to load product</h1>;
  }

  return (
    <>
      <small>ID: {id}</small>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <p>
        {data.price} {data.currency}
      </p>
      <p>{data.category}</p>
    </>
  );
}
