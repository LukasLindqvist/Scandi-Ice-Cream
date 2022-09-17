export default function validateForm(values){
    let errors = {}
    //name field validation
    if(!values.name.trim()){
        errors.name = 'Name required'
    }

    //Email field validation
    if (! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
        errors.email = 'Email address is invalid';
      }

    //Subject field validation
    if (!values.subject.trim()){
        errors.subject =  'Subject required'
    }
    //Message field validation
    if (!values.message.trim()){
        errors.message = 'Message required'
    }

    // Success message if all fields filled, reload page after 5 seconds
    if (values.name && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email) && values.subject && values.message){
        errors.success = 'We will come back to you as soon as possible!'
        setTimeout(function() {
            window.location.reload(true);
        },5000)
    }
    return errors;
}