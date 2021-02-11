import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { 
    Header,
    Menu,
    Title,
    Container,
    CardD, 
    TitleCard, 
    SubmitButton,
    SubmitButtonText
} from './styles';


export default function Cursos({ navigation }){
    function handleSubmit(){
        navigation.navigate('Dashboard')
    }

    return(
        <>
        <Header>
            <Menu onPress={() => navigation.navigate('Dashboard')}>
            <Icon name="home" size={28} color="#dfb01c"/>
            </Menu>
            <Title>Meus Cursos</Title>
            <Menu onPress={() => navigation.navigate('Profile')}>
            <Icon name="person" size={28} color="#dfb01c"/>
            </Menu>
        </Header>
            <Container>
                <CardD>
                    <TitleCard>
                        Ops, você não possui cursos ativos no momento.
                    </TitleCard>
                </CardD>
                
                <SubmitButton onPress={handleSubmit}>
                    <SubmitButtonText>
                        Voltar para Home
                    </SubmitButtonText>
                </SubmitButton>
            </Container>
        </>
    );
}