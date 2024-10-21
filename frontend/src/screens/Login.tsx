import { useState } from "react";

export const Login = () => {
    const [userName, setUserName] = useState("");
    return (
        <div>
            <h1>Login</h1>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
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
