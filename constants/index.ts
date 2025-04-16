export const GenderOptions = ["maschile", "femminile", "altri"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  // email: "",
  // phone: "",
  birthDate: new Date(Date.now()),
  gender: "maschile" as Gender,
  noteagg: "",
  cumple: "",
  // address: "",
  // occupation: "",
  // emergencyContactName: "",
  // emergencyContactNumber: "",
  primaryPhysician: "",
  // insuranceProvider: "",
  // insurancePolicyNumber: "",
  // allergies: "",
  // currentMedication: "",
  // familyMedicalHistory: "",
  // pastMedicalHistory: "",
  identificationType: "Altro",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
  deceso: "",
  presidio: "",
  reparto: "",
  cremazione: "",
  causa: "",
  prot: "",
  anagrafici: "",
  funeraledata: "",
  agenzia: "",
  destinazione: "",
  risconto: "",
  ispezione: "",
  nullaosta: "",
  transferimento: "",
  transferimentosi: "",
  necroscopica: "",
  donatore: "",
  matricola: "",
  infetta: "",
  giudiz: "",
  anatomico: "",
  transporto: "",
  funerale: ""
};

export const IdentificationTypes = [
  "Altro",
];

export const Doctors = [
  {
    image: "/assets/images/circolotrans.png",
    name: "servizio1",
  },
  {
    image: "/assets/images/circolotrans.png",
    name: "registro1",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};