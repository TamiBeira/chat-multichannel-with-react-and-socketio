import { useState } from "react";
import { useChannelContext } from "../hooks/useChannelContext";

export const ChannelCreate = () => {
    const [channelName, setChannelName] = useState("");
    const { createChannel } = useChannelContext();

    return (
        <div>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    createChannel(channelName);
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
