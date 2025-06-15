import Breadcrumb from "../components/layout/Breadcrumb";
import RecordList from "../components/RecordList";

export default async function Slug({ params }) {
  const { slug } = await params;

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <Breadcrumb
              links={[{ title: slug, url: `/${slug}`, active: true }]}
            />
          </div>
        </div>
      </div>
      <RecordList
        title={slug}
        link={slug}
        sortBy={slug === "hotels" ? "stars" : "id"}
        perPage={100}
        button={false}
        style="mb-5"
      />
    </>
  );
}
