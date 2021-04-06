

function getCountries() {

   

    $.ajax({

        url: 'http://localhost:8000/countries/',

        success: function (data, statuts, response) {
           

            console.log(data);
            $("#Meilleur-Pays").show(data[0]);
            $("#Pays-2").show(data[1]);
            $("#Pays-3").show(data[2]);
            $("#Pays-4").show(data[3]);
            


        }
    });





}

$(
    function () {

        $(".btnShowCountries").click(function () {

            
            getCountries();

        });

    }
)





