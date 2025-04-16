"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl } from "@/components/ui/form"
import CustomFormField from "../CustomFormField"
import SubmitButton from "../SubmitButton"
import { useState } from "react"
import { PatientFormValidation, UserFormValidation } from "@/lib/validation"
import { useRouter } from "next/navigation"
import { createUser, registerPatient } from "@/lib/actions/patient.actions"
import { FormFieldType } from "./PatientForm"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { Doctors, GenderOptions, IdentificationTypes, PatientFormDefaultValues } from "@/constants"
import { Label } from "../ui/label"
import { SelectItem } from "@/components/ui/select";
import Image from "next/image"
import FileUploader from "../FileUploader"
 

 
const RegisterForm = ({user}: {user: User}) => {

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof PatientFormValidation>>({
    resolver: zodResolver(PatientFormValidation),
    defaultValues: {
      ...PatientFormDefaultValues,
      name: "",
      // email: "",
      // phone: "",
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof PatientFormValidation>) {
    setIsLoading(true);

    let formData;

    if (values.identificationDocument && values.identificationDocument.length > 0) {
      const blobFile = new Blob([values.identificationDocument[0]], {
        type: values.identificationDocument[0].type,
      })

      formData = new FormData();
      formData.append('blobFile', blobFile);
      formData.append('fileName', values.identificationDocument[0].name)
    }

    try {
      const patientData = {
        ...values,
        userId: user.$id,
        birthDate: new Date(values.birthDate),
        identificationDocument: formData,
      }

      // @ts-ignore
      const patient = await registerPatient(patientData);

      if(patient) router.push(`/patients/${user.$id}/new-appointment`)

    } catch (error) {
      console.log(error);
    }

    setIsLoading(false)
  }


  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12 flex-1">
            <section className="space-y-4">
                <h1 className="header">Benvenuto</h1>
                <p className="text-dark-700">Inserisci i dati delle salme</p>
            </section>

            <section className="space-y-6">
              <div className="mb-9 space-y-1">
                <h2 className="sub-header">Informazione personale</h2>
              </div>
            </section>

            <CustomFormField 
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="name"
              label="Nome e cognome"
              placeholder="Mario Rossi"
              iconSrc="/assets/icons/user.svg"
              iconAlt="user"
            />
            
            {/* <div className="flex flex-col gap-6 xl:flex-row">
              <CustomFormField 
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="email"
                label="Email"
                placeholder="johndoe@gmail.com"
                iconSrc="/assets/icons/email.svg"
                iconAlt="email"
              />
              <CustomFormField 
                fieldType={FormFieldType.PHONE_INPUT}
                control={form.control}
                name="phone"
                label="Telefono"
                iconAlt="(333) 333-3333"
              />
            </div> */}


            {/* <div className="flex flex-col gap-6 xl:flex-row">
              <CustomFormField 
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="address"
                  label="Address"
                  placeholder="via Roma 70"
                />
                <CustomFormField 
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="occupation"
                  label="Occupazioni"
                  placeholder="Avvocato"
                />
            </div> */}


              {/* <section className="space-y-6">
                <div className="mb-9 space-y-1">
                  <h2 className="sub-header">Informazione Medica</h2>
                </div>
              </section> */}

              <div className="flex flex-col gap-6 xl:flex-row">
              <CustomFormField 
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="cumple"
                  label="Data di nascita"
                  placeholder="Inserisci numerico"
                /> 

                <CustomFormField 
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="deceso"
                  label="Data e ora di deceso"
                  placeholder="Inserisci numerico"
                />
              </div>

              <div className="flex flex-col gap-6 xl:flex-row">
              <CustomFormField 
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="prot"
                  label="N. PROT( 1,2,3...)"
                  placeholder="Inserisci"
                /> 

                <CustomFormField 
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="anagrafici"
                  label="DATI ANAGRAFICI"
                  placeholder="Inserisci"
                />
              </div>

            <div className="flex flex-col gap-6 xl:flex-row">
            {/* <CustomFormField 
                fieldType={FormFieldType.DATE_PICKER}
                control={form.control}
                name="birthDate"
                label="Data di nascita"
              /> 
              if we ever want to do datepicker again, here we have an example */}
             
             <CustomFormField 
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="noteagg"
                  label="Note aggiuntive"
                  placeholder="Note"
                />

              <CustomFormField 
                fieldType={FormFieldType.SKELETON}
                control={form.control}
                name="gender"
                label="Genero"
                renderSkeleton={(field) => (
                  <FormControl>
                    <RadioGroup className="flex h-11 gap-6 xl:justify-between" onValueChange={field.onChange} defaultValue={field.value}>
                      {GenderOptions.map((option) => (
                        <div key={option} className="radio-group">
                          <RadioGroupItem value={option} id={option} />
                          <Label htmlFor={option} className="cursor-pointer">
                            {option}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </FormControl>
                )}
              />
            </div>

              <CustomFormField 
                  fieldType={FormFieldType.SELECT}
                  control={form.control}
                  name="primaryPhysician"
                  label="Servizio desiderato"
                  placeholder="Seleziona un servizio"
              >
                {Doctors.map((doctor) => (
                  <SelectItem key={doctor.name} value={doctor.name}>
                    <div className="flex cursor-pointer items-center gap-2">
                      <Image 
                        src={doctor.image}
                        width={32}
                        height={32}
                        alt={doctor.name}
                        className="rounded-full border border-dark-500"
                      />
                      <p>{doctor.name}</p>
                    </div>
                  </SelectItem>
                ))}
              </CustomFormField>

              <div className="flex flex-col gap-6 xl:flex-row">
              <CustomFormField 
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="funeraledata"
                  label="FUNERALE DATA/ORA"
                  placeholder="Inserisci"
                />
                <CustomFormField 
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="agenzia"
                  label="AGENZIA FUNEBRE"
                  placeholder="Inserisci"
                />
            </div>

            <div className="flex flex-col gap-6 xl:flex-row">
              <CustomFormField 
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="destinazione"
                  label="DESTINAZIONE"
                  placeholder="Inserisci"
                />
                <CustomFormField 
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="risconto"
                  label="RISCONTRO DIAGNOSTICO SI/NO"
                  placeholder="Inserisci"
                />
            </div>

            <div className="flex flex-col gap-6 xl:flex-row">
              <CustomFormField 
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="ispezione"
                  label="ISPEZIONE CADAVERICA SI/NO"
                  placeholder="Inserisci"
                />
                <CustomFormField 
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="nullaosta"
                  label="NULLA-OSTA SI/NO"
                  placeholder="Inserisci"
                />
            </div>

            <div className="flex flex-col gap-6 xl:flex-row">
              <CustomFormField 
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="transferimento"
                  label="TRASFERIMENTO SI/NO"
                  placeholder="Inserisci"
                />
                <CustomFormField 
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="transferimentosi"
                  label="SI: DATA ORA E DESTINAZIONE"
                  placeholder="Inserisci"
                />
            </div>

              <div className="flex flex-col gap-6 xl:flex-row">
              <CustomFormField 
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="presidio"
                  label="Presidio c,m,b"
                  placeholder="Inserisci"
                />
                <CustomFormField 
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="reparto"
                  label="Reparto"
                  placeholder="Inserisci"
                />
            </div>
            
              <div className="flex flex-col gap-6 xl:flex-row">
              <CustomFormField 
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="cremazione"
                  label="CREMAZIONE SI/NO"
                  placeholder="Inserisci"
                />
                <CustomFormField 
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="causa"
                  label="CAUSA DECESSO"
                  placeholder="Inserisci"
                />
            </div>

            <section className="space-y-6">
                <div className="mb-9 space-y-1">
                  <h2 className="sub-header">VISITA NECROSCOPICA</h2>
                </div>
              </section>

              <div className="flex flex-col gap-6 xl:flex-row">
              <CustomFormField 
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="necroscopica"
                    label="NOME E COGNOME MEDICO + ORA"
                    placeholder="Inserisci"
                  />
                  <CustomFormField 
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="donatore"
                    label="DONATORE ORGANI SI/NO"
                    placeholder="Inserisci"
                  />
            </div>

            <div className="flex flex-col gap-6 xl:flex-row">
              <CustomFormField 
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="infetta"
                    label="Infetta SI,NO"
                    placeholder="possibilità di specificazione se COVID-19 o no"
                  />
                  <CustomFormField 
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="giudiz"
                    label="Aut. Giudiz. SI,NO"
                    placeholder="Inserisci"
                  />
            </div>

            <div className="flex flex-col gap-6 xl:flex-row">
              <CustomFormField 
                    fieldType={FormFieldType.TEXTAREA}
                    control={form.control}
                    name="matricola"
                    label="Matricola"
                    placeholder="se presente"
                  />
                  <CustomFormField 
                    fieldType={FormFieldType.TEXTAREA}
                    control={form.control}
                    name="anatomico"
                    label="Resto Anatomico"
                    placeholder="nome e cognome amputato e specifica arto amputato, arto inf dx,sx arto superiore dx,sx"
                  />
            </div>

            <div className="flex flex-col gap-6 xl:flex-row">
              <CustomFormField 
                    fieldType={FormFieldType.TEXTAREA}
                    control={form.control}
                    name="transporto"
                    label="Trasporto svolto da"
                    placeholder="Barbara B o quando le agenzie le portano via"
                  />
                  <CustomFormField 
                    fieldType={FormFieldType.TEXTAREA}
                    control={form.control}
                    name="funerale"
                    label="Funerale Svolto da"
                    placeholder="agenzia funebre"
                  />
            </div>

              <section className="space-y-6">
                <div className="mb-9 space-y-1">
                  <h2 className="sub-header">Identificazioni e verificazioni</h2>
                </div>
              </section>

              <CustomFormField 
                  fieldType={FormFieldType.SELECT}
                  control={form.control}
                  name="identificationType"
                  label="Identificazione o documento"
                  placeholder="Seleziona una identificazione"
              >
                {IdentificationTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </CustomFormField>

              <CustomFormField 
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="identificationNumber"
                    label="Numero identificazione"
                    placeholder="123456789"
                  />

              <CustomFormField 
                fieldType={FormFieldType.SKELETON}
                control={form.control}
                name="identificationDocument"
                label="Seleziona una coppia del suo ID"
                renderSkeleton={(field) => (
                  <FormControl>
                    <FileUploader files={field.value} onChange={field.onChange} />
                  </FormControl>
                )}
              />

              <section className="space-y-6">
                <div className="mb-9 space-y-1">
                  <h2 className="sub-header">Consenso e Privacy</h2>
                </div>
              </section>

              <CustomFormField 
                fieldType={FormFieldType.CHECKBOX}
                control={form.control}
                name="treatmentConsent"
                label="Acconsento al trattamento"
              />
              <CustomFormField 
                fieldType={FormFieldType.CHECKBOX}
                control={form.control}
                name="disclosureConsent"
                label="Acconsento alla divulgazione delle informazioni"
              />
              <CustomFormField 
                fieldType={FormFieldType.CHECKBOX}
                control={form.control}
                name="privacyConsent"
                label="Acconsento alla politica sulla privacy"
              />
        
        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>

        </form>
    </Form>
  )
}

export default RegisterForm
