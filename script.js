
function contact(event){
    event.preventDefault();
     const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
   loading.classList.remove("modal__overlay--visible")
    emailjs
        .sendForm(
            "service_1xkpq1l",
            "template_n0mf3i7",
            event.target,
            "QARfJ94darByxsdvX"
        ).then(() => {
            loading.classList.remove("modal__overlay--visible")
        success.classList.add('modal__overlay--visible')
        }).catch(() => {
            loading.classList.remove('modal__overlay--visible')
            alert(
                "The Email service is currently unavaiable. Please contact me directly on andycarter.dev@gmail.com"
            )
        })}