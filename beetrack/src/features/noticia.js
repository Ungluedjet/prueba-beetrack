import React, { useEffect } from 'react';
import { Container, Content, Text, Card, CardItem } from 'native-base';

export default function Noticia({navigation, route}) {
    return (
        <Container>
            <Content style={{ backgroundColor: '#52D8FC'}}>
                <Card>
                    {console.log(route.params.item)}
                    <CardItem style={{ backgroundColor: '#28C1FF'}}>
                        <Text>description: {route.params.item.description}</Text>
                    </CardItem>
                    <CardItem style={{ backgroundColor: '#28C1FF'}}>
                        <Text>content: {route.params.item.content}</Text>                        
                    </CardItem>
                    <CardItem style={{ backgroundColor: '#28C1FF'}}>
                        <Text>source: {route.params.item.source.name}</Text>                        
                    </CardItem>
                </Card>
            </Content>
        </Container>
    );
}