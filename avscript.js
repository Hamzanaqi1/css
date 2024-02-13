// var CookieDate = new Date;
// CookieDate.setFullYear(CookieDate.getFullYear() +10);
// document.cookie = 'myCookie=to_be_deleted; expires=' + CookieDate.toGMTString() + ';';

function getCookie(name) {
    var pattern = RegExp(name + "=.[^;]*")
    var matched = document.cookie.match(pattern)
    if(matched){
        var cookie = matched[0].split('=')
        return cookie[1]
    }
    return false;
  }
  function setCookie(name, value, days)
  {
    if (days)
    {
      var date = new Date();
      date.setTime(date.getTime()+days*24*60*60*1000); // ) removed
      var expires = "; expires=" + date.toGMTString(); // + added
    }
    else
      var expires = "";
    document.cookie = name+"=" + value+expires + ";path=/"; // + and " added
  }
// A $( document ).ready() block.
$(document).ready(function () {
    if(getCookie('av')==false){
       
        $('body').html(`
        <div class="av-popup">
    
            <img src="https://images.squarespace-cdn.com/content/v1/64a2eaaa7e75d473dd8be9d1/0b8b38f7-87a2-4c75-a52e-9c553106d8a0/Zacal_Isotype_Yellow-06.png?format=1500w" alt="" class="img-fluid logo"/>
    
    
            <h3 class="">You must be over 21 years old to visit this site
    
            </h3>
            <p class="">Please, verify your age to enter.
            </p>
            <div class="d-flex">
    
            <a href="#" class="av-btn btn-enter">I am over 21</a>
            <a href="#" class="av-btn btn-leave">I am under 21</a>
        </div>
        <p class="tnc">By entering this site you are agreeing to the <a href="#" class="">Terms of Use</a> and <a href="#" class="">Privacy Policy</a>.</p>
    
        </div>
       `);
    }

    $('.btn-enter').on('click',function (ev) {
        ev.preventDefault();
        var CookieDate = new Date;

        CookieDate.setFullYear(CookieDate.getFullYear() + 10);
        setCookie('av',true,10);
       window.location.reload();
    })


});