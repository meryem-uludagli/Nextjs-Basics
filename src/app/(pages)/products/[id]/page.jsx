import Link from "next/link";
import React from "react";

export const generateMetadata = async ({ params }) => {
  const id = (await params).id;
  return {
    title: params.id + "idli urunun detayi",
  };
};

const Detail = async ({ params }) => {
  console.log("Parametreler", params);

  const id = (await params).id;

  return (
    <div>
      <Link className="mt-20" href=".">
        Geri dön
      </Link>

      <h1>
        <span>{id} id'li lemen</span>
        <span>Ürünler sayfası</span>
      </h1>
      <Link href={`${id}/reviews`}>Yorumlara Bak</Link>
    </div>
  );
};

export default Detail;
