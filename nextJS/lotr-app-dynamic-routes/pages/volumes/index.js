import Link from "next/link";
import { volumes, introduction } from "../../lib/data";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function Volumes() {
  function getRandomElement(array) {
    return volumes[Math.floor(Math.random() * volumes.length)];
  }

  const router = useRouter();

  function handleRandom(volumes) {
    const randomVolume = getRandomElement(volumes);
    router.push(`/volumes/${randomVolume.slug}`);
  }

  return (
    <div style={styles.container}>
      <Card>
        <h1 style={styles.title}>The Lord of the Rings</h1>
        <p>{introduction}</p>
        <ul style={styles.list}>
          {volumes.map((volume) => (
            <li key={volume.slug} style={styles.listItem}>
              <StyledLink href={`/volumes/${volume.slug}`}>
                {volume.title}
              </StyledLink>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => handleRandom(volumes)}
          style={styles.button}
        >
          show randomly
        </button>
      </Card>
    </div>
  );
}

// ---------------------- styles:
const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Card = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f0f0",
  },

  list: {
    listStyleType: "none",
    padding: 0,
    marginBottom: "20px",
  },
  listItem: {
    marginBottom: "10px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#ec3375",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
