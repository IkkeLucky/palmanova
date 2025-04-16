"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

import { Doctors } from "@/constants";
import { formatDateTime } from "@/lib/utils";
import { Appointment } from "@/types/appwrite.types";

import { StatusBadge } from "../StatusBadge";
import { AppointmentModal } from "../AppointmentModal";

export const columns: ColumnDef<Appointment>[] = [
  {
    header: "#",
    cell: ({ row }) => {
      return <p className="text-14-medium ">{row.index + 1}</p>;
    },
  },
  {
    accessorKey: "patient",
    header: "Clienti",
    cell: ({ row }) => {
      const appointment = row.original;
      return <p className="text-14-medium ">{appointment.patient.name}</p>;
    },
  },
  {
    accessorKey: "patient",
    header: "nascita",
    cell: ({ row }) => {
      const appointment = row.original;
      return <p className="text-14-medium ">{appointment.patient.cumple}</p>;
    },
  },
  {
    accessorKey: "patient",
    header: "deceso data e ora",
    cell: ({ row }) => {
      const appointment = row.original;
      return <p className="text-14-medium ">{appointment.patient.deceso}</p>;
    },
  },
  {
    accessorKey: "schedule",
    header: "uscita",
    cell: ({ row }) => {
      const appointment = row.original;
      return (
        <p className="text-14-regular min-w-[100px]">
          {formatDateTime(appointment.schedule).dateTime}
        </p>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="pl-4">Cambia uscita</div>,
    cell: ({ row }) => {
      const appointment = row.original;

      return (
        <div className="flex gap-1">
          <AppointmentModal
            patientId={appointment.patient.$id}
            userId={appointment.userId}
            appointment={appointment}
            type="schedule"
            title="Schedule Appointment"
            description="Please confirm the following details to schedule."
          />
        </div>
      );
    },
  },
  {
    accessorKey: "patient",
    header: "genere",
    cell: ({ row }) => {
      const appointment = row.original;
      return <p className="text-14-medium ">{appointment.patient.gender}</p>;
    },
  },
  {
    accessorKey: "patient",
    header: "note",
    cell: ({ row }) => {
      const appointment = row.original;
      return <p className="text-14-medium ">{appointment.patient.noteagg}</p>;
    },
  },
  {
    accessorKey: "patient",
    header: "presidio",
    cell: ({ row }) => {
      const appointment = row.original;
      return <p className="text-14-medium ">{appointment.patient.presidio}</p>;
    },
  },
  {
    accessorKey: "patient",
    header: "reparto",
    cell: ({ row }) => {
      const appointment = row.original;
      return <p className="text-14-medium ">{appointment.patient.reparto}</p>;
    },
  },
  {
    accessorKey: "patient",
    header: "matricola",
    cell: ({ row }) => {
      const appointment = row.original;
      return <p className="text-14-medium ">{appointment.patient.matricola}</p>;
    },
  },
  {
    accessorKey: "patient",
    header: "cremazione",
    cell: ({ row }) => {
      const appointment = row.original;
      return <p className="text-14-medium ">{appointment.patient.cremazione}</p>;
    },
  },
  {
    accessorKey: "patient",
    header: "causa",
    cell: ({ row }) => {
      const appointment = row.original;
      return <p className="text-14-medium ">{appointment.patient.causa}</p>;
    },
  },
  {
    accessorKey: "patient",
    header: "prot",
    cell: ({ row }) => {
      const appointment = row.original;
      return <p className="text-14-medium ">{appointment.patient.prot}</p>;
    },
  },
  {
    accessorKey: "patient",
    header: "anagrafici",
    cell: ({ row }) => {
      const appointment = row.original;
      return <p className="text-14-medium ">{appointment.patient.anagrafici}</p>;
    },
  },
  {
    accessorKey: "patient",
    header: "funeraledata",
    cell: ({ row }) => {
      const appointment = row.original;
      return <p className="text-14-medium ">{appointment.patient.funeraledata}</p>;
    },
  },
  {
    accessorKey: "patient",
    header: "agenzia",
    cell: ({ row }) => {
      const appointment = row.original;
      return <p className="text-14-medium ">{appointment.patient.agenzia}</p>;
    },
  },
  {
    accessorKey: "patient",
    header: "destinazione",
    cell: ({ row }) => {
      const appointment = row.original;
      return <p className="text-14-medium ">{appointment.patient.destinazione}</p>;
    },
  },
  {
    accessorKey: "patient",
    header: "risconto",
    cell: ({ row }) => {
      const appointment = row.original;
      return <p className="text-14-medium ">{appointment.patient.risconto}</p>;
    },
  },
  {
    accessorKey: "patient",
    header: "ispezione",
    cell: ({ row }) => {
      const appointment = row.original;
      return <p className="text-14-medium ">{appointment.patient.ispezione}</p>;
    },
  },
  {
    accessorKey: "patient",
    header: "nullaosta",
    cell: ({ row }) => {
      const appointment = row.original;
      return <p className="text-14-medium ">{appointment.patient.nullaosta}</p>;
    },
  },
  {
    accessorKey: "patient",
    header: "transferimento",
    cell: ({ row }) => {
      const appointment = row.original;
      return <p className="text-14-medium ">{appointment.patient.transferimento}</p>;
    },
  },
  {
    accessorKey: "patient",
    header: "transferimentosi",
    cell: ({ row }) => {
      const appointment = row.original;
      return <p className="text-14-medium ">{appointment.patient.transferimentosi}</p>;
    },
  },
  {
    accessorKey: "patient",
    header: "necroscopica",
    cell: ({ row }) => {
      const appointment = row.original;
      return <p className="text-14-medium ">{appointment.patient.necroscopica}</p>;
    },
  },
  {
    accessorKey: "patient",
    header: "donatore",
    cell: ({ row }) => {
      const appointment = row.original;
      return <p className="text-14-medium ">{appointment.patient.donatore}</p>;
    },
  },
  {
    accessorKey: "patient",
    header: "infetta",
    cell: ({ row }) => {
      const appointment = row.original;
      return <p className="text-14-medium ">{appointment.patient.infetta}</p>;
    },
  },
  {
    accessorKey: "patient",
    header: "anatomico",
    cell: ({ row }) => {
      const appointment = row.original;
      return <p className="text-14-medium ">{appointment.patient.anatomico}</p>; 
    },
  },
  {
    accessorKey: "patient",
    header: "giudiz",
    cell: ({ row }) => {
      const appointment = row.original;
      return <p className="text-14-medium ">{appointment.patient.giudiz}</p>; 
    },
  },
  {
    accessorKey: "patient",
    header: "transporto",
    cell: ({ row }) => {
      const appointment = row.original;
      return <p className="text-14-medium ">{appointment.patient.transporto}</p>;
    },
  },
  {
    accessorKey: "patient",
    header: "funerale",
    cell: ({ row }) => {
      const appointment = row.original;
      return <p className="text-14-medium ">{appointment.patient.funerale}</p>;
    },
  },
];