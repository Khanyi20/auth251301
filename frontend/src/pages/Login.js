import { useState } from "react";
import axios from "axios";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(
                "http://localhost:5000/login",
                {
                    email,
                    password
                }
            );

            alert(response.data.message);

        }

        catch (error) {

            alert(error.response.data.message);

        }

    };

    return (

        <div className="form-container">

            <h2>Login</h2>

            <form onSubmit={loginUser}>

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                    required
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                    required
                />

                <button type="submit">
                    Login
                </button>

            </form>

        </div>

    );

}

export default Login;