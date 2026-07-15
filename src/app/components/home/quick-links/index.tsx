const QuickLinks = () => {
  const links = [
    { label: "About", href: "#about" },    { label: "Skills", href: "#skills" },    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Portfolio", href: "#portfolio" },
  ];

  return (
    <section className="py-10 md:py-16">
      <div className="container">
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex items-center justify-center rounded-full border border-black bg-white px-5 py-3 text-base font-medium text-black transition hover:border-primary hover:bg-primary hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
