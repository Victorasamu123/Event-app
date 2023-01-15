import path from 'path'
import fs from 'fs'

function buildPath(){
    return path.join(process.cwd(), 'data', 'data.json');
    
}

function extractData (filePath){
       const jsonData = fs.readFileSync(filePath);
       const data = JSON.parse(jsonData);
       return data ;
}

export default function handler (req,res){
    const { method } = req;

// Access our data
//Extract our data
// All events - loop through them and identify the eventId
//Add the email into emails_registered - write on our data
    
     const filePath = buildPath();
     const {events_categories, allEvents} = extractData(filePath);
     if(!allEvents){
       return  res.status(404).json({message:'Events data not found'})
     }
    if(method === 'POST'){
        //we add our code here
        const {emailValue,eventId}= req.body

        const newAllEvents = allEvents.map((ev)=>{
            if(ev.id===eventId){
                if(ev.emails_registered.includes(emailValue)){
                    res.status(401).json({message:"This email has already beeen registered"})
                    return ev;
                }
                return{
                    ...ev,emails_registered:[...ev.emails_registered, emailValue]
                }
            }
            return ev;
        });
        fs.writeFileSync(filePath,JSON.stringify({events_categories,allEvents:newAllEvents}))
        res.status(200).json({message:`You has been registered successfully with the email: ${emailValue} ${eventId}`})
    }

}