import { useEffect, useState } from "react";
import { useChannelContext } from "../hooks/useChannelContext";
import { useNavigate } from "react-router-dom";

export const ChannelCreate = () => {
    const [channelName, setChannelName] = useState("");
    const { createChannel, userName } = useChannelContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!userName) {
            navigate("/login");
            return;
        }
    }, []);

    return (
        <div>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    createChannel(channelName);
                    setChannelName("");
                }}
            >
                <label>Nome do Canal</label>
                <br />
                <input
                    type="text"
                    value={channelName}
                    onChange={(ev) => {
                        setChannelName(ev.target.value);
                    }}
                />
                <button type="submit">Criar</button>
            </form>
        </div>
    );
};
