import { useState } from "react";
import axios from "axios";

import ChessPatternverify from "./ChessPatternverify";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const [savedPattern, setSavedPattern] = useState([]);

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
            setSavedPattern(
                response.data.chessPattern
            );

            setShow(true);

        }

        catch (error) {

            alert(error.response.data.message);

        }

    };

    const loginSuccess = () => {

        alert(
            "User Fully Authenticated"
        );

    };

    return (

        <div className="form-wrapper">

            <h2>Login</h2>
            <p className= "subtitle">Login to continue</p>

            {!show ? (

                <form onSubmit={loginUser}>

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                    />
                    <button type="submit">
                        Login
                    </button>
                </form>
            ) : (

                <ChessPatternverify
                    savedPattern={savedPattern}
                    onSuccess={loginSuccess}
                />

            )}

        </div>
    );
}

export default Login;