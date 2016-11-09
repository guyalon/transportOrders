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
            '<div class="textarea-wrapper">',
            '<label for="'+ label +'">'+label+'</label>',
            '<textarea placeholder="'+placeholder+'" name="'+inputName+'" class="'+className+'" />',
            '<div class="clear"></div>',
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

    generateOrderForm();


    $('.radio-input-wrapper .button-wrapper').click(function () {
        $(this).find('input').prop('checked',true);
        $(this).find('input').trigger('change');
    });

    $(".english-only").keypress(function(event){
        var ew = event.which;
        if(ew == 32)
            return true;
        if(48 <= ew && ew <= 57)
            return true;
        if(65 <= ew && ew <= 90)
            return true;
        if(97 <= ew && ew <= 122)
            return true;
        if(ew == 13)
            return true;
        alert('Please enter only english characters - נא הזן תוכן לועזי בלבד');
        return false;
    });

    $('.radio-input-wrapper .button-wrapper input').change(function () {
        console.log('fffff')
        var value = $(this).val();
        switch (value){
            case 'both_ways':{
                $('.arrivals, .departures').show();
                break;
            };
            case 'only_from_airport':{
                $('.arrivals').show();
                $('.departures').hide();
                break;
            };
            case 'only_to_airport':{
                $('.arrivals').hide();
                $('.departures').show();
                break;
            }
        }
    })

    $('.orders-form-wrapper .input-wrapper .send-button').click(function () {

        var dataObj = {};

        if ($('#transportation_form').valid()){
            fillDataObject(dataObj);
        }

        console.log(dataObj);




    });

    

});


function generateOrderForm() {

    var airportSelectValuesArray = [{val:'fco',label:'Leonardo da Vinci - Fiumicino'},{val:'cia',label:'Ciampiano Airport'},{val:'ctp',label:'Civitavecchia Port'}]
    var nopSelectValuesArray = [{val:'1',label:'1'},{val:'2',label:'2'},{val:'3',label:'3'},{val:'4',label:'4'},{val:'5',label:'5'},{val:'6',label:'6'},{val:'7',label:'7'},{val:'8',label:'+8'}]

    // Arrivals
    $('#transportation_form .arrivals').append(components.generateInput(
        'date','date_of_arrival','תאריך נחיתה','','date-of-arrival required'));
    $('#transportation_form .arrivals').append(components.generateInput(
        'time','time_of_arrival','שעת נחיתה','נא הקש את שעת הנחיתה','time-of-arrival required'));
    $('#transportation_form .arrivals').append(components.generateSelect(
        'נחיתה בשדה תעופה / נמל','arrival_port','arrival-port',airportSelectValuesArray));
    $('#transportation_form .arrivals').append(components.generateInput(
        'text','arrival_airline_name','שם חברת התעופה/שייט','נא הקש את שם חברת התעופה/שייט','airline-name required english-only'));
    $('#transportation_form .arrivals').append(components.generateInput(
        'text','arrival_flight_number','מספר טיסה','נא הקש את מספר הטיסה','flight-number required english-only'));
    $('#transportation_form .arrivals').append(components.generateInput('text','origin','הגעה מ','נא הקש את מיקום ארץ המוצא','origin required english-only'));


    $('#transportation_form .arrivals').append($('<div class="input-wrapper"><label for="destination">יעד ברומא</label><input name="origin" id="autocomplete" placeholder="כתובת מלון או דירה ברומא" type="text" class="origin required english-only"></input></div>'));

    $('#transportation_form .arrivals').append(components.generateSelect(
        'מספר אנשים','number_of_people','number-of-people required',nopSelectValuesArray ));


    // Departure
    $('#transportation_form .departures').append(components.generateInput(
        'date','date_of_departure','מועד המראה','','date-of-departure required'));
    $('#transportation_form .departures').append(components.generateInput(
        'time','time_of_flight','שעת המראה','נא הקש את שעת ההמראה','time-of-departure required'));
    $('#transportation_form .departures').append(components.generateSelect(
        'נחיתה בשדה תעופה / נמל','departure_port','departure-port required',airportSelectValuesArray));
    $('#transportation_form .departures').append(components.generateInput(
        'text','departure_airline_name','שם חברת התעופה/שייט','נא הקש את שם חברת התעופה/שייט','airline-name required english-only'));
    $('#transportation_form .departures').append(components.generateInput(
        'text','departure_flight_number','מספר טיסה','נא הקש את מספר הטיסה','flight-number required english-only'));
    $('#transportation_form .departures').append($('<div class="input-wrapper"><label for="pickup_location">כתובת איסוף</label><input name="pickup_location" id="autocomplete2" placeholder="כתובת מלון או דירה ברומא"  type="text" class="pickup-location required english-only"></input></div>'));

    $('#transportation_form .departures').append(components.generateInput(
        'text','final_destination','יעד סופי','מיקום יעד סופי','final-destination required english-only'));
    $('#transportation_form .departures').append(components.generateInput(
        'time','pickup_time','שעת איסוף','','time-of-pickup required'));
    $('#transportation_form .departures').append(components.generateSelect(
        'מספר אנשים','departure_number_of_people','number-of-people required',nopSelectValuesArray ));



    $('#transportation_form .personal-details').append(components.generateInput(
        'text','full_name','שם מלא','נא הקש את שמך המלא באנגלית','full-name required english-only'));
    $('#transportation_form .personal-details').append(components.generateInput(
        'phone','rome_phone_number','מספר טלפון ברומא','נא הקש את מספר הטלפון ברומא','rome-phone-number required'));
    $('#transportation_form .personal-details').append(components.generateInput(
        'phone','israel_phone_number','מספר טלפון בישראל','נא הקש את מספר הטלפון בישראל','israel-phone-number required'));
    $('#transportation_form .personal-details').append(components.generateInput(
        'email','email','כתובת אימייל','נא הקש את כתובת האימייל','email required'));
    $('#transportation_form .personal-details').append(components.generateTextarea(
        'notes','הערות','הערות','notes'));

    $('.orders-form-wrapper').append(components.button);
}

