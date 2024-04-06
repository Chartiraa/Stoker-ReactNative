import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Link } from 'expo-router'

export default function FastButton(props) {

    return (
        <Link href={props.href} asChild>
            <Pressable>
                <View style={styles.iconWithTextContainer}>
                    <FontAwesomeIcon color='#3daf2c' style={styles.icons} icon={props.icon} size={props.iconSize} />
                    <Text style={styles.fastButtonText}>{props.title}</Text>
                </View>
            </Pressable>
        </Link>
    )
}

const styles = StyleSheet.create({
    icons: {
        color: 'white',
    },
    fastButtonText: {
        textAlign: 'center',
        color: '#000',
    },
    iconWithTextContainer: {
        alignItems: 'center',
        padding: 20,
        borderRadius: 15,
        borderColor: 'black',
        borderWidth: 2,
    },
});