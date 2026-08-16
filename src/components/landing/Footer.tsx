import Link from "next/link";

const footerLinks = {
  product: [
    { label: "How it works", href: "#how-it-works" },
    { label: "Custom Mock Builder", href: "#custom-mock" },
    { label: "Pricing", href: "#pricing" },
    { label: "Exams", href: "#exams" },
  ],
  exams: [
    { label: "JEE Main", href: "#exams" },
    { label: "JEE Advanced", href: "#exams" },
    { label: "NEET", href: "#exams" },
    { label: "MHT-CET", href: "#exams" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Refund & Cancellation Policy", href: "/refund" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#050505] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-zinc-500">
              Product
            </p>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-zinc-500">
              Exams
            </p>
            <ul className="space-y-2">
              {footerLinks.exams.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-zinc-500">
              Company
            </p>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-zinc-500">
              Legal
            </p>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/[0.06] pt-8">
          <p className="max-w-3xl text-xs leading-relaxed text-zinc-600">
            Score is an independent platform. Not affiliated with the NTA, JEE, NEET, or the
            Maharashtra State CET Cell. All previous year questions are sourced from officially
            released papers.
          </p>
          <p className="mt-4 text-xs text-zinc-600">© 2026 Score</p>
        </div>
      </div>
    </footer>
  );
}
