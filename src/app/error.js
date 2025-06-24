"use client";

export default function Error({ error, reset }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-3">
          <div
            className="alert alert-danger d-flex align-items-center justify-content-between flex-wrap"
            role="alert"
          >
            <h1 className="mb-0 fs-4">{error?.message}</h1>
            <button
              type="button"
              className="btn btn-sm btn-danger shadow rounded-3"
              onClick={() => reset()}
            >
              Refresh
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
