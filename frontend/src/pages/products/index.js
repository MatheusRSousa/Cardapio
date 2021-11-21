import React, { useEffect } from "react";
import BasicForm from "../../components/BasicForm";
import Container from "../../components/Container";
import { Input } from "../../components/Input/Input";
import Options from "../../components/Options";
import http from "../../config/axios";
import { productsValidationSchema } from "./validationSchema";
import "./styles.css";
import { MenuItem } from "@material-ui/core";
import SessionService from "../../services/SessionService";

const INITIAL_VALUES = {
  nome: "",
  foto: "",
  descricao: "",
  categoria: "",
  valor: "",
};
const BASE_URL = "/products/";

function Products() {
  const [categories, setCategories] = React.useState([]);
  const [currentProduct, setCurrentProduct] = React.useState(INITIAL_VALUES);
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = () =>
    http.get(BASE_URL).then((response) => {
      setProducts(response.data);
    });

  const fetchCategories = () =>
    http.get("/categories/").then((response) => {
      setCategories(response.data);
    });

  const handleEdit = (product) => setCurrentProduct(product);

  const handleDelete = async (id) => {
    await http.delete(`${BASE_URL}${id}`);
    fetchProducts();
  };

  const onSubmit = async (values) => {
    if (values._id) {
      await http.put(`${BASE_URL}${currentProduct._id}`, values);
    } else {
      await http.post(BASE_URL, values);
    }
    fetchProducts();
  };

  return (
    <Container backTo="/home">
      {SessionService.hasRole("ADMIN") && (
        <BasicForm
          title="Produtos"
          initialValues={currentProduct}
          onSubmit={onSubmit}
          secondary={() => setCurrentProduct(INITIAL_VALUES)}
          validationSchema={productsValidationSchema}
          isEdit={!!currentProduct._id}
        >
          <Input label="Nome" name="nome" />
          <Input label="Descrição" name="descricao" />
          <Input label="Valor" type="number" name="valor" />
          <Input label="Foto" name="foto" />
          <Input label="Categoria" name="categoria" select>
            <MenuItem key={0} value="" />
            {categories.map((category) => (
              <MenuItem key={category._id} value={category._id}>
                {category.nome}
              </MenuItem>
            ))}
          </Input>
        </BasicForm>
      )}
      <div className="products-list">
        {products.map((product, index) => (
          <div key={index}>
            <div className="products-list-item">
              <div className="products-list-desc">
                <h3>{product.nome}</h3>
                <h5>{Number(product.valor).toFixed(2)} R$</h5>
                <span>{product.descricao}</span>
              </div>
              <img src={product.foto} alt="foto" />
              {SessionService.hasRole("ADMIN") && (
                <Options
                  handleEdit={() => handleEdit(product)}
                  handleDelete={() => handleDelete(product._id)}
                />
              )}
            </div>
            {index < products.length - 1 && <hr />}
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Products;
