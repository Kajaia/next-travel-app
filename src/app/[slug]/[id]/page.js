import Breadcrumb from "@/app/components/layout/Breadcrumb";
import { apiUrl, headers } from "@/app/services/api";
import Image from "next/image";
import { notFound } from "next/navigation";
import { TbCategory2, TbMapPin } from "react-icons/tb";

export async function generateMetadata({ params }) {
  const { slug, id } = await params;

  const res = await fetch(`${apiUrl}/database/${slug}/${id}`, { headers });
  if (!res.ok) return notFound();
  const data = await res.json();

  return {
    title: data?.name_en,
    description: data?.text_en || data?.name_en,
  };
}

export default async function Page({ params }) {
  const { slug, id } = await params;

  const res = await fetch(`${apiUrl}/database/${slug}/${id}`, { headers });
  if (!res.ok) return notFound();
  const data = await res.json();

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12">
          <Breadcrumb
            links={[
              { title: slug, url: `/${slug}`, active: false },
              { title: data?.name_en, url: `/${slug}/${id}`, active: true },
            ]}
          />
          <h1 className="fw-bold mb-4">{data?.name_en}</h1>
          <div className="position-relative w-100" style={{ height: 450 }}>
            <Image
              src={`https://intranet.infoajara.com/storage/${data?.image}`}
              alt={data?.name_en}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-3"
            />
          </div>
          <p className="mb-0 d-flex align-items-center gap-4 mt-4">
            <span className="d-flex align-items-center gap-1 fs-5">
              <TbMapPin className="text-danger" />
              {data?.municipality.name_en}
            </span>
            <span className="d-flex align-items-center gap-1 fs-5">
              <TbCategory2 className="text-danger" />
              {data?.category.name_en}
            </span>
          </p>
          <p
            className="mt-3"
            dangerouslySetInnerHTML={{ __html: data?.text_en }}
          />
        </div>
      </div>
    </div>
  );
}
