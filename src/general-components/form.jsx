
import { useState } from 'react'
import { motion } from 'framer-motion'
import ConfettiExplosion from 'react-confetti-explosion';

import { z } from 'zod'
import { FormDataSchema } from 'src/general-components/lib/schema'
//import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import callCenter from 'src/assets/images/callcenter.png'

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




  { id: 'Step 12', name: 'Complete' }
]

export default function Form() {
  const [previousStep, setPreviousStep] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const [isExploding, setIsExploding] = useState(false);

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

        {/*currentStep === 1 && (
          <motion.div
            initial={{ y: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <h2 className='text-base font-semibold leading-7 text-gray-900'>
              Address
            </h2>
            <p className='mt-1 text-sm leading-6 text-gray-600'>
              Address where you can receive mail.
            </p>

            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
              <div className='sm:col-span-3'>
                <label
                  htmlFor='country'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Country
                </label>
                <div className='mt-2'>
                  <select
                    id='country'
                    {...register('country')}
                    autoComplete='country-name'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6'
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                  {errors.country?.message && (
                    <p className='mt-2 text-sm text-red-400'>
                      {errors.country.message}
                    </p>
                  )}
                </div>
              </div>

              <div className='col-span-full'>
                <label
                  htmlFor='street'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Street address
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    id='street'
                    {...register('street')}
                    autoComplete='street-address'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                  />
                  {errors.street?.message && (
                    <p className='mt-2 text-sm text-red-400'>
                      {errors.street.message}
                    </p>
                  )}
                </div>
              </div>

              <div className='sm:col-span-2 sm:col-start-1'>
                <label
                  htmlFor='city'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  City
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    id='city'
                    {...register('city')}
                    autoComplete='address-level2'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                  />
                  {errors.city?.message && (
                    <p className='mt-2 text-sm text-red-400'>
                      {errors.city.message}
                    </p>
                  )}
                </div>
              </div>

              <div className='sm:col-span-2'>
                <label
                  htmlFor='state'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  State / Province
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    id='state'
                    {...register('state')}
                    autoComplete='address-level1'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                  />
                  {errors.state?.message && (
                    <p className='mt-2 text-sm text-red-400'>
                      {errors.state.message}
                    </p>
                  )}
                </div>
              </div>

              <div className='sm:col-span-2'>
                <label
                  htmlFor='zip'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  ZIP / Postal code
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    id='zip'
                    {...register('zip')}
                    autoComplete='postal-code'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                  />
                  {errors.zip?.message && (
                    <p className='mt-2 text-sm text-red-400'>
                      {errors.zip.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )*/}



{currentStep === 1 && (
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
    Have you worked with any frontend frameworks before?
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



{currentStep === 2 && (
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




{currentStep === 3 && (
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




{currentStep === 4 && (
          <motion.div
            initial={{ y: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <h2 className='text-2xl font-semibold leading-7 text-gray-900 mb-[1.2rem]'>
              Github
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




{currentStep === 5 && (
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




{currentStep === 6 && (
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



{currentStep === 7 && (
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




{currentStep === 8 && (
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



{currentStep === 9 && (
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



{currentStep === 10 && (
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




{currentStep === 11 && (
        
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