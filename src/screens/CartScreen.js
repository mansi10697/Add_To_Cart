import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import styles from '../CSS/styles';
import { addToCart, removeFromCart } from '../Redux/Actions';

class CartScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            wholeData: [],
        }
    }

    componentDidMount() {
        this.setState({
            wholeData: Array.from(new Set(this.props.cartDataFromStore))
        })
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({
            wholeData: Array.from(new Set((nextProps.cartDataFromStore)))
        })
    }

    onPressDescCounter = (item, i) => {
        if (item.counterValue == 1) {
            const newArray = [...this.state.wholeData];
            newArray[i].countPress = false;
            newArray[i].qty = item.qty + 1
            this.setState({
                wholeData: newArray,
            })
            this.props.removeFromCart(item)
            return
        } else {
            const newArray = [...this.state.wholeData];
            newArray[i].qty = item.qty + 1;
            newArray[i].counterValue = item.counterValue - 1
            this.setState({
                wholeData: newArray,
            })
            this.props.removeFromCart(item)
        }
    }

    onPressIncCounter = (item, i) => {
        if (item.qty == 0) {
            return
        } else {
            const newArray = [...this.state.wholeData];
            newArray[i].qty = item.qty - 1;
            newArray[i].counterValue = item.counterValue + 1
            this.setState({
                wholeData: newArray,
            })
            this.props.addToCart(item)
        }
    }

    render() {
        return (
            this.props.cartLength == 0
                ?
                <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                    <Text style={styles.detailsText}>Opps.. There is no item</Text>
                </View>
                :
                <View style={styles.container}>

                    <View style={styles.forCartPriceView}>
                        <Text style={styles.cartDetailsStyle}>{this.props.cartLength} ITEMS</Text>
                        <Text style={styles.cartDetailsStyle}>{this.props.totalAmount} ₹</Text>
                    </View>

                    <FlatList
                        data={this.state.wholeData}
                        style={styles.flatListStyle}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item, index }) =>

                            <View style={styles.dataRowView}>
                                <Text style={styles.labelText}>Item : <Text style={styles.detailsText}>{item.name}</Text></Text>
                                <Text style={styles.labelText}>Price : <Text style={styles.detailsText}>{item.price}</Text></Text>
                                <Text style={styles.labelText}>Quanity : <Text style={styles.detailsText}>{item.qty}</Text></Text>

                                {/* Custome Add Button  */}

                                <View style={styles.addButtonView}>
                                    {item.countPress == false
                                        ?
                                        <TouchableOpacity onPress={() => this.onPressCounter(item, index)}>
                                            <View style={styles.addButtonStyle}>
                                                <Text style={styles.addLabelStyle}>Add</Text>
                                            </View>
                                        </TouchableOpacity>
                                        :
                                        <View style={styles.counterCustomeRowStyle}>
                                            <View style={styles.RightMarginView}>
                                                <TouchableOpacity
                                                    onPress={() => this.onPressDescCounter(item, index)}
                                                    style={styles.counterButtonView}>
                                                    <Text style={styles.counterDigitStyle}>-</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <View>
                                                <Text style={styles.counterDigitStyle}>{item.counterValue}</Text>
                                            </View>
                                            <View style={styles.LeftMarginView}>
                                                <TouchableOpacity
                                                    onPress={() => this.onPressIncCounter(item, index)}
                                                    style={styles.counterButtonView}>
                                                    <Text style={styles.counterDigitStyle}>+</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    }
                                </View>
                            </View>
                        } />
                </View>
        );
    }
};

const mapStateToProps = (state) => {
    console.log('All Data are ::: ', state)
    const cartLength = (state.saveDataToCart.cart).length
    const cartDataFromStore = state.saveDataToCart.cart
    const totalAmount = state.saveDataToCart.total
    return { cartLength, cartDataFromStore, totalAmount };
};

export default connect(mapStateToProps, { addToCart, removeFromCart })(CartScreen);