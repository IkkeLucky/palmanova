import { z } from "zod";

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  // email: z.string().email("Invalid email address"),
  // phone: z
  //   .string()
  //   .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
});

export const PatientFormValidation = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  // email: z.string().email("Invalid email address"),
  // phone: z
  //   .string()
  //   .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
  birthDate: z.coerce.date(),
  cumple: z.string().optional(),
  deceso: z.string().optional(),
  gender: z.enum(["maschile", "femminile", "altri"]),
  // address: z.string().optional(),
  // occupation: z.string().optional(),
  // emergencyContactName: z.string().optional(),
  // emergencyContactNumber: z.string().optional(),
  primaryPhysician: z.string().min(2, "Select at least one doctor"),
  // insuranceProvider: z.string().optional(),
  // insurancePolicyNumber: z.string().optional(),
  // allergies: z.string().optional(),
  // currentMedication: z.string().optional(),
  // familyMedicalHistory: z.string().optional(),
  // pastMedicalHistory: z.string().optional(),
  noteagg:  z.string().optional(),
  identificationType: z.string().optional(),
  identificationNumber: z.string().optional(),
  identificationDocument: z.custom<File[]>().optional(),
  treatmentConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: "You must consent to treatment in order to proceed",
    }),
  disclosureConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: "You must consent to disclosure in order to proceed",
    }),
  privacyConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: "You must consent to privacy in order to proceed",
    }),
    presidio: z.string().optional(),
    reparto: z.string().optional(),
    cremazione: z.string().optional(),
    causa: z.string().optional(),
    prot: z.string().optional(),
    anagrafici: z.string().optional(),
    funeraledata: z.string().optional(),
    agenzia: z.string().optional(),
    destinazione: z.string().optional(),
    risconto: z.string().optional(),
    ispezione: z.string().optional(),
    nullaosta: z.string().optional(),
    transferimento: z.string().optional(),
    transferimentosi: z.string().optional(),
    necroscopica: z.string().optional(),
    donatore: z.string().optional(),
    matricola: z.string().optional(),
    infetta: z.string().optional(),
    giudiz: z.string().optional(),
    anatomico: z.string().optional(),
    transporto: z.string().optional(),
    funerale: z.string().optional(),
});

export const CreateAppointmentSchema = z.object({
  primaryPhysician: z.string().min(2, "Select at least one doctor"),
  schedule: z.coerce.date(),
  reason: z
    .string()
    .min(2, "Reason must be at least 2 characters")
    .max(500, "Reason must be at most 500 characters"),
  note: z.string().optional(),
  cancellationReason: z.string().optional(),
});

export const ScheduleAppointmentSchema = z.object({
  primaryPhysician: z.string().min(2, "Select at least one doctor"),
  schedule: z.coerce.date(),
  reason: z.string().optional(),
  note: z.string().optional(),
  cancellationReason: z.string().optional(),
});

export const CancelAppointmentSchema = z.object({
  primaryPhysician: z.string().min(2, "Select at least one doctor"),
  schedule: z.coerce.date(),
  reason: z.string().optional(),
  note: z.string().optional(),
  cancellationReason: z
    .string()
    .min(2, "Reason must be at least 2 characters")
    .max(500, "Reason must be at most 500 characters"),
});

export function getAppointmentSchema(type: string) {
  switch (type) {
    case "create":
      return CreateAppointmentSchema;
    case "cancel":
      return CancelAppointmentSchema;
    default:
      return ScheduleAppointmentSchema;
  }
}