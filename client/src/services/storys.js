import StoriesCarousel from "../components/Carousel/StoriesCarousel";


export const storiesAPI = async()=>{
    try{
        return await fetch('http://localhost:6060/stories')
        .then(res=>res.json())
    }
    catch(err){
    console.log(err);
    }
}