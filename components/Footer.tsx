import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}

          <div>
            <h3 className="text-2xl font-bold">Research Desk</h3>

            <p className="mt-4 text-slate-600 leading-7">
              Research Resources. Expert Support.
            </p>

            <p className="mt-4 text-sm text-slate-500">
              Helping researchers plan, conduct, analyze and publish
              high-quality research.
            </p>
          </div>

          {/* Resources */}

          <div>
            <h4 className="font-semibold">Resources</h4>

            <div className="mt-4 flex flex-col gap-3 text-slate-600">
              <Link href="/project-topics">Research Topics</Link>

              <Link href="/resources">Research Resources</Link>

              <Link href="/resources/methodology">Methodology</Link>

              <Link href="/resources/data-analysis">Data Analysis</Link>
            </div>
          </div>

          {/* Company */}

          <div>
            <h4 className="font-semibold">Company</h4>

            <div className="mt-4 flex flex-col gap-3 text-slate-600">
              <Link href="/about">About Us</Link>

              <Link href="/services">Services</Link>

              <Link href="/contact">Contact</Link>
            </div>
          </div>

          {/* Contact */}

          <div>
            <h4 className="font-semibold">Contact</h4>

            <div className="mt-4 space-y-3 text-slate-600">
              <p>hello@researchdesk.ng</p>

              <a
                href="https://wa.me/234XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 py-12 text-center">
          <h3 className="text-2xl font-semibold">Stay Updated</h3>

          <p className="mt-3 text-slate-600">
            Research resources, guides and updates delivered periodically.
          </p>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Research Desk. All rights reserved.
          </p>

          <p className="text-sm text-slate-500">
            Research Resources. Expert Support.
          </p>
        </div>
      </div>
    </footer>
  );
}
