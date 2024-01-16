import { Link } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <h1 className="text-5xl py-8">How do our images get loaded in the browser?</h1>

      <ol className="list-decimal list-inside">
        <li>
          <Link href="/img">Understand basic &lt;img&gt; element</Link>
        </li>
        <li>
          <Link href="/next-image">The superpower of NextJS Image component</Link>
        </li>
      </ol>
    </>
  );
}
