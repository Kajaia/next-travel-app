import Link from "next/link";
import { TbBed } from "react-icons/tb";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <TbBed style={{ fontSize: 35 }} className="me-2 text-danger" />
          Travel App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" href="/hotels">
                Hotels
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/restaurants">
                Restaurants
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/sights">
                Sights
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/entertainments">
                Entertainments
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
