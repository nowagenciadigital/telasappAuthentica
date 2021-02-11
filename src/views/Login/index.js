import React from 'react';
import { Image, ScrollView } from 'react-native';
import Logo from '../../assets/img/logo.png';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { 
    Container,
    Form,
    FormInput,
    SignLink,
    SignLinkText,
    SubmitButton,
    SubmitButtonText
    } from './styles';


export default function Login({ navigation }){
    return(
        <ScrollView
            keyboardShouldPersistTaps='handled'
            contentContainerStyle={{ flex: 1 }}
        >
            <Container>
                <Image source={Logo} />
                    <Form>
                        <FormInput name="email" placeholder="E-mail"/>
                        <FormInput name="senha" placeholder="Senha"/>

                    <SubmitButton title="Entrar" onPress={() => {
                        console.log('ok');
                        navigation.navigate('Dashboard')
                    }}>
                        {/* Entrar */}
                        {/* <SubmitButtonText>Entrar</SubmitButtonText> */}
                    </SubmitButton>

                    <SignLink 
                        onPress={() =>
                            navigation.navigate('Dashboard')
                        }
                    >
                        <SignLinkText>Esqueci minha Senha</SignLinkText>
                    </SignLink>

                </Form>
            </Container>
        </ScrollView>
        
    );
}
