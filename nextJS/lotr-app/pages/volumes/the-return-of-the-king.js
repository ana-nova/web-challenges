import Link from "next/link";
import { volumes } from "../../resources/lib/data";
import Image from "next/image";

export default function LotrThird() {
  const volume = volumes.find(({ slug }) => slug === "the-return-of-the-king");

  return (
    <div>
      <Link href="/volumes">Go back 🔙</Link>
      <h1>{volume.title}</h1>
      <Image
        src="/images/the-return-of-the-king.png"
        height={230}
        width={144}
        alt="lotr pic #3"
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
