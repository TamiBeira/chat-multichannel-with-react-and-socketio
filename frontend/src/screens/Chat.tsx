import { useEffect, useRef, useState } from "react";
import { useChannelContext } from "../hooks/useChannelContext";
import { Link, useParams, useNavigate } from "react-router-dom";

export const Chat = (): JSX.Element | null => {
    const [message, setMessage] = useState("");
    const { channel, joinChannel, createMessage, userName } =
        useChannelContext();
    const { channelId } = useParams<{ channelId: string }>();
    const navigate = useNavigate();
    const divRef = useRef<HTMLDivElement>(null);

    const goToBottom = () => {
        if (divRef.current) {
            divRef.current.scrollTop = divRef.current?.scrollHeight;
        }
    };

    useEffect(() => {
        goToBottom();
    }, [channel?.messages]);

    useEffect(() => {
        if (!channelId) {
            navigate("/channels");
            return;
        }
        joinChannel(channelId);
    }, []);

    if (!userName) {
        navigate("/login");
        return null;
    }
    return (
        <>
            <div>
                <div>
                    <h5># {channel?.name}</h5>
                    <Link to="/channels">Voltar</Link>
                </div>
                <div
                    ref={divRef}
                    style={{ maxHeight: "300px", overflowY: "auto" }}
                >
                    {channel?.messages.map((message, index) => (
                        <div key={index}>
                            <strong>{message?.userName}</strong>:{" "}
                            {message?.message}
                        </div>
                    ))}
                </div>
                <form
                    onSubmit={(event) => {
                        event.preventDefault();
                        createMessage(message);
                        setMessage("");
                    }}
                >
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
        </>
    );
};
