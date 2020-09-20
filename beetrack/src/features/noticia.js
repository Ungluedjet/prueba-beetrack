import React, { useEffect } from 'react';
import { Container, Content, Text } from 'native-base';

export default function Noticia({navigation, route}) {
    useEffect(() => {
        console.log(route.params.item);
        console.log(navigation);
    },[])

    return (
        <Container>
            <Content>
                <Text>{route.params.item.title}</Text>
            </Content>
        </Container>
    );
}