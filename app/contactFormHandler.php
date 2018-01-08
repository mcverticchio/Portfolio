<!-- <?php
// $errors = '';
// $myemail = 'mcverticchio@gmail.com';
// if(empty($_POST['subject'])  ||
//    empty($_POST['message']) ||
//    empty($_POST['name']) ||
//    empty($_POST['email']))
{
    // $errors .= "\n Error: all fields are required";
}
// $subject = $_POST['subject'];
// $message = $_POST['message'];
// $name = $_POST['name'];
// $email_address = $_POST['email'];
// if (!preg_match(
// "/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",
// $email_address))
{
    // $errors .= "\n Error: Invalid email address";
}
// if( empty($errors))
// {
// 	$to = $myemail;
// 	$email_subject = "New Portfolio Message: $subject";
// 	$email_body = "You have received a new message. ".
// 	" Here are the details:\n Name: $name \n Email: $email_address \n Message \n $message";
// 	$headers = "From: $myemail\n";
// 	$headers .= "Reply-To: $email_address";
// 	mail($to,$email_subject,$email_body,$headers);
	// redirect to the 'thank you' page
// 	header('Location: thankyou.html');
//   exit;
// } else{
//   echo $errors;
// }
// ?>

<form className="col-md-4" action='contactFormHandler.php' name='contact-form' id='contact-form' className='clearfix' method='post'>

 <p className='input-label'><label htmlFor="subject">Subject</label></p>
 <input type="text" name='subject' placeholder='' required />

 <p className='input-label'><label htmlFor="message">Your Message</label></p>
 <textarea name="message" id="message" cols="30" rows="10" required ></textarea>

 <p className="input-label"><label htmlFor="name">Name</label></p>
 <input type="text" name='name' required />

 <p className="input-label"><label htmlFor="email">Email</label></p>
 <input type="email" name='email' required />

 <button className='email-link' type='submit'>Send<i className="fa fa-envelope-o" aria-hidden="true"></i></button>
</form> -->
