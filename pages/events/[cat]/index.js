import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Pages = ({data,pageName}) => {
  return (
    <>
    <h1>Event In {pageName}</h1>
    <div>
      {data.map((ev)=>(
        <Link key ={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref>
          <Image src={ev.image} alt={ev.title} width={300} height={300}/>
          <h2>{ev.title}</h2>
          <p>{ev.description}</p>
        </Link>
      ))}
    </div>
    </>
  )
}

export default Pages


export async function getStaticPaths(){
  const {events_categories} = await import('/data/data.json');
  const allPaths= events_categories.map((ev)=>{
    return{
      params:{
        cat:ev.id.toString(),
      }
    };
  });
  console.log(allPaths)
  return{
    paths:allPaths,
    fallback: false
  }
}

export async function getStaticProps(context){
  const id = context?.params.cat;
  const {allEvents} = await import('/data/data.json');
  const data = allEvents.filter(ev=>ev.city=== id)
  console.log(data)
  return{
     props:{
      data:data,
      pageName:id
     }
  };
}