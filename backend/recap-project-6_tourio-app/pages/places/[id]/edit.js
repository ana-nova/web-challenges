import { useRouter } from "next/router";
import useSWR from "swr";
import Form from "../../../components/Form";
import { StyledLink } from "../../../components/StyledLink";

export default function EditPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const { data: place, isLoading, error, mutate } = useSWR(`/api/places/${id}`);

  async function editPlace(event) {
    event.preventDefault();

    // Collect form data
    const formData = new FormData(event.target);
    const updatedPlace = Object.fromEntries(formData);

    // Send PUT request to update the place
    const response = await fetch(`/api/places/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPlace),
    });

    if (response.ok) {
      mutate(`/api/places/${id}`); // Update the SWR cache with the new data
      router.push(`/places/${id}`); // Redirect back to the details page
    } else {
      console.error("Failed to update place");
    }
  }

  if (!isReady || isLoading || error) return <h2>Loading...</h2>;

  return (
    <>
      <h2 id="edit-place">Edit Place</h2>
      <StyledLink href={`/places/${id}`} $justifySelf="start">
        back
      </StyledLink>
      <Form onSubmit={editPlace} formName={"edit-place"} defaultData={place} />
    </>
  );
}
