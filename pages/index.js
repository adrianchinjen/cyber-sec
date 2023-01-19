import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Card from '../components/Card';
import Grid from '../components/Grid';
import data from '../data/data'
// import { useEffect, useState } from 'react';

const Home = ()=>{
  // const [ isLoading, setIsLoading ] = useState(true);

  // useEffect(()=>{
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);
  // }, []);

  console.log('adrian')

  const displayCards = (item)=>{
    return(
      <Card id={item.id} key={item.id} img={item.image} title={item.title} description={item.description} buttonTitle='Learn more' />
    )
  }

  return (
    <>
      <Head>
        <title>Cyber Security</title>
      </Head>
      <Grid>
        {data.map(displayCards)}
      </Grid>
    </>
  )
}

export default Home;
