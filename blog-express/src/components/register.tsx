"use client";

import { Field, Form, Formik, FormikProps } from "formik";
import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  username: Yup.string().required("Username is required!"),
  email: Yup.string()
    .email("Invalid email format!")
    .required("Email is required!"),
  password: Yup.string()
    .min(3, "Password is too weak!")
    .required("Password is required!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password not match !")
    .required("Confirm password is required!"),
});

interface FormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function FormRegister() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const initialValue: FormValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleAdd = async (user: FormValues) => {
    try {
      setIsLoading(true);
      const res = await fetch("http://localhost:8000/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const result = await res.json();
      if (!res.ok) throw result;
      toast.success(result.message);
    } catch (err: any) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setIsLoading(false);
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
                  <label htmlFor="username">Username:</label>
                  <div className="flex">
                    <Field
                      type="text"
                      name="username"
                      onChange={handleChange}
                      value={values.username}
                      className="w-full p-[5px] bg-slate-100 rounded-sm border border-gray-200"
                    />
                  </div>
                  {touched.username && errors.username ? (
                    <div className="text-red-500 text-xs">
                      {errors.username}
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
                  <label htmlFor="confirmPassword">Confirm Password:</label>
                  <div className="flex">
                    <Field
                      type="password"
                      name="confirmPassword"
                      onChange={handleChange}
                      value={values.confirmPassword}
                      className="w-full p-[5px] bg-slate-100 rounded-sm border border-gray-200"
                    />
                  </div>
                  {touched.confirmPassword && errors.confirmPassword ? (
                    <div className="text-red-500 text-xs">
                      {errors.confirmPassword}
                    </div>
                  ) : null}
                </div>
                <div className="mt-5">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-green-800 hover:bg-green-600 w-full text-white rounded-md shadow-md font-semibold p-[12px]"
                  >
                    {isLoading ? "Loading ..." : "Register"}
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
