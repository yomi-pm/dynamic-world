import Container from "@/components/Container";
import ProjectTopicsHero from "@/components/project-topics/ProjectTopicsHero";
import CategoryFilter from "@/components/project-topics/CategoryFilter";
import TopicGrid from "@/components/project-topics/TopicGrid";
import FeaturedTopics from "@/components/project-topics/FeaturedTopics";

export default async function ProjectTopicsPage() {
  return (
    <>
      <ProjectTopicsHero />

      <Container>
        <CategoryFilter />
        <FeaturedTopics />
        <TopicGrid />
      </Container>
    </>
  );
}
