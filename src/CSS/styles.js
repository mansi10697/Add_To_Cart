import { Dimensions } from 'react-native';

export default {
    container: {
        flex: 1,
        backgroundColor: '#202124'
    },

    cartCountView: {
        marginTop: 15,
        marginBottom: 10,
        alignSelf: 'flex-end',
        right: 30
    },

    cartImageStyle: {
        height: 35,
        width: 35,
        resizeMode: 'contain',
        tintColor: 'white'
    },

    cartCountInGreenView: {
        backgroundColor: '#1ABC9C',
        position: "absolute",
        right: -10,
        borderRadius: 30,
        justifyContent: 'center',
        paddingHorizontal: 4,
        alignItems: 'center'
    },

    cartCountLengthText: {
        color: 'white',
        fontSize: 12
    },

    flatListStyle: {
        padding: 15,
        flex: 1
    },

    dataRowView: {
        marginBottom: 20,
        backgroundColor: '#666666',
        elevation: 5,
        padding: 10,
        borderRadius: 10,
    },

    labelText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 17
    },

    detailsText: {
        color: 'white',
        fontWeight: 'normal',
        fontSize: 15
    },

    addButtonView: {
        alignSelf: "flex-end",
        bottom: 10,
        position: 'absolute',
        right: 10
    },

    addButtonStyle: {
        borderColor: '#27AAE1',
        borderWidth: 1,
        paddingHorizontal: 25,
        paddingVertical: 5,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },

    addLabelStyle: {
        color: '#333',
        fontSize: 14
    },

    counterCustomeRowStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    RightMarginView: {
        marginRight: 10
    },

    LeftMarginView: {
        marginLeft: 10
    },

    counterButtonView: {
        borderWidth: 2,
        borderColor: '#27AAE1',
        borderRadius: 25,
        minWidth: 25,
        minHeight: 25,
        justifyContent: 'center',
        alignItems: "center"
    },

    counterDigitStyle: {
        color: '#333',
    },

    forCartPriceView: {
        paddingHorizontal: 35,
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    cartDetailsStyle: {
        color: 'white',
        fontSize: 15
    },
}