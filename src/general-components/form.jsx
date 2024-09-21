
import { useState } from 'react'
import { motion } from 'framer-motion'
import ConfettiExplosion from 'react-confetti-explosion';

import { z } from 'zod'
import { FormDataSchema } from 'src/general-components/lib/schema'
//import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import callCenter from 'src/assets/images/callcenter.png'


import { FaCheck } from "react-icons/fa";

const steps = [
  {
    id: 'Step 1',
    name: 'Personal Information',
    fields: ['firstName', 'lastName', 'email','phoneNumber','currentCompany']
  },
  /*{
    id: 'Step 2',
    name: 'Address',
    fields: ['country', 'state', 'city', 'street', 'zip']
  },*/

  {
    id: 'Step 2',
    name: 'Frameworks',
    fields: ['frameworks']
  },

  {
    id: 'Step 3',
    name: 'Experience',
    fields: ['experience']
  },
  {
    id: 'Step 4',
    name: 'Location',
    fields: ['location']
  },

  {
    id: 'Step 5',
    name: 'Github',
    fields: ['github']
  },

  {
    id: 'Step 6',
    name: 'Figma',
    fields: ['figma']
  },

  {
    id: 'Step 7',
    name: 'Start Date',
    fields: ['startDate']
  },

  {
    id: 'Step 8',
    name: 'Native Language',
    fields: ['nativeLanguage']
  },

  {
    id: 'Step 9',
    name: 'Time Zone',
    fields: ['timeZone']
  },

  {
    id: 'Step 10',
    name: 'Salary Expectations',
    fields: ['salary']
  },

  {
    id: 'Step 11',
    name: 'Wire Transfer',
    fields: ['wire']
  },

  {
    id: 'Step 12',
    name: 'Expertise',
    fields: ['expertise']
  },

  {
    id: 'Step 13',
    name: 'Expertise',
    fields: ['expertise']
  },

  {
    id: 'Step 14',
    name: 'Expertise',
    fields: ['expertise']
  },

  {
    id: 'Step 15',
    name: 'Expertise',
    fields: ['expertise']
  },

  {
    id: 'Step 16',
    name: 'Expertise',
    fields: ['expertise']
  },

  {
    id: 'Step 17',
    name: 'Expertise',
    fields: ['expertise']
  },

  {
    id: 'Step 18',
    name: 'Expertise',
    fields: ['expertise']
  },

  {
    id: 'Step 19',
    name: 'Expertise',
    fields: ['expertise']
  },

  {
    id: 'Step 20',
    name: 'Expertise',
    fields: ['expertise']
  },



  { id: 'Step 21', name: 'Complete' }
]

