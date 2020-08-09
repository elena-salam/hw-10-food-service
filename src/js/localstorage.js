const switchInput = document.querySelector('input.js-switch-input');
const bodyRef = document.querySelector('body');
const theme = localStorage.getItem('theme');

if (theme===null){
    bodyRef.classList.add('light-theme');
    } else {
    
    if(theme==='light-theme'){
        addingClassTheme();
    }
    if(theme==='dark-theme'){
        addingClassTheme();
        switchInput.checked=true;
    }
}

function addingClassTheme(){
    bodyRef.classList.add(theme);
}
switchInput.addEventListener('change', onHandleInput);

function onHandleInput(event){
    event.preventDefault();
      if(event.target.checked){
        
        bodyRef.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark-theme'); 
        bodyRef.classList.remove('light-theme');
        
    } else{

        bodyRef.classList.remove('dark-theme');
        bodyRef.classList.add('light-theme');
        localStorage.setItem('theme', 'light-theme');
    }
}    