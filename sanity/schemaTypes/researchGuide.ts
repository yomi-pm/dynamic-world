import { defineType, defineField } from "sanity";

export default defineType({
  name: "researchGuide",
  title: "Research Guide",
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
          { title: "Research Methods", value: "research-methods" },
          { title: "Statistics", value: "statistics" },
          { title: "Data Analysis", value: "data-analysis" },
          { title: "Academic Writing", value: "academic-writing" },
          { title: "Proposal Development", value: "proposal-development" },
        ],
      },
    }),

    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
    }),

    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
    }),

    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "difficulty",
      title: "Difficulty Level",
      type: "string",
      options: {
        list: [
          { title: "Beginner", value: "beginner" },
          { title: "Intermediate", value: "intermediate" },
          { title: "Advanced", value: "advanced" },
        ],
      },
    }),

    defineField({
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
    }),

    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
    }),
  ],
});
