import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return (
        <Container>
            <Messages ref={messagesRef}>
                {/* <ChannelMessage 
                    author="Victória Tonhole"
                    date="20/02/2022"
                    content="Hoje é o meu aniversário"
                /> */}
                {Array.from(Array(15).keys()).map((n) => (
                    <ChannelMessage 
                        author="Victória Tonhole"
                        date="20/02/2022"
                        content="Olá mundo!"
                    />
                ))}
                <ChannelMessage 
                    author="Gabriel"
                    date="21/02/2022"
                    content={
                        <>
                        <Mention>@Victória Tonhole</Mention>, me carrega no LoL e no COD de novo por favor?
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input>
                    <input type="text" placeholder="Conversar em #chat-livre" />
                </Input>
                <InputIcon />
            </InputWrapper>
        </Container>
    );
};

export default ChannelData;