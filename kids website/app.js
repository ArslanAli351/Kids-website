let head=document.querySelectorAll(".head");
let div=document.querySelectorAll("div");
let adui=document.querySelectorAll(".adui");
function UrduAlphabet1(){
div[0].innerHTML=`<div class="bimg"><div class="sta ">
<img class="Counimg" src="images/alif.webp" >
<img class="icon"onclick="Urduicon1()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
 <img class="gif" src="images/kids gif.gif" >
</div>
<button type="button" class="but btn btn-success"></button>
<button type="button" onclick="UrduAlphabet2()" class="but btn btn-success">Next</button>
</div>
`
}
function Urduicon1(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
        <source src="images/urduAduio1.opus" >
      </audio> `
}
function UrduAlphabet2(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/UrduAlphabet2.jpeg" >
  <img class="icon"onclick="Urduicon2()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick=" UrduAlphabet1()" class="but4 prebut btn btn-success">previous</button>

  <button type="button"onclick="UrduAlphabet3()" class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Urduicon2(){
    console.log("hello world")
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
        <source src="images/urduAduio2.opus" >
      </audio> `

}
function UrduAlphabet3(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/UrduAlphabet3.jpg" >
  <img class="icon"onclick="Urduicon3()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div> 
      <button type="button" onclick=" UrduAlphabet2()" class="but4 prebut btn btn-success">previous</button>
     <button type="button" onclick="UrduAlphabet4()"  class="but btn btn-success">Next</button>

     </div>
    `
  }
  function Urduicon3(){
    console.log("hello world")
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
        <source src="images/urduAduio3.opus" >
      </audio> `

}
function UrduAlphabet4(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/UrduAlphabet4.png" >
  <img class="icon"onclick="Urduicon4()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick=" UrduAlphabet3()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick="UrduAlphabet5()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Urduicon4(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
        <source src="images/urduAduio4.opus" >
      </audio> `

  }
function UrduAlphabet5(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/UrduAlphabet5.webp" >
  <img class="icon"onclick="Urduicon5()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick=" UrduAlphabet4()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick="UrduAlphabet6()"  class="but btn btn-success">Next</button>
      </div>
    `

  }
  function Urduicon5(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
        <source src="images/urduAduio5.opus" >
      </audio> `

}
function UrduAlphabet6(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/UrduAlphabet6.webp" >
  <img class="icon"onclick="Urduicon6()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick=" UrduAlphabet5()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick="UrduAlphabet7()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Urduicon6(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
        <source src="images/urduAduio6.opus" >
      </audio> `

}
function UrduAlphabet7(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/UrduAlphabet7.jpeg" >
  <img class="icon"onclick="Urduicon7()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick=" UrduAlphabet6()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick="UrduAlphabet8()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Urduicon7(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
        <source src="images/urduAduio7.opus" >
      </audio> `

}
function UrduAlphabet8(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/UrduAlphabet8.jpeg" >
  <img class="icon"onclick="Urduicon8()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick=" UrduAlphabet7()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick="UrduAlphabet9()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Urduicon8(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
        <source src="images/urduAduio8.opus" >
      </audio> `

}
function UrduAlphabet9(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/UrduAlphabet9.jpeg" >
  <img class="icon"onclick="Urduicon9()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick=" UrduAlphabet8()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick="UrduAlphabet10()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Urduicon9(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
        <source src="images/urduAduio9.opus" >
      </audio> `

}
function UrduAlphabet10(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/UrduAlphabet10.jpeg" >
  <img class="icon"onclick="Urduicon10()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick=" UrduAlphabet9()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick="UrduAlphabet11()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Urduicon10(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
        <source src="images/urduAduio10.opus" >
      </audio> `

}
function UrduAlphabet11(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/UrduAlphabet13.jpeg" >
  <img class="icon"onclick="Urduicon11()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick=" UrduAlphabet10()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick="UrduAlphabet12()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Urduicon11(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
        <source src="images/urduAduio11.opus" >
      </audio> `

}
function UrduAlphabet12(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/UrduAlphabet11.jpeg" >
  <img class="icon"onclick="Urduicon12()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="UrduAlphabet11()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick="UrduAlphabet13()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Urduicon12(){
    console.log("hello world")
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
        <source src="images/urduAduio12.opus" >
      </audio> `

}
function UrduAlphabet13(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/UrduAlphabet12.jpeg" >
  <img class="icon"onclick="Urduicon13()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="UrduAlphabet12()" class=" but4 prebut btn btn-success">previous</button>
  <button type="button" onclick="UrduAlphabet14()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Urduicon13(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
        <source src="images/urduAduio13.opus" >
      </audio> `

}
function UrduAlphabet14(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/UrduAlphabet14.jpeg" >
  <img class="icon"onclick="Urduicon14()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="UrduAlphabet13()" class=" but4 prebut btn btn-success">previous</button>
  <button type="button" onclick="UrduAlphabet15()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Urduicon14(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
        <source src="images/urduAduio14.opus" >
      </audio> `

}
function UrduAlphabet15(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/UrduAlphabet15.jpeg" >
  <img class="icon"onclick="Urduicon15()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="UrduAlphabet14()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick="UrduAlphabet16()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Urduicon15(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
        <source src="images/urduAduio15.opus" >
      </audio> `

}
function UrduAlphabet16(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/UrduAlphabet16.jpeg" >
  <img class="icon"onclick="Urduicon16()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="UrduAlphabet15()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick="UrduAlphabet17()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Urduicon16(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
        <source src="images/urduAduio16.opus" >
      </audio> `

}
function UrduAlphabet17(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/UrduAlphabet17.jpeg" >
  <img class="icon"onclick="Urduicon17()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="UrduAlphabet16()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick="UrduAlphabet18()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Urduicon17(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
        <source src="images/urduAduio17.opus" >
      </audio> `

}
function UrduAlphabet18(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/UrduAlphabet18.jpeg" >
  <img class="icon"onclick="Urduicon18()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="UrduAlphabet17()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick="UrduAlphabet19()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Urduicon18(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
        <source src="images/urduAduio18.opus" >
      </audio> `

}
function UrduAlphabet19(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/UrduAlphabet19.jpeg" >
  <img class="icon"onclick="Urduicon19()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="UrduAlphabet18()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick="UrduAlphabet20()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Urduicon19(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
        <source src="images/urduAduio19.opus" >
      </audio> `

}
function UrduAlphabet20(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/UrduAlphabet20.webp" >
  <img class="icon"onclick="Urduicon20()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="UrduAlphabet19()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick="UrduAlphabet21()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Urduicon20(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
        <source src="images/urduAduio20.opus" >
      </audio> `

}
function UrduAlphabet21(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/UrduAlphabet21.jpeg" >
  <img class="icon"onclick="Urduicon21()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="UrduAlphabet20()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick="UrduAlphabet22()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Urduicon21(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
        <source src="images/urduAduio22.opus" >
      </audio> `

}
function UrduAlphabet22(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/UrduAlphabet22.jpeg" >
  <img class="icon"onclick="Urduicon22()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="UrduAlphabet21()" class=" but4 prebut btn btn-success">previous</button>
  <button type="button" onclick="UrduAlphabet23()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Urduicon22(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
        <source src="images/urduAduio23.opus" >
      </audio> `

}function UrduAlphabet23(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/UrduAlphabet23.jpg" >
  <img class="icon"onclick="Urduicon23()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="UrduAlphabet22()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick="UrduAlphabet24()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Urduicon23(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
        <source src="images/urduAduio24.opus" >
      </audio> `

}function UrduAlphabet24(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/UrduAlphabet24.jpeg" >
  <img class="icon"onclick="Urduicon24()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="UrduAlphabet23()" class=" but4 prebut btn btn-success">previous</button>
  <button type="button" onclick="UrduAlphabet25()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Urduicon24(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
        <source src="images/urduAduio25.opus" >
      </audio> `

}
function UrduAlphabet25(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/UrduAlphabet25.jpeg" >
  <img class="icon"onclick="Urduicon25()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="UrduAlphabet24()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick="UrduAlphabet26()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Urduicon25(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
        <source src="images/urduAduio27.opus" >
      </audio> `

}
function UrduAlphabet26(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/UrduAlphabet27.jpeg" >
  <img class="icon"onclick="Urduicon26()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="UrduAlphabet25()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick="UrduAlphabet27()"  class="but btn btn-success">Next</button>
      </div>
    `
  }  function Urduicon26(){
    console.log("hello world")
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
        <source src="images/urduAduio28.opus" >
      </audio> `

}
  function UrduAlphabet27(){
    div[0].innerHTML=`<div class="bimg"><div class="sta ">
    <img class="Counimg" src="images/UrduAlphabet28.jpeg" >
    <img class="icon"onclick="Urduicon27()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
     <img class="gif" src="images/kids gif.gif" >
    </div>
    <button type="button" onclick="UrduAlphabet26()" class=" but4 prebut btn btn-success">previous</button>
    <button type="button" onclick="UrduAlphabet29()"  class="but btn btn-success">Next</button>
        </div>
      `
    }
  function Urduicon27(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
        <source src="images/urduAduio29.opus" >
      </audio> `

}
function UrduAlphabet28(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/UrduAlphabet28.jpeg" >
  <img class="icon"onclick="Urduicon28()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="UrduAlphabet27()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick="UrduAlphabet29()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Urduicon28(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
        <source src="images/urduAduio29.opus" >
      </audio> `

}function UrduAlphabet29(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/UrduAlphabet29.jpeg" >
  <img class="icon"onclick="Urduicon29()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="UrduAlphabet28()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick="UrduAlphabet30()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Urduicon29(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
        <source src="images/urduAduio30.opus" >
      </audio> `

}function UrduAlphabet30(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/UrduAlphabet30.jpeg" >
  <img class="icon"onclick="Urduicon30()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="UrduAlphabet29()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick="UrduAlphabet31()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Urduicon30(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
        <source src="images/urduAduio31.opus" >
      </audio> `

}function UrduAlphabet31(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/UrduAlphabet31.jpeg" >
  <img class="icon"onclick="Urduicon31()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="UrduAlphabet30()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick="UrduAlphabet32()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Urduicon31(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
        <source src="images/urduAduio32.opus" >
      </audio> `

}function UrduAlphabet32(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/UrduAlphabet32.jpeg" >
  <img class="icon"onclick="Urduicon32()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="UrduAlphabet31()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick="UrduAlphabet33()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Urduicon32(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
        <source src="images/urduAduio33.opus" >
      </audio> `

}function UrduAlphabet33(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/UrduAlphabet33.jpeg" >
  <img class="icon"onclick="Urduicon33()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="UrduAlphabet32()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick="UrduAlphabet34()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Urduicon33(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
        <source src="images/urduAduio34.opus" >
      </audio> `

}function UrduAlphabet34(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/UrduAlphabet34.jpeg" >
  <img class="icon"onclick="Urduicon34()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="UrduAlphabet33()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick="UrduAlphabet35()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Urduicon34(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
        <source src="images/urduAduio35.opus" >
      </audio> `

}function UrduAlphabet35(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/UrduAlphabet35.jpeg" >
  <img class="icon"onclick="Urduicon35()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="UrduAlphabet34()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick="UrduAlphabet36()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Urduicon35(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
        <source src="images/urduAduio36.opus" >
      </audio> `

}function UrduAlphabet36(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/UrduAlphabet36.jpeg" >
  <img class="icon"onclick="Urduicon36()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="UrduAlphabet35()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick="UrduAlphabet37()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Urduicon36(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
        <source src="images/urduAduio37.opus" >
      </audio> `

}function UrduAlphabet37(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/UrduAlphabet37.jpeg" >
  <img class="icon"onclick="Urduicon37()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="UrduAlphabet36()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick="UrduAlphabet38()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Urduicon37(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
        <source src="images/urduAduio38.opus" >
      </audio> `

}function UrduAlphabet38(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/UrduAlphabet38.jpeg" >
  <img class="icon"onclick="Urduicon38()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="UrduAlphabet37()" class=" but4 prebut btn btn-success">previous</button>
       <button type="button" onclick="Home()" class="but btn btn-success">Back To Home</button>

  </div>
    `
  }
  function Urduicon38(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
        <source src="images/urduAduio39.opus" >
      </audio> `

}



