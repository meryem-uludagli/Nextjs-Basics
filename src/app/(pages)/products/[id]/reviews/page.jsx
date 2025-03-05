import React from "react";
import Link from "next/link";

const Reviews = async ({ params }) => {
  const { id } = await params;

  return (
    <div>
      <Link className="mt-20" href=".">
        Geri dön
      </Link>

      <div>
        <span>{id} id'li eleman</span>
        <span>Yorumlar sayfası</span>
      </div>
    </div>
  );
};

export default Reviews;
