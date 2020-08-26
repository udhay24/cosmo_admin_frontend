import React, {useState} from "react";

import {Typography, Button, TextField} from "@material-ui/core";

import styles from './login.scss'
import AppBar from "@material-ui/core/AppBar";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25px',
        },
    },
}));

export default function LoginComponent() {
    console.log("login component")
    function handleLogin() {

    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false)

    const classes = useStyles();

    return <form className={classes}>
        <div className="login-register-container page">
            {/* form */}
            <div className="input-container">
                {/* heading */}
                <Typography className="login-register-heading" variant="h3">
                    Hey there!
                </Typography>

                {/* mono */}
                <Typography className="login-register-mono">
                    Enter the email and password to login
                </Typography>

                {/* mail */}
                <TextField
                    className={styles.loginRegisterInput}
                    style={{
                        padding: "8px",
                        width: '400px',
                        color: "primary"
                    }}
                    id="margin-dense"
                    variant="outlined"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                {/* password */}
                <TextField
                    className={styles.loginRegisterInput}
                    style={{
                        padding: "8px",
                        color: "secondary"
                    }}
                    variant="outlined"
                    name="password"
                    placeholder="Password"
                    type={passwordVisible ? "text" : "password"}
                    onChange={e => setPassword(e.target.value)}
                />

                {/* button */}
                <Button
                    className="login-register-button"
                    color="primary"
                    variant="contained"
                    disabled={true}
                    onClick={() => handleLogin()}
                >
                    {true ? "Wait a sec" : "Login"}
                </Button>


            </div>

            {/* error */}
            <Snackbar
                open={"error"}
                message={"error"}
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        onClick={() => {

                        }}
                    />
                }
            />
        </div>
    </form>

}
