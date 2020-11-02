import * as React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import {Grid, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core'

export interface ReviewInfoFormProps {
    submit: any
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow:1,
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
            <div className={classes.root}>
                <Grid container  alignItems="center" justify="center" xs={12}>
                <Grid item xs={12} sm={4}>
                    <Paper elevation={3} >
                        <Typography variant="h4">Review Your Data</Typography>
                        <Typography variant="h6" align="left">First Name: {firstname}</Typography>
                        <Typography variant="h6" align="left">Last Name: {lastname}</Typography>
                        <Typography variant="h6" align="left">Age: {age}</Typography>
                        <Typography variant="h6" align="left">E-Mail: {email}</Typography>
                        <Typography variant="h6" align="left">Phone: {phone}</Typography>
                    </Paper>
                </Grid>
                </Grid>
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