 import Image from 'next/image';
import Link from 'next/link';
const index = ({data}) => {
  return (
    <>
     <h1>Events Page</h1>
     <div>
    {data.map((ev)=>(
      <Link href={`/events/${ev.id}`} key={ev.id} passHref>
        <Image src={ev.image} width={300} height={300}></Image>
        <h1>{ev.title}</h1>
      </Link>
    ))}
     </div>
    </>
  )
}

export default index;

export async function getStaticProps(){
  const {events_categories} = await import('/data/data.json');
  return{
    props:{
      data:events_categories
    }
  }
}

