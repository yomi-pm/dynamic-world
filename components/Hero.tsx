import { Button } from "@/components/ui/button";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* CONTENT */}

          <div>
            <div className="inline-flex bg-slate-100 rounded-full px-4 py-2 text-sm mb-6 md:mb-8">
              Research Support Platform
            </div>

            <h1
              className="
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-bold
              tracking-tight
              leading-tight
              "
            >
              Research Resources. Expert Support.
            </h1>

            <p
              className="
              mt-6
              md:mt-8
              text-lg
              md:text-xl
              text-slate-600
              leading-8
              md:leading-9
              max-w-2xl
              "
            >
              Everything you need to plan, conduct, analyze and publish
              high-quality research. Access practical resources, guides, tools
              and expert support designed to help researchers succeed at every
              stage of the research journey.
            </p>

            {/* STATS */}

            <div
              className="
              grid
              grid-cols-3
              gap-4
              md:gap-8
              mt-8
              md:mt-10
              "
            >
              <div>
                <div className="text-2xl md:text-3xl font-bold">500+</div>
                <div className="text-slate-500 text-xs md:text-sm">
                  Research Topics
                </div>
              </div>

              <div>
                <div className="text-2xl md:text-3xl font-bold">50+</div>
                <div className="text-slate-500 text-xs md:text-sm">
                  Research Guides
                </div>
              </div>

              <div>
                <div className="text-2xl md:text-3xl font-bold">20+</div>
                <div className="text-slate-500 text-xs md:text-sm">
                  Research Tools
                </div>
              </div>
            </div>

            {/* CTA */}

            <div
              className="
              flex
              flex-col
              sm:flex-row
              gap-4
              mt-8
              md:mt-10
              "
            >
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/project-topics">Explore Resources</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Link href="/contact">Get Expert Support</Link>
              </Button>
            </div>
          </div>

          {/* IMAGE */}

          <div className="relative order-first lg:order-last">
            <div
              className="
              relative
              h-[320px]
              sm:h-[450px]
              lg:h-[650px]
              rounded-3xl
              overflow-hidden
              "
            >
              <Image
                src="/images/research-papers.jpg"
                alt="Research image"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
