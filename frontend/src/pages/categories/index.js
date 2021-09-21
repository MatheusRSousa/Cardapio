import React, { useEffect, useState } from "react";
import BasicForm from "../../components/BasicForm";
import Container from "../../components/Container";
import { Input } from "../../components/Input/Input";
import Options from "../../components/Options";
import http from "../../config/axios";
import "./styles.css";
import { categoryValidationSchema } from "./validationSchema";

const INITIAL_VALUES = {
  nome: "",
  foto: "",
};
const BASE_URL = "/products/";

function Categories() {
  const [currentCategory, setCurrentCategory] = useState(INITIAL_VALUES);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () =>
    http.get(BASE_URL).then((response) => {
      setCategories(response.data);
    });

  const handleEdit = (category) => setCurrentCategory(category);

  const handleDelete = async (id) => {
    await http.delete(`${BASE_URL}${id}`);
    fetchCategories();
  };

  const onSubmit = async (values) => {
    if (values._id) {
      await http.put(`${BASE_URL}${currentCategory._id}`, values);
    } else {
      await http.post(BASE_URL, values);
    }
    fetchCategories();
  };

  return (
    <Container backTo="/">
      <BasicForm
        title="Categorias"
        initialValues={currentCategory}
        onSubmit={onSubmit}
        clear={() => setCurrentCategory(INITIAL_VALUES)}
        validationSchema={categoryValidationSchema}
        isEdit={!!currentCategory._id}
      >
        <Input label="Nome" name="nome" />
        <Input label="URL Foto" name="foto" />
      </BasicForm>
      <div className="category-list">
        {categories.map((category, index) => (
          <div key={index}>
            <div className="category-list-item">
              <h3>{category.nome}</h3>
              <img src={category.foto} alt="foto" />
              <Options
                handleEdit={() => handleEdit(category)}
                handleDelete={() => handleDelete(category._id)}
              />
            </div>
            {index < categories.length - 1 && <hr />}
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Categories;
