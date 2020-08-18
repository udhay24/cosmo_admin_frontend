import React from "react";

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        return <div>
            <h1>Login component</h1>
        </div>
    }
}

export default LoginComponent