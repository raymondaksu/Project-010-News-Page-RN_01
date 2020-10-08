import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <Text style={styles.header}>News</Text>
        </View>
        <View style={styles.box}>
          <Image source={require('./images/pic1.png')} style={styles.image} />
          <Text style={styles.subHeader}>
            Bulls Exit BitMEX Bitcoin Futures Market
          </Text>
          <Text style={styles.text}>
            {'\t'}Since the announcement from U.S. regulators, BitMEX has
            witnessed an outflow of more than 40,000 bitcoins, currently worth
            more than $422 million.
          </Text>
        </View>
        <View style={styles.box2}>
          <Image source={require('./images/pic2.png')} style={styles.image} />
          <Text style={styles.subHeader}>
            Coinbase customers can now dodge a bank
          </Text>
          <Text style={styles.text}>
            {'\t'}New update from coinbase quickens the transmutation of cyrpto
            into fiat. Coinbase has unvelied a faster way for its customers to
            move digital currencies out of cyrpto and into their bank accounts.
          </Text>
        </View>
        <View style={styles.box3}>
          <Image source={require('./images/pic3.png')} style={styles.image} />
          <Text style={styles.subHeader}>
            Bitfinex hackers move another $30M in stolen Bitcoin from 2016
          </Text>
          <Text style={styles.text}>
            {'\t'}Bitcoins (BTC) stolen from major cryptocurrency exchange
            Bitfinex back in 2016 are on the move again, as hackers shift
            another massive batch of funds to unknown wallets.
          </Text>
          <Text style={styles.text}>
            {'\t'}According to data from crypto transaction tracking service
            Whale Alert, Bitfinex hackers moved more than $4.6 million in stolen
            BTC on Oct. 8. These funds were sent to unknown wallets in two
            separate transactions of 435 BTC and 8 BTC.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf7f7',
  },

  header: {
    fontSize: 40,
    fontWeight: 'bold',
    padding: 5,
  },

  image: {
    width: 380,
    height: 200,
    margin: 10,
    marginBottom: 5,
    borderRadius: 10,
  },

  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },

  text: {
    fontSize: 15,
    marginLeft: 8,
    marginRight: 5,
  },

  box: {
    borderStyle: 'solid',
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
    height: 310,
  },

  box2: {
    borderStyle: 'solid',
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
    height: 330,
  },

  box3: {
    borderStyle: 'solid',
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
    height: 435,
  },

  scrollView: {
    marginHorizontal: 2,
  },
});

export default App;
