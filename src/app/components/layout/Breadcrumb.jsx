import Link from "next/link";

export default function Breadcrumb({ links }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link href="/">Home</Link>
        </li>
        {links &&
          links.map((link, index) => (
            <li
              key={index}
              className={`breadcrumb-item text-capitalize ${
                link.active ? "active" : ""
              }`}
              aria-current="page"
            >
              {link.active ? (
                link.title
              ) : (
                <Link href={link.url}>{link.title}</Link>
              )}
            </li>
          ))}
      </ol>
    </nav>
  );
}
