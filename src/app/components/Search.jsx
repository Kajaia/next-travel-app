"use client";

import { useEffect, useState } from "react";
import { TbBed, TbBowlSpoon, TbCompass, TbMasksTheater } from "react-icons/tb";
import { headers } from "../services/api";
import { useRouter } from "next/navigation";
import SearchItem from "./SearchItem";

export default function Search() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getQueryData = async () => {
      const params = new URLSearchParams({ name: query });

      try {
        const res = await fetch(
          `https://intranet.infoajara.com/api/search?${params}`,
          { headers }
        );

        if (!res.ok) throw new Error("Can not get query data.");

        const results = await res.json();

        setData(results);
      } catch (error) {
        console.log(error);
      }
    };

    if (query.length >= 3) {
      getQueryData();
    } else {
      setData(null);
    }
  }, [query]);

  const handleRouteChange = (url) => {
    router.push(url);
    setQuery("");
    setData(null);
  };

  return (
    <div className="container-fluid border-bottom search-container bg-white">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <input
              type="search"
              className="form-control rounded-0 border-0 px-0"
              placeholder="🔍 Search for hotels, restaurants, sights & entertainments..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && data && (
              <div className="search-box">
                <div className="container py-2">
                  <div className="row g-2">
                    {data.hotels.length > 0 &&
                      data.hotels.map((item) => (
                        <SearchItem
                          key={item.id}
                          item={item}
                          icon={
                            <TbBed
                              style={{ fontSize: 20 }}
                              className="text-danger"
                            />
                          }
                          type="hotels"
                          handleRouteChange={handleRouteChange}
                        />
                      ))}
                    {data.restaurants.length > 0 &&
                      data.restaurants.map((item) => (
                        <SearchItem
                          key={item.id}
                          item={item}
                          icon={
                            <TbBowlSpoon
                              style={{ fontSize: 20 }}
                              className="text-danger"
                            />
                          }
                          type="restaurants"
                          handleRouteChange={handleRouteChange}
                        />
                      ))}
                    {data.sights.length > 0 &&
                      data.sights.map((item) => (
                        <SearchItem
                          key={item.id}
                          item={item}
                          icon={
                            <TbCompass
                              style={{ fontSize: 20 }}
                              className="text-danger"
                            />
                          }
                          type="sights"
                          handleRouteChange={handleRouteChange}
                        />
                      ))}
                    {data.entertainments.length > 0 &&
                      data.entertainments.map((item) => (
                        <SearchItem
                          key={item.id}
                          item={item}
                          icon={
                            <TbMasksTheater
                              style={{ fontSize: 20 }}
                              className="text-danger"
                            />
                          }
                          type="entertainments"
                          handleRouteChange={handleRouteChange}
                        />
                      ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
