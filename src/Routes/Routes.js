import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from '../Screens/Login/Login.js'
import PreCadastro from '../Screens/PreCadastro/PreCadastro.js'

const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },
    PreCadastro : {
        screen: PreCadastro,
        navigationOptions: {
            title: 'Cadastro perfil',
            headerStyle: {
              backgroundColor: "rgb(47,50,54)",
              shadowOffset: { width: 5, height: 5 },
              shadowColor: "red",
              shadowOpacity: 0.5,
              shadowRadius: 10,
              elevation: 4
            }
        },
      },
  },{
    defaultNavigationOptions: {
      headerTintColor: '#FFF',
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: "rgb(47,50,54)",
      },
    },
  })
);

export default Routes;