
import StatCard from '@/components/StatCard'
import {columns} from '@/components/table/columns'
import {DataTable} from '@/components/table/DataTable'
import { getRecentAppointmentsList } from '@/lib/actions/appointment.actions'
import Image from 'next/image'
import Link from 'next/link'


const Admin = async () => {

  const appointments = await getRecentAppointmentsList()

  return (
    <div className='mx-auto flex max-w-7xl flex-col space-y-14'>
      <header className='admin-header'>
        <Link href="/" className='cursor-pointer flex gap-4'>
            <Image 
                src="/assets/images/barbarablogo.jpg"
                alt='Logo'
                width={162}
                height={32}
                className='h-8 w-fit'
            />
            <p className='text-16-semibold'>Torna indietro</p>
        </Link>
        <p className='text-16-semibold'>Admin Dashboard</p>
      </header>

      <main className='admin-main'>
        <section className='w-full space-y-4'>
            <h1 className='header'>Benvenuto al registro</h1>
            <p className='text-dark-700'>Tutte le inserimenti</p>
        </section>

        {/* <section className='admin-stat'>
            <StatCard 
                type="appointments"
                count={appointments.scheduledCount}
                label="Scheduled appointment"
                icon="/assets/icons/appointments.svg"
            />
            <StatCard 
                type="pending"
                count={appointments.pendingCount}
                label="Pending appointment"
                icon="/assets/icons/pending.svg"
            />
            <StatCard 
                type="cancelled"
                count={appointments.cancelledCount}
                label="Cancelled appointment"
                icon="/assets/icons/cancelled.svg"
            />
        </section> */}

        <DataTable columns={columns} data={appointments.documents} />
      </main>
    </div>
  )
}

export default Admin
