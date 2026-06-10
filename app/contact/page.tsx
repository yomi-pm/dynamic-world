import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata = {
  title: "Contact Research Desk",

  description:
    "Get in touch with Research Desk for research support, methodology guidance, data analysis, bioinformatics and publication support.",
};

export default function ContactPage() {
  return (
    <>
      <section className="py-28 bg-gradient-to-b from-slate-50 to-white border-b">
        <Container>
          <div className="max-w-4xl">
            <div className="inline-flex px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-medium">
              Contact Research Desk
            </div>

            <h1 className="text-6xl font-bold tracking-tight mt-6">
              Let's Talk About Your Research
            </h1>

            <p className="mt-6 text-xl text-slate-600 leading-9">
              Whether you need support with a project, dissertation, thesis,
              data analysis or publication, we're here to help.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Details */}

            <div>
              <h2 className="text-3xl font-bold">Get In Touch</h2>

              <p className="mt-6 text-slate-600 leading-8">
                Reach out to us for research support, consultations,
                collaborations or training enquiries.
              </p>

              <div className="mt-10 space-y-8">
                <div>
                  <h3 className="font-semibold">Email</h3>

                  <p className="text-slate-600 mt-2">
                    hello@researchdesk.africa
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">WhatsApp</h3>

                  <p className="text-slate-600 mt-2">+234 XXX XXX XXXX</p>
                </div>

                <div>
                  <h3 className="font-semibold">Response Time</h3>

                  <p className="text-slate-600 mt-2">
                    We typically respond within 24 hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}

            <div
              className="
              p-8
              rounded-3xl
              border
              border-slate-200
              bg-white
              "
            >
              <h2 className="text-2xl font-bold">Send a Message</h2>

              <form className="mt-8 space-y-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="
                  w-full
                  border
                  border-slate-200
                  rounded-xl
                  px-4
                  py-3
                  "
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="
                  w-full
                  border
                  border-slate-200
                  rounded-xl
                  px-4
                  py-3
                  "
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="
                  w-full
                  border
                  border-slate-200
                  rounded-xl
                  px-4
                  py-3
                  "
                />

                <textarea
                  rows={6}
                  placeholder="Tell us about your research project..."
                  className="
                  w-full
                  border
                  border-slate-200
                  rounded-xl
                  px-4
                  py-3
                  "
                />

                <button
                  type="submit"
                  className="
                  px-6
                  py-3
                  rounded-xl
                  bg-slate-900
                  text-white
                  "
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="p-12 rounded-3xl bg-slate-50 border">
            <h2 className="text-3xl font-bold">Need Immediate Assistance?</h2>

            <p className="mt-4 text-slate-600">
              For faster responses, contact us directly via WhatsApp.
            </p>

            <a
              href="https://wa.me/234XXXXXXXXXX"
              target="_blank"
              className="
              inline-block
              mt-6
              px-6
              py-3
              rounded-xl
              bg-green-600
              text-white
              "
            >
              Chat on WhatsApp
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
