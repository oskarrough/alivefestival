import { helper } from '@ember/component/helper';
import { htmlSafe, isHTMLSafe } from '@ember/string';

function escapeHtml([stringToEscape]) {
  let htmlSafeString = htmlSafe(stringToEscape);  
  return htmlSafeString;
}


function wrapFunction(stringFunction) {
  return function([string]) {
       
    if (isHTMLSafe(string)) {
      string = string.string;
    }

    string = string || '';
  
    
    return stringFunction([string]);
  };
}

export default helper(wrapFunction(escapeHtml));
