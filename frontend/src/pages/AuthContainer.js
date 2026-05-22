import { useState } from "react";

import Login from "./Login";
import Register from "./Register";

function AuthContainer() {
    const [isLogin, setIsLogin] = useState(true);

    return (

        <div className="container">

            {/* Left panel */}

            <div className={`left-panel ${isLogin ? "" : "move"}`}>

                <div className="overlay-content">

                    <h1> Welcome </h1>

                    <p>
                        Secure authentication with
                        password encryption and
                        chess-piece verification.
                    </p>

                    <button
                        className="switch-btn"
                        onClick={() =>
                            setIsLogin(!isLogin)
                        }
                    >
                        {isLogin
                            ? "Create Account"
                            : "Sign In"}
                    </button>

                </div>

            </div>

            {/* right panel */}

            <div className="right-panel">

                {isLogin
                    ? <Login />
                    : <Register />
                }
            </div>
        </div>
    );
}

export default AuthContainer;