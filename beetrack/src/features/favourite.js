import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { Container, Header, Content, Text, Left, Right, List, ListItem  } from 'native-base';
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
                    <ListItem>
                        <Left>
                            <Text 
                                left
                                style={(width=10)}
                                onPress={()=>navigation.navigate('Noticia', {item : value})}>
                                {value.title}
                            </Text>
                        </Left>
                    </ListItem>
                ];
            })  
        );
    }

    return (
        <Container>
            <Content>
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