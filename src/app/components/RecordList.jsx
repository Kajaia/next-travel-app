import { notFound } from "next/navigation";
import { apiUrl, headers } from "../services/api";
import Image from "next/image";
import Link from "next/link";
import { TbMapPin } from "react-icons/tb";
import { TbCategory2 } from "react-icons/tb";

export default async function RecordList({
  perPage,
  sortBy,
  sortDirection,
  link,
  title,
  button = true,
  style = "my-5",
}) {
  const params = new URLSearchParams({
    perPage: perPage || 8,
    sortBy: sortBy || "id",
    sortDirection: sortDirection || "desc",
  });

  const res = await fetch(`${apiUrl}/database/${link}?${params}`, { headers });
  if (!res.ok) return notFound();
  const { data: records } = await res.json();

  return (
    <>
      <div className={`container ${style}`}>
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h1 className="fw-bold mb-3 text-capitalize">{title}</h1>
          {button && (
            <Link
              href={`/${link}`}
              className="btn btn-sm btn-danger shadow rounded-3"
            >
              More {title}
            </Link>
          )}
        </div>
        <div className="row justify-content-center g-4">
          {records && records.length > 0
            ? records.map((record) => (
                <div
                  key={record.id}
                  className="col-12 col-md-6 col-lg-4 col-xl-3"
                >
                  <div className="card border-0 rounded-3">
                    <div
                      className="position-relative w-100"
                      style={{ height: 150 }}
                    >
                      <Image
                        src={`https://intranet.infoajara.com/storage/${record.image}`}
                        alt={record.name_en}
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-3"
                      />
                    </div>
                    <div className="card-body">
                      <h2 className="fs-6 fw-bold">{record.name_en}</h2>
                      <p className="mb-0 d-flex align-items-center gap-3">
                        <span className="d-flex align-items-center gap-1">
                          <TbMapPin className="text-danger" />
                          {record.municipality.name_en}
                        </span>
                        <span className="d-flex align-items-center gap-1">
                          <TbCategory2 className="text-danger" />
                          {record.category.name_en}
                        </span>
                      </p>
                      <Link
                        href={`/${link}/${record.id}`}
                        className="stretched-link"
                      />
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
