import RecordList from "../components/RecordList";

export default async function Slug({ params }) {
  const { slug } = await params;

  return (
    <>
      <RecordList
        title={slug}
        link={slug}
        sortBy={slug === "hotels" ? "stars" : "id"}
        perPage={100}
        button={false}
      />
    </>
  );
}
