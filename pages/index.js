import Head from 'next/head'
import Card from '../components/Card';
import Grid from '../components/Grid';
import data from '../data/data'

function Home(){

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
