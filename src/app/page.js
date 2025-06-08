import { notFound } from "next/navigation";
import { apiUrl, headers } from "./services/api";
import Image from "next/image";
import Link from "next/link";
import { TbMapPin } from "react-icons/tb";
import { TbCategory2 } from "react-icons/tb";

const params = new URLSearchParams({
  perPage: 100,
  sortBy: "stars",
  sortDirection: "desc",
});

export default async function Home() {
  const res = await fetch(`${apiUrl}/database/hotels?${params}`, { headers });

  if (!res.ok) return notFound();

  const { data: hotels } = await res.json();

  return (
    <>
      <div className="container my-4">
        <h1 className="fw-bold mb-3">Hotels</h1>
        <div className="row justify-content-center g-4">
          {hotels && hotels.length > 0
            ? hotels.map((hotel) => (
                <div
                  key={hotel.id}
                  className="col-12 col-md-6 col-lg-4 col-xl-3"
                >
                  <div className="card border-0 rounded-3">
                    <div
                      className="position-relative w-100"
                      style={{ height: 150 }}
                    >
                      <Image
                        src={`https://intranet.infoajara.com/storage/${hotel.image}`}
                        alt={hotel.name_en}
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-3"
                      />
                    </div>
                    <div className="card-body">
                      <h2 className="fs-6 fw-bold">{hotel.name_en}</h2>
                      <p className="mb-0 d-flex align-items-center gap-3">
                        <span className="d-flex align-items-center gap-1">
                          <TbMapPin className="text-danger" />
                          {hotel.municipality.name_en}
                        </span>
                        <span className="d-flex align-items-center gap-1">
                          <TbCategory2 className="text-danger" />
                          {hotel.category.name_en}
                        </span>
                      </p>
                      <Link href="#!" className="stretched-link" />
                    </div>
                  </div>
                </div>
              ))
            : ""}
        </div>
      </div>
    </>
  );
}
