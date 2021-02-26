import React, {Component} from 'react';
import {
            AppRegistry,
            Button,
            FlatList,
            StyleSheet,
            Text,
            View} from 'react-native';
import userList from './../data/myData.json';

// Main screen
class MainActivity extends React.Component {  
	constructor(props) {
		super(props);
	}
	
	renderSeparator = () => {  
        return (  
            <View style={styles.seperator}/>  
        );  
    };
	
    render() {
		var tmplist = this.props.navigation.getParam('list');
		var list = this.props.navigation.getParam('list') == null ? userList : this.props.navigation.getParam('list');
		
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Demo CRUD React</Text>
                <FlatList
                    data={list}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) =>
                        <Text style={styles.item}
							onPress={() => this.props.navigation.navigate('Detail', { 'item': item })}>
								ID: {item.id}, Name: {item.name}, Age: {item.age}
							</Text>
                    }
                    keyExtractor={(item, index) => index.toString()}
					
					ItemSeparatorComponent={this.renderSeparator}
                />
				
                <Button style={styles.buttonAdd}
                    title = 'ADD'
                    onPress = {() => this.props.navigation.navigate('Detail')}/>
            </View>


        );
    }
}  
AppRegistry.registerComponent('DemoCrud', () => FlatListBasics);


/** CSS **/
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    item: {
        padding: 10,
        fontSize: 15,
        height: 44,
    },
    title: {
        fontSize: 20,	
		color: 'blue',
		fontWeight: 'bold',
        textAlign: 'center',
        margin: 10
    },
    buttonAdd: {
        backgroundColor: "red"
    },
	seperator: {
		height: 1,  
		width: '100%',  
		backgroundColor: '#000',
	}
});

export default MainActivity;