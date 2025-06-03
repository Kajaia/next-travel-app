import { notFound } from "next/navigation";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const token = process.env.NEXT_PUBLIC_API_TOKEN;

const params = new URLSearchParams({
  perPage: 100,
  sortBy: "stars",
  sortDirection: "desc",
});

export default async function Home() {
  const res = await fetch(`${apiUrl}/database/hotels?${params}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) return notFound();

  const { data: hotels } = await res.json();

  return (
    <>
      <h1>Hotels</h1>
      {hotels && hotels.length > 0
        ? hotels.map((hotel) => (
            <div key={hotel.id}>
              <h2>{hotel.name_en}</h2>
              <p>
                <strong>{hotel.municipality.name_en}</strong> -{" "}
                <strong>{hotel.category.name_en}</strong>
              </p>
              <p dangerouslySetInnerHTML={{ __html: hotel.text_en }} />
            </div>
          ))
        : ""}
    </>
  );
}
