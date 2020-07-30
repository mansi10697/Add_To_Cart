import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import styles from '../CSS/styles';
import DataList from '../AllDataList/DataList'
import { connect } from 'react-redux';
import { fetchAllData, addToCart, removeFromCart } from '../Redux/Actions';

class MenuItemScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            wholeData: [],
        }
    }

    componentDidMount() {
        this.props.fetchAllData()
        this.setState({
            wholeData: DataList
        })
        console.log('FEtchData Action')
    }

    onPressCounter = (item, i) => {
        if (this.state.wholeData[i].countPress == false) {
            const newArray = [...this.state.wholeData];
            newArray[i].countPress = true;
            newArray[i].qty = item.qty - 1;
            this.setState({
                wholeData: newArray,
            })
            this.props.addToCart(item);
        } else {
            const newArray = [...this.state.wholeData];
            newArray[i].countPress = false;
            newArray[i].qty = item.qty
            this.setState({
                wholeData: newArray,
            })
        }
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
            <View style={styles.container}>

                {/* Cart Iamge with Count */}

                <View style={styles.cartCountView}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('CartScreen')}>
                        <Image source={require('../images/cart.png')}
                            style={styles.cartImageStyle} />
                        <View style={styles.cartCountInGreenView}>
                            <Text style={styles.cartCountLengthText}>{this.props.cartLength}</Text>
                        </View>
                    </TouchableOpacity>
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
}

const mapStateToProps = (state) => {
    console.log('All Data are ::: ', state)
    const remainQty = state.saveDataToCart.qty;
    const cartLength = (state.saveDataToCart.cart).length
    return { remainQty, cartLength };
};

export default connect(mapStateToProps, { fetchAllData, addToCart, removeFromCart })(MenuItemScreen);