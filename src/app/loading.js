export default function Loading() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center g-4">
        <div className="col-12">
          <p aria-hidden="true">
            <span class="placeholder col-1"></span>
          </p>
          <p aria-hidden="true">
            <span class="placeholder col-2"></span>
          </p>
        </div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
          <div key={i} className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="card border-0 rounded-3">
              <img
                src="/placeholder.png"
                alt="Placeholder image"
                style={{ objectFit: "cover", height: 150 }}
                className="rounded-3 w-100"
              />
              <div className="card-body">
                <h2 className="fs-6 fw-bold">
                  <span class="placeholder col-6"></span>
                </h2>
                <p className="mb-0 d-flex align-items-center gap-3">
                  <span class="placeholder col-5"></span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
