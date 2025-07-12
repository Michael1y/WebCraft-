  window.onload = function () {
    const show = document.querySelector("#show"); 
    const side = document.getElementById("side_bar");
    const cover = document.querySelector("#blur");
    const contact = document.querySelector(".contact");
    const detail = document.getElementById("contact_detail");
    let  is_open=false;
    show.onclick =function () {
        if(is_open === false) {
            side.style.display = "block";
            cover.style.display="block";
            is_open = true;
        }else {
            side.style.display = "none";
            cover.style.display="none";
            is_open = false;
        }
        }
       /* cover.onclick = function () {
            side.style.display = "none";
            cover.style.display="none";
            detail.style.height="0px";
        }*/
        cover.onclick = function() {
    // Check screen width
    if (window.innerWidth >= 768) {
      // Big screen (e.g., tablets, desktops)
          detail.style.height="0px";
          cover.style.display="none";
          is_open = false;
    } else {
      // Small screen (e.g., phones)
          side.style.display = "none";
          cover.style.display="none";
          detail.style.height="0px";
          is_open = false;
    }
  };
        contact.addEventListener("click", ()=>{
            if(is_open === false){
                detail.style.height="130px";
                cover.style.display="block";
                is_open = true;
            }else{
                detail.style.height="0px";
                cover.style.display="none";
                is_open = false;
            }
        })
 }