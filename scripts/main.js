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

    return {
        generateInput:generateInput,
        generateSelect:generateSelect
    }
};

var components = new Components();

$(document).ready(function () {

    $('.orders-form-wrapper').append(components.generateInput('date','date_of_arrival','תאריך נחיתה','','date-of-arrival'));
    $('.orders-form-wrapper').append(components.generateInput('time','time_of_arrival','שעת נחיתה','נא הקש את שעת הנחיתה','time-of-arrival'));

    var airportSelectValuesArray = [{val:'fco',label:'Leonardo da Vinci - Fiumicino'},{val:'cia',label:'Ciampiano Airport'},{val:'ctp',label:'Civitavecchia Port'}]
    $('.orders-form-wrapper').append(components.generateSelect('נחיתה בשדה תעופה / נמל','port-select','port-select',airportSelectValuesArray));

    $('.orders-form-wrapper').append(components.generateInput('text','airline_name','שם חברת התעופה/שייט','נא הקש את שם חברת התעופה/שייט','airline-name'));
    $('.orders-form-wrapper').append(components.generateInput('text','flight_number','מספר טיסה','נא הקש את מספר הטיסה','flight-number'));
    $('.orders-form-wrapper').append(components.generateInput('text','origin','הגעה מ','נא הקש את מיקום היציאה','origin'));
    $('.orders-form-wrapper').append(components.generateInput('text','destination','יעד ברומא','כתובת מלון או דירה ברומא','destination'));


    var nopSelectValuesArray = [{val:'1',label:'1'},{val:'2',label:'2'},{val:'3',label:'3'},{val:'4',label:'4'},{val:'5',label:'5'},{val:'6',label:'6'},{val:'7',label:'7'},{val:'8',label:'+8'}]
    $('.orders-form-wrapper').append(components.generateSelect('מספר אנשים','number_of_people','number-of-people',nopSelectValuesArray ));






});