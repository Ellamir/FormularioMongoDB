window.onload = function(){
  $('#reg-form').submit(function() {
    event.preventDefault();
    let request = $.ajax({
        url: 'http://localhost:3000/users',
        method: "POST",
        data: {
          name: $('#fname').val(),
          lastname : $('#lname').val(),
          email : $('#email').val(),
          password : $('#pass').val()
        }
    });
    request.done(function(patito) {
      console.log(patito);
    });
    request.fail(function(req, err) {
      console.log(req);
      console.log(err);
    });
  });
};
