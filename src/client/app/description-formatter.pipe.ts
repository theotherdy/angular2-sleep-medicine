import { Pipe, PipeTransform } from '@angular/core';

/*
 * Sorts out the square bracketed lecturer name in a lecture description
 * Defaults to return just the description unless the following is passed as a string pipe parameter
 * 'lecturer' = Return lecturer(')s(') name - this will be enclosed in [] with different lecturers separated by & (escaped to '&amp;')
*/

@Pipe({name: 'descriptionFormatter'})
export class DescriptionFormatterPipe implements PipeTransform {
    transform(descriptionText: string, getElement: string) {
        if(descriptionText!==null && descriptionText!==undefined) {
            if(getElement==='lecturer') {
                let contentsOfBrackets = descriptionText.slice(descriptionText.lastIndexOf('[')+1,descriptionText.lastIndexOf(']')-1);
                let lecturersToReturn = '';
                if(contentsOfBrackets.indexOf('&') !== -1) {
                    let lecturersList = contentsOfBrackets.split('&amp;');
                    let counter=1;
                    let noOfLecturers=lecturersList.length;
                    for (let lecturer of lecturersList) {
                        lecturersToReturn+=lecturer.trim();
                        if(counter === noOfLecturers-1) {
                            lecturersToReturn+=' and ';
                        } else if (counter < noOfLecturers-1) {
                            lecturersToReturn+=', ';
                        }
                        counter++;
                    }
                } else {
                    lecturersToReturn = contentsOfBrackets;
                }
                return lecturersToReturn; // descriptionText.slice(descriptionText.lastIndexOf('[')+1,descriptionText.length-1);
            } else {
                return descriptionText.slice(0,descriptionText.lastIndexOf('['));
            }
        } else {
          return descriptionText;
        }
    }
}
