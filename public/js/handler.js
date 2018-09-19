$(document).ready(function() {
    //Donation search 
    $("#money").on("click", function() {
        //Validates that all fields in search have values
        function validationForm() {
            var isValid = true;
            $('.form-control1').each(function() {
                if ($(this).val() === '')
                    isValid = false;
                 
            });
            return isValid;
        }
         if(validationForm() === true) {
            
            var charityType = $("#charityType").val().trim();
            var charityCity = $("#charityCity").val();
            var charityState = $("#charityState").val();
            // 'http://data.orghunter.com/v1/charitysearch?user_key=' 
            // + userKey + '&searchTerm=' + charityType + '&city='
            // + charityCity + '&state=' + charityState

            window.location = '/results?resultType=orghunter&charityCity='+charityCity+'&charityState='+charityState+'&charityType='+charityType;

            // $.get('/api/orghunter', {
            //     charityCity: charityCity,
            //     charityState: charityState,
            //     charityType: charityType
            // }, function(res) {
            //     console.log('hello');
            //     console.log(res);
            //             if(res.data.length) {
            //                 console.log(res);
            //                 //Stores API response in sessionStorage
            //                 sessionStorage.setItem('orgData', JSON.stringify(res));
            //                 //Redirects user to results page
            //                 window.location = '/results';
            //             } else {
            //                 alert('Sorry, There are no ' + charityType +
            //                 " charities in " + charityCity);
            //             }
            //        });
        } else {
            alert('All fields are required to complete your search');
        }
    });

    console.log("hi there");
    var orgData = sessionStorage.getItem('orgData'); 
    if (orgData) {
       orgData = JSON.parse(orgData); // to get it back to a JSON object
    }   
    console.log(orgData.data[0].charityName);


});