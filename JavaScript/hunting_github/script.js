$(document).ready(function(){
    $('button').click(function(){
        $.get("https://api.github.com/users/Valentin-cruz", function(data){
        var myName = data.name
        $('h2').html(myName)
        })
    })
})   