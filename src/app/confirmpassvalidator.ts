import { AbstractControl } from "@angular/forms";

export function validmatchpassword(control:AbstractControl){
    let password=control.get(' pass')?.value;
    let confirmpassword=control.get('cpass')?.value;
    if(password!=confirmpassword){return {validmatchpassword:true}}
    return null;

}