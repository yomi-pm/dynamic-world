import { Card } from "@/components/ui/card";

export default function FeaturedTopics() {
  return (
    <section className="pb-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">Featured Topics</h2>

        <p className="text-slate-600 mt-2">Popular research ideas.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <Card
            key={item}
            className="
            p-8
            rounded-3xl
            bg-slate-50
            border-slate-200
            "
          >
            <div className="text-teal-700 text-sm font-medium">
              Public Health
            </div>

            <h3 className="text-xl font-semibold mt-4">
              Factors Influencing Childhood Immunization Uptake
            </h3>

            <p className="mt-4 text-slate-600">
              Explore awareness, barriers, and healthcare trust factors.
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
