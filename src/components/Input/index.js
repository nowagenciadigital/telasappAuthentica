import React from 'react';
import PropTypes from 'prop-types';
// import Icon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, InputText } from './styles';


export default function Input({ style, icon, ... rest }){
    return(
        <Container style={style}>
            {icon && <Icon name={icon} size={20} color="#999"/>}
            <InputText 
                keyboardAppearance="dark"
                {... rest} 
            />
      </Container>
    );
}

Input.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Input.defaultProps = {
  style: {},
};

// export default forwardRef(Input);
