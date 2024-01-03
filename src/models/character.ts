import { z } from "zod";

export const Entry = z.object({
  key: z.string(),
  tags : z.array(z.string()).optional(),
  firestorePath: z.string(),
})

export const Character = Entry.extend({
  firestorePath: z.literal('characters/{key}'),
  title: z.string(),
  key: z.string().optional(),
  owners: z.array(z.string()),
  system: z.string(),
})

