import * as React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import * as Yup from 'yup';
import { TextField } from '@material-ui/core';

export interface PersonalInfoFormProps {

}

const PersonalInfoForm: React.SFC<PersonalInfoFormProps> = () => {
    const { firstname, lastname, age } = useSelector((state: RootStateOrAny) => state)

    const dispatch = useDispatch();

    return (
        <div>
            <Formik
                initialValues={{ firstname, lastname, age }}
                validationSchema={Yup.object({
                    firstname: Yup.string()
                        .required("Firstname is required")
                        .max(20, "Must be 20 characters or less")
                        .min(2, "Must be greater than or equals to 2 characters"),
                    lastname: Yup.string()
                        .required("Lastname is required")
                        .max(20, "Must be 20 characters or less")
                        .min(2, "Must be greater than or equals to 2 characters"),
                    age: Yup.string()
                        .required("Age is required")
                        .max(60, "Must be 60 or less")
                        .min(18, "Must be 18 or more"),
                })}

                onSubmit={(values) => {
                    console.log("Values", values);
                }}
            >
                {(formik:any) => (
                    <Form onSubmit={formik.handleSubmit}>
                        <div>
                            <Field
                                type='text'
                                as={TextField}
                                variant="outlined"
                                label="First Name"
                                name="firstname"
                                id="firstname"
                                mt={2}
                            />
                            <br />
                            <ErrorMessage name='firstname' render={(msg:string) => (
                                <span style={{ color: "red" }}>{msg}</span>
                            )} />
                            <br/>
                        </div>
                        <div>
                            <Field
                                type='text'
                                as={TextField}
                                variant="outlined"
                                label="Last Name"
                                name="lastname"
                                id="lastname"
                            />
                            <br />
                            <ErrorMessage name='lastname' render={(msg:string) => (
                                <span style={{ color: "red" }}>{msg}</span>
                            )} />
                            <br/>
                        </div>
                        <div>
                            <Field
                                type='number'
                                as={TextField}
                                variant="outlined"
                                label="First Name"
                                name="age"
                                id="age"
                            />
                            <br />
                            <ErrorMessage name='age' render={(msg:string) => (
                                <span style={{ color: "red" }}>{msg}</span>
                            )} />
                            <br/>
                        </div>

                    </Form>
                )}

            </Formik>
        </div>
    );
}

export default PersonalInfoForm;