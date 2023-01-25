import StoriesCarousel from "../components/Carousel/StoriesCarousel";


export const storiesAPI = async()=>{
    try{
        return await fetch('http://storyserver-env.eba-znagmmma.us-east-1.elasticbeanstalk.com/stories')
        .then(res=>res.json())
    }
    catch(err){
    console.log(err);
    }
}