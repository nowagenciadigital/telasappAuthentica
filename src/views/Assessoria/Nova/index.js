import React, {useRef, useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Icon from 'react-native-ico-material-design';
// import Background from '../../components/Background';
import { Image, ScrollView, Link } from 'react-native';
import Logo from '../../../assets/img/logo.png';

import {
    Container, 
    Header,
    Title, 
    Label,
    Form, 
    FormInput, 
    TextInput, 
    SubmitButton,
    SubmitButtonText,
    AudioButton, 
    AudioButtonText,
    AnexoButton, 
    AnexoButtonText,
    Menu,
    PickerF,
} from './styles';


export default function Nova({ navigation }) {
  const [recommendation_type, setSelectedValue] = useState("Fiscal");
  
  function handleSubmit(){
    // navigation.navigate('Dashboard')
  }

  return (
    <>
        <Header>
          <Menu onPress={() => navigation.navigate('Dashboard')}>
            <Icon name="home" size={28} color="#dfb01c"/>
          </Menu>
          <Title>Nova Assessoria Online</Title>
          <Menu onPress={() => navigation.navigate('Profile')}>
            <Icon name="person" size={28} color="#dfb01c"/>
          </Menu>
        </Header>

        <Container>
        <Form>
          {/* <Label>De</Label> */}
          <FormInput
            // icon="person-outline"
            // autoCorrect={false}
            // autoCapitalize="none"
            placeholder="De"
            // ref={nameRef}
            returnKeyType="next"
            //  onSubmitEditing={() => phoneRef.current.focus()}
             value=""
            //  onChangeText={setName}
          />
         
           <FormInput
                // icon="person-outline"
                // autoCorrect={false}
                // autoCapitalize="none"
                placeholder="Assunto"
                // ref={nameRef}
                // returnKeyType="next"
                // onSubmitEditing={() => phoneRef.current.focus()}
                value=""
                //  onChangeText={setName}
            />
            <TextInput
                // icon="insert-comment"
                // autoCapitalize="none"
                placeholder="Mensagem"
                // ref={obsRef}
                // style={{ height: 120}}
                // value={obs}
                // onChangeText={setObs}
                // returnKeyType="send"
            />

            <AudioButton onPress={
              console.log('Audio')
              }
              >
                <AudioButtonText>
                  <Icon name="mic" color="#333"/>
                  Áudio
                </AudioButtonText>
                {/* <Icon */}
            </AudioButton>
              
            <AnexoButton>
                <AnexoButtonText>
                  <Icon name="attachment" fontSize="40" color="#333"/>
                    Incluir Anexo
                </AnexoButtonText>
            </AnexoButton>

          <SubmitButton onPress={handleSubmit}>
            <SubmitButtonText>Enviar</SubmitButtonText>
          </SubmitButton>
        </Form>
      </Container>
    </>
  );
}