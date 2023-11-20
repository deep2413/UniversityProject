const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitem = document.getElementById("university-list");
    const university = document.querySelectorAll(".university");
    const uname = document.getElementsByTagName("h1");

    for ( var i=0; i < uname.length; i++){
        let match = university[i].getElementsByTagName('h1')[0];

        if(match) {
            let textvalue = match.textContent || match.innerHTML

            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                university[i].style.display = "";
            }else {
                university[i].style.display = "none";
            }
        }
    }

}