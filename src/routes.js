import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import AssistanceDetails from './pages/AssistanceDetails';
import LocalDetails from './pages/LocalDetails';
import DeviceDetails from './pages/DeviceDetails';

const Routes = createAppContainer(
  //Cria navegação por pilha
  createStackNavigator({
    //Define as rotas da aplicação
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'fraIT',
      }
    },
    AssistanceDetails: {
      screen: AssistanceDetails,
      navigationOptions: {
        title: 'Detalhes da Assistência',
      }
    },
    LocalDetails: {
      screen: LocalDetails,
      navigationOptions: {
        title: 'Detalhes do Local',
      },
    },
    DeviceDetails: {
      screen: DeviceDetails,
      navigationOptions: {
        title: 'Detalhes do Dispositivo',
      },
    }
  }, {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#363740',
      },
      headerBackTitleVisible: false,
      headerTintColor: '#DDE2FF',
      headerTitleAlign: 'center',
    }
  })
);

export default Routes;