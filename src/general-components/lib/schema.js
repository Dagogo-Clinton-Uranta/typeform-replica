//export const FormDataSchema = z.object({
//    firstName: z.string().min(1, { message: 'First name is required' }),
//    lastName: z.string().min(1, { message: 'Last name is required' }),
//    email: z.string().min(1, { message: 'Email is required' }).email({ message: 'Invalid email address' }),
//    country: z.string().min(1, { message: 'Country is required' }),
//    street: z.string().min(1, { message: 'Street is required' }),
//    city: z.string().min(1, { message: 'City is required' }),
//    state: z.string().min(1, { message: 'State is required' }),
//    zip: z.string().min(1, { message: 'Zip is required' })
//  })