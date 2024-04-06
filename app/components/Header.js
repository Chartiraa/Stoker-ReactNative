import { View, StyleSheet, Image, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


export default function Header() {

    return (
        <View>

            <Pressable>
                <FontAwesomeIcon style={styles.SideMenuIcon} icon={faBars} size={30} />
            </Pressable>
            <Image source={require('../assets/Yazı.png')} style={styles.Logo}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    Logo: {
        width: 150,
        height: 50,
        left: 115,
        resizeMode: 'contain',
        marginTop: -42
    },
    SideMenuIcon: {
        marginLeft: 20,
        marginTop: 45,
        color: 'orange'
    },
    container: {
        backgroundColor: '#ebebeb',
        height: '100%',
    }
});
