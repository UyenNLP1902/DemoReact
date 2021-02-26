import React, {Component} from 'react';
import renderIf from './renderIf';
import {
            AppRegistry,
            Button,
            StyleSheet,
            Text,
			PermissionsAndroid,
			TextInput,
			ToastAndroid,
            View
		} from 'react-native';
import userList from './../data/myData.json';

// Detail Screen
class DetailActivity extends React.Component {  
	constructor(props) {
		super(props);
		
		this.state = {
			id: props.navigation.getParam('item') != null ? props.navigation.getParam('item').id :'tmp_id',
			name: props.navigation.getParam('item') != null ? props.navigation.getParam('item').name :'tmp_name',
			age: props.navigation.getParam('item') != null ? props.navigation.getParam('item').age : 'tmp_age',
			state : props.navigation.getParam('user')
		}
	}
	
	
	addData(data) {
		for (let object of userList) {
			if (data.id == object.id) {
				ToastAndroid.show('Fail', 1000);
				return false;
			}

		}
		ToastAndroid.show('Success', 1000);
		userList.push(data);
		return true;
	}
	
	updateData(data) {
		for (let object of userList) {
			if (data.id == object.id) {
				object.name = data.name;
				object.age = data.age;
				ToastAndroid.show('Success', 1000);
				return true;
			}

		}
		ToastAndroid.show('Fail', 1000);
		return false;
	}
	
	deleteData(data) {
		for (let i = 0; i < userList.length; i++) {
			if (data.id == userList[i].id) {
				userList.splice(i, 1);
				ToastAndroid.show('Success', 1000);
				return true;
			}
		}
		ToastAndroid.show('Fail', 1000);
		return false;
	}
	
    render() {  
		var item = this.props.navigation.getParam('item');
		
        return (  
            <View> 
                <Text style={styles.title}>Profile Screen</Text>  
				
				<Text style={styles.item}>ID:</Text>
				<TextInput
					placeholder='Input your ID'
					editable={item != null ? false : true}
					defaultValue={item != null ? item.id + '' : ''}
					onChangeText={(id) => this.setState({id})}
				/>
				
				<Text style={styles.item}>Name:</Text>
				<TextInput
					placeholder='Input your name'
					defaultValue={item != null ? item.name + '' : ''}
					onChangeText={(name) => this.setState({name})}
				/>
				
				<Text style={styles.item}>Age:</Text>
				<TextInput
					placeholder='Input your age'
					defaultValue={item != null ? item.age + '' : ''}
					onChangeText={(age) => this.setState({age})}
					keyboardType='number-pad'
				/>
				
				{renderIf(item == null)(
					<Button title = 'ADD'
						onPress={() => { this.addData({'id': this.state.id, 'name': this.state.name, 'age': this.state.age}, userList) }}
					/>
				)}
				
				{renderIf(item != null)(
					<>
						<Button title = 'UPDATE'
							onPress={() => { this.updateData({'id': this.state.id, 'name': this.state.name, 'age': this.state.age}) }}
						/>
						<Button title = 'DELETE'
							onPress={() => { 
								this.deleteData({'id': this.state.id, 'name': this.state.name, 'age': this.state.age}); 
								this.props.navigation.navigate('Home', { 'list': userList })
							}}
						/>
					</>
				)}
				
				<Button style={styles}
                    title = 'RETURN'
                    onPress = {() => this.props.navigation.navigate('Home', { 'list': userList })}/>
            </View>  
		);  
    }  
}  

/** CSS **/
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
		alignItems: 'center',
		justifyContent:'center'
    },
    title: {
        fontSize: 20,	
		color: 'blue',
		fontWeight: 'bold',
        textAlign: 'center',
        margin: 10
    },
	item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

export default DetailActivity;
  