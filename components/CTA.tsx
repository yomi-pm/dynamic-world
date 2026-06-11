import Container from "./Container";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 md:py-32 bg-slate-900 text-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex px-4 py-2 rounded-full bg-white/10 text-sm mb-6">
            Expert Research Support
          </div>

          <h2
            className="
            text-3xl
            md:text-5xl
            font-bold
            tracking-tight
            leading-tight
            "
          >
            Need Support With Your Research?
          </h2>

          <p
            className="
            mt-6
            text-base
            md:text-xl
            text-slate-300
            leading-8
            max-w-3xl
            mx-auto
            "
          >
            Whether you're working on a project, dissertation, thesis,
            publication, public health study or bioinformatics analysis, our
            team can help you move forward with confidence.
          </p>

          <div
            className="
            mt-10
            flex
            flex-col
            sm:flex-row
            justify-center
            gap-4
            "
          >
            <Link
              href="/contact"
              className="
              inline-flex
              items-center
              justify-center
              px-6
              py-3
              rounded-xl
              bg-white
              text-slate-900
              font-medium
              hover:bg-slate-100
              transition-colors
              "
            >
              Request Consultation
            </Link>

            <a
              href="https://wa.me/234XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="
              inline-flex
              items-center
              justify-center
              px-6
              py-3
              rounded-xl
              border
              border-white/20
              text-white
              font-medium
              hover:bg-white/10
              transition-colors
              "
            >
              Chat on WhatsApp
            </a>
          </div>

          <div
            className="
            mt-10
            text-sm
            text-slate-400
            "
          >
            Research Methodology • Data Analysis • Bioinformatics • Academic
            Writing • Publication Support
          </div>
        </div>
      </Container>
    </section>
  );
}
