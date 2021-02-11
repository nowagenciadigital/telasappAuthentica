import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Image, ScrollView, Link } from 'react-native';
import AvatarLogo from '../../../assets/img/avatar-logo.png';

import {
    Container, 
    Checkboxcontainer,
    Checkbox,
    LabelCheckbox,
    Header,
    Title, 
    Label,
    Departament,
    TextDepartament,
    Form, 
    FormInput, 
    TextInput, 
    AudioButton, 
    AudioButtonText,
    AnexoButton, 
    AnexoButtonText,
    Menu,
    Left,
    Right,
    Detail,
    Date,
    Question,
    LabelDetail,
    TitleQuestion,
    TextQuestion,
    Return,
    ReturnT,
    Avatar,
    Hr,
    SubmitButton,
} from './styles';


export default function DetailAssessoria({ navigation }) {
  function handleSubmit(){
    // navigation.navigate('Dashboard')
  }

  return (
    <>
      <Header>
        <Menu onPress={() => navigation.navigate('Dashboard')}>
          <Icon name="home" size={28} color="#dfb01c"/>
        </Menu>
        <Title>Minha assessoria</Title>
        <Menu onPress={() => navigation.navigate('Profile')}>
          <Icon name="person" size={28} color="#dfb01c"/>
        </Menu>
      </Header>

      <ScrollView>
        <Container>
          {/* <Label>De</Label> */}
          <Departament>
          <TextDepartament>
              DEPARTAMENTO: Trabalhista 
          </TextDepartament>
          </Departament>
          <Detail>
              <Question>

                  <Left>
                    <Date>
                        30 Jan 2021 - 17:33
                    </Date>
                    <TitleQuestion>
                         Assessoria Online de Tributo Trabalhista...
                    </TitleQuestion>
                    <TextQuestion>
                      Olá, como saber um tributo trabalhista através da internet?
                    </TextQuestion>
                    </Left>

                  
                  <Right>
                      <Return>
                        <Avatar source={AvatarLogo} />
                      </Return>
                      <ReturnT>
                          <Date>
                              31 Jan 2021 - 14:52
                            </Date>
                            <TextQuestion>
                                  Sua resposta aqui!
                              </TextQuestion>
                      </ReturnT>      
                  </Right>
              </Question>
          </Detail>
          <Form>
            <TextInput
                // icon="insert-comment"
                // autoCapitalize="none"
                placeholder="Digite aqui sua resposta"
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
                  Enviar Áudio
                </AudioButtonText>
                <Icon name="mic" size={25} color="#333"/>
            </AudioButton>
              
            <AnexoButton>
                <AnexoButtonText>
                    Incluir Anexo
                    <Icon name="attachment" size={25} color="#333"/>

                </AnexoButtonText>
            </AnexoButton>

          <Checkboxcontainer>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
            />
            <LabelCheckbox>
              Encerrar Assessoria
            </LabelCheckbox>
          </Checkboxcontainer>

          <SubmitButton onPress={handleSubmit}>
              Enviar
          </SubmitButton>
        </Form>
      </Container>
    </ScrollView>
    </>
  );
}