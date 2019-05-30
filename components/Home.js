import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import axios from 'axios';

export default class HomeScreen extends React.Component {
    state = {
      persons: '',
        //user: ''
    };

    componentDidMount(): void {
       this.getPost();
    }

getPost = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            //console.log("response", response);
            this.setState({persons: response.data});
        })
}

NavigateToUsers(obj){
        console.log("obj", obj);
       this.props.navigation.navigate('Users', obj);
}

    renderRow = ( {item }) => {
        return(
            <TouchableOpacity
                onPress={() => this.NavigateToUsers(item)}>
                <Text style={styles.FlatListItemStyle}> {item.body} </Text>
            </TouchableOpacity>
        )
    };

    render() {
        let { persons , user } = this.state;
        console.log("persons", this.state.persons);

        return (
            <FlatList
                data={ this.state.persons }
                ItemSeparatorComponent = {this.FlatListItemSeparator}
                renderItem={this.renderRow}
                keyExtractor={(item, index) => index}
            />

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        borderTopWidth: 5,
        borderColor: '#f1f1f1',
        backgroundColor: '#f5f6f7',

    },

    innerview: {
        height: 204,
        width: 176,
        backgroundColor: '#fff',
        borderColor: '#f1f1f1',
        borderWidth: 0.5,
        paddingLeft: 5,
        paddingVertical: 10,
        borderRightWidth: 5,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },

    outerview: {
        height: 204,
        width: 176,
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#f1f1f1',
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 0.5,
        borderLeftWidth: 5,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },

    textinner: {
        paddingBottom: 10,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    FlatListItemStyle: {
        padding: 10,
        fontSize: 12,
        height: 50,
        borderWidth: 0.5,
        borderRightColor: 'grey',
        borderRightWidth: 1
    },


});