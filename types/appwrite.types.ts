import { Models } from "node-appwrite";

export interface Patient extends Models.Document {
  userId: string;
  name: string;
  noteagg: string | undefined;
  cumple: string | undefined;
  // email: string;
  // phone: string;
  birthDate: string | undefined;
  gender: Gender;
  // address: string | undefined;
  // occupation: string | undefined;
  // emergencyContactName: string | undefined;
  // emergencyContactNumber: string | undefined;
  primaryPhysician: string;
  // insuranceProvider: string | undefined;
  // insurancePolicyNumber: string | undefined;
  // allergies: string | undefined;
  // currentMedication: string | undefined;
  // familyMedicalHistory: string | undefined;
  // pastMedicalHistory: string | undefined;
  identificationType: string | undefined;
  identificationNumber: string | undefined;
  identificationDocument: FormData | undefined;
  privacyConsent: boolean;
  deceso: string | undefined;
  presidio: string | undefined;
  reparto: string | undefined;
  cremazione: string | undefined;
  causa: string | undefined;
  prot: string | undefined;
  anagrafici: string | undefined;
  funeraledata: string | undefined;
  agenzia: string | undefined;
  destinazione: string | undefined;
  risconto: string | undefined;
  ispezione: string | undefined;
  nullaosta: string | undefined;
  transferimento: string | undefined;
  transferimentosi: string | undefined;
  necroscopica: string | undefined;
  donatore: string | undefined;
  matricola: string | undefined;
  infetta: string | undefined;
  giudiz: string | undefined;
  anatomico: string | undefined;
  transporto: string | undefined;
  funerale: string | undefined;
}

export interface Appointment extends Models.Document {
  patient: Patient;
  schedule: Date;
  status: Status;
  primaryPhysician: string;
  reason: string;
  note: string;
  userId: string;
  cancellationReason: string | null;
}