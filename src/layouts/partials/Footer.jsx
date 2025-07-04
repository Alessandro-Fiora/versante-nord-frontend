export default function Footer() {
  return (
    <footer className="text-bg-dark py-4 border-top">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center  px-3">
          <div className="text-center text-md-start mb-3 mb-md-0">
            © 2025 ClimbIt, Inc.
            <a href="#" className=" text-decoration-none mx-2">
              Privacy
            </a>
            ·
            <a href="#" className=" text-decoration-none mx-2">
              Termini
            </a>
            ·
            <a href="#" className=" text-decoration-none mx-2">
              Dettagli dell'azienda
            </a>
          </div>
          <div className="text-center text-md-end">
            <a href="#" className="mx-2  text-decoration-none">
              <i className="fa-solid fa-globe"></i> Italiano (IT)
            </a>
            <a href="https://www.x.com" className="mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-3 2.5 24 24"
                height="16"
                fill="#fff"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://www.instagram.com" className="mx-2">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com" className="mx-2">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
            <a href="https://www.youtube.com" className="mx-2">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
