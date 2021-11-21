import * as yup from "yup";

export const registerValidationSchema = yup.object().shape({
  username: yup.string().required("Nome obrigatório."),
  password: yup.string().required("Senha obrigatória."),
  roles: yup.string().required("Defina uma role"),
});
export const loginValidationSchema = yup.object().shape({
  username: yup.string().required("Nome obrigatório."),
  password: yup.string().required("Senha obrigatória."),
});
