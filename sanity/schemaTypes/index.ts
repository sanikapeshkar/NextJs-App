import { type SchemaTypeDefinition } from "sanity";

import { author } from "./auth";
import { startup } from "./structure";
import { playlist } from "./playlist";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, startup, playlist],
};