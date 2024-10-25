import useSWR from "swr";
import styled from "styled-components";
import { useRouter } from "next/router";
import StyledLink from "@/components/Link";
import LiftedForm from "@/components/LiftedForm";
import { useState } from "react";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, error, mutate } = useSWR(`/api/products/${id}`);
  const [isEditMode, setIsEditMode] = useState(false);

  async function handleEditProduct(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    console.log(data);

    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (response.ok) {
      mutate();
      setIsEditMode(false); // Close edit mode after updating
    }
  }

  async function handleDeleteProduct() {
    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      router.push("/");
    }
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data || error) {
    return <h1>Element not found.</h1>;
  }

  return (
    <>
      <button type="button" onClick={() => setIsEditMode(!isEditMode)}>
        {isEditMode ? "Cancel Edit" : "Edit Product"}
      </button>

      <button type="button" onClick={handleDeleteProduct}>
        Delete
      </button>

      {isEditMode && (
        <LiftedForm
          onSubmit={handleEditProduct}
          initialValue={data}
          heading="Edit Product"
        />
      )}

      {!isEditMode && (
        <ProductCard>
          <h2>{data.name}</h2>
          <p>Description: {data.description}</p>
          <p>
            Price: {data.price} {data.currency}
          </p>
          <StyledLink href="/">Back to all</StyledLink>
        </ProductCard>
      )}
    </>
  );
}

const ProductCard = styled.article`
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px var(--color-granite);
`;
