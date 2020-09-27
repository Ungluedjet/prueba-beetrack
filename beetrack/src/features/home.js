import React, {useState, useEffect} from 'react';
import { Button, Alert } from 'react-native'
import { connect } from 'react-redux';
import { Container, Content, Text, List, ListItem, Input, DatePicker, Right, Left, Card, CardItem} from 'native-base';
import Proptypes from 'prop-types';
import axios from 'axios';
import { apiUrl, url, amazonUrlAdd, amazonUrlAll } from '../const/const';
import { guardarNoticias, agregarFavoritos } from './../actions/actions';
import moment from 'moment';

const propTypes = {
    navigation: Proptypes.shape({
        navigate: Proptypes.func,
    }).isRequired,
};

function Home({navigation, guardarNoticias, agregarFavoritos ,state}) {
    const[pais, setPais] = useState('');
    const[termino, setTermino] = useState('');
    const[fechaFrom, setFechaFrom] = useState('');
    const[fechaTo, setFechaTo] = useState('');
    useEffect(() => {
        try{
        axios.get(apiUrl)
            .then(res => {
                guardarNoticias(res.data.articles);
            })

        axios.get(amazonUrlAll)
            .then(res => {
                agregarFavoritos(res.data.article);
            })
        } catch (e) {
            console.log(e);
        } 
    },[])

    const callApi = () => {
        if (!pais || !termino || !fechaFrom || !fechaTo) {
            Alert.alert(
                'Verifique que los datos ingresados son validos.',
                [
                  {
                    text: 'Ok',
                  },
                ],
                { cancelable: false }
            );
        } else {
            try {
                axios.get(url + 'country=' + pais + '&q=' + termino + '&from=' + fechaFrom + '&to=' + fechaTo + '&apiKey=576bfc69ae6e4995b8e695f9bbbed374')
                .then(res => {
                    guardarNoticias(res.data.articles);
                })
            }catch(e) {
                console.log(e);
            }
        }
    }

    const addFavoritos = (value) => {
        let id = (Math.random() * 10000000 | 0)
        try{
        axios.post(amazonUrlAdd, {
            id,
            title: value.title,
            author: value.author,
            description: value.description,
            url: value.url,
            urltoimage: value.urlToImage,
            publishedat: value.publishedAt,
            content: value.content,
            sourceid: value.source.id,
            sourcename: value.source.name
        }).then(res => {
                agregarFavoritos(res.data.article);
            })
        } catch (e) {
            console.log(e);
        }
    }

    const renderItem = () => {
        return (
            state.guardarNoticias.map((value) => {
                return[
                    <Card>
                        <CardItem style={{ backgroundColor: '#28C1FF'}}>
                            <Left>
                                <Text 
                                    left
                                    style={(width=10)}
                                    onPress={()=>navigation.navigate('Noticia', {item : value})}>
                                    {value.title}
                                </Text>
                            </Left>
                            <Right>
                                <Button title={'*'} onPress={()=>addFavoritos(value)}/>
                            </Right>
                        </CardItem>
                    </Card>
                ];
            })  
        );
    }

    const guardarFechaFrom = (value) => {
        let fecha = setFormat(value);
        setFechaFrom(fecha);
    }

    const guardarFechaTo = (value) => {
        let fecha = setFormat(value);
        setFechaTo(fecha);
    }

    const setFormat = (value) => {
        return moment(value).format('YYYY-MM-DD');
    }

    return (
        <Container>
            <Content style={{ backgroundColor: '#52D8FC'}}> 
                <Input 
                    placeholder={'ingrese el termino'}
                    value={termino}
                    onChangeText={(value)=>setTermino(value)}/>
                <Input 
                    placeholder={'ingrese el pais'}
                    maxLength={2}
                    value={pais}
                    onChangeText={(value)=>{setPais(value)}}
                    />
                <DatePicker 
                    formatChosenDate={date => {return moment(date).format('YYYY-MM-DD');}}
                    onDateChange={(date) => guardarFechaFrom(date)}/>
                <DatePicker 
                    formatChosenDate={date => {return moment(date).format('YYYY-MM-DD');}}
                    onDateChange={(date) => guardarFechaTo(date)}/>
                <Button title={'Filtrar'} onPress={()=>callApi()}/> 
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
    guardarNoticias: (lista) => dispatch(guardarNoticias(lista)),
    agregarFavoritos: (lista) => dispatch(agregarFavoritos(lista)),
})

Home.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Home);