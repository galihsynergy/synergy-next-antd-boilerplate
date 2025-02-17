"use client";

import Link from "next/link";

const ExampleOfPage = () => {
  return (
    <div className="mt-[20px]">
      <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        <li>
          <Link href={"/table"} className="underline">
            Example of Table
          </Link>
        </li>
        <li>
          <Link href={"/form"} className="underline">
            Example of Form
          </Link>
        </li>
        <li>
          <Link href={"/modal"} className="underline">
            Example of Modal
          </Link>
        </li>
      </ol>
    </div>
  );
};

export default ExampleOfPage;
