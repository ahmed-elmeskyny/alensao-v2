import App from 'next/app';
import {Provider} from 'react-redux';
import React from 'react';
import {createWrapper} from "next-redux-wrapper";
import  store from "../redux/store";
import "../styles/globals.scss";
import {auth ,createUserProfile, db} from "../config/utils";
import {connect} from "react-redux";
import {setCurrentUser} from "../redux/uerReducer/user-action";
import { AddOffre } from '../redux/offreReducer/offre-action';
import {AddOffrePublic} from "../redux/publicReducer/public-action";
  

import { Router } from 'next/router'
import * as gtag from '../lib/gtag'



class MyApp extends App {

    unsubscribeFromAuth = null;


    componentDidMount() {
      
      
        const handleRouteChange = (url) => {
          gtag.pageview(url)
        }
        Router.events.on('routeChangeComplete', handleRouteChange)

      




      this.unsubscribeFromAuth=  auth.onAuthStateChanged(
          async (user)=>{
              if(user){
                const userRef= await createUserProfile(user);
                userRef.onSnapshot(  (snapShot)=> {
                    this.props.setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()

                    })
                });


                              
              await db.collection("users")
              .doc(`${user.uid}`).get().then(
                (snap)=> {
                 if(snap.exists){
                    db.collection("users").doc(`${user.uid}`).update({ verified : user.emailVerified});
                 }
                }
              )


                await  db.collection("users")
                .doc(`${user.uid}`)
                .collection("offre")
                .get().then(
                  snap => {
                  
                  snap.docs.map( doc => {
                      if(doc.exists){
                        this.props.AddOffre({  id:doc.id,  ...doc.data() });
                      }
                    })
                  }
                )

              }else{
               this.props.setCurrentUser(null);
              }
            }
          )
          return () => {
            Router.events.off('routeChangeComplete', handleRouteChange)
          }
    }
    

    render() {
        //pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
        const {Component, pageProps} = this.props;


        return (
            <Provider store={store}>
                <Component {...pageProps}/>
            </Provider>
        );
    }
}



const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user )=> dispatch(setCurrentUser(user)),
    AddOffre : (offre ) => dispatch(AddOffre(offre)),
    AddOffrePublic : (offre ) => dispatch(AddOffrePublic(offre)),
  });

//makeStore function that returns a new store for every request
const makeStore = () => store;

const wrapper = createWrapper(makeStore);

//withRedux wrapper that passes the store to the App Component
export default wrapper.withRedux(connect(null,mapDispatchToProps)(MyApp));