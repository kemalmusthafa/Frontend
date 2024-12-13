"use client";

import { useSession } from "@/context/useSession";
import { Field, Form, Formik, FormikProps } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  data: Yup.string().required("Username is required!"),
  password: Yup.string()
    .min(3, "Password is too weak!")
    .required("Password is required!"),
});

interface FormValues {
  data: string;
  password: string;
}

function FormLogin() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setIsAuth, setUser } = useSession();
  const router = useRouter();
  const initialValue: FormValues = {
    data: "",
    password: "",
  };

  const base_url = process.env.NEXT_BASE_URL_BE;
  const handleAdd = async (user: FormValues) => {
    try {
      setIsLoading(true);
      const res = await fetch(`${base_url}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
        credentials: "include",
      });
      const result = await res.json();
      if (!res.ok) throw result;
      setIsAuth(true);
      setUser(result.user);
      router.push("/");
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
        <h1 className="text-center text-3xl font-bold">Login Form</h1>
        <Formik
          initialValues={initialValue}
          validationSchema={LoginSchema}
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
                  <label htmlFor="data">Username or Email:</label>
                  <div className="flex">
                    <Field
                      type="text"
                      name="data"
                      onChange={handleChange}
                      value={values.data}
                      className="w-full p-[5px] bg-slate-100 rounded-sm border border-gray-200"
                    />
                  </div>
                  {touched.data && errors.data ? (
                    <div className="text-red-500 text-xs">{errors.data}</div>
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
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-green-800 hover:bg-green-600 w-full text-white rounded-md shadow-md font-semibold p-[12px]"
                  >
                    {isLoading ? "Loading ..." : "Login"}
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

export default FormLogin;
