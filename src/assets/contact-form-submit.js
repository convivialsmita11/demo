
 $(document).ready(function(){
       
       $("#contactForm").submit(function(){
              $("#myModal").modal('hide');
                var name = $("#name").val();
            var email_id = $("#email_id").val();
            var mobile_no = $("#mobile_no").val();
            // var industry_type1 = $("#mselect").val();
           // industry_type= industry_type1.toString();
            var industry_type1 = [];
            $(':checkbox:checked').each(function(i){
              industry_type1[i] = $(this).val();
            });
            industry_type= industry_type1.toString();
         //alert(val);
         $.ajax({
         url: 'https://mideast.safexpay.com/agadmin/api/emailSender/post',
         
         method:"POST",
         
         data:  JSON.stringify({
             "full_name": $("#name").val(),
             "email_id": $("#email_id").val(),
             "mobile_no": $("#mobile_no").val(),
             "industry_type": industry_type,
         "i_agree": "true",
         "description": "Safexpay UAE Contact form",
         "form_type": "ContactUs"
         }),
         dataType: "json",
         contentType: "application/json",
         success: function(response){
          // alert(response.message);
         //alert('Mail Sent. Thank you we will contact you soon!!');
          Swal.fire('Thank you for your interest. Our team will reach out to you shortly.', )
         }
         
         }); 
     });
 });
     