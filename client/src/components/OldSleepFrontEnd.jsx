//import React from 'react' 
/* import { useState } from 'react'; */

//function SleepFrontEnd () {

/////// !!!!!! HERE I should have used : useEffect(() => {   ////////
/*   const [sleep, setSleep] = useState(null);
  const [error, setError] = useState('');   /* a state to save all of the errors */
  /* const [isLoading , setIsloading] = useState(false) */

  /* async function searchSleep() {
    setIsloading(true)
    setSleep(null)
    setError('');

    const options = {  */ /* Since the syntax of the backend included OPTIONS , I need to include them here as well. The code must coincide  */
     /*  method: 'GET',
      headers: {
        'X-RapidAPI-Key': '314a76c0f8mshba931602e18bfcfp1f7807jsn79a0981b285a',
        'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
      }
    }; */

    /* all the code inside the try block and catch block would stand alone if we werent using the await  */

   // try{  /* try...catch we should use with await to prevent the application from crashing  */
      /* const response = await fetch(`https://hotels4.p.rapidapi.com/locations/search?query=greece&locale=en_US`, options); */ /* and add options HERE !!!!!!!!!!!!!!!!!!!!!! */
   //   if(!response.ok){
        //when you throw an error you will go to the catch block
     //   throw new Error()
     // }
     // const data = await response.json();   /* if everything ok  gets directly here */
     // setIsloading(false)  /* this is where I RECEIVE MY DATA  */
     // setSleep(data)
   // }
   // catch(err){
   //   setIsloading(false)  /* we don´t want the loading phase here  */
   //   setError(`something went wrong: ${err}`)
   // }
    //finally{   /* we could add it or not , it will always be executed  */
    /*   console.log('I am in the finally block');
    }
  }
   
    searchSleep();     WITH ASYNC AWAIT AT THE END I MUST CALL THE FUNCTION */

   /*  fetch("https://hotels4.p.rapidapi.com/locations/search?query=greece&locale=en_US")
    .then((res) => res.json())
    .then((data) =>  {
      console.log(data.suggestions[0].entities[0].name);
      });
    }, []);


    // return <div>Sleep Frontend Component</div>;
}

// export default SleepFrontEnd;
