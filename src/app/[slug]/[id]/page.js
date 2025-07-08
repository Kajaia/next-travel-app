import Breadcrumb from "@/app/components/layout/Breadcrumb";
import MainImage from "@/app/components/MainImage";
import Map from "@/app/components/Map";
import { apiUrl, headers } from "@/app/services/api";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  TbCategory2,
  TbMapPin,
  TbWorldWww,
  TbPhone,
  TbMail,
  TbStarFilled,
  TbDoor,
  TbBed,
  TbClock,
} from "react-icons/tb";

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

  const getStars = (stars) => {
    let arr = [];

    for (let i = 1; i <= stars; i++) {
      arr.push(<TbStarFilled key={i} className="text-warning fs-5" />);
    }

    return arr;
  };

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
          {data?.stars && (
            <div>{getStars(data?.stars).map((star) => star)}</div>
          )}
          <div className="mb-4">
            <h1 className="fw-bold mb-0">{data?.name_en}</h1>
            {data?.address_number && (
              <span className="d-flex align-items-center gap-1 fs-5">
                <TbMapPin className="text-danger" />
                {data?.address_number}, {data?.street?.name_en}
              </span>
            )}
          </div>
          {data?.image && <MainImage data={data} />}
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
          <div>
            <div className="d-flex align-items-center justify-content-between flex-wrap">
              {(data?.price_from || data?.price_to) && (
                <div>
                  {data?.price_from && (
                    <span className="fw-bold fs-4">
                      ₾{data?.price_from}
                      {data?.price_to && <span>-{data?.price_to}</span>}
                    </span>
                  )}
                  {slug === "hotels" ? (
                    <small className="text-secondary"> / night</small>
                  ) : (
                    ""
                  )}
                </div>
              )}
              {data?.website && (
                <a
                  href={data?.website_link}
                  target="_blank"
                  className="btn btn-lg btn-danger shadow rounded-3 px-4 d-inline-flex align-items-center"
                >
                  <TbWorldWww className="me-2" />
                  {slug === "hotels" ? "Book a hotel" : "Visit website"}
                </a>
              )}
            </div>
            <div className="mt-4">
              <h2 className="fs-4 fw-bold">Contact information</h2>
              <div className="row g-1">
                {data?.mobile && (
                  <div className="col-12">
                    <TbPhone className="text-danger fs-5 me-1" />
                    {data?.mobile}
                  </div>
                )}
                {data?.email && (
                  <div className="col-12">
                    <TbMail className="text-danger fs-5 me-1" />
                    {data?.email}
                  </div>
                )}
              </div>
            </div>
            {data?.services && data?.services?.length > 0 && (
              <div className="mt-4">
                <h2 className="fs-4 fw-bold">Services</h2>
                <div className="row g-1">
                  {data?.services && data?.services?.length > 0
                    ? data?.services.map((service) => (
                        <div
                          key={service.id}
                          className="col-12 col-md-6 col-lg-4"
                        >
                          <Image
                            width={22}
                            height={22}
                            src={`https://intranet.infoajara.com/storage/${service.image}`}
                            alt={service.name_en}
                            className="service-icon"
                          />
                          <h3 className="fs-6 d-inline ms-2">
                            {service.name_en}
                          </h3>
                        </div>
                      ))
                    : ""}
                </div>
              </div>
            )}
            <div className="mt-4">
              <h2 className="fs-4 fw-bold">Additional information</h2>
              <div className="row g-1">
                {data?.rooms && (
                  <div className="col-12">
                    <TbDoor className="text-danger fs-5 me-1" />
                    {data?.rooms} rooms
                  </div>
                )}
                {data?.adapted_room && (
                  <div className="col-12">
                    <TbDoor className="text-danger fs-5 me-1" />
                    {data?.adapted_room} adapted rooms
                  </div>
                )}
                {data?.president_suite_room && (
                  <div className="col-12">
                    <TbDoor className="text-danger fs-5 me-1" />
                    {data?.president_suite_room} president suite rooms
                  </div>
                )}
                {data?.beds && (
                  <div className="col-12">
                    <TbBed className="text-danger fs-5 me-1" />
                    {data?.beds} beds
                  </div>
                )}
                {data?.check_in && data?.check_out && (
                  <div className="col-12">
                    <TbClock className="text-danger fs-5 me-1" />
                    {data?.check_in}-{data?.check_out}
                  </div>
                )}
                {data?.hours_from && data?.hours_to && (
                  <div className="col-12">
                    <TbClock className="text-danger fs-5 me-1" />
                    {data?.hours_from}-{data?.hours_to}
                  </div>
                )}
              </div>
            </div>
            {data?.lat && data?.long && (
              <Map lat={data?.lat} long={data?.long} title={data?.name_en} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
