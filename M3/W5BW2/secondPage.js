    //FUNZIONE PER MODALI Footer-copy 

    const btnModalLanguage = document.getElementById("button-language");
    const modalLanguage = document.querySelector(".modal-language");
    const closeModalLanguage = document.querySelector(".close-language");
    
    const btnModalValue = document.getElementById("button-value");
    const modalValue = document.querySelector(".modal-value");
    const closeModalValue = document.querySelector(".close-value");
    
    function sectionModal(btn, show) {
        const modal = document.querySelector(btn);
    
        if (modal) {
        modal.style.display = show ? "block" : "none";
        }
    }
    
    btnModalLanguage.addEventListener("click", () => {
        sectionModal(".modal-language", true);
    });
    
    closeModalLanguage.addEventListener("click", () => {
        sectionModal(".modal-language", false);
    });
    
    btnModalValue.addEventListener("click", () => {
        sectionModal(".modal-value", true);
    });
    
    closeModalValue.addEventListener("click", () => {
        sectionModal(".modal-value", false);
    });
