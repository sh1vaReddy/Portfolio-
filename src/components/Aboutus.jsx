import React from 'react'

const Aboutus = () => {
  return (
    <div  name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
       <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
              <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About Us</p>
          </div>
          <div>
          <p className='text-xl mt-20 gap-x-0.5 '>
          👋 Greetings! I am a Software Engineer with a passion for new ideas and a hunger to learn. With a Bachelor of Technology degree in Computer Science Engineering, I gained a solid foundation in programming languages, software development techniques and basic software engineering principles
           <br/>
           <p className='text-xl mt-10'> 🚀 My journey into the engineering world began with a desire to solve problems and an interest in understanding how things work. During my study journey, I got an opportunity to work at Hostel Management Data. These experiences not only polished my coding skills but also instilled in me the importance of collaboration and adaptability in a dynamic collaboration environment.</p>
        
            <br/>
        💡 I'm excited about the prospect of helping find new solutions. My enthusiasm for embracing new technologies and techniques, coupled with strong problem-solving skills, makes me a motivated and active team player.
          <br/>
            <p className='text-xl mt-10'>🌐 As I embark on this exciting career journey, I am looking for opportunities to network with like-minded professionals, mentors and organizations that foster a culture that fosters continuous learning and growth.</p>
        
  
          </p>
          </div>
         
       </div>
    </div>
  )
}

export default Aboutus