import React from 'react';
import { connect } from 'react-redux';
import { Container, Content, Text, Left, List, ListItem, Card, CardItem, Header  } from 'native-base';
import Proptypes from 'prop-types';

const propTypes = {
    navigation: Proptypes.shape({
        navigate: Proptypes.func,
    }).isRequired,
};

function Favourite({state}) {

    const renderItem = () => {
        return (
            state.agregarFavoritos.map((value) => {
                return[
                    <Card>
                        <CardItem style={{ backgroundColor: '#28C1FF'}}>
                            <Left>
                                {console.log(value)}
                                <Text 
                                    left
                                    style={(width=10)}>
                                    {value.title}
                                </Text>
                            </Left>
                        </CardItem>
                    </Card>
                ];
            })  
        );
    }

    return (
        <Container>
            <Content style={{ backgroundColor: '#52D8FC'}}>
                <List>
                   {renderItem()}
                </List>
            </Content>
        </Container>
    );
}


const mapStateToProps = state => {
    return { state };
};

const mapDispatchToProps = dispatch => ({
    agregarFavoritos: (value) => dispatch(agregarFavoritos(value)),
})

Favourite.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Favourite);