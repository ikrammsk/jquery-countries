

function getCountries() {

   

    $.ajax({

        url: 'http://localhost:8000/countries/',

        success: function (data, statuts, response) {
           

            console.log(data);
            // $(".btnShowCountries").html(data + "  ");
             $("#Meilleur-Pays").html(data[0]);
            $("#Pays-2").html(data[1]);
            $("#Pays-3").html(data[2]);
            $("#Pays-4").html(data[3]);
            


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





