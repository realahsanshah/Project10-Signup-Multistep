import * as React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import * as Yup from 'yup';
import { TextField } from '@material-ui/core';
import { addEmail, addPhone } from '../../store/UserSlice';
import Button from '@material-ui/core/Button';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export interface ContactInfoFormProps {
    submit: any
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        backButton: {
            marginRight: theme.spacing(1),
        },
        instructions: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
    }),
);

const ContactInfoForm: React.SFC<ContactInfoFormProps> = ({ submit }) => {
    const classes = useStyles();
    const { email, phone } = useSelector((state: RootStateOrAny) => state)

    const dispatch = useDispatch();

    return (
        <div>
            <Formik
                initialValues={{ email: email, phone: phone, }}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email("Must be a valid email")
                        .required("Email is required")
                        .min(4, "Must be greater than or equals to 4 characters"),
                    phone: Yup.string()
                        .required("Phone Number is required")
                        // .max(11, "Must be of 11 numbers")
                        // .min(11, "Must be of 11 numbers"),
                })}

                onSubmit={(values) => {
                    console.log("Values", values);
                    dispatch(addEmail(values.email));
                    dispatch(addPhone(values.phone));
                    submit(2);
                }}
            >
                {(formik: any) => (
                    <Form onSubmit={formik.handleSubmit}>
                        <div>
                            <Field
                                type='email'
                                as={TextField}
                                variant="outlined"
                                label="E-Mail"
                                name="email"
                                id="email"
                            />
                            <br />
                            <ErrorMessage name='email' render={(msg: string) => (
                                <span style={{ color: "red" }}>{msg}</span>
                            )} />
                            <br />
                        </div>
                        <div>
                            <Field
                                type='number'
                                as={TextField}
                                variant="outlined"
                                label="Phone"
                                name="phone"
                                id="phone"
                            />
                            <br />
                            <ErrorMessage name='phone' render={(msg: string) => (
                                <span style={{ color: "red" }}>{msg}</span>
                            )} />
                            <br />
                        </div>

                        <div>

                            <div>
                                <Button
                                    disabled={false}
                                    onClick={() => {
                                        submit(0)
                                    }}
                                    className={classes.backButton}
                                >
                                    Back
                                        </Button>
                                <Button variant="contained" color="primary" type="submit">
                                    Next
                                        </Button>
                            </div>
                        </div>

                    </Form>
                )}

            </Formik>
        </div >
    );
}

export default ContactInfoForm;