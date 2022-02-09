class AlgaeForcaster {
    constructor() {
        this.init = () => {
            //init function
        }
    }
}

/**
 * When document loads, do button initialization
 */
$(document).ready(() => {
    const app = new AlgaeForcaster();
    app.init();

    // Select Submit button functionality
    $('#submit').on('click', 'li', function(e) {
        let username = $('#username').value;
        let password = $('#password').value;

        //todo check username and password validity
    });
});