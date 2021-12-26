export function makeList(className) {
   const list = document.createElement('li');
   if (className) list.setAttribute("class", className);
   return list;
}