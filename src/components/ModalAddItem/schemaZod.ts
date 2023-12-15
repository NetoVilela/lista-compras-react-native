import { z } from "zod"

export const registerProductSchema = z.object({
  title: z.string().min(1, "Campo obrigatório"),
  quantity: z.string().min(1, "Campo obrigatório"),
})
