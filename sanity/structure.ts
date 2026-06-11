import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Research Desk")
    .items([
      S.documentTypeListItem("projectTopic").title("Research Topics"),

      S.documentTypeListItem("blogPost").title("Blog Posts"),

      S.documentTypeListItem("caseStudy").title("Case Studies"),

      S.documentTypeListItem("resource").title("Resources"),

      S.documentTypeListItem("service").title("Services"),

      S.documentTypeListItem("researchGuide").title("Research Guides"),

      S.documentTypeListItem("researchTemplate").title("Research Templates"),

      S.documentTypeListItem("statisticalTest").title("Statistical Tests"),
    ]);
