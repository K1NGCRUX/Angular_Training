import { AbstractControl, ValidationErrors } from "@angular/forms";

export function noNameSpaceValidator(control : AbstractControl) : ValidationErrors | null {
    if(control.value != null && control.value.indexOf(' ') != -1)
    {
        return {NameSpace : true};
    }
    else
    {
        return null;
    }
}