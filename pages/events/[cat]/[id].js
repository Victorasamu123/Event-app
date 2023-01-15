import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useRef } from 'react'

const Id = ({data}) => {
  const inputEmail = useRef();
  const router = useRouter();
  console.log(router)
  const onSubmit = async (e) => {
    e.preventDefault();
    const emailValue= inputEmail.current.value
    const eventId= router?.query.id;
    const validRegex = /^$/ 

    console.log(emailValue,eventId)
    try{
      const response = await fetch('/api/email-registration',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ emailValue, eventId}),
      });

      if(!response.ok) throw new Error (`an error occuured`)
      const data = await response.json()
      console.log('POST',data)
      //fetch-post requests
      //body email value and the eventid
    } catch(e){
      console.log('ERROR',e)
    }
  }
  console.log(data)
  return (
    <div>
      <Image src={data.image} width={1000} height={300} alt={data.title}/>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <form action="" onSubmit={onSubmit}>
      <label className='font-semibold text-3xl'>Get Register for this Events</label><br />
      <input type="email" className='border border-red-200 w-96 rounded' 
      placeholder='Place enter your email' ref={inputEmail}/>
       <button type='submit' className='bg-red-900 rounded-xl p-2 ml-2'>Submit</button>
       </form>
    </div>
  )
}

export default Id;

export async function getStaticPaths(){
const {allEvents} = await import('/data/data.json');
// const allEvents = data;
const allPaths= allEvents.map((path)=>{
  return{
    params:{
      cat:path.city,
      id:path.id
    }
  }
})
  return{
    paths:allPaths,
    fallback:false
  }
}

export async function getStaticProps(context){
   const id = context.params.id;
   const {allEvents} = await import('/data/data.json');
   const eventData = allEvents.find((ev)=>(id === ev.id))
   return{
    props:{data:eventData}
   }
}