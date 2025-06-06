import { z } from "zod";

const createContactFormSchema = (t) =>
  z.object({
    name: z
      .string()
      .min(3, t("name_min_length"))
      .regex(/^[\p{L}\p{N}\s]+$/u, {
        message: t("name_invalid_format"),
      }),
    email: z.string().email(t("invalid_email")).min(1, t("email_required")),
    message: z
      .string()
      .min(1, t("message_required"))
      .regex(/^[\p{L}\p{N}\s]+$/u, {
        message: t("message_invalid_format"),
      }),
  });

export default createContactFormSchema;
