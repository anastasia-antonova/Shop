function send() {
    const form = document.querySelector('.form-section');
    console.log(form);

    if (form) {
        const groups = form.querySelectorAll('.form-group');
        console.log(groups)

        for (let a of groups){
            const input = a.querySelector('input');
            const textarea = a.querySelector('textarea')
            let required = false;
            let minimum = false;
            if (input) {
                if (input.value === '') {
                    required = true;
                    a.classList.add('form-group--error');
                    a.querySelector('.required').style = "display: block";

                    if (input.id === 'telephone') {
                        a.querySelector('.minimum').style = "display: none";
                    }


                } else {
                    if (input.id === 'telephone') {
                        a.querySelector('.required').style = "display: none";
                        if (input.value.length > 10 || input.value.length < 6) {
                            minimum = true;
                            a.querySelector('.minimum').style = "display: block";
                            a.classList.add('form-group--error');
                        }
                    }
                }
                if (!required && !minimum) {
                    a.classList.remove('form-group--error');
                    a.querySelector('.required').style = "display: none";
                    if (input.id === 'telephone') {
                        a.querySelector('.minimum').style = "display: none";
                    }
                }
            } else {
                if (textarea) {
                    if (textarea.value === '') {
                        required = true;
                        a.classList.add('form-group--error');
                        a.querySelector('.required').style = "display: block";

                        if (textarea.id === 'massage') {
                            a.querySelector('.text-min').style = "display: none";
                        }


                    } else {
                        if (textarea.value.length < 20) {
                            required = true;
                            a.classList.add('form-group--error');
                            a.querySelector('.required').style = "display: none";
                            a.querySelector('.text-min').style = "display: block";

                        }

                    }
                    if (!required && !minimum) {
                        a.classList.remove('form-group--error');
                        a.querySelector('.required').style = "display: none";
                        a.querySelector('.text-min').style = "display: none";


                    }
                }
            }
        }
    }
}

