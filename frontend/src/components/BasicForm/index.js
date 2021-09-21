import React from "react";
import { Formik } from "formik";
import FormButtons from "../FormButtons";
import "./styles.css";

function BasicForm({ children, clear, isEdit, title, ...props }) {
  return (
    <div>
      <div className="sticky-form">
        <h1>{title}</h1>
        <Formik enableReinitialize {...props}>
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              {children}
              <FormButtons clear={clear} isEdit={isEdit} />
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default BasicForm;
