import  AppointmentForm  from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";
import Image from "next/image";
import * as Sentry from '@sentry/nextjs'
import Link from "next/link";

export default async function NewAppointment({params: {userId}}: SearchParamProps) {

  const patient = await getPatient(userId);

  Sentry.metrics.set("user_view_new-appointment", patient.name);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
        <Link href="/" className='cursor-pointer'>
          <Image
            src="/assets/images/barbarablogo.jpg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />
        </Link>

          <AppointmentForm 
            type="create"
            userId={userId}
            patientId={patient.$id}
          />

            <p className="copyright mt-10 py-12">
            2024 BBGestore
            </p>
            
        </div>
      </section>

      <Image 
        src="/assets/images/appointment-img.png"
        height={1000}
        width={1000}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
}
