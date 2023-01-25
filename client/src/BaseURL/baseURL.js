import axios from "axios"
// import Cookies from 'js-cookie'

const jwtInterceptor = axios.create({
    baseURL:"http://storyserver-env.eba-znagmmma.us-east-1.elasticbeanstalk.com/"
})
//  jwtInterceptor.defaults.headers.common['authorization'] = Cookies.get('authorization');
export default jwtInterceptor;