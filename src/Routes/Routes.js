import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from '../Screens/Login/Login.js'
import PreCadastro from '../Screens/PreCadastro/PreCadastro.js'
import Main from '../Screens/Main/Main.js'
import Menu from '../Screens/Menu/Menu.js'
import Publicar from '../Screens/Publicar/Publicar.js'
import Perfil from '../Screens/Perfil/Perfil.js'
import AprovarAluno from '../Screens/Aprovar/AprovarAluno.js'
import Pesquisar from '../Screens/Pesquisar/Pesquisar.js'

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
      PaginaPrincipal: {
        screen: Main,
        navigationOptions :{
        title : "PostApp - Compasso",
        }
      },
      Menu: {
        screen: Menu,
        navigationOptions :{
        title : "Menu",
        }
      }
      ,
      Publicar: {
        screen: Publicar,
        navigationOptions :{
        title : "Publicar",
        }
      },
      Perfil : {
        screen : Perfil,
        navigationOptions :{
          title : "Perfil",
          }
      },
      AprovarAluno : {
        screen : AprovarAluno,
        navigationOptions :{
          title : "Aprovar Aluno",
        }
      },
      Pesquisar : {
        screen : Pesquisar,
        navigationOptions :{
          title : "Pesquisar",
        }
      }
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