import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import Background from '../../components/Background';
import { Image, View, ScrollView, FlatList } from 'react-native';
// import Logo from '../../../assets/img/logo.png';

import {
    Main,
    Header,
    Menu,
    Container, 
    Title,
    Item,
    Description,
    One,
    Date,
    Status,
    Two,
    Float,
    TitleCard,
    TextStatus,
    Departament,
    LinkDetail,
    LinkDetailText,
    ButtonFloat
} from './styles';

// import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

export default function Assessorias({ navigation }) {

  const [items, setItem] = useState([
    { id: "00", date: "15 de dez 2020", status: "nova", title: "Dúvidas sobre tributo trabalhista...", category: "Trabalhista" },
    { id: "01", date: "03 de out 2020", status: "nova", title: "Dúvidas sobre tributo trabalhista...", category: "Fiscal" },
    { id: "02", date: "12 de ago 2020", status: "nova", title: "Dúvidas sobre tributo trabalhista...", category: "Fiscal" },
    { id: "03", date: "24 de jun 2020", status: "nova", title: "Dúvidas sobre tributo trabalhista...", category: "Contábil" },
    { id: "04", date: "30 de mai 2020", status: "nova", title: "Dúvidas sobre tributo trabalhista...", category: "Fiscal" },
  ]
)
  // function handleSubmit(){
  //   navigation.navigate('Dashboard')
  // }
  
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //       data: [
    
  //       ],
  //     }
  //   }

  
  // render(){
    return (
      <Main>
        <Header>
          <Menu onPress={() => navigation.navigate('Dashboard')}>
            <Icon name="home" size={28} color="#dfb01c"/>
          </Menu>
          <Title>Minhas Assessorias</Title>
          <Menu onPress={() => navigation.navigate('Profile')}>
            <Icon name="person" size={28} color="#dfb01c"/>
          </Menu>
      </Header>
      
      <ScrollView>
        <Container>
          <FlatList />
            {items.map(item => (
            <Item key={item.id}>
            <One>
              <Date>
                {item.date}  
              </Date>
              <Status>
                <TextStatus>
                  {item.status}
                </TextStatus>
              </Status>
            </One>
            <Two>
              <TitleCard>
                {item.title}
              </TitleCard>  
              <Departament>
                DEPARTAMENTO: {item.category}
              </Departament>
              <LinkDetail onPress={() => navigation.navigate('DetalhesAssessoria')}>
                  <LinkDetailText>Ver mais</LinkDetailText>
              </LinkDetail>
            </Two>
          </Item>
          ))}
        </Container>
        </ScrollView>        

        <Float>
          <ButtonFloat onPress={() => navigation.navigate('NovaAssessoria')}>
              <Icon name="add" size={28} color="#ffff"/>
          </ButtonFloat>
        </Float>
    </Main>
    )
  
};
