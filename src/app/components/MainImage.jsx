"use client";

import Image from "next/image";
import useFancybox from "../hooks/useFancybox";

export default function MainImage({ data }) {
  const [fancyboxRef] = useFancybox({});

  return (
    <div
      ref={fancyboxRef}
      className="position-relative w-100"
      style={{ height: 450 }}
    >
      <a
        data-fancybox
        href={`https://intranet.infoajara.com/storage/${data?.image}`}
      >
        <Image
          src={`https://intranet.infoajara.com/storage/${data?.image}`}
          alt={data?.name_en}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-3"
        />
      </a>
    </div>
  );
}
