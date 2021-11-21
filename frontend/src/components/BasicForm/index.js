import React from "react";
import { Formik } from "formik";
import FormButtons from "../FormButtons";
import "./styles.css";
import SessionFormButtons from "../SessionFormButtons";

function BasicForm({
  children,
  sessionMode,
  secondary,
  isEdit,
  title,
  ...props
}) {
  return (
    <div className="sticky-form">
      <h1>{title}</h1>
      <Formik enableReinitialize {...props}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            {children}
            {sessionMode ? (
              <SessionFormButtons isEdit={isEdit} />
            ) : (
              <FormButtons secondary={secondary} isEdit={isEdit} />
            )}
          </form>
        )}
      </Formik>
    </div>
  );
}

export default BasicForm;
