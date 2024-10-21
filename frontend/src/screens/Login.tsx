import { useState } from "react";
import { useChannelContext } from "../hooks/useChannelContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [userName, setUserName] = useState("");
    const navigate = useNavigate();
    const { login } = useChannelContext();
    return (
        <div>
            <h1>Login</h1>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    login(userName);
                    navigate("/channels");
                }}
            >
                <label>Username</label>
                <br />
                <input
                    type="text"
                    placeholder="Seu usuário"
                    value={userName}
                    onChange={(ev) => setUserName(ev.target.value)}
                />
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
};
