const currentDate = new Date();
module.exports.date = currentDate;
 
module.exports.getMessage = function(name){
    const hour = currentDate.getHours();
    if(hour > 16)
        return "Good evening, " + name;
    else if(hour > 10)
        return "Good afternoon, " + name;
     else if(hour > 0)
        return "Good night, " + name;
    else if(hour > 4)
        return "Good morning, " + name;
}