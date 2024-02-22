'use client'

import { ChangeEvent, useState } from 'react';

import EventFormData from '@/app/interfaces/event-form-data'

export default function EventSurveyDetails() {
    const [formData, setFormData] = useState<EventFormData>({
        eventName: "",
        eventDate: "",
        eventLocation: "",
        eventDescription: "",
        eventPlace: "",
        eventDoc : undefined
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const files = (e.target as HTMLInputElement).files;
      
        if (files) {
          setFormData((prevState) => ({
            ...prevState,
            images: files,
          }));
        }
      };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Logique de soumission du formulaire
        console.log('Données du formulaire :', formData);
        // Ici, vous pouvez envoyer les données du formulaire à votre API, par exemple
    };

    return (
        <>
            <h2>Informations colonne de gauche</h2>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <div className="column">
                        <div className="form-group">
                            <label htmlFor="event-name">Thème :</label>
                            <input
                                type="text"
                                id="event-name"
                                name="eventName"
                                value={formData.eventName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="event-date">Horaires de l'événement :</label>
                            <input
                                type="time"
                                id="event-date"
                                name="eventDate"
                                value={formData.eventDate}
                                onChange={handleInputChange}
                                placeholder="Quel horaire de l'événement"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="event-location">Artiste, représentation :</label>
                            <input
                                type="text"
                                id="event-location"
                                name="eventLocation"
                                value={formData.eventLocation}
                                onChange={handleInputChange}
                                placeholder="Quel est l'artiste qui se produit?"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="event-location">Places :</label>
                            <input
                                type="number"
                                id="event-place"
                                name="eventPlace"
                                value={formData.eventPlace}
                                onChange={handleInputChange}
                                placeholder="Combien il y a-t-il de places?"
                                required
                            />
                        </div>
                    </div>
                    <div className="column">
                        <div className="form-group">
                            <label htmlFor="event-description">Autre :</label>
                            <textarea
                                id="event-description"
                                name="eventDescription"
                                value={formData.eventDescription}
                                onChange={handleInputChange}
                                rows={2}
                                placeholder="Informations complémentaires"
                                required
                            ></textarea>
                        </div>
                    </div>
                    <div className="column">
                        <div className="form-group">
                            <input type="file" name="Document à télécharger :"
                            onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>
                <button type="submit">Créer l'événement</button>
            </form>
        </>
    );
}
