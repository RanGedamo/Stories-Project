// import React from 'react';
// import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
// import Cookies from 'js-cookie';

// export default function communitiesDropDown() {
//     const userData=Cookies.get('user')
//   return (
//     <MDBDropdown group className='shadow-0'>
//       <MDBDropdownToggle tag='a' color='light'>
//       Communities
//       </MDBDropdownToggle>
//       <MDBDropdownMenu>
//       <MDBDropdownItem link>Action</MDBDropdownItem>
//         {userData.groups?.map((group)=>{<MDBDropdownItem className="stretched-link" link>{group.name}</MDBDropdownItem>})}
//       </MDBDropdownMenu>
//     </MDBDropdown>
//   );
// }

import React from 'react';
import {useEffect,useState} from 'react';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import Cookies from 'js-cookie';


export default function CommunitiesDropDown() {
    const [groups,setGroups]=useState()
    // const userEmail=Cookies.get('user')
    // useEffect(()=>{
    // try{
    // fetch(`http://localhost:6060/users/findByEmail/${userEmail}`)
    // .then((res) => res.json())
    // .then((res)=>setGroups(res.users.groups)) }
    // catch(error){}
    // console.log(groups);
    // },[])
    useEffect(()=>{
        try{
        fetch(`http://storyserver-env.eba-znagmmma.us-east-1.elasticbeanstalk.com/groups`)
        .then((res) => res.json())
        .then((res)=>setGroups(res?.groups)) }
        catch(error){console.log(error)}
        },[])
        if(groups){
  return (
    <>
<MDBDropdown group className='shadow-0'>
<MDBDropdownToggle color='light'>communities</MDBDropdownToggle>
<MDBDropdownMenu>
  {groups?.map((group)=>{return(<MDBDropdownItem className=""  ><a href={`/community/${group._id}`} >{group.groupName}</a></MDBDropdownItem>)})}
</MDBDropdownMenu>
</MDBDropdown>
</>
);
}
else{return}
}