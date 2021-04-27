import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FoodR from './FoodR';

export default class Controllers extends Component {
  //const p = data.price;
  constructor(props){
    super(props);
    this.state = {
      price: this.props.total,
      value: 1,
      original: this.props.total,
    }
    let totalQuantity= 0;
    let totalPrice = 0;
  }

  add = () =>{
    let newValue = this.state.value + 1;
    let newPrice = parseFloat((this.state.original * newValue).toFixed(2));
    this.setState({
      value: newValue,
      price: newPrice,
     
    });
   
  }

  sub = () => {
    if(this.state.value === 1) return;
    let newValue = this.state.value - 1;
    let newPrice = parseFloat((this.state.original * newValue).toFixed(2));
    this.setState({
      value: newValue,
      price: newPrice,
    });
  }

  render(){


    const { price, value,original } = this.state;


    
    // totalQuantity += this.state.value;
    // totalPrice += this.state.value * original;
    // console.log("totalQuantity " + totalQuantity + "totalPrice " + totalPrice)
    return(
      <View style={styles.titleSection}>
        <View>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.price} className="price">{price} DH</Text>
        </View>
        <View style={styles.box}>
          {/* -1 */}
          <TouchableOpacity style={styles.button} onPress={() => this.sub()}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          {/* value */}
          <Text style={styles.value}>{value}</Text>
          {/* +1 */}
          <TouchableOpacity style={styles.button} onPress={() => this.add()}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleSection: {
    margin:5,
    width:100,
    textAlign:'center',
    marginLeft:8
  },
  title: {
    fontSize: 20,
    color: '#459D72',
  },
  price: {
    fontSize: 16,
  },
  box: {
    width: 76,
    marginTop: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 25,
    height: 20,
    backgroundColor: '#459D72',
    alignItems: 'center',
    borderRadius: 2,
  },
  buttonText: {
    color: 'white',
  },
  value: {
    marginLeft: 10,
    marginRight: 10,
  },
});