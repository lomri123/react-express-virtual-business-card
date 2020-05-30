import * as Yup from "yup";

export const validateSchema = Yup.object({
  title: Yup.string().max(25),
  email: Yup.string().email("Invalid E-mail address"),
  phone: Yup.number().typeError("Invalid phone number"),
  website: Yup.string().url("Invalid URL")
});
