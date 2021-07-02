var today = moment();
$('#currentDay').text(today.format('MMMM Do YYYY, h:mm a'));

//Retrieve Saved Plans
function returnPlans (){
    var storedPlans = JSON.parse(localStorage.getItem('savedPlans'));
    console.log(storedPlans)
    if (storedPlans !== null){
        for (i=0; i < storedPlans.length; i++) {
            retrievedPlans = storedPlans[i];
            plans = retrievedPlans.plans;
            hour = retrievedPlans.hour;
        }
    }
}



//Save Plans to local Storage 
var saveBtn = $(".saveBtn")

saveBtn.on("click",function () {    
    var hour = $(this).parent().attr("id");
    console.log(hour)
    var plans = $(this).siblings(".plans").val() 
    
    var savedPlans = {
        hour: hour,
        plans: plans,
    }
    console.log(savedPlans)
    localStorage.setItem('savedPlans',JSON.stringify(savedPlans));
})



//Color Coding Function 
