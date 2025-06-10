import RecordList from "./components/RecordList";

export default async function Home() {
  return (
    <>
      <RecordList title="Hotels" link="hotels" sortBy="stars" />
      <RecordList
        title="Restaurants"
        link="restaurants"
        background="bg-warning"
        containerSize="container-fluid"
      />
      <RecordList title="Sights" link="sights" />
      <RecordList title="Entertainments" link="entertainments" />
    </>
  );
}
