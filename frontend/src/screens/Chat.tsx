import { useState } from "react";
import { useChannelContext } from "../hooks/useChannelContext";
import { Link } from "react-router-dom";

export const Chat = () => {
    const [message, setMessage] = useState("");
    const { channel } = useChannelContext();

    return (
        <div>
            <div>
                <h5># {channel?.name}</h5>
                <Link to="/channels">Voltar</Link>
            </div>
            <div>
                {channel?.messages.map((message) => (
                    <div>
                        <strong>{message?.userName}</strong>: {message?.message}
                    </div>
                ))}
            </div>
            <form>
                <input
                    placeholder="Escreva sua mensagem"
                    type="text"
                    value={message}
                    onChange={(ev) => {
                        setMessage(ev.target.value);
                    }}
                />
                <button>Enviar</button>
            </form>
        </div>
    );
};
