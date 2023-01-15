import Image from "next/image"
import Link from "next/link"

const HomePage = ({data}) => {
  return (
     <>
        {data.map((ev)=>(
          <Link href={`/events/${ev.id}`} key={ev.id} passHref>
          <Image src={ev.image} width={200} height={300} alt={ev.title}/>
          <h2>{ev.title}</h2>
          <p>{ev.description}</p>
          </Link>
          ))}
      </>
  )
}

export default HomePage