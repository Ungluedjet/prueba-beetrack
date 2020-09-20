import React, {useState, useEffect} from 'react';
import { Button } from 'react-native'
import { connect } from 'react-redux';
import { Container, Header, Content, Text, List, ListItem } from 'native-base';
import Proptypes from 'prop-types';
import axios from 'axios';
import apiUrl from '../const/const';
import { guardarNoticias } from './../actions/actions';

const propTypes = {
    navigation: Proptypes.shape({
        navigate: Proptypes.func,
    }).isRequired,
};

function Home({navigation, guardarNoticias, state}) {
    useEffect(() => {
        try{
        axios.get(apiUrl)
            .then(res => {
                guardarNoticias(res.data.articles);
            })
        } catch (e) {
            console.log(e);
        } 
    },[])

    const renderItem = () => {
        return (
            state.map((value) => {
                return[
                    <ListItem>
                        <Text onPress={()=>navigation.navigate('Noticia', {item : value})}>
                            {value.title}
                        </Text>
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
    guardarNoticias: (lista) => dispatch(guardarNoticias(lista))
})

Home.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Home);