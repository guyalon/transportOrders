/**
 * Created by guyalon on 06/11/2016.
 */


var Components = function () {



    var generateInput = function (inputType,inputName,label,placeholder,className) {

        var input = [
            '<div class="input-wrapper">',
                '<label for="'+ label +'">'+label+'</label>',
                '<input type="'+ inputType +'" placeholder="'+placeholder+'" name="'+inputName+'" class="'+className+'" />',
            '</div>'
        ].join('');
        return $(input);
    };

    var generateSelect = function (label, inputName, className, valuesArray) {


        var values = valuesArray.map(function(option){
            return '<option value="'+option.val+'">'+option.label+'</option>';
        })


        var select = [
            '<div class="input-wrapper">',
                '<label for="'+inputName+'">'+label+'</label>',
                '<select class="'+className+'" name="'+inputName+'">',
                '<option value="0">---</option>',
                values,
            '</select></div>'].join('');

        return $(select);
    }

    var buttonTemplate = [
        '<div class="input-wrapper">',
            '<button class="send-button">שלח</button>',
        '</div>'
    ].join('');


    var generateTextarea = function (inputName,label,placeholder,className) {

        var input = [
            '<div class="input-wrapper">',
            '<label for="'+ label +'">'+label+'</label>',
            '<textarea placeholder="'+placeholder+'" name="'+inputName+'" class="'+className+'" />',
            '</div>'
        ].join('');
        return $(input);
    };


    return {
        generateInput:generateInput,
        generateSelect:generateSelect,
        button:buttonTemplate,
        generateTextarea:generateTextarea
    }
};

var components = new Components();

$(document).ready(function () {

    var airportSelectValuesArray = [{val:'fco',label:'Leonardo da Vinci - Fiumicino'},{val:'cia',label:'Ciampiano Airport'},{val:'ctp',label:'Civitavecchia Port'}]
    var nopSelectValuesArray = [{val:'1',label:'1'},{val:'2',label:'2'},{val:'3',label:'3'},{val:'4',label:'4'},{val:'5',label:'5'},{val:'6',label:'6'},{val:'7',label:'7'},{val:'8',label:'+8'}]


    // Arrivals
    $('.orders-form-wrapper .arrivals').append(components.generateInput('date','date_of_arrival','תאריך נחיתה','','date-of-arrival'));
    $('.orders-form-wrapper .arrivals').append(components.generateInput('time','time_of_arrival','שעת נחיתה','נא הקש את שעת הנחיתה','time-of-arrival'));
    $('.orders-form-wrapper .arrivals').append(components.generateSelect('נחיתה בשדה תעופה / נמל','arrival-port','arrival-port',airportSelectValuesArray));
    $('.orders-form-wrapper .arrivals').append(components.generateInput('text','arrival_airline_name','שם חברת התעופה/שייט','נא הקש את שם חברת התעופה/שייט','airline-name'));
    $('.orders-form-wrapper .arrivals').append(components.generateInput('text','arrival_flight_number','מספר טיסה','נא הקש את מספר הטיסה','flight-number'));
    $('.orders-form-wrapper .arrivals').append(components.generateInput('text','origin','הגעה מ','נא הקש את מיקום היציאה','origin'));
    $('.orders-form-wrapper .arrivals').append(components.generateInput('text','destination','יעד ברומא','כתובת מלון או דירה ברומא','destination'));
    $('.orders-form-wrapper .arrivals').append(components.generateSelect('מספר אנשים','number_of_people','number-of-people',nopSelectValuesArray ));


    // Departure
    $('.orders-form-wrapper .departures').append(components.generateInput('date','date_of_departure','מועד המראה','','date-of-departure'));
    $('.orders-form-wrapper .departures').append(components.generateInput('time','time_of_flight','שעת המראה','נא הקש את שעת ההמראה','time-of-departure'));
    $('.orders-form-wrapper .departures').append(components.generateSelect('נחיתה בשדה תעופה / נמל','departure_port','departure-port',airportSelectValuesArray));
    $('.orders-form-wrapper .departures').append(components.generateInput('text','departure_airline_name','שם חברת התעופה/שייט','נא הקש את שם חברת התעופה/שייט','airline-name'));
    $('.orders-form-wrapper .departures').append(components.generateInput('text','departure_flight_number','מספר טיסה','נא הקש את מספר הטיסה','flight-number'));
    $('.orders-form-wrapper .departures').append(components.generateInput('text','pickup_location','הגעה מ','נא הקש את מיקום היציאה','origin'));
    $('.orders-form-wrapper .departures').append(components.generateInput('text','final_destination','יעד ברומא','כתובת מלון או דירה ברומא','destination'));
    $('.orders-form-wrapper .departures').append(components.generateInput('time','pickup_time','שעת איסוף','','time-of-pickup'));
    $('.orders-form-wrapper .departures').append(components.generateSelect('מספר אנשים','departure_number_of_people','number-of-people',nopSelectValuesArray ));



    $('.orders-form-wrapper .personal-details').append(components.generateInput('text','full_name','שם מלא','נא הקש את שמך המלא באנגלית','full-name'));
    $('.orders-form-wrapper .personal-details').append(components.generateInput('phone','rome_phone_number','מספר טלפון ברומא','נא הקש את מספר הטלפון ברומא','rome-phone-number'));
    $('.orders-form-wrapper .personal-details').append(components.generateInput('phone','israel_phone_number','מספר טלפון בישראל','נא הקש את מספר הטלפון בישראל','israel-phone-number'));
    $('.orders-form-wrapper .personal-details').append(components.generateInput('email','email','כתובת אימייל','נא הקש את כתובת האימייל','email'));
    $('.orders-form-wrapper .personal-details').append(components.generateTextarea('notes','הערות','הערות','notes'));


    $('.orders-form-wrapper').append(components.button);





});