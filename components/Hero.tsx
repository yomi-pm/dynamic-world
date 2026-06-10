import { Button } from "@/components/ui/button";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-32">
      <Container>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex bg-slate-100 rounded-full px-4 py-2 text-sm mb-8">
              Research Support Platform
            </div>

            <h1 className="text-6xl font-bold tracking-tight leading-tight">
              Research Resources. Expert Support.
            </h1>

            <p className="mt-8 text-xl text-slate-600 leading-9">
              Everything you need to plan, conduct, analyze and publish
              high-quality research. Access practical resources, guides, tools
              and expert support designed to help researchers succeed at every
              stage of the research journey.
            </p>

            <div className="flex gap-10 mt-10">
              <div>
                <div className="text-3xl font-bold">500+</div>
                <div className="text-slate-500 text-sm">Research Topics</div>
              </div>

              <div>
                <div className="text-3xl font-bold">50+</div>
                <div className="text-slate-500 text-sm">Research Guides</div>
              </div>

              <div>
                <div className="text-3xl font-bold">20+</div>
                <div className="text-slate-500 text-sm">Research Tools</div>
              </div>
            </div>

            <div className="flex gap-4 mt-10">
              <Button asChild size="lg">
                <Link href="/project-topics">Explore Resources</Link>
              </Button>

              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Get Expert Support</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[650px] rounded-3xl overflow-hidden">
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
