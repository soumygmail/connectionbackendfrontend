import StudentModel from "../models/Student.js";


const createDocument = async () => {
    try{
        const Playlist = new StudentModel ({
            stuname:"pinku",
            email:"pinku@gnail.com"
           
         });
    
      
        const result = await Playlist.save();
       //  const result = await Playlist.insertMany([jsPlaylist,MongoPlaylist,mongoosePlaylist,ExpressPlaylist]);
         console.log(result)
         
         }catch(err){
            console.log(err)
         }
    };
    
 createDocument();

class StudentController {
    static getAllDoc = async (req, res) => {
       try{
        const result = await StudentModel.find()
        res.send(result)
        console.log(result);
       }  catch (error) {
        console.log(error)
       }
    }
}


export default StudentController