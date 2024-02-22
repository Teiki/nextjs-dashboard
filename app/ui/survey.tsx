'use client'

import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { useState, Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import styles from '@/app/ui/form.module.css';
import {useForm} from 'react-hook-form';
import EventSurveyDetails from '@/app/ui/event-survey-details'

const events = [
  { id: 1, name: "Cinéma, Théatre, Festival", unavailable: false },
  { id: 2, name: "Piscine", unavailable: false },
  { id: 3, name: "Banc de sable", unavailable: false },
]

const onSubmit = (data:any) => {
  // Soumettre les données du formulaire à votre backend
  console.log(data);
};

export default function Survey() {
  const [selectedPerson, setSelectedPerson] = useState(events[0])
  const [selected, setSelected] = useState(null)
  return (
    <div
      className={`${lusitana.className}  leading-none text-black`}
    >
      <div className="float: left"><p className="text-[44px]">Information générales</p>
        <label>Type de l'événement*</label>
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative mt-1">
            <Listbox.Button className="  w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selected ? selected.name : "Sélectionner un événement"}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                {events.map((event, eventIdx) => (
                  <Listbox.Option
                    key={eventIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                      }`
                    }
                    value={event}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                            }`}
                        >
                          {event.name}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>

        <div>
          <label>Lieu</label>
          <input type="text" placeholder="Lieu de mon événement" />
        </div>
      </div>
      <div className="float: right">
        <div>
          <label>Nom de l'événement</label>
          <input type="text" placeholder="Nom de mon événement" />
        </div>

        <div>
          <label>Date</label>
          <input type="date" placeholder="Date(s) de l'événements" />
        </div>
      </div>

      <div className="width : 100%">
        <label>Description</label>
        <textarea name="message" placeholder="Description de l'événement"></textarea>
      </div>


      {selected && <EventSurveyDetails />}
    </div>
  );
}
