import * as yup from "yup";

export const productsValidationSchema = yup.object().shape({
  nome: yup.string().required("Nome obrigatório."),
  foto: yup.string().required("Foto obrigatória."),
  descricao: yup.string().required("Descrição obrigatória."),
  valor: yup.number().required("Valor obrigatória."),
  categoria: yup.string().required("Categoria obrigatória."),
});
