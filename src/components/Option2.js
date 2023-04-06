import react, { useState } from "react";
/* Have them create a filter component that based on button click, 
will filter their list based on an attribute. Example: 
Alphabetize a list based on name or list by breed of dog. */
/* Question:  Create a filter component that based on button click will filter the
 list based on if they qualify to be a student. I also want you to Alphabetize that
  list based on name */

function Option2(){
    const [list, setlist]=useState([])
    const users = [
        {
          name: 'Kiley',
          age: 25,
          isStudent: false
        },
        {
          name: 'Jaiden',
          age: 30,
          isStudent: true
        },
        {
          name: 'Bill',
          age: 21,
          isStudent: true
        },
        {
          name: 'Clark',
          age: 28,
          isStudent: false
        },
        {
          name: 'Anika',
          age: 20,
          isStudent: true
        }
      ];
      function handleClick(){
        console.log("clciked")
        const new_list=(users.filter((user)=>{if (user.isStudent) {return user.name}}))
        const final_list=(new_list.sort((a, b) => {
          const nameA = a.name.toUpperCase(); // ignore upper and lowercase
          const nameB = b.name.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
        
          // names must be equal
          return 0;
        }))
        setlist(list=>list=final_list)
        
      }
      const myList= (list.map((student)=> <li key={student.name}>{student.name}</li>))
    return (
        <div>
            <h2>Option 2 : Filter challenge</h2>
            <button onClick={handleClick}>Filter Out!</button>
            {myList}
        </div>
    )
}

export default Option2