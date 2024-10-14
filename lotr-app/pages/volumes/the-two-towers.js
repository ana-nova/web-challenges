import Link from "next/link";
import { volumes } from "../../resources/lib/data";
import Image from "next/image";

export default function LotrSecond() {
  const volume = volumes.find(({ slug }) => slug === "the-two-towers");

  return (
    <div>
      <Link href="/volumes">Go back 🔙</Link>
      <h1>{volume.title}</h1>
      <Image
        src="/images/the-two-towers.png"
        height={230}
        width={144}
        alt="lotr pic #2"
      />
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
