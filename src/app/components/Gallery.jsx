"use client";

import Image from "next/image";
import useFancybox from "../hooks/useFancybox";

export default function Gallery({ data }) {
  const [fancyboxRef] = useFancybox({});

  return (
    <div className="col-12">
      <div ref={fancyboxRef} className="row">
        {data?.gallery?.images?.map((image) => (
          <div key={image.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div
              className="position-relative w-100 mt-4"
              style={{ height: 250 }}
            >
              <a
                data-fancybox="gallery"
                href={`https://intranet.infoajara.com/storage/${image?.image}`}
              >
                <Image
                  src={`https://intranet.infoajara.com/storage/${image?.image}`}
                  alt={data?.name_en}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-3"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
