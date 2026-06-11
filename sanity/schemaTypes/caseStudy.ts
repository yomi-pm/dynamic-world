import { defineType, defineField } from "sanity";

export default defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    defineField({
      name: "industry",
      title: "Industry",
      type: "string",
    }),

    defineField({
      name: "problem",
      title: "Problem",
      type: "text",
    }),

    defineField({
      name: "approach",
      title: "Approach",
      type: "text",
    }),

    defineField({
      name: "results",
      title: "Results",
      type: "text",
    }),

    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    }),
  ],
});
