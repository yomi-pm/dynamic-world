import { defineType, defineField } from "sanity";

export default defineType({
  name: "statisticalTest",
  title: "Statistical Test",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Test Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Comparison Test", value: "comparison" },
          { title: "Relationship Test", value: "relationship" },
          { title: "Prediction Test", value: "prediction" },
          { title: "Association Test", value: "association" },
        ],
      },
    }),

    defineField({
      name: "overview",
      title: "Overview",
      type: "text",
    }),

    defineField({
      name: "whenToUse",
      title: "When To Use",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "requirements",
      title: "Requirements",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "researchQuestions",
      title: "Example Research Questions",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "hypotheses",
      title: "Example Hypotheses",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "variables",
      title: "Variable Types",
      type: "object",
      fields: [
        {
          name: "independent",
          title: "Independent Variable",
          type: "string",
        },
        {
          name: "dependent",
          title: "Dependent Variable",
          type: "string",
        },
      ],
    }),

    defineField({
      name: "software",
      title: "Software",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "steps",
      title: "How To Run The Test",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "interpretation",
      title: "How To Interpret Results",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "commonMistakes",
      title: "Common Mistakes",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "featured",
      title: "Featured Test",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
