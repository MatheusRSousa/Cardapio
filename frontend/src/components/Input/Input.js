import { TextField } from "@material-ui/core";
import { useField } from "formik";

export const Input = (props) => {
  const [field, meta] = useField(props.name);

  const getErrors = () => meta.touched && meta.error;

  return (
    <TextField
      margin="normal"
      focused
      fullWidth
      color="primary"
      variant="outlined"
      error={!!getErrors()}
      helperText={getErrors()}
      {...props}
      {...field}
    />
  );
};