function EnglishWord1(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/english word 1.png" >
  <img class="icon"onclick="Englishicon1()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick=" EnglishWord2()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Englishicon1(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
        <source src="images/EnglishAduio1.opus" >
      </audio> `
}
function EnglishWord2(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
    <img class="Counimg" src="images/english word 2.jpeg" >

  <img class="icon"onclick="Englishicon2()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="EnglishWord1()" class="prebut but4 btn btn-success">previous</button>
  <button type="button" onclick=" EnglishWord3()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Englishicon2(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
        <source src="images/EnglishAduio2.opus" >
      </audio> `

}
function EnglishWord3(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/english word 3.jpeg" >
  <img class="icon"onclick="Englishicon3()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="EnglishWord2()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick=" EnglishWord4()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Englishicon3(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
    <source src="images/EnglishAduio3.opus" >
  </audio> `
}
function EnglishWord4(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/english word 4.avif" >
  <img class="icon"onclick="Englishicon4()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="EnglishWord3()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick=" EnglishWord5()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Englishicon4(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
        <source src="images/EnglishAduio4.opus" >
      </audio> `

}
function EnglishWord5(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/english word 5.jpeg" >
  <img class="icon"onclick="Englishicon5()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="EnglishWord4()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick=" EnglishWord6()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Englishicon5(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
        <source src="images/EnglishAduio5.opus" >
      </audio> `

}
function EnglishWord6(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/english word 6.jpeg" >
  <img class="icon"onclick="Englishicon6()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="EnglishWord5()" class=" but4 prebut btn btn-success">previous</button>
  <button type="button" onclick=" EnglishWord7()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Englishicon6(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
        <source src="images/EnglishAduio6.opus" >
      </audio> `

}
function EnglishWord7(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/english word 7.jpeg" >
  <img class="icon"onclick="Englishicon7()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="EnglishWord6()" class=" but4 prebut btn btn-success">previous</button>
  <button type="button" onclick=" EnglishWord8()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Englishicon7(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
        <source src="images/EnglishAduio7.opus" >
      </audio> `

}
function EnglishWord8(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/english word 8.png " >
  <img class="icon"onclick="Englishicon8()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="EnglishWord7()" class=" but4 prebut btn btn-success">previous</button>
  <button type="button" onclick=" EnglishWord9()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Englishicon8(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
    <source src="images/EnglishAduio8.opus" >
  </audio>`
}
function EnglishWord9(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/english word 9.png" >
  <img class="icon"onclick="Englishicon9()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="EnglishWord8()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick=" EnglishWord10()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Englishicon9(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
    <source src="images/EnglishAduio9.opus" >
  </audio>`

}
function EnglishWord10(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/english word 10.png" >
  <img class="icon"onclick="Englishicon10()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="EnglishWord9()" class="but btn btn-success">previous</button>
  <button type="button" onclick=" EnglishWord11()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Englishicon10(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
    <source src="images/EnglishAduio10.opus" >
  </audio>`

}
function EnglishWord11(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/english word 11.jpeg" >
  <img class="icon"onclick="Englishicon11()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="EnglishWord10()" class=" but4 prebut btn btn-success">previous</button>
  <button type="button" onclick=" EnglishWord12()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Englishicon11(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
    <source src="images/EnglishAduio11.opus" >
  </audio>`

}
function EnglishWord12(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/english word 12.jpeg" >
  <img class="icon"onclick="Englishicon12()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="EnglishWord11()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick=" EnglishWord13()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Englishicon12(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
    <source src="images/EnglishAduio12.opus" >
  </audio>`

}
function EnglishWord13(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/english word 13.jpeg" >
  <img class="icon"onclick="Englishicon13()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="EnglishWord12()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick=" EnglishWord14()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Englishicon13(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
    <source src="images/EnglishAduio13.opus" >
  </audio>`

}
function EnglishWord14(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/english word 14.png" >
  <img class="icon"onclick="Englishicon14()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="EnglishWord13()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick=" EnglishWord15()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Englishicon14(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
    <source src="images/EnglishAduio14.opus" >
  </audio>`

}
function EnglishWord15(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/english word 15.jpeg" >
  <img class="icon"onclick="Englishicon15()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="EnglishWord14()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick=" EnglishWord16()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Englishicon15(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
    <source src="images/EnglishAduio16.opus" >
  </audio>`

}
function EnglishWord16(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/english word 16.png" >
  <img class="icon"onclick="Englishicon16()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="EnglishWord15()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick=" EnglishWord17()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Englishicon16(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
    <source src="images/EnglishAduio17.opus" >
  </audio>`

}
function EnglishWord17(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/english word 17.png" >
  <img class="icon"onclick="Englishicon17()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="EnglishWord16()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick=" EnglishWord18()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Englishicon17(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
    <source src="images/EnglishAduio18.opus" >
  </audio>`

}
function EnglishWord18(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/english word 20.jpeg" >
  <img class="icon"onclick="Englishicon18()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="EnglishWord17()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick=" EnglishWord19()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Englishicon18(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
    <source src="images/EnglishAduio19.opus" >
  </audio>`

}function EnglishWord19(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/english word 21.png" >
  <img class="icon"onclick="Englishicon19()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="EnglishWord18()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick=" EnglishWord20()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Englishicon19(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
    <source src="images/EnglishAduio20.opus" >
  </audio>`

}function EnglishWord20(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/english word 22.jpeg" >
  <img class="icon"onclick="Englishicon20()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="EnglishWord19()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick=" EnglishWord21()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Englishicon20(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
    <source src="images/EnglishAduio21.opus" >
  </audio>`

}function EnglishWord21(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/english word 23.jpeg" >
  <img class="icon"onclick="Englishicon21()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="EnglishWord20()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick=" EnglishWord22()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Englishicon21(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
    <source src="images/EnglishAduio22.opus" >
  </audio>`

}function EnglishWord22(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/english word 24.jpeg" >
  <img class="icon"onclick="Englishicon22()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="EnglishWord21()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick=" EnglishWord23()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Englishicon22(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
    <source src="images/EnglishAduio27.opus" >
  </audio>`

}function EnglishWord23(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/english word 25.jpeg" >
  <img class="icon"onclick="Englishicon23()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="EnglishWord21()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick=" EnglishWord24()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Englishicon23(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
    <source src="images/EnglishAduio23.opus" >
  </audio>`

}
function EnglishWord24(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/english word 26.png" >
  <img class="icon"onclick="Englishicon24()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="EnglishWord23()" class=" but4 prebut btn btn-success">previous</button>
  <button type="button" onclick=" EnglishWord25()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Englishicon24(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
    <source src="images/EnglishAduio24.opus" >
  </audio>`

}
function EnglishWord25(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/english word 27.jpeg" >
  <img class="icon"onclick="Englishicon25()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="EnglishWord24()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick=" EnglishWord26()"  class="but btn btn-success">Next</button>
      </div>
    `
  }
  function Englishicon25(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
    <source src="images/EnglishAduio25.opus" >
  </audio>`

}function EnglishWord26(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/english word 28.jpeg" >
  <img class="icon"onclick="Englishicon26()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="EnglishWord25()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick="Home()"  class="but btn btn-success">Back To Home</button>
      </div>
    `
  }
  function Englishicon26(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
    <source src="images/EnglishAduio26.opus" >
  </audio>`

}
function MathCoun1(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/counting1.jpeg" >
  <img class="icon"onclick="Mathicon1()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
   <img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick=" MathCoun2()"  class="but btn btn-success">Next</button>
      </div>
    `
  }


  function Mathicon1(){
    div[0].innerHTML+=`<audio controls autoplay class="audio"> 
<source src="images/countingAduio1.opus" >
  </audio> `
  }
  function MathCoun2(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
 <img class="Counimg" src="images/counting2.jpeg" >
 <img class="icon"onclick="Mathicon2()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
 <img class="gif" src="images/kids gif.gif" >
  </div> 
  <button type="button" onclick="MathCoun1()" class="but4 prebut btn btn-success">previous</button>
 <button type="button" onclick=" MathCoun3()"  class="but btn btn-success">Next</button>
 </div>
 `
    }
  function Mathicon2(){
  div[0].innerHTML+=`<audio controls autoplay class="audio"> 
<source src="images/countingAduio2.opus" >
 </audio> `
 }function MathCoun3(){
 div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/counting3.jpeg" >
<img class="icon"onclick="Mathicon3()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
<img class="gif" src="images/kids gif.gif" >
 </div>
<button type="button" onclick="MathCoun2()" class="but4 prebut btn btn-success">previous</button>
 <button type="button" onclick=" MathCoun4()"  class="but btn btn-success">Next</button>
 </div>
 `
 }
 function Mathicon3(){
 div[0].innerHTML+=`<audio controls autoplay class="audio"> 
<source src="images/countingAduio3.opus" >
 </audio> `
}function MathCoun4(){
 div[0].innerHTML=`<div class="bimg"><div class="sta ">
 <img class="Counimg" src="images/counting4.png" >
 <img class="icon"onclick="Mathicon4()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
  <img class="gif" src="images/kids gif.gif" >
 </div>
  <button type="button" onclick="MathCoun3()" class="but4 prebut btn btn-success">previous</button>
 <button type="button" onclick=" MathCoun5()"  class="but btn btn-success">Next</button>
 </div>
  `
  }
function Mathicon4(){
 div[0].innerHTML+=`<audio controls autoplay class="audio"> 
<source src="images/countingAduio4.opus" >
 </audio> `
 }function MathCoun5(){
div[0].innerHTML=`<div class="bimg"><div class="sta ">
 <img class="Counimg" src="images/counting5.jpeg" >
  <img class="icon"onclick="Mathicon5()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
 <img class="gif" src="images/kids gif.gif" >
  </div>
<button type="button" onclick="MathCoun4()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick=" MathCoun6()"  class="but btn btn-success">Next</button>
  </div>
  `
  }
function Mathicon5(){
  div[0].innerHTML+=`<audio controls autoplay class="audio"> 
<source src="images/countingAduio5.opus" >
 </audio> `
 }function MathCoun6(){
//  head[0].innerHTML=""
 div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/counting6.jpeg" >
 <img class="icon"onclick="Mathicon6()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
<img class="gif" src="images/kids gif.gif" >
 </div>
 <button type="button" onclick="MathCoun5()" class="but4 prebut btn btn-success">previous</button>
<button type="button" onclick=" MathCoun7()"  class="but btn btn-success">Next</button>
  </div>
`
 }
function Mathicon6(){
 div[0].innerHTML+=`<audio controls autoplay class="audio"> 
<source src="images/countingAduio6.opus" >
 </audio> `
}function MathCoun7(){
  //  head[0].innerHTML=""
   div[0].innerHTML=`<div class="bimg"><div class="sta ">
 <img class="Counimg" src="images/counting7.jpeg" >
 <img class="icon"onclick="Mathicon7()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
<img class="gif" src="images/kids gif.gif" >
  </div>
  <button type="button" onclick="MathCoun6()" class=" but4 prebut btn btn-success">previous</button>
 <button type="button" onclick=" MathCoun8()"  class="but btn btn-success">Next</button>
  </div>
  `
 }
 function Mathicon7(){
 div[0].innerHTML+=`<audio controls autoplay class="audio"> 
 <source src="images/countingAduio7.opus" >
 </audio> `
 }function MathCoun8(){
 div[0].innerHTML=`<div class="bimg"><div class="sta ">
 <img class="Counimg" src="images/counting8.jpeg" >
 <img class="icon"onclick="Mathicon8()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
 <img class="gif" src="images/kids gif.gif" >
 </div>
 <button type="button" onclick="MathCoun7()" class=" but4 prebut btn btn-success">previous</button>
<button type="button" onclick=" MathCoun9()"  class="but btn btn-success">Next</button>
 </div>
 `
  }
 function Mathicon8(){
   div[0].innerHTML+=`<audio controls autoplay class="audio"> 
<source src="images/countingAduio8.opus" >
    </audio> `
 }function MathCoun9(){
  div[0].innerHTML=`<div class="bimg"><div class="sta ">
 <img class="Counimg" src="images/counting9.jpeg" >
  <img class="icon"onclick="Mathicon9()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
  <img class="gif" src="images/kids gif.gif" >
 </div>
  <button type="button" onclick="MathCoun8()" class="but4 prebut btn btn-success">previous</button>
  <button type="button" onclick=" MathCoun10()"  class="but btn btn-success">Next</button>
 </div>
   `
}
 function Mathicon9(){
  div[0].innerHTML+=`<audio controls autoplay class="audio"> 
 <source src="images/countingAduio9.opus" >
  </audio> `
 }function MathCoun10(){
  // head[0].innerHTML=""
 div[0].innerHTML=`<div class="bimg"><div class="sta ">
  <img class="Counimg" src="images/counting10.jpeg" >
<img class="icon"onclick="Mathicon10()" src="images/sound icon.jpeg1-fotor-bg-remover-20240704104340.png" >
<img class="gif" src="images/kids gif.gif" >
</div>
 <button type="button" onclick="MathCoun9()" class="but4 prebut btn btn-success">previous</button>
 <button type="button" onclick="Home()"  class="but btn btn-success">Back To Home</button>
 </div>
 `
}
function Mathicon10(){
 div[0].innerHTML +=`<audio controls autoplay class="audio"> 
<source src="images/countingAduio10.opus" >
  </audio> `
 }

 let content=document.querySelectorAll(".content")
let cont=document.querySelectorAll(".cont");
// let mainHead=document.querySelectorAll(".mainHead")
let backimg=document.querySelectorAll(".backimg")
function about(){

  content[0].innerHTML=""
  cont[0].innerHTML=`
    <div class="head"> <div class="d_none">
<h1 class="heading">Education For Kids</h1>
        <div class="main  "> 
    <div class="d-flex mb-3 secdiv ">
      <h1 class="me-auto p-2"></h1>
      <h4 class="hover p-2" onclick="Home()">Home</h4>
      <h4 class="hover p-2" onclick="about()">About</h4>
    </div></div>
  <div class="bkimg">
  <div class="bakimg d-flex justify-content-evenly ">
    <img class="counvideo rounded-circle   " src="images/counting.jpeg" alt=""><br />
    <img class="EngVideo rounded-circle  " src="images/Abc  alphabet img.webp" alt=""><br />
    <img class="urdVid starturduimg rounded-circle  " src="images/u.jpg" alt=""><br />
  </div>
    <div class="vidbut">

  <button onclick="countingvideo()" class=" but7 start rounded-pill border border-2 ">Start Video</button>
  <button  onclick="EngWordgvideo()" class="but5 start rounded-pill border border-2 "> Start Video</button>
  <button  onclick="UrdWordgvideo()" class="but6 start rounded-pill border border-2  "> Start Video</button></div>
  </div>
  `
}

function Home(){
  cont[0].innerHTML=""
  content[0].innerHTML=`
  <div class="head"> <div class="d_none">
<h1 class="heading">Education For Kids</h1>
        <div class="main  "> 
    <div class="d-flex mb-3 secdiv ">
      <h1 class="me-auto p-2"></h1>
      <h4 class="hover p-2" onclick="Home()">Home</h4>
      <h4 class="hover p-2" onclick="about()">About</h4>
    </div></div>
   
      <img  class=" backimg   " src="images/back img.jpg" alt="">
      <h2 class="d-flex justify-content-center   text-light fs-1"><span class="para position-absolute  ">Free and
          fun digital education
          for all children worldwide</span></h2>
</div>
    <div class="contentcota">
        <div class="imgDiv">
          <img class="rounded-circle twoimg Mathimg " src="images/Math.png" alt=""><br />
          <img class="rounded-circle twoimg Engimg" src="images/english word.jpeg" alt=""><br />
          <img class="starturduimg rounded-circle urimg  " src="images/urdu.jpg" alt=""><br />
        </div>
       
        <button class="but1 buts start rounded-pill border border-2 " onclick="MathCoun1()">Start counting</button>
        <button class="buts but2 start rounded-pill border border-2 " onclick="EnglishWord1()">Start ABC</button>
        <button class="buts but3 start rounded-pill border border-2  " onclick="UrduAlphabet1()">Start haroof e tahaji</button>
     
          <h4 class="parent d-flex justify-content-center  "><span class="para2">Our vision is to
              be the source
              for childhood learning on the internet
              available from anywhere and without charge.</span></h4>

        </div>
     
        <div class="content_contaner">
          <div class="footer "><br />
            <h1 class="hed">Free Education for kids</h1>
            <p class="para3">In any society, its social culture is dependent upon the education of the members. Being
              educated places a person on a higher rank in the society. People give respect to those who are well
              educated. It is only through education that any society can be reformed and made civilized.</p>
          
          <footer class="bg-body-tertiary text-center text-lg-start">
            <div class="text-center p-3 lastPara" >
              Copyright: © 2024
            </div>
          </footer>
        </div>
      </div>
      <div class="maindiv"></div>

  `
}
Home()
let d_noneDiv=document.querySelectorAll(".d_none");
function countingvideo(){
d_noneDiv[0].innerHTML=""
  cont[0].innerHTML=`
  <video class="Video" controls autoplay>
  <source src="Video/Number_Name,_Number_Name_1_to_50,_Number_with_spelling,_Number_song,_Counting_with_spelling(360p).mp4" type="video/mp4">
</video>
   <button onclick="about()" class="backbut" >Go To Back</button>

  `

}
function EngWordgvideo(){
  d_noneDiv[0].innerHTML=""
    cont[0].innerHTML=`
    <video class="Video" controls autoplay>
    <source src="Video/ABC_Alphabet_Song___A_for_apple_Phonics_Song___ABCD_Alphabet_Rhymes_for_Nursery_Kids_-_KK_Education(360p).mp4">
  </video>
     <button onclick="about()"   class="backbut" >Go To Back</button>

    `

  }
  function UrdWordgvideo(){
    d_noneDiv[0].innerHTML=""
      cont[0].innerHTML=`
      <video class="Video" controls autoplay>
      <source src="Video/WhatsApp Video 2024-07-02 at 16.59.51_a36277e4.mp4">
    </video>
  <button onclick="about()" class="backbut">Go To Back</button>

      `
    }
  




