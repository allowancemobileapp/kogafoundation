
import { z } from 'zod';

export const RegistrationSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters long.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  organization: z.string().optional(),
  role: z.enum(['attendee', 'speaker', 'volunteer'], { required_error: 'Please select a role.' }),
  promoCode: z.string().optional(),
  terms: z.literal(true, {
    errorMap: () => ({ message: 'You must accept the terms and conditions.' }),
  }),
});
export type RegistrationFormValues = z.infer<typeof RegistrationSchema>;

export const NominationSchema = z.object({
    nominatorName: z.string().min(2, { message: "Your name must be at least 2 characters." }),
    nominatorEmail: z.string().email({ message: "Please enter a valid email." }),
    nominatorPhone: z.string().min(10, { message: "Please enter a valid phone number." }),
    nomineeName: z.string().min(2, { message: "Nominee's name must be at least 2 characters." }),
    nomineeOrg: z.string().optional(),
    nomineeRole: z.string().optional(),
    awardCategory: z.enum(['community-impact', 'youth-leadership', 'innovation-in-ministry'], { required_error: 'Please select a category.' }),
    statement: z.string().min(10, { message: "Statement must be at least 10 characters." }).max(1000, { message: "Statement must be 1000 characters or less." }),
    // Supporting documents will be handled separately as it's a file upload
});
export type NominationFormValues = z.infer<typeof NominationSchema>;

export const ElderInductionSchema = z.object({
  candidateName: z.string().min(2, { message: "Candidate's name must be at least 2 characters." }),
  candidateAge: z.coerce.number().min(50, { message: "Candidate must be at least 50 years old." }),
  candidateContact: z.string().min(10, { message: "Please enter a valid phone number." }),
  candidateChurch: z.string().min(2, { message: "Church/Ministry is required." }),
  bio: z.string().min(20, { message: "Bio must be at least 20 characters." }),
});
export type ElderInductionFormValues = z.infer<typeof ElderInductionSchema>;
