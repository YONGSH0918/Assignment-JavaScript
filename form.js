function formValidation(){

    let intM = document.registration.intakeMay;
    let intS = document.registration.intakeSept;
    let hostelY = document.registration.apply_hostely;
    let hostelN = document.registration.apply_hosteln;
	let nameE = document.registration.en_name;
    let gM = document.registration.genderM;
    let gF = document.registration.genderF;
    let addressI1 = document.registration.address1;
    let addressI2 = document.registration.address2;
    let areaF = document.registration.area;
    let postcodeN = document.registration.postcode;
    let schoolN = document.registration.school;
    
   
    if(enName(nameE)){
        if(address1Check(addressI1)){
            if(address2Check(addressI2)){
                if(areaCheck(areaF)){
                    if(schoolCheck(schoolN)){

                    }
                }
            }
        }    
    }
        
    return false;

    function enName(nameE){
        var check = /^[A-Za-z+\s]+$/;
        if(nameE.value.match(check)){
            return true;
        }else{
            alert('English name must have Alphabet character only');
            nameE.focus();
            return false;
        }

    }

    function address1Check(addressI1){
        var check = /^[\s\S]+$/;

        if(address1.value.match(check)){
            return true;
        }else{
            alert('Address must be have alphanumeric characters only');
            addressI1.focus();
            return false;
        }
    }

    function address2Check(addressI2){
        var check =  /^[A-Za-z0-9+\s]+$/;

        if(address2.value.match(check)){
            return true;
        }else{
            alert('Address must be have alphanumeric characters only');
            addressI2.focus();
            return false;
        }
    }

    function areaCheck(areaF){
        var check = /^[A-Za-z+\s]+$/;
        if(areaF.value.match(check)){
            return true;
        }else{
            alert('Area must have alphabet character only');
            areaF.focus();
            return false;
        }

    }

     function schoolCheck(schoolN){
            var check = /^[A-Za-z0-9+\s]+$/;

            if(schoolN.value.match(check)){
                return true;
            }else{
                alert('Address must be have alphanumeric characters only');
                schoolN.focus();
                return false;
            }
        }


} //end formValidation

   