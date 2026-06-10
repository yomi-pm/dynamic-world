export default async function ResourcePage({
  params,
}: {
  params: Promise<{ slug?: string }>;
}) {
  const { slug } = await params;

  const title = slug ? slug.replace(/-/g, " ") : "Resource";

  return (
    <div className="max-w-6xl mx-auto py-24">
      <h1 className="text-5xl font-bold capitalize">{title}</h1>
    </div>
  );
}
