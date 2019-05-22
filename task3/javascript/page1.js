var year = 2016;
var month = 2;
var dayCount;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        dayCount = 31+":it is a leap year";
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        dayCount = 30+"it is not a leap year";
        break;
    case 2:
        if ((year % 4 == 0) || (year % 400 == 0))
            dayCount = 29+":it is a leap year";

        else
            dayCount = 28+":it is not a leap year";
        break;
    default:
        dayCount = -1; 
}
 
document.write(dayCount); 