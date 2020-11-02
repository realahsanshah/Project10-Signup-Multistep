import * as React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import * as Yup from 'yup';
import { TextField } from '@material-ui/core';
import { addFirstname, addLastname, addAge } from '../../store/UserSlice';
import Button from '@material-ui/core/Button';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export interface PersonalInfoFormProps {
    submit:any
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

const PersonalInfoForm: React.SFC<PersonalInfoFormProps> = ({submit}) => {
    const classes=useStyles();
    const { firstname, lastname, age } = useSelector((state: RootStateOrAny) => state)
    const dispatch = useDispatch();

    return (
        <div>
            <Formik
                initialValues={{ firstname: firstname, lastname: lastname, age: age }}
                validationSchema={Yup.object({
                    firstname: Yup.string()
                        .required("Firstname is required")
                        .max(20, "Must be 20 characters or less")
                        .min(2, "Must be greater than or equals to 2 characters"),
                    lastname: Yup.string()
                        .required("Lastname is required")
                        .max(20, "Must be 20 characters or less")
                        .min(2, "Must be greater than or equals to 2 characters"),
                    age: Yup.number()
                        .required("Age is required")
                        .min(18, "Must be 18 or more")
                        .max(60, "Must be 60 or less")
                        
                })}

                onSubmit={(values) => {
                    console.log("Values", values);
                    dispatch(addFirstname(values.firstname));
                    dispatch(addLastname(values.lastname));
                    dispatch(addAge(values.age));
                    submit(1);
                }}
            >
                {(formik: any) => (
                    <Form onSubmit={formik.handleSubmit}>
                        <div>
                            <Field
                                type='text'
                                as={TextField}
                                variant="outlined"
                                label="First Name"
                                name="firstname"
                                id="firstname"
                            />
                            <br />
                            <ErrorMessage name='firstname' render={(msg: string) => (
                                <span style={{ color: "red" }}>{msg}</span>
                            )} />
                            <br />
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
                            <ErrorMessage name='lastname' render={(msg: string) => (
                                <span style={{ color: "red" }}>{msg}</span>
                            )} />
                            <br />
                        </div>
                        <div>
                            <Field
                                type='number'
                                as={TextField}
                                variant="outlined"
                                label="Age"
                                name="age"
                                id="age"
                            />
                            <br />
                            <ErrorMessage name='age' render={(msg: string) => (
                                <span style={{ color: "red" }}>{msg}</span>
                            )} />
                            <br />

                            <div>

                                <div>
                                        <Button
                                            disabled={true}
                                            className={classes.backButton}
                                        >
                                            Back
                                        </Button>     
                                        <Button variant="contained" color="primary" type="submit">
                                            Next
                                        </Button>
                                </div>
                            </div>
                        </div>

                    </Form>
                )}

            </Formik>
        </div>
    );
}

export default PersonalInfoForm;