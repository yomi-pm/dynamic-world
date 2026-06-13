import { defineType, defineField } from "sanity";

export default defineType({
  name: "projectTopic",
  title: "Project Topic",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Public Health", value: "public-health" },
          { title: "Nursing", value: "nursing" },
          { title: "Microbiology", value: "microbiology" },
          { title: "Bioinformatics", value: "bioinformatics" },
          {
            title: "Medical Laboratory Science",
            value: "medical-laboratory-science",
          },
          { title: "Education", value: "education" },
        ],
      },
    }),

    defineField({
      name: "background",
      title: "Background",
      type: "text",
    }),

    defineField({
      name: "objectives",
      title: "Objectives",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "researchQuestions",
      title: "Research Questions",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "hypotheses",
      title: "Hypotheses",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "methodology",
      title: "Suggested Methodology",
      type: "text",
    }),

    defineField({
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "researchArea",
      title: "Research Area",
      type: "string",
    }),

    defineField({
      name: "sampleSuggestion",
      title: "Suggested Sample",
      type: "string",
    }),

    defineField({
      name: "likeCount",
      title: "Like Count",
      type: "number",
      initialValue: 0,
    }),
  ],
});
