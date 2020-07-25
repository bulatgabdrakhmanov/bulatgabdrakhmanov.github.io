import {ModalWindow} from "./modules/ModalWindow";

document.addEventListener("DOMContentLoaded", function() {

    const modalWindow = new ModalWindow();

    // events
    const button = document.querySelector("#button");
    button.addEventListener("click", function() {
        if (!modalWindow.isOpen()) {
            modalWindow.open();
        } else {
            modalWindow.close();
        }
    });

});