function fillDataObject(dataObj) {

    $('.orders-form-wrapper input, .orders-form-wrapper select').each(function () {
        console.log(this);
        var item = $(this);
        dataObj[item.attr('name')] = item.val();
    });

    dataObj['transport_directions'] = $('.orders-form-wrapper input[name=transport_directions]:checked').val();

    dataObj[$('.orders-form-wrapper textarea').attr('name')] = $('.orders-form-wrapper textarea').val();

}

$.extend( $.validator.messages, {
    required: "השדה הזה הינו שדה חובה",
    remote: "נא לתקן שדה זה",
    email: "נא למלא כתובת דוא\"ל חוקית",
    url: "נא למלא כתובת אינטרנט חוקית",
    date: "נא למלא תאריך חוקי",
    dateISO: "נא למלא תאריך חוקי (ISO)",
    number: "נא למלא מספר",
    digits: "נא למלא רק מספרים",
    creditcard: "נא למלא מספר כרטיס אשראי חוקי",
    equalTo: "נא למלא את אותו ערך שוב",
    extension: "נא למלא ערך עם סיומת חוקית",
    maxlength: $.validator.format( ".נא לא למלא יותר מ- {0} תווים" ),
    minlength: $.validator.format( "נא למלא לפחות {0} תווים" ),
    rangelength: $.validator.format( "נא למלא ערך בין {0} ל- {1} תווים" ),
    range: $.validator.format( "נא למלא ערך בין {0} ל- {1}" ),
    max: $.validator.format( "נא למלא ערך קטן או שווה ל- {0}" ),
    min: $.validator.format( "נא למלא ערך גדול או שווה ל- {0}" )
} );


var autocomplete,autocomplete2;

function initAutocomplete() {
    console.log('initAutocomplete');
    // Create the autocomplete object, restricting the search to geographical
    // location types.
    autocomplete = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
        {types: ['geocode']});

    // When the user selects an address from the dropdown, populate the address
    // fields in the form.
    autocomplete.addListener('place_changed', fillInAddress);


    autocomplete2 = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */(document.getElementById('autocomplete2')),
        {types: ['geocode']});

    // When the user selects an address from the dropdown, populate the address
    // fields in the form.
    autocomplete2.addListener('place_changed', fillInAddress2);
}

function fillInAddress() {
    var place = autocomplete.getPlace();
    console.log(place);
}
function fillInAddress2() {
    var place2 = autocomplete2.getPlace();
    console.log(place2);
}

