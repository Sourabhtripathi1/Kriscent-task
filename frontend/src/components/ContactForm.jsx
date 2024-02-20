// ContactForm.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  // Validation Schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  // Initial Form Values
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  // Form Submission
  const onSubmit = (values, { resetForm }) => {
    // Handle form submission logic here
    console.log("Form submitted:", values);
    // Reset the form after submission
    resetForm();
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form-group pt-3">
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" className="form-control" />
            <ErrorMessage name="name" component="div" className="text-danger" />
          </div>

          <div className="form-group pt-3">
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
              className="form-control"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-danger"
            />
          </div>

          <div className="form-group pt-3">
            <label htmlFor="message">Message</label>
            <Field
              as="textarea"
              id="message"
              name="message"
              className="form-control"
            />
            <ErrorMessage
              name="message"
              component="div"
              className="text-danger"
            />
          </div>

          <div className="d-flex text-center pt-3 justify-content-end">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
