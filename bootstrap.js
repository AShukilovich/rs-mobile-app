import * as Font from 'expo-font';

export async function bootstrap() {
	await Font.loadAsync({
		'Exo2-Light': require('./assets/fonts/Exo_2/Exo2-Light.ttf'),
		'Exo2-Regular': require('./assets/fonts/Exo_2/Exo2-Regular.ttf'),
		'Exo2-Medium': require('./assets/fonts/Exo_2/Exo2-Medium.ttf'),
		'Exo2-Semibold': require('./assets/fonts/Exo_2/Exo2-SemiBold.ttf'),
		'OpenSans-Regular': require('./assets/fonts/Open_Sans/OpenSans-Regular.ttf'),
		'OpenSans-Semibold': require('./assets/fonts/Open_Sans/OpenSans-SemiBold.ttf'),
		'OpenSans-Bold': require('./assets/fonts/Open_Sans/OpenSans-Bold.ttf'),
	});
}