import { type SchemaTypeDefinition } from "sanity";

import projectTopic from "./projectTopic";
import blogPost from "./blogPost";
import caseStudy from "./caseStudy";
import resource from "./resource";
import service from "./service";
import researchGuide from "./researchGuide";
import researchTemplate from "./researchTemplate";
import statisticalTest from "./statisticalTest";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    projectTopic,
    blogPost,
    caseStudy,
    resource,
    service,
    researchGuide,
    researchTemplate,
    statisticalTest,
  ],
};
