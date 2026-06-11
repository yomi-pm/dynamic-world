import { defineType, defineField } from "sanity";

export default defineType({
  name: "researchTemplate",
  title: "Research Template",
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
          { title: "Proposal Template", value: "proposal" },
          { title: "Questionnaire", value: "questionnaire" },
          { title: "Consent Form", value: "consent-form" },
          { title: "Data Collection Tool", value: "data-collection" },
          { title: "Chapter Template", value: "chapter-template" },
          { title: "Research Planner", value: "planner" },
        ],
      },
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),

    defineField({
      name: "previewImage",
      title: "Preview Image",
      type: "image",
    }),

    defineField({
      name: "file",
      title: "Template File",
      type: "file",
    }),

    defineField({
      name: "isPremium",
      title: "Premium Resource",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "featured",
      title: "Featured Resource",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "department",
      title: "Department",
      type: "string",
    }),

    defineField({
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
