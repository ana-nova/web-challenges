import Link from "next/link";
import { volumes, introduction } from "../../lib/data";
import { useRouter } from "next/router";

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
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button type="button" onClick={handleRandom}>
        random click
      </button>
    </>
  );
}
