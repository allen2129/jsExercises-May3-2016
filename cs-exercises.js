/************************************/
/*  Conditional Statement Exercises */
/************************************/

/*
  Create a function named 'example' with one parameter.
  Name the parameter anything you want
  Return "true" if the parameter is true, otherwise do nothing
  ie:
    exampleTwo(true) -> "true"
*/
function exampleTwo(flag) {
  if (flag) {
    return "true";
  }
}

/*
  Create a function named 'checkBirthday' with one parameter.
  Name the parameter anything you want
  Return "It's you're birthday!" if the parameter is true, otherwise do nothing
  ie:
    checkBirthday(true) -> "It's you're birthday!"
*/
function checkBirthday(May){
  if (May){
    return "Its you're birthday!";
  }
}

/*
  Create a function named 'checkHoliday' with one parameter.
  Name the parameter anything you want
  Return "It's time to go to school!" if the parameter is false, otherwise do nothing
  ie:
    checkHoliday(true) -> "It's time to go to school!"
*/
function checkHoliday(March){
  if (March){
    return "Its time to go to school";
  }
}

/*
  Create a function named 'light' with one parameter.
  Name the parameter anything you want
  Return "Turn light off" if the parameter is true, otherwise return "Turn light on"
  ie:
    light(true) -> "Turn light off"
    light(false) -> "Turn light on"
*/
function light(dark){
  if (dark){
    return "turn light off";
  }
  else{
    return "Turn light on";
  }
}

/*
  Create a function named 'engine' with two parameters.
  Name the parameters anything you want
  Return "Rev up" if the parameter is true, otherwise return "Shutdown"
  ie:
    engine(true, true) -> "Rev up"
    engine(true, false) -> "Shutdown"
    engine(false, true) -> "Shutdown"
    engine(false, false) -> "Shutdown"
*/
function engine(speed,slow){
  if (speed){
    return "Rev up";
  }
  if (slow){
    return "Shutdown";
  }
  else{
    return "Shutdown";
  }
}

/*
  Create a function named 'gradeScore' with one parameter.
  Name the parameter anything you want
  Return "A" if the parameter is greater than 90, "B" if the parameter is greater than 80, otherwise return false
  ie:
    gradeScore(91) -> "A"
    gradeScore(90) -> "B"
    gradeScore(81) -> "B"
    gradeScore(80) -> "C"
*/
function gradeScore(grade){
  if (grade) > 90{
  return "A";
  }
  if (grade) > 80{
  return "B";
  }
  else{
    return "false";
  }
}

/*
  Create a function named 'imDone' with three parameters.
  Name the parameters anything you want
  Return "yes" if at least two parameters are true, otherwise return "no"
  ie:
    imDone(true, true, true) -> "yes"
    imDone(true, true, false) -> "yes"
    imDone(true, false, true) -> "yes"
    imDone(false, true, true) -> "yes"
    imDone(true, false, false) -> "no"
    imDone(false, true, false) -> "no"
    imDone(false, false, true) -> "no"
    imDone(false, false, false) -> "no"
*/
function imDone(){
  
}