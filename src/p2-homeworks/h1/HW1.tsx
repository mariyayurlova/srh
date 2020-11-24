import React from "react";
import Message from "./Message";

export type MessageType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}


function HW1() {

    const messageData: MessageType = {
        avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
        name: "Some Name",
        message: "some text",
        time: "22:00",
    };

    return (
        <div>
            homeworks 1


            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            {/*<AlternativeMessage/>*/}
        </div>
    );
}

export default HW1;
