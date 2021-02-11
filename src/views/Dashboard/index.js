import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Image, ScrollView } from 'react-native';
import Logo from '../../assets/img/logo.png';

import {
  Header,
  Menu,
  LogoImg, 
  Container, 
  ContainerCard, 
  IndicatorButton, 
  PremiumButton, 
  DashButtons, 
  Items,
  ItemAssessorias,
  ItemCursos,
  TextAssessorias,
  TextCursos,
  Title, 
  SubTitle 
} from './styles';

import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Dashboard({ navigation }){
    return(
        <>
        <Header>
          <Image style={{ height: 85,
            width: 118}} source={Logo} />
        </Header>
        <Container>
        {/* <ContainerCard> */}
          {/* <CardView
            cardElevation={5}
            cardMaxElevation={5}
            cornerRadius={5}
          > */}
              <Title>Olá Priscila,</Title>
              <SubTitle>Escolha o serviço desejado abaixo.</SubTitle>
          {/* </CardView> */}
        {/* </ContainerCard> */}

        <Items>
            <ItemAssessorias onPress={() => navigation.navigate('Assessorias')}>
                <TextAssessorias>Assessorias Online</TextAssessorias>
              
            </ItemAssessorias>

            <ItemCursos onPress={() => navigation.navigate('Cursos')}>
              <TextCursos>Meus Cursos</TextCursos>
          </ItemCursos>
        </Items>
      </Container>
    </>
    );
}
