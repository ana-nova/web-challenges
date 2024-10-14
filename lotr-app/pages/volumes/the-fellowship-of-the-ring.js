import Link from "next/link";
import Image from "next/image";
import { volumes } from "../../resources/lib/data";

export default function LotrFirst() {
  const volume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  return (
    <div>
      <Link href="/volumes">go back 🔙</Link>
      <h1>{volume.title}</h1>
      <Image
        src="/images/the-fellowship-of-the-ring.png"
        height={230}
        width={144}
        alt="lotr pic #1"
      />
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
      <Link href="/volumes/the-two-towers">next one</Link>
    </div>
  );
}
