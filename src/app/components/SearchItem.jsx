"use client";

export default function SearchItem({ item, icon, type, handleRouteChange }) {
  return (
    <div className="col-12">
      <div className="card search-card">
        <div className="card-body p-2">
          <button
            onClick={() => handleRouteChange(`/${type}/${item.id}`)}
            className="border-0 bg-transparent p-0 stretched-link"
          >
            {icon}
            <span className="ms-2">{item.name_en}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
