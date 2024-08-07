let day = document.getElementById('day');
let dayno = document.getElementById('dayn');
let month = document.getElementById('month');
let monthno = document.getElementById('monthn');
let year = document.getElementById('year');
let yearno = document.getElementById('yearn');
let yearout = document.getElementById('yearval');
let monthout = document.getElementById('monthval');
let dayout = document.getElementById('dayval');
let submit = document.getElementById('calage');
let ld = document.getElementById('ld');
let lm = document.getElementById('lm');
let ly = document.getElementById('ly');

// -------------chack lipe aree-------
let fub = 0;
function chacklipeYear(){
   let yval = year.value;

   if((yval % 4 === 0 && yval % 100 !== 0) || (yval % 400 === 0)){
      fub = 29;
   }else{
      fub = 28;
   }
}
//-----------------today date and month partten----------------------------
let date = new Date();
let yearto = date.getFullYear();
let monthto =1+ date.getMonth();
let dayto = date.getDate();
let months = [31,28,31,30,31,30,31,31,30,31,30,31];

// ---------------varivacation-------------------

function valition(){
   months[1] = fub;
   let monthIndex = month.value -1 ;
   // ----------year valition-------------------------
   if(year.value ===''){
      yearno.innerHTML = 'This field is required';
      year.classList.add("error")
      ly.classList.add("error")
   }else if(year.value > yearto){
      yearno.innerHTML ='Must be in the past';
      year.classList.add("error")
      ly.classList.add("error")
   }else if( year.value <=1970){
      yearno.innerHTML ='Must be in valid past';
      year.classList.add("error")
      ly.classList.add("error")

   }else{
      yearno.innerHTML ='';
      year.classList.remove("error")
      ly.classList.remove("error")

   }

// ---------------month valition------------
if(month.value ===''){
   monthno.innerHTML = 'This field is required';
   month.classList.add("error")
   lm.classList.add("error")
}else if(month.value > 12 || month.value <=0){
   monthno.innerHTML ='Must be in a valid month';
   month.classList.add("error")
   lm.classList.add("error")
}else{
   monthno.innerHTML ='';
   month.classList.remove("error")
   lm.classList.remove("error")

}


// -------------day valition---------
   if(day.value ===''){
      dayno.innerHTML = 'This field is required';
      day.classList.add("error")
      ld.classList.add("error")

   }else if(day.value <=0){
      dayno.innerHTML ='Must be a valid day';
      day.classList.add("error")
      ld.classList.add("error")
   }else if(day.value >31){
      dayno.innerHTML ='Must be a valid date';
      day.classList.add("error")
      ld.classList.add("error")
      
   }else if(day.value > months[monthIndex]){
      dayno.innerHTML ='Must be a valid date';
      day.classList.add("error")
      ld.classList.add("error")
   }else{
      dayno.innerHTML ='';
      day.classList.remove("error")
      ld.classList.remove("error")

   }

}

// ---------------calculation------------------

function age(){
   if(dayno.innerHTML =='' && monthno.innerHTML == '' && yearno.innerHTML ==''){
      
      // -------calc year----------
      
      yearout.innerHTML =yearto-year.value ;
      
      //---------------month cakc---------------
      if(monthto >  month.value){
         monthout.innerHTML = monthto - month.value;
      }else if(monthto == month.value){
      yearout.innerHTML =yearto-year.value -1;
      monthout.innerHTML = 12;         
      }else{
      monthout.innerHTML = 12-(month.value-monthto);
      yearout.innerHTML =yearto-year.value -1;

      }
      let monthin = Number(monthout.innerHTML);
      console.log(monthin)
      //----------------day calc----------
      if(dayto > day.value){
         dayout.innerHTML = dayto -day.value;
      }else if(dayto == day.value){
         
         dayout.innerHTML = 0;

      }else {
         monthout.innerHTML = monthin-1;
         dayout.innerHTML = months[(monthto -1)]-(day.value -dayto);
         console.log( months[(monthto -1)])
         console.log( months);
      }
   
   }else{}

}

