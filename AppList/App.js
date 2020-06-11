import React, {useEffect, useState} from 'react';
import {View, ScrollView, Text, StyleSheet, FlatList, Button} from 'react-native';

import PropTypes from 'prop-types';

import store from './src/redux/store';
import {connect} from 'react-redux';
import {getPosts} from './src/redux/actions/data';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
// import Moment from "react-moment"

const App = ({getPosts, data: {loading, posts}}) => {
  useEffect(() => {
    store.dispatch(getPosts);
  }, []);
  // console.log(posts)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Blog</Text>
        <Icon name="burger" size={20} color="#fff" />
      </View>
      <ScrollView style={styles.postsContainer}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
          }}>
          Recent Posts
        </Text>
        {loading ? (
          <Text>Please Wait...</Text>
        ) : (
          <View>
            {posts ? (
              <FlatList
                data={posts}
                renderItem={({item}) => (
                  <View style={styles.post} key={item.postId}>
                    <View style={styles.postTitle}>
                      <Text style={styles.title}>{item.title}</Text>
                      {/* <Moment fromNow> */}
                      <Text style={styles.createdAt}>
                        Posted {item.createdAt}
                      </Text>
                      {/* </Moment> */}
                    </View>
                    <Text style={styles.subtitle}>{item.subtitle}</Text>
                    <Button style={styles.btn} text="Read More"/>
                  </View>
                )}
              />
            ) : (
              <Text>No Post Found</Text>
            )}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#47B4AC',
    height: 60,
    padding: 15,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.6,
    shadowRadius: 3,
    elevation: 4,
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
  postsContainer: {
    padding: 10,
  },
  post: {
    padding: 10,
    borderColor: '#47B4AC',
    borderBottomWidth: 1,
  },
});

App.propTypes = {
  getPosts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  data: state.data,
});

export default connect(
  mapStateToProps,
  {getPosts},
)(App);
