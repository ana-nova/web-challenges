import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Lord of the Rings 💍</h1>
      <div style={{ display: "flex", gap: "20px", margin: "20px" }}>
        <Image
          src="/images/the-fellowship-of-the-ring.png"
          height={230}
          width={144}
          alt="lotr pic #1"
        />
        <Image
          src="/images/the-two-towers.png"
          height={230}
          width={144}
          alt="lotr pic #2"
        />
        <Image
          src="/images/the-return-of-the-king.png"
          height={230}
          width={144}
          alt="lotr pic #3"
        />
      </div>

      <Link href="/volumes">Volumes Overview 🎬</Link>
    </div>
  );
}
