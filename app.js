const openBtn = document.querySelector('.openBtn');
const closeBtn = document.querySelector('.closeBtn');
const wrap = document.querySelectorAll('.wrap');

// side bar
openBtn.addEventListener('click', function(){
    for(let x=0; x<wrap.length; x++){
        wrap[x].classList.add('visible');
    }
})

closeBtn.addEventListener('click', function(){
    for(let x=0; x<wrap.length; x++){
        wrap[x].classList.remove('visible');
    }
})


//toggles
function toggleFirst()
{
  toggleId("one"); 
}

function toggleSecond()
{
  toggleId("two");
}

function toggleThird()
{
  toggleId("three");
}

function toggleId(id)
{
  var div = document.getElementById(id);
  if(div.style.display == "block")
  div.style.display = "none";
  else
    div.style.display = "block";
}

