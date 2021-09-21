import * as yup from "yup";

export const categoryValidationSchema = yup.object().shape({
  nome: yup.string().required("Nome obrigatório."),
  foto: yup.string().required("Foto obrigatória."),
});
