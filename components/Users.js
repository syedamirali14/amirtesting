import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import axios from 'axios';

export default class Users extends React.Component {
    state = {
        users: [],
        user: ''
    };


    // async componentDidMount() {
    //     const id = this.props.match.params.id
    //     const data = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    //     this.setState({todoItem: data})
    // }


    //  componentDidMount() {
    //     const id = this.props.match.params.id
    //     const {data} =  axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    //     this.setState({users: data})
    // }

    componentDidMount(): void {
        this.getUserPost();
    }

    getUserPost = () => {
        let  { userId } = this.props.navigation.state.params
       console.log("URL", `https://jsonplaceholder.typicode.com/users/${userId}`)
       // console.log("test", 'https://jsonplaceholder.typicode.com/users/1');
      //  axios.get('https://jsonplaceholder.typicode.com/users/1')
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
       //  axios.get(`https://jsonplaceholder.typicode.com/users`, {
       //      params: {
       //          userId: 1
       //      }
       //  })
            .then(response => {
                console.log("User response", response);
                this.setState({user: response.data});
            })
            .catch(err => console.log(err))
    }


    renderUserRow = ({ item  }) => {
        return(
            <View style={{ marginHorizontal: 10, marginVertical: 10}}>
                <Text style={styles.FlatListItemStyle1}> </Text>
            </View>
        )
    };

    render() {
        let { user, users, todoItems, todoItem } = this.state;
       console.log("user", this.state.user);

        return (
            <FlatList
                data={ this.state.user }
                ItemSeparatorComponent = {this.FlatListItemSeparator}
                renderItem={this.renderUserRow}
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
    FlatListItemStyle1: {
        padding: 10,
        fontSize: 12,
        minHeight: 50,
        borderWidth: 0.5,
        borderRightColor: 'grey',
        borderRightWidth: 1
    },


});