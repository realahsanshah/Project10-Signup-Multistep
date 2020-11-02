import * as React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export interface ReviewInfoFormProps {
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

const ReviewInfoForm: React.SFC<ReviewInfoFormProps> = ({ submit }) => {
    const classes = useStyles();
    const { firstname, lastname, age, email, phone } = useSelector((state: RootStateOrAny) => state)

    return (
        <div>
            <div>
                <Typography variant="h4">Review Your Data</Typography>
                <Typography variant="h6">First Name: {firstname}</Typography>
                <Typography variant="h6">Last Name: {lastname}</Typography>
                <Typography variant="h6">Age: {age}</Typography>
                <Typography variant="h6">E-Mail: {email}</Typography>
                <Typography variant="h6">Phone: {phone}</Typography>

            </div>
            <div>
                <Button
                    disabled={false}
                    onClick={() => {
                        submit(1)
                    }}
                    className={classes.backButton}
                >
                    Back
                </Button>
                <Button variant="contained" color="primary" onClick={() => { submit(3) }}>
                    Submit
                </Button>
            </div>
        </div>
    );
}

export default ReviewInfoForm;