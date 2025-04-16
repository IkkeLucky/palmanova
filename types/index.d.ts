/* eslint-disable no-unused-vars */

declare type SearchParamProps = {
    params: { [key: string]: string };
    searchParams: { [key: string]: string | string[] | undefined };
  };
  
  declare type Gender = "maschile" | "femminile" | "altri";
  declare type Status = "pending" | "scheduled" | "cancelled";
  
  declare interface CreateUserParams {
    name: string;
  }
  declare interface User extends CreateUserParams {
    $id: string;
  }
  
  declare interface RegisterUserParams extends CreateUserParams {
    userId: string;
    birthDate: string | undefined;
    deceso: string | undefined;
    gender: Gender;
    noteagg: string | undefined;
    cumple: string | undefined;
    uscita: string | undefined;
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
  }
  
  declare type CreateAppointmentParams = {
    userId: string;
    patient: string;
    primaryPhysician: string;
    reason: string;
    schedule: Date;
    status: Status;
    note: string | undefined;
  };
  
  declare type UpdateAppointmentParams = {
    appointmentId: string;
    userId: string;
    appointment: Appointment;
    type: string;
  };