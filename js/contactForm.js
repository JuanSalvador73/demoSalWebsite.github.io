
const contactForm = document.getElementById('contact-form');
const contactName = document.getElementById('contact-name');
const contactMail = document.getElementById('contact-mail');
const contactComment = document.getElementById('contact-comments');
const contactMessage = document.getElementById('contact__message');

const sendEmail = (e)=>{
    e.preventDefault()

    //Check if the field has a value
    if(contactName.value === '' || contactMail === '' || contactComment.value === ''){
        contactMessage.classList.remove('color-blue');
        contactMessage.classList.remove('color-red');

        //Show Message
        contactMessage.textContent = 'Llena todos los campos';
    }else{
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_wnkc01a','template_gmv5p25','#contact-form','MtSb6sXQj4SCRXi-O')
            .then(()=>{
                contactMessage.classList.add('color-blue')
                contactMessage.textContent = 'Mensaje Enviado'

                setTimeout(()=>{
                    contactMessage.textContent = ''
                }, 5000)
            }, (error) =>{
                alert('Algo ha fallado...', error)
            })

            contactName.value = ''
            contactMail.value = ''
            contactComment.value = ''
    }
}

contactForm.addEventListener('submit', sendEmail)