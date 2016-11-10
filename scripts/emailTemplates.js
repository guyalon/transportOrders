/**
 * Created by guyalon on 10/11/2016.
 */


var EmailTemplates = function () {
    var emailTemplate = function (_email) {
        this.emailAddress = _email.emailAddress  || '';
        this.bcc = _email.bcc  || '';
        this.cc = _email.cc  || '';
        this.subject = _email.subject  || '';
        this.content = _email.content  || '';
    };

    var travelAgency = new emailTemplate({
        emailAddress:'info@romaetravel.com',
        subject:'New Lead',
        content:[
            '<div class="email-wrapper">',
                '<div class="email-content">',
                    '<div class="greeting">Buongiorno,<br>una prenotazione è stata effettuata con I seguenti dettagli:</div>',
                    '<div class="round-direction"><h3 class="transport-title"><span class="origin">FIUMICINO AEROPORTO</span> - <span class="destination">ROMA</span></h3>',
                        '<div>Date and time of Arrival :<span class="arrival_date"></span>&nbsp;<span class="arrival_time"></span></div>',
                        '<div>Time of Shuttle reservation :<span class="shuttle_time"></span></div>',
                        '<div>Flight Number :<span class="arrival_flight_number"></span></div>',
                        '<div>Arrival at :<span class="arrival_port"></span></div>',
                        '<div>Destination :<span class="destination"></span></div>',
                        '<div>Full Name :<span class="full_name"></span></div>',
                        '<div>Phone Number :<span class="rome_phone_number"></span></div>',
                        '<div>Email :<span class="email"></span></div>',
                        '<div>Number of people :<span class="number_of_people"></span></div>',
                        '<br><div>Price:<span class="arrival_price"></span>&#8364;</div>',
                    '</div>',
                    '<div class="return-direction"><h3 class="transport-title"><span class="origin">FIUMICINO AEROPORTO</span> - <span class="destination">ROMA</span></h3>',
                        '<div>Date of  Pick up :<span class="departure_date"></span>&nbsp;<span class="departure_time"></span></div>',
                        '<div>Time of Pick up :<span class="pickup_time"></span></div>',
                        '<div>Time of Flight :<span class="time_of_flight"></span></div>',
                        '<div>Flight Number :<span class="departure_flight_number"></span></div>',
                        '<div>Pick up at :<span class="pickup_location"></span></div>',
                        '<div>Destination :<span class="final_destination"></span></div>',
                        '<div>Full Name :<span class="full_name"></span></div>',
                        '<div>Phone Number :<span class="rome_phone_number"></span></div>',
                        '<div>Email :<span class="email"></span></div>',
                        '<div>Number of people :<span class="departure_number_of_people"></span></div>',
                        '<br><div>Price:<span class="departure_price"></span>&#8364;</div>',
                    '</div>',
                '</div>',
            '</div>'
        ].join('')
    });

    return {
        travelAgency:travelAgency
    }

};
