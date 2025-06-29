"use client";

import { useEffect, useState } from "react";
import { TbBed } from "react-icons/tb";
import { headers } from "../services/api";

export default function Search() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);

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
                        <div key={item.id} className="col-12">
                          <div className="card search-card">
                            <div className="card-body p-2">
                              <button className="border-0 bg-transparent p-0 stretched-link">
                                <TbBed
                                  style={{ fontSize: 20 }}
                                  className="text-danger"
                                />
                                <span className="ms-2">{item.name_en}</span>
                              </button>
                            </div>
                          </div>
                        </div>
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
