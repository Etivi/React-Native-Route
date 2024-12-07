
import { Link, Redirect } from 'expo-router';

const App = () => {
    return (

        <Redirect href="/movies" />

        // <View>
        //     <Text className='text-3xl font-work-black text-primary'>Hello, world!</Text>
        //     <Text className='text-2xl font-work-bedium text-secondary-100'>Hello, world!</Text>
        //     <Text className='text-xxl font-work-light text-tertiary'>Hello, world!</Text>
        //     <Link href="./products">Products</Link>
        // </View>
    );
}


export default App;
