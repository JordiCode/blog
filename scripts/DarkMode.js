


function backgroundWhite() {
    document.documentElement.style.setProperty('--background', '#0f0b0a');
    document.documentElement.style.setProperty('--brown-text', '#ebe2e0');
    document.documentElement.style.setProperty('--text', '#e6e6e6');

}

function backgroundDark() {
    document.documentElement.style.setProperty('--background', '#F7F7F7');
    document.documentElement.style.setProperty('--brown-text', '#4d3832');
    document.documentElement.style.setProperty('--text', '#4d4d4d');
}


function chkDmState(first) {

    
    var state = localStorage.getItem('state')

    if(first==true) {
        if (state==0) {
            backgroundWhite()
        } else  {
            backgroundDark()
        }

    } else {
        if (state==0) {
            backgroundDark()
            localStorage.setItem('state', 1)
    
    
        } else  {
            backgroundWhite()
            localStorage.setItem('state', 0)
        }
    }

 

}

chkDmState(true)
