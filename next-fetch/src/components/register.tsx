"use client"

import action from "@/app/action";
import { Field, Form, Formik, FormikProps } from "formik";
import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("name is required!"),
  email: Yup.string()
    .email("Invalid email format!")
    .required("Email is required!"),
  password: Yup.string()
    .min(3, "Password is too weak!")
    .required("Password is required!"),
});

interface FormValues {
  name: string;
  email: string;
  password: string;
}

function FormRegister() {
  const initialValue: FormValues = { name: "", email: "", password: "" };

  const handleAdd = async (user: FormValues) => {
    try {
      await fetch("http://localhost:8000/api/users", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "content-type": "application/json" },
      });
      action("user")
      alert("user berhasil di tambahkan");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md bg-white drop-shadow-md p-10 text-start">
        <h1 className="text-center text-3xl font-bold">Register Form</h1>
        <Formik
          initialValues={initialValue}
          validationSchema={RegisterSchema}
          onSubmit={(values, action) => {
            handleAdd(values);
            action.resetForm();
          }}
        >
          {(props: FormikProps<FormValues>) => {
            const { handleChange, values, touched, errors } = props;
            return (
              <Form>
                <div className="mt-5">
                  <label htmlFor="name">Name:</label>
                  <div className="flex">
                    <Field
                      type="text"
                      name="name"
                      onChange={handleChange}
                      value={values.name}
                      className="w-full p-[5px] bg-slate-100 rounded-sm border border-gray-200"
                    />
                  </div>
                  {touched.name && errors.name ? (
                    <div className="text-red-500 text-xs">
                      {errors.name}
                    </div>
                  ) : null}
                </div>
                <div className="mt-5">
                  <label htmlFor="email">Email:</label>
                  <div className="flex">
                    <Field
                      type="text"
                      name="email"
                      onChange={handleChange}
                      value={values.email}
                      className="w-full p-[5px] bg-slate-100 rounded-sm border border-gray-200"
                    />
                  </div>
                  {touched.email && errors.email ? (
                    <div className="text-red-500 text-xs">{errors.email}</div>
                  ) : null}
                </div>
                <div className="mt-5">
                  <label htmlFor="password">Password:</label>
                  <div className="flex">
                    <Field
                      type="password"
                      name="password"
                      onChange={handleChange}
                      value={values.password}
                      className="w-full p-[5px] bg-slate-100 rounded-sm border border-gray-200"
                    />
                  </div>
                  {touched.password && errors.password ? (
                    <div className="text-red-500 text-xs">
                      {errors.password}
                    </div>
                  ) : null}
                </div>
                <div className="mt-5">
                  <button className="bg-green-800 hover:bg-green-600 w-full text-white rounded-md shadow-md font-semibold p-[12px]">
                    Register
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default FormRegister;