export default function Form() {
  const [previousStep, setPreviousStep] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const [isExploding, setIsExploding] = useState(false);


  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { letter: 'A', label: 'Beginner' },
    { letter: 'B', label: 'Intermediate' },
    { letter: 'C', label: 'Advanced' },
    { letter: 'D', label: 'Expert' },
  ];

  const handleSelect = (option) => {
    setSelectedOption(option);
  };



  const [selectedOption2, setSelectedOption2] = useState(null);

  const options2 = [
    { letter: 'A', label: 'JavaScript' },
    { letter: 'B', label: 'Python' },
    { letter: 'C', label: 'Java' },
    { letter: 'D', label: 'Ruby' },
    { letter: 'E', label: 'C++' },
  ];

  const handleSelect2 = (option) => {
    setSelectedOption2(option);
  };





  const [selectedOption3, setSelectedOption3] = useState(null);

  const options3 = [
    { letter: 'Y', label: 'Yes' },
    { letter: 'N', label: 'No' },
    
  ];

  const handleSelect3 = (option) => {
    setSelectedOption3(option);
  };





  const [selectedOption4, setSelectedOption4] = useState(null);

  const options4 = [
    { letter: 'A', label: 'Beginner' },
    { letter: 'B', label: 'Intermediate' },
    { letter: 'C', label: 'Advanced' },
    { letter: 'D', label: 'Expert' },
  ];

  const handleSelect4 = (option) => {
    setSelectedOption4(option);
  };





  const [selectedOption5, setSelectedOption5] = useState(null);

  const options5 = [
    { letter: 'A', label: 'Email' },
    { letter: 'B', label: 'Phone' },
    { letter: 'C', label: 'Slack' },
    { letter: 'D', label: 'Zoom' },
    { letter: 'E', label: 'Other' },
  ];

  const handleSelect5 = (option) => {
    setSelectedOption5(option);
  };




  const [selectedOption6, setSelectedOption6] = useState(null);

  const options6 = [
    { letter: 'Y', label: 'Yes' },
    { letter: 'N', label: 'No' },
   
  ];

  const handleSelect6 = (option) => {
    setSelectedOption6(option);
  };




  const [selectedOption7, setSelectedOption7] = useState(null);

  const options7 = [
    { letter: 'Y', label: 'Yes' },
    { letter: 'N', label: 'No' },
   
  ];

  const handleSelect7 = (option) => {
    setSelectedOption7(option);
  };




  const [selectedOption8, setSelectedOption8] = useState(null);

  const options8 = [
    { letter: 'Y', label: 'Yes' },
    { letter: 'N', label: 'No' },
   
  ];

  const handleSelect8 = (option) => {
    setSelectedOption8(option);
  };




  const [selectedOption9, setSelectedOption9] = useState(null);

  const options9 = [
    { letter: 'Y', label: 'Yes' },
    { letter: 'N', label: 'No' },
   
  ];

  const handleSelect9 = (option) => {
    setSelectedOption9(option);
  };




  const [selectedOption10, setSelectedOption10] = useState(null);

  const options10 = [
    { letter: 'A', label: 'API Scraper' },
    { letter: 'B', label: 'Python Developer' },
    { letter: 'C', label: 'Frontend Developer' },
    { letter: 'D', label: 'UI/UX Designer' },
    { letter: 'E', label: 'Full Stack Developer' },
  ];

  const handleSelect10 = (option) => {
    setSelectedOption10(option);
  };





  const delta = currentStep - previousStep

  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors }
  } = useForm({
    //resolver: zodResolver(FormDataSchema)
  })

  const processForm = data => {
    console.log(data)
    reset()
  }

  const next = async () => {
    const fields = steps[currentStep].fields
    const output = await trigger(fields, { shouldFocus: true })

    if (!output) return

    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
        await handleSubmit(processForm)()
      }
      setPreviousStep(currentStep)
      setCurrentStep(step => step + 1)
    }
  }

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep)
      setCurrentStep(step => step - 1)
    }
  }

  const progressPercentage = ((currentStep+1) / steps.length) * 100;

  
  return (
    <section className='absolute inset-0 flex flex-col justify-between p-48'>
      {/* steps */}
      {/*
      <nav aria-label='Progress'>
        <ol role='list' className='space-y-4 md:flex md:space-x-8 md:space-y-0'>
          {steps.map((step, index) => (
            <li key={step.name} className='md:flex-1'>
              {currentStep > index ? (
                <div className='group flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4'>
                  <span className='text-sm font-medium text-sky-600 transition-colors '>
                    {step.id}
                  </span>
                  <span className='text-sm font-medium'>{step.name}</span>
                </div>
              ) : currentStep === index ? (
                <div
                  className='flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4'
                  aria-current='step'
                >
                  <span className='text-sm font-medium text-sky-600'>
                    {step.id}
                  </span>
                  <span className='text-sm font-medium'>{step.name}</span>
                </div>
              ) : (
                <div className='group flex w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4'>
                  <span className='text-sm font-medium text-gray-500 transition-colors'>
                    {step.id}
                  </span>
                  <span className='text-sm font-medium'>{step.name}</span>
                </div>
              )}
            </li>
          ))}
        </ol>
      </nav>
        */}
     {/**progress bar */}
      <div className="fixed top-0 left-0 right-0 bg-blue-100 h-8">
      <div
        className="bg-blue-500 h-full"
        style={{ width: `${progressPercentage}%` }}
      ></div>
       </div>

        <center >
        <img src={callCenter} alt="company logo" style={{width:"10rem",height:"10rem"}} />
        </center>

      {/* Form */}
      <form className='mt-12 py-3 w-[75%] mx-auto'  onSubmit={handleSubmit(processForm)}>
        {currentStep === 0 && (
          <motion.div
          style={{scale:"0.8"}}
            initial={{ y: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <h2 className='text-2xl font-semibold leading-7 text-gray-900 mb-[1.2rem]'>
              Personal Information
            </h2>
           {/* <p className='mt-1 text-sm leading-6 text-gray-600'>
              Provide your personal details.
            </p>*/}
            <div className='mt-10 flex flex-col space-y-48'> 

{/* First Name */}
<div className='w-full mb-6'>
  <label
    htmlFor='firstName'
    className='block text-sm font-medium leading-6 text-blue-500' 
  >
    First name
  </label>
  <div className='mt-2'>
    <input
      type='text'
      id='firstName'
      placeholder='First Name'
      {...register('firstName')}
      autoComplete='given-name'
      className='block w-full border-b-2 border-blue-500  text-2xl text-blue-500 placeholder:text-blue-100 py-1.5 focus:border-blue-700 focus:outline-none'
      style={{ fontSize: '2.5rem' }} 
    />
    {errors.firstName?.message && (
      <p className='mt-2 text-sm text-red-400'>
        {errors.firstName.message}
      </p>
    )}
  </div>
</div>

{/* Last Name */}
<div className='w-full mb-6'>
  <label
    htmlFor='lastName'
    className='block text-sm font-medium leading-6 text-blue-500' 
  >
    Last name
  </label>
  <div className='mt-2'>
    <input
      type='text'
      id='lastName'
      placeholder='Last Name'
      {...register('lastName')}
      autoComplete='family-name'
      className='block w-full border-b-2 border-blue-500 text-2xl py-1.5  placeholder:text-blue-100 text-blue-500 focus:border-blue-700 focus:outline-none'
      style={{ fontSize: '2.5rem' }} 
    />
    {errors.lastName?.message && (
      <p className='mt-2 text-sm text-red-400'>
        {errors.lastName.message}
      </p>
    )}
  </div>
</div>

{/* Email */}
<div className='w-full mb-6'>
  <label
    htmlFor='email'
    className='block text-sm font-medium leading-6 text-blue-500' 
  >
    Email address
  </label>
  <div className='mt-2'>
    <input
      id='email'
      type='email'
      placeholder='Email'
      {...register('email')}
      autoComplete='email'
      className='block w-full border-b-2 border-blue-500 text-2xl py-1.5 placeholder:text-blue-100 text-blue-500 focus:border-blue-700 focus:outline-none'
      style={{ fontSize: '2.5rem' }}
    />
    {errors.email?.message && (
      <p className='mt-2 text-sm text-red-400'>
        {errors.email.message}
      </p>
    )}
  </div>
</div>

{/* Phone Number */}
<div className='w-full mb-6'>
  <label
    htmlFor='phoneNumber'
    className='block text-sm font-medium leading-6 text-blue-500' 
  >
    Phone number
  </label>
  <div className='mt-2'>
    <input
      id='phoneNumber'
      placeholder='Phone Number'
      type='text'
      {...register('phoneNumber')}
      autoComplete='tel'
      className='block w-full border-b-2 border-blue-500 text-2xl py-1.5 placeholder:text-blue-100 text-blue-500 focus:border-blue-700 focus:outline-none'
      style={{ fontSize: '2.5rem' }}
    />
    {errors.phoneNumber?.message && (
      <p className='mt-2 text-sm text-red-400'>
        {errors.phoneNumber.message}
      </p>
    )}
  </div>
</div>

{/* Current Company
<div className='w-full mb-6'>
  <label
    htmlFor='currentCompany'
    className='block text-sm font-medium leading-6 text-blue-500'
  >
    Current company
  </label>
  <div className='mt-2'>
    <input
      id='currentCompany'
      type='text'
      placeholder='Current Company'
      {...register('currentCompany')}
      className='block w-full border-b-2 border-blue-500 text-blue-500 placeholder:text-blue-100 text-2xl py-1.5 focus:border-blue-700 focus:outline-none'
      style={{ fontSize: '2.5rem' }} />

    {errors.currentCompany?.message && (
      <p className='mt-2 text-sm text-red-400'>
        {errors.currentCompany.message}
      </p>
    )}
  </div>
</div>

 */}

</div>


          </motion.div>
        )}

      
{currentStep === 1 && (
          <motion.div
            initial={{ y: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <h2 className='text-2xl font-semibold leading-7 text-gray-900 mb-[1.2rem]'>
              Expertise
            </h2>
           {/* <p className='mt-1 text-sm leading-6 text-gray-600'>
              Provide your personal details.
            </p>*/}
            <div className='mt-10 flex flex-col space-y-24'> 

{/* First Name */}
<div className='w-full mb-6'>
  <label
    htmlFor='frameworks'
    className='block text-sm font-medium leading-6 mb-[2.4rem] text-blue-500' 
  >
   What is your level of experience in software development?
  </label>

    <div className='flex flex-col space-y-4'>
      {options.map((option, index) => (
        <div
          key={index}
          onClick={() => handleSelect(option.label)}
          className={`flex items-center justify-between w-120 p-4 border border-blue-300 rounded-lg cursor-pointer transition-colors duration-300 
          ${selectedOption === option.label ? 'bg-blue-200' : 'bg-blue-100'} hover:bg-blue-200`} // Hover and select states
          style={{ borderRadius: '0.5rem', fontSize: '1.9rem' }}
        >
          <div className='flex items-center'>
            <div className='flex items-center justify-center w-24 h-24 bg-white text-blue-700 border border-blue-300 rounded-full mr-16'>
              {option.letter}
            </div>
            <span className='text-blue-700'>{option.label}</span>
          </div>
          {selectedOption === option.label && (
            <FaCheck className='w-18 h-18 text-blue-700' /> // Adding tick icon when selected
               
          
          )}
        </div>
      ))}
    </div>

</div>






</div>


          </motion.div>
        )}

{currentStep === 2 && (
          <motion.div
            initial={{ y: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <h2 className='text-2xl font-semibold leading-7 text-gray-900 mb-[1.2rem]'>
              Proficiency
            </h2>
           {/* <p className='mt-1 text-sm leading-6 text-gray-600'>
              Provide your personal details.
            </p>*/}
            <div className='mt-10 flex flex-col space-y-24'> 

{/* First Name */}
<div className='w-full mb-6'>
  <label
    htmlFor='frameworks'
    className='block text-sm font-medium leading-6 mb-[2.4rem] text-blue-500' 
  >
   Which programming languages are you proficient in?
  </label>

    <div className='flex flex-col space-y-4'>
      {options2.map((option, index) => (
        <div
          key={index}
          onClick={() => handleSelect2(option.label)}
          className={`flex items-center justify-between w-120 p-4 border border-blue-300 rounded-lg cursor-pointer transition-colors duration-300 
          ${selectedOption2 === option.label ? 'bg-blue-200' : 'bg-blue-100'} hover:bg-blue-200`} // Hover and select states
          style={{ borderRadius: '0.5rem', fontSize: '1.9rem' }}
        >
          <div className='flex items-center'>
            <div className='flex items-center justify-center w-24 h-24 bg-white text-blue-700 border border-blue-300 rounded-full mr-16'>
              {option.letter}
            </div>
            <span className='text-blue-700'>{option.label}</span>
          </div>
          {selectedOption2 === option.label && (
            <FaCheck className='w-18 h-18 text-blue-700' /> // Adding tick icon when selected
               
          
          )}
        </div>
      ))}
    </div>

</div>






</div>


          </motion.div>
        )}


{currentStep === 3 && (
          <motion.div
            initial={{ y: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <h2 className='text-2xl font-semibold leading-7 text-gray-900 mb-[1.2rem]'>
              Frameworks
            </h2>
           {/* <p className='mt-1 text-sm leading-6 text-gray-600'>
              Provide your personal details.
            </p>*/}
            <div className='mt-10 flex flex-col space-y-24'> 

{/* First Name */}
<div className='w-full mb-6'>
  <label
    htmlFor='frameworks'
    className='block text-sm font-medium leading-6 mb-[2.4rem] text-blue-500' 
  >
    Have you worked with any specific frameworks before?
  </label>
  <div className='mt-2'>
    <input
      type='text'
      id='frameworks'
      placeholder='Enter Your Answer Here...'
      {...register('frameworks')}
      autoComplete='react js'
      className='block w-full border-b-2 border-blue-500  text-2xl text-blue-500 placeholder:text-blue-100 py-1.5 focus:border-blue-700 focus:outline-none'
      style={{ fontSize: '2.5rem' }} 
    />
    {errors.frameworks?.message && (
      <p className='mt-2 text-sm text-red-400'>
        {errors.frameworks.message}
      </p>
    )}
  </div>
</div>






</div>


          </motion.div>
        )}



{currentStep === 4 && (
          <motion.div
            initial={{ y: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <h2 className='text-2xl font-semibold leading-7 text-gray-900 mb-[1.2rem]'>
              Experience
            </h2>
           {/* <p className='mt-1 text-sm leading-6 text-gray-600'>
              Provide your personal details.
            </p>*/}
            <div className='mt-10 flex flex-col space-y-24'> 

{/* First Name */}
<div className='w-full mb-6'>
  <label
    htmlFor='experience'
    className='block text-sm font-medium leading-6 mb-[2.4rem] text-blue-500' 
  >
    How Many Years of Web Development Experience do you have?
  </label>
  <div className='mt-2'>
    <input
      type='text'
      id='experience'
      placeholder='Enter Your Answer Here...'
      {...register('experience')}
      autoComplete='react js'
      className='block w-full border-b-2 border-blue-500  text-2xl text-blue-500 placeholder:text-blue-100 py-1.5 focus:border-blue-700 focus:outline-none'
      style={{ fontSize: '2.5rem' }} 
    />
    {errors.experience?.message && (
      <p className='mt-2 text-sm text-red-400'>
        {errors.experience.message}
      </p>
    )}
  </div>
</div>






</div>


          </motion.div>
        )}




{currentStep === 5 && (
          <motion.div
            initial={{ y: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <h2 className='text-2xl font-semibold leading-7 text-gray-900 mb-[1.2rem]'>
              Version Control
            </h2>
           {/* <p className='mt-1 text-sm leading-6 text-gray-600'>
              Provide your personal details.
            </p>*/}
            <div className='mt-10 flex flex-col space-y-24'> 

{/* First Name */}
<div className='w-full mb-6'>
  <label
    htmlFor='frameworks'
    className='block text-sm font-medium leading-6 mb-[2.4rem] text-blue-500' 
  >
   Are you familiar with version control systems like Git?
  </label>

    <div className='flex flex-col space-y-4'>
      {options3.map((option, index) => (
        <div
          key={index}
          onClick={() => handleSelect3(option.label)}
          className={`flex items-center justify-between w-120 p-4 border border-blue-300 rounded-lg cursor-pointer transition-colors duration-300 
          ${selectedOption3 === option.label ? 'bg-blue-200' : 'bg-blue-100'} hover:bg-blue-200`} // Hover and select states
          style={{ borderRadius: '0.5rem', fontSize: '1.9rem' }}
        >
          <div className='flex items-center'>
            <div className='flex items-center justify-center w-24 h-24 bg-white text-blue-700 border border-blue-300 rounded-full mr-16'>
              {option.letter}
            </div>
            <span className='text-blue-700'>{option.label}</span>
          </div>
          {selectedOption3 === option.label && (
            <FaCheck className='w-18 h-18 text-blue-700' /> // Adding tick icon when selected
               
          
          )}
        </div>
      ))}
    </div>

</div>






</div>


          </motion.div>
        )}



{currentStep === 6 && (
          <motion.div
            initial={{ y: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <h2 className='text-2xl font-semibold leading-7 text-gray-900 mb-[1.2rem]'>
              Location
            </h2>
           {/* <p className='mt-1 text-sm leading-6 text-gray-600'>
              Provide your personal details.
            </p>*/}
            <div className='mt-10 flex flex-col space-y-24'> 

{/* First Name */}
<div className='w-full mb-6'>
  <label
    htmlFor='location'
    className='block text-sm font-medium leading-6 mb-[2.4rem] text-blue-500' 
  >
    Which Country are you currently located in?
  </label>
  <div className='mt-2'>
    <input
      type='text'
      id='location'
      placeholder='Enter Your Answer Here...'
      {...register('location')}
      autoComplete='react js'
      className='block w-full border-b-2 border-blue-500  text-2xl text-blue-500 placeholder:text-blue-100 py-1.5 focus:border-blue-700 focus:outline-none'
      style={{ fontSize: '2.5rem' }} 
    />
    {errors.location?.message && (
      <p className='mt-2 text-sm text-red-400'>
        {errors.location.message}
      </p>
    )}
  </div>
</div>






</div>


          </motion.div>
        )}





{currentStep === 7 && (
          <motion.div
            initial={{ y: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <h2 className='text-2xl font-semibold leading-7 text-gray-900 mb-[1.2rem]'>
              Office Communication
            </h2>
           {/* <p className='mt-1 text-sm leading-6 text-gray-600'>
              Provide your personal details.
            </p>*/}
            <div className='mt-10 flex flex-col space-y-24'> 

{/* First Name */}
<div className='w-full mb-6'>
  <label
    htmlFor='frameworks'
    className='block text-sm font-medium leading-6 mb-[2.4rem] text-blue-500' 
  >
   What is your preferred method of communication for work-related matters?
  </label>

    <div className='flex flex-col space-y-4'>
      {options5.map((option, index) => (
        <div
          key={index}
          onClick={() => handleSelect5(option.label)}
          className={`flex items-center justify-between w-120 p-4 border border-blue-300 rounded-lg cursor-pointer transition-colors duration-300 
          ${selectedOption5 === option.label ? 'bg-blue-200' : 'bg-blue-100'} hover:bg-blue-200`} // Hover and select states
          style={{ borderRadius: '0.5rem', fontSize: '1.9rem' }}
        >
          <div className='flex items-center'>
            <div className='flex items-center justify-center w-24 h-24 bg-white text-blue-700 border border-blue-300 rounded-full mr-16'>
              {option.letter}
            </div>
            <span className='text-blue-700'>{option.label}</span>
          </div>
          {selectedOption5 === option.label && (
            <FaCheck className='w-18 h-18 text-blue-700' /> // Adding tick icon when selected
               
          
          )}
        </div>
      ))}
    </div>

</div>



</div>


          </motion.div>
        )}


{currentStep === 8 && (
          <motion.div
            initial={{ y: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <h2 className='text-2xl font-semibold leading-7 text-gray-900 mb-[1.2rem]'>
              Github Link
            </h2>
           {/* <p className='mt-1 text-sm leading-6 text-gray-600'>
              Provide your personal details.
            </p>*/}
            <div className='mt-10 flex flex-col space-y-24'> 

{/* github */}
<div className='w-full mb-6'>
  <label
    htmlFor='github'
    className='block text-sm font-medium leading-6 mb-[2.4rem] text-blue-500' 
  >
   Can you provide a link to your GitHub profile or portfolio?
  </label>
  <div className='mt-2'>
    <input
      type='text'
      id='github'
      placeholder='https://'
      {...register('github')}
      autoComplete='react js'
      className='block w-full border-b-2 border-blue-500  text-2xl text-blue-500 placeholder:text-blue-100 py-1.5 focus:border-blue-700 focus:outline-none'
      style={{ fontSize: '2.5rem' }} 
    />
    {errors.github?.message && (
      <p className='mt-2 text-sm text-red-400'>
        {errors.github.message}
      </p>
    )}
  </div>
</div>






</div>


          </motion.div>
        )}


{currentStep === 9 && (
          <motion.div
            initial={{ y: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <h2 className='text-2xl font-semibold leading-7 text-gray-900 mb-[1.2rem]'>
              Team Work
            </h2>
           {/* <p className='mt-1 text-sm leading-6 text-gray-600'>
              Provide your personal details.
            </p>*/}
            <div className='mt-10 flex flex-col space-y-24'> 

{/* First Name */}
<div className='w-full mb-6'>
  <label
    htmlFor='frameworks'
    className='block text-sm font-medium leading-6 mb-[2.4rem] text-blue-500' 
  >
   Are you comfortable working in a team environment?
  </label>

    <div className='flex flex-col space-y-4'>
      {options6.map((option, index) => (
        <div
          key={index}
          onClick={() => handleSelect6(option.label)}
          className={`flex items-center justify-between w-120 p-4 border border-blue-300 rounded-lg cursor-pointer transition-colors duration-300 
          ${selectedOption6 === option.label ? 'bg-blue-200' : 'bg-blue-100'} hover:bg-blue-200`} // Hover and select states
          style={{ borderRadius: '0.5rem', fontSize: '1.9rem' }}
        >
          <div className='flex items-center'>
            <div className='flex items-center justify-center w-24 h-24 bg-white text-blue-700 border border-blue-300 rounded-full mr-16'>
              {option.letter}
            </div>
            <span className='text-blue-700'>{option.label}</span>
          </div>
          {selectedOption6 === option.label && (
            <FaCheck className='w-18 h-18 text-blue-700' /> // Adding tick icon when selected
               
          
          )}
        </div>
      ))}
    </div>

</div>


</div>


          </motion.div>
        )}




{currentStep === 10 && (
          <motion.div
            initial={{ y: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <h2 className='text-2xl font-semibold leading-7 text-gray-900 mb-[1.2rem]'>
              Agile Methodology
            </h2>
           {/* <p className='mt-1 text-sm leading-6 text-gray-600'>
              Provide your personal details.
            </p>*/}
            <div className='mt-10 flex flex-col space-y-24'> 

{/* First Name */}
<div className='w-full mb-6'>
  <label
    htmlFor='frameworks'
    className='block text-sm font-medium leading-6 mb-[2.4rem] text-blue-500' 
  >
  Do you have experience with Agile development methodologies?
  </label>

    <div className='flex flex-col space-y-4'>
      {options7.map((option, index) => (
        <div
          key={index}
          onClick={() => handleSelect7(option.label)}
          className={`flex items-center justify-between w-120 p-4 border border-blue-300 rounded-lg cursor-pointer transition-colors duration-300 
          ${selectedOption7 === option.label ? 'bg-blue-200' : 'bg-blue-100'} hover:bg-blue-200`} // Hover and select states
          style={{ borderRadius: '0.5rem', fontSize: '1.9rem' }}
        >
          <div className='flex items-center'>
            <div className='flex items-center justify-center w-24 h-24 bg-white text-blue-700 border border-blue-300 rounded-full mr-16'>
              {option.letter}
            </div>
            <span className='text-blue-700'>{option.label}</span>
          </div>
          {selectedOption7 === option.label && (
            <FaCheck className='w-18 h-18 text-blue-700' /> // Adding tick icon when selected
               
          
          )}
        </div>
      ))}
    </div>

</div>






</div>


          </motion.div>
        )}




{currentStep === 11 && (
          <motion.div
            initial={{ y: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <h2 className='text-2xl font-semibold leading-7 text-gray-900 mb-[1.2rem]'>
              Figma Design
            </h2>
           {/* <p className='mt-1 text-sm leading-6 text-gray-600'>
              Provide your personal details.
            </p>*/}
            <div className='mt-10 flex flex-col space-y-24'> 

{/* First Name */}
<div className='w-full mb-6'>
  <label
    htmlFor='frameworks'
    className='block text-sm font-medium leading-6 mb-[2.4rem] text-blue-500' 
  >
  Are you a Figma designer?
  </label>

    <div className='flex flex-col space-y-4'>
      {options8.map((option, index) => (
        <div
          key={index}
          onClick={() => handleSelect8(option.label)}
          className={`flex items-center justify-between w-120 p-4 border border-blue-300 rounded-lg cursor-pointer transition-colors duration-300 
          ${selectedOption8 === option.label ? 'bg-blue-200' : 'bg-blue-100'} hover:bg-blue-200`} // Hover and select states
          style={{ borderRadius: '0.5rem', fontSize: '1.9rem' }}
        >
          <div className='flex items-center'>
            <div className='flex items-center justify-center w-24 h-24 bg-white text-blue-700 border border-blue-300 rounded-full mr-16'>
              {option.letter}
            </div>
            <span className='text-blue-700'>{option.label}</span>
          </div>
          {selectedOption8 === option.label && (
            <FaCheck className='w-18 h-18 text-blue-700' /> // Adding tick icon when selected
               
          
          )}
        </div>
      ))}
    </div>

</div>






</div>


          </motion.div>
        )}




{currentStep === 12 && (
          <motion.div
            initial={{ y: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <h2 className='text-2xl font-semibold leading-7 text-gray-900 mb-[1.2rem]'>
              Figma
            </h2>
           {/* <p className='mt-1 text-sm leading-6 text-gray-600'>
              Provide your personal details.
            </p>*/}
            <div className='mt-10 flex flex-col space-y-24'> 

{/* figma */}
<div className='w-full mb-6'>
  <label
    htmlFor='figma'
    className='block text-sm font-medium leading-6 mb-[2.4rem] text-blue-500' 
  >
   Please add your Figma links for us to view your work history:
  </label>
  <div className='mt-2'>
    <input
      type='text'
      id='figma'
      placeholder='https://'
      {...register('figma')}
      autoComplete='figma links'
      className='block w-full border-b-2 border-blue-500  text-2xl text-blue-500 placeholder:text-blue-100 py-1.5 focus:border-blue-700 focus:outline-none'
      style={{ fontSize: '2.5rem' }} 
    />
    {errors.figma?.message && (
      <p className='mt-2 text-sm text-red-400'>
        {errors.figma.message}
      </p>
    )}
  </div>
</div>






</div>


          </motion.div>
        )}




{currentStep === 13 && (
          <motion.div
            initial={{ y: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <h2 className='text-2xl font-semibold leading-7 text-gray-900 mb-[1.2rem]'>
              Start Date
            </h2>
           {/* <p className='mt-1 text-sm leading-6 text-gray-600'>
              Provide your personal details.
            </p>*/}
            <div className='mt-10 flex flex-col space-y-24'> 

{/* figma */}
<div className='w-full mb-6'>
  <label
    htmlFor='startDate'
    className='block text-sm font-medium leading-6 mb-[2.4rem] text-blue-500' 
  >
   How soon are you able to start work?
  </label>
  <div className='mt-2'>
    <input
      type='text'
      id='startDate'
      placeholder='Enter your answer here...'
      {...register('startDate')}
      autoComplete='react js'
      className='block w-full border-b-2 border-blue-500  text-2xl text-blue-500 placeholder:text-blue-100 py-1.5 focus:border-blue-700 focus:outline-none'
      style={{ fontSize: '2.5rem' }} 
    />
    {errors.startDate?.message && (
      <p className='mt-2 text-sm text-red-400'>
        {errors.startDate.message}
      </p>
    )}
  </div>
</div>






</div>


          </motion.div>
        )}



{currentStep === 14 && (
          <motion.div
            initial={{ y: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <h2 className='text-2xl font-semibold leading-7 text-gray-900 mb-[1.2rem]'>
              Language
            </h2>
           {/* <p className='mt-1 text-sm leading-6 text-gray-600'>
              Provide your personal details.
            </p>*/}
            <div className='mt-10 flex flex-col space-y-24'> 

{/* figma */}
<div className='w-full mb-6'>
  <label
    htmlFor='nativeLanguage'
    className='block text-sm font-medium leading-6 mb-[2.4rem] text-blue-500' 
  >
  What is Your Native Language?
  </label>
  <div className='mt-2'>
    <input
      type='text'
      id='nativeLanguage'
      placeholder='Enter your answer here...'
      {...register('nativeLanguage')}
      autoComplete='react js'
      className='block w-full border-b-2 border-blue-500  text-2xl text-blue-500 placeholder:text-blue-100 py-1.5 focus:border-blue-700 focus:outline-none'
      style={{ fontSize: '2.5rem' }} 
    />
    {errors.nativeLanguage?.message && (
      <p className='mt-2 text-sm text-red-400'>
        {errors.nativeLanguage.message}
      </p>
    )}
  </div>
</div>






</div>


          </motion.div>
        )}



{currentStep === 15 && (
          <motion.div
            initial={{ y: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <h2 className='text-2xl font-semibold leading-7 text-gray-900 mb-[1.2rem]'>
              English
            </h2>
           {/* <p className='mt-1 text-sm leading-6 text-gray-600'>
              Provide your personal details.
            </p>*/}
            <div className='mt-10 flex flex-col space-y-24'> 

{/* First Name */}
<div className='w-full mb-6'>
  <label
    htmlFor='frameworks'
    className='block text-sm font-medium leading-6 mb-[2.4rem] text-blue-500' 
  >
   Do you speak English?
  </label>

    <div className='flex flex-col space-y-4'>
      {options9.map((option, index) => (
        <div
          key={index}
          onClick={() => handleSelect9(option.label)}
          className={`flex items-center justify-between w-120 p-4 border border-blue-300 rounded-lg cursor-pointer transition-colors duration-300 
          ${selectedOption9 === option.label ? 'bg-blue-200' : 'bg-blue-100'} hover:bg-blue-200`} // Hover and select states
          style={{ borderRadius: '0.5rem', fontSize: '1.9rem' }}
        >
          <div className='flex items-center'>
            <div className='flex items-center justify-center w-24 h-24 bg-white text-blue-700 border border-blue-300 rounded-full mr-16'>
              {option.letter}
            </div>
            <span className='text-blue-700'>{option.label}</span>
          </div>
          {selectedOption9 === option.label && (
            <FaCheck className='w-18 h-18 text-blue-700' /> // Adding tick icon when selected
               
          
          )}
        </div>
      ))}
    </div>

</div>






</div>


          </motion.div>
        )}




{currentStep === 16 && (
          <motion.div
            initial={{ y: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <h2 className='text-2xl font-semibold leading-7 text-gray-900 mb-[1.2rem]'>
              Time Zone
            </h2>
           {/* <p className='mt-1 text-sm leading-6 text-gray-600'>
              Provide your personal details.
            </p>*/}
            <div className='mt-10 flex flex-col space-y-24'> 


<div className='w-full mb-6'>
  <label
    htmlFor='timeZone'
    className='block text-sm font-medium leading-6 mb-[2.4rem] text-blue-500' 
  >
   What is your timezone?
  </label>
  <div className='mt-2'>
    <input
      type='text'
      id='timeZone'
      placeholder='Enter your answer here...'
      {...register('timeZone')}
      autoComplete='react js'
      className='block w-full border-b-2 border-blue-500  text-2xl text-blue-500 placeholder:text-blue-100 py-1.5 focus:border-blue-700 focus:outline-none'
      style={{ fontSize: '2.5rem' }} 
    />
    {errors.timeZone?.message && (
      <p className='mt-2 text-sm text-red-400'>
        {errors.timeZone.message}
      </p>
    )}
  </div>
</div>


</div>

          </motion.div>
        )}



{currentStep === 17 && (
          <motion.div
            initial={{ y: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <h2 className='text-2xl font-semibold leading-7 text-gray-900 mb-[1.2rem]'>
              Salary Expectations
            </h2>
           {/* <p className='mt-1 text-sm leading-6 text-gray-600'>
              Provide your personal details.
            </p>*/}
            <div className='mt-10 flex flex-col space-y-24'> 


<div className='w-full mb-6'>
  <label
    htmlFor='salary'
    className='block text-sm font-medium leading-6 mb-[2.4rem] text-blue-500' 
  >
   What are your Salary Expectations?
  </label>
  <div className='mt-2'>
    <input
      type='text'
      id='salary'
      placeholder='Enter your answer here...'
      {...register('salary')}
      autoComplete='react js'
      className='block w-full border-b-2 border-blue-500  text-2xl text-blue-500 placeholder:text-blue-100 py-1.5 focus:border-blue-700 focus:outline-none'
      style={{ fontSize: '2.5rem' }} 
    />
    {errors.salary?.message && (
      <p className='mt-2 text-sm text-red-400'>
        {errors.salary.message}
      </p>
    )}
  </div>
</div>


</div>

          </motion.div>
        )}




{currentStep === 18 && (
          <motion.div
            initial={{ y: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <h2 className='text-2xl font-semibold leading-7 text-gray-900 mb-[1.2rem]'>
              Position
            </h2>
           {/* <p className='mt-1 text-sm leading-6 text-gray-600'>
              Provide your personal details.
            </p>*/}
            <div className='mt-10 flex flex-col space-y-24'> 

{/* First Name */}
<div className='w-full mb-6'>
  <label
    htmlFor='frameworks'
    className='block text-sm font-medium leading-6 mb-[2.4rem] text-blue-500' 
  >
   Which of the following are you applying for?

  </label>

    <div className='flex flex-col space-y-4'>
      {options10.map((option, index) => (
        <div
          key={index}
          onClick={() => handleSelect10(option.label)}
          className={`flex items-center justify-between w-120 p-4 border border-blue-300 rounded-lg cursor-pointer transition-colors duration-300 
          ${selectedOption10 === option.label ? 'bg-blue-200' : 'bg-blue-100'} hover:bg-blue-200`} // Hover and select states
          style={{ borderRadius: '0.5rem', fontSize: '1.9rem' }}
        >
          <div className='flex items-center'>
            <div className='flex items-center justify-center w-24 h-24 bg-white text-blue-700 border border-blue-300 rounded-full mr-16'>
              {option.letter}
            </div>
            <span className='text-blue-700'>{option.label}</span>
          </div>
          {selectedOption10 === option.label && (
            <FaCheck className='w-18 h-18 text-blue-700' /> // Adding tick icon when selected
               
          
          )}
        </div>
      ))}
    </div>

</div>






</div>


          </motion.div>
        )}



{currentStep === 19 && (
          <motion.div
            initial={{ y: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <h2 className='text-2xl font-semibold leading-7 text-gray-900 mb-[1.2rem]'>
              Wire Transfer
            </h2>
           {/* <p className='mt-1 text-sm leading-6 text-gray-600'>
              Provide your personal details.
            </p>*/}
            <div className='mt-10 flex flex-col space-y-24'> 


<div className='w-full mb-6'>
  <label
    htmlFor='salary'
    className='block text-sm font-medium leading-6 mb-[2.4rem] text-blue-500' 
  >
  Can your bank receive wire transfer from the USA?
  </label>
  <div className='mt-2'>
    <input
      type='text'
      id='wireTransfer'
      placeholder='Enter your answer here...'
      {...register('wireTransfer')}
      autoComplete='react js'
      className='block w-full border-b-2 border-blue-500  text-2xl text-blue-500 placeholder:text-blue-100 py-1.5 focus:border-blue-700 focus:outline-none'
      style={{ fontSize: '2.5rem' }} 
    />
    {errors.wireTransfer?.message && (
      <p className='mt-2 text-sm text-red-400'>
        {errors.wireTransfer.message}
      </p>
    )}
  </div>
</div>


</div>

          </motion.div>
        )}













{currentStep === 20 && (
        
          <motion.div
            initial={{ y: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >

            <h2 className='text-2xl font-semibold leading-7 text-gray-900 mb-[1.2rem]'>
              Form Completed&nbsp;{!isExploding && ", Submit or Go back to Review"}
            </h2>

            {!isExploding ?
            <button style={{backgroundColor:"#3B82F6",padding:"1rem",color:"white",fontWeight:"700",fontSize:"1.2rem",borderRadius:"0.4rem",width:"max-content"}} 
            onClick={()=>{setIsExploding(true)}}>
                Click To Submit
            </button>
             :
             <>
            <p className='mt-1 text-sm leading-6 text-gray-600'>
              Thank you for your submission.
            </p>

             <ConfettiExplosion />
             
             </>
             }


    </motion.div>
        )}

      
      </form>

      {/* Navigation */}
      <div className='mt-8 pt-5'>


  <div  style={{display:"flex",justifyContent:"flex-end"}} className='flex items-center justify-flex-end space-x-4'> 
 
    <button
      type='button'
      style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"skyblue"}}
      onClick={prev}
      disabled={currentStep === 0}
      className='rounded bg-white px-6 py-3 text-3xl font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50'
    >
      <svg
       style={{position:"relative",top:"5px"}}
        xmlns='http://www.w3.org/2000/svg'
        fill='darkblue'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='currentColor'
        className='h-24 w-24' 
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M12 4.5l7.5 7.5h-15L12 4.5z' 
        />
      </svg>
    </button>



    <button
      type='button'
      style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"skyblue"}}
      onClick={next}
      disabled={currentStep === steps.length - 1}
      className='rounded bg-white px-6 py-3 text-3xl font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50'
    >
      <svg
       style={{position:"relative",top:"-5px"}}
        xmlns='http://www.w3.org/2000/svg'
        fill='darkblue'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='currentColor'
        className='h-24 w-24' 
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          
          d='M12 19.5l-7.5-7.5h15L12 19.5z'  
        />
      </svg>
    </button>

  </div>
</div>

    </section>
  )
}