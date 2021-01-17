/**** Xp Wallet Custom JS file ****/

(function($) {
  'use strict';

  	$(function() {
    	
    	$('body').bootstrapMaterialDesign();
    	

    	/****************** Registration Part ****************/

    	// Otp box
    	if($(document).find("#optVerificationForm").length > 0) {
    		var interval;

    		$('.resendOtp').on('click', function() {
				$('.resendOtp').addClass('d-none');
			    $('.counter').removeClass('d-none');
			    let timer = parseInt($('.counter').text().split('.')[1]);
			    if(timer !== 60) {
				    clearInterval(interval); 
				    interval = null;
				}
    			$('.counter').text('00.60');
			    counter(60);
    		});
    		
    		function counter(timer) {
    			var counter = timer;
				interval = setInterval(function() {
				    counter--;
				    $('.counter').text('00.'+counter);
				    // Display 'counter' wherever you want to display it.
				    if (counter == 0) {  
				        clearInterval(interval);
				        $('.resendOtp').removeClass('d-none');
				        $('.counter').addClass('d-none');
				        $('.counter').text('00.60');
				    }
				}, 1000);
    		}
            counter(60);
    	}  

    	// Otp steps  	

    	if($(document).find("#optVerificationForm").length > 0) {
			$('.digit-group').find('input').each(function() {
				$(this).attr('maxlength', 1);
				$(this).on('keyup', function(e) {
					var parent = $($(this).closest('.digit-group'));
					if(e.keyCode === 8 || e.keyCode === 37) {
						var prev = parent.find('input#' + $(this).data('previous'));
						
						if(prev.length) {
							$(prev).select();
						}
					} else if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
						var next = parent.find('input#' + $(this).data('next'));
						if(next.length) {
							$(next).select();
						}
					}
				});
			});
    	}

    	// Select2

    	if($(document).find(".customSelect").length > 0) {
    		$(".customSelect").each(function(e){
    			var self = $(this);
    			var parent = self.closest('.form-group');
    			self.select2({dropdownParent: parent});
    		})
    		
    	}           

        // Select2

        if($(document).find(".confirmButton").length > 0) {
            
            $('.confirmButton').on('click',function(e) {
                e.preventDefault();
                var container = $(this).closest('.confirmationContainer');
                var form = $(this).closest('form');
                form.find('.otp-group').removeClass('d-none');
                container.find('.alert-warning').addClass('d-none');
                container.find('.alert-info').removeClass('d-none');
                $(this).addClass('d-none');
                form.find('.formSubmitBtn').removeClass('d-none');
            });
            
        }    	

    	// Custom Scroll Bar

    	if($(document).find(".scrollContainer").length > 0) {
    		$(".scrollContainer").mCustomScrollbar({
			    theme: "minimal"
			});
    		
    	}        // Custom Scroll Bar

        if($(document).find(".table-scorll").length > 0) {
            $(".table-scorll").mCustomScrollbar({
                axis:"x"
            });
            
        }

    	// Show Hide Password

       	if($(document).find(".fieldTypeView").length > 0) {
    		$(".fieldTypeView").on('click',function(){
    			var text = $(this).text();
    			var parent = $(this).closest('.form-group');
    			var updatedText = text === 'show' ? 'hide' : 'show';
    			var field = parent.find('input');
    			var fieldType = field.prop('type');
    			var updateType = fieldType === 'password' ? 'text' : 'password';
    			$(this).text(updatedText);
    			field.prop('type',updateType);
    		});
    	
    	}

    	// Phone DropDown

    	if($(document).find(".customPhone").length > 0) {
			$('.customPhone > input').intlTelInput({
	      		utilsScript:"../js/utils.js",
				initialCountry: "auto",
				  geoIpLookup: function(success, failure) {
					$.get("https://ipinfo.io", function() {}, "jsonp").always(function(resp) {
					  var countryCode = (resp && resp.country) ? resp.country : "";
					  success(countryCode);
					});
				  }
	    	});
    		
    	}



        /****** Form Validation *********/

            // Register

            if($(document).find("#RegisterForm").length > 0){

              var value = $("#password").val()
              $.validator.addMethod("checklower", function(value) {
                return /[a-z]/.test(value);
              });
              $.validator.addMethod("checkupper", function(value) {
                return /[A-Z]/.test(value);
              });
              $.validator.addMethod("checkdigit", function(value) {
                return /[0-9]/.test(value);
              });
              $( "#RegisterForm" ).validate( {
                rules: {
                  firstname: "required",
                  lastname: "required",
                  currency:"required",
                  address:"required",
                  username: {
                    required: true,
                    minlength: 2
                  },          
                  phone: {
                    required: true,
                    number: true
                  },
                  password: {
                    required: true,
                    checklower:true,
                    checkdigit:true,
                    checkupper:true,
                    minlength: 8
                  },
                  confirm_password: {
                    required: true,
                    minlength: 8,
                    equalTo: "#password"
                  },
                  email: {
                    required: true,
                    email: true
                  }
                },
                messages: {
                  firstname: "Please enter your firstname",
                  lastname: "Please enter your lastname",
                  address: "Please enter your address",
                  phone: "Please enter your phone number",
                  username: {
                    required: "Please enter a username",
                    minlength: "Your username must consist of at least 2 characters"
                  },
                  password: {
                    required: "Please provide a password",
                    minlength: "Your password must be at least 8 characters long",
                    checklower:"Need atleast 1 lowercase alphabet",
                    checkupper:"Need atleast 1 uppercase alphabet",
                    checkdigit:"Need atleast 1 digit"
                  },
                  confirm_password: {
                    required: "Please provide a password",
                    minlength: "Your password must be at least 8 characters long",
                    equalTo: "Please enter the same password as above"
                  },
                  email: "Please enter a valid email address",
                },
                errorElement: "span",
                errorPlacement: function ( error, element ) {
                  // Add the `help-block` class to the error element
                  error.addClass( "help-block colorDanger" );

                  if ( element.prop( "type" ) === "checkbox" ) {
                    error.insertAfter( element.parent( "label" ) );
                  } else {
                    error.insertAfter( element );
                  }
                },
                highlight: function ( element, errorClass, validClass ) {
                  $( element ).parents( ".form-group" ).addClass( "has-error" ).removeClass( "has-success" );
                },
                unhighlight: function (element, errorClass, validClass) {
                  $( element ).parents( ".form-group" ).addClass( "has-success" ).removeClass( "has-error" );
                }
              } );
           

			//waqas

		   }

            // Login 

            if($(document).find("#loginForm").length > 0){
              $( "#loginForm" ).validate( {
                rules: {        
                  password: {
                    required: true,
                    minlength: 8
                  },
                  email: {
                    required: true,
                    email: true
                  }
                },
                messages: {
                  password: {
                    required: "Please provide a password",
                    minlength: "Your password must be at least 8 characters long",
                  },
                  email: "Please enter a valid email address",
                },
                errorElement: "span",
                errorPlacement: function ( error, element ) {
                  // Add the `help-block` class to the error element
                  error.addClass( "help-block colorDanger" );

                  if ( element.prop( "type" ) === "checkbox" ) {
                    error.insertAfter( element.parent( "label" ) );
                  } else {
                    error.insertAfter( element );
                  }
                },
                highlight: function ( element, errorClass, validClass ) {
                  $( element ).parents( ".form-group" ).addClass( "has-error" ).removeClass( "has-success" );
                },
                unhighlight: function (element, errorClass, validClass) {
                  $( element ).parents( ".form-group" ).addClass( "has-success" ).removeClass( "has-error" );
                }
              } );
            }            

            // Otp 

            if($(document).find("#optVerificationForm").length > 0){
              $( "#optVerificationForm" ).validate( {
                rules: {        
                  digit_1: {
                    required: true,
                    minlength: 1,
                    maxlength:1
                  },                  
                  digit_2: {
                    required: true,
                    minlength: 1,
                    maxlength:1
                  },                  
                  digit_3: {
                    required: true,
                    minlength: 1,
                    maxlength:1
                  },                  
                  digit_4: {
                    required: true,
                    minlength: 1,
                    maxlength:1
                  },

                },
                messages: {
                  digit_1: {
                    required: "Please provide valid otp",
                  },                  
                  digit_2: {
                    required: "Please provide valid otp",
                  },                  
                  digit_3: {
                    required: "Please provide valid otp",
                  },                  
                  digit_4: {
                    required: "Please provide valid otp",
                  },
                },
                errorElement: "span",
                errorPlacement: function ( error, element ) {
                  // Add the `help-block` class to the error element
                  error.addClass( "help-block colorDanger");
                    if( $(element).closest('form').find('.errorBlock span').length === 0) {
                        $(element).closest('form').find('.errorBlock').html(error);
                    }
                },
                success: function(error, element){
                    $(element).closest('form').find('.errorBlock').html('');                      
                },
                highlight: function ( element, errorClass, validClass ) {
                  $( element ).addClass( "has-error" ).removeClass( "has-success" );
                },
                unhighlight: function (element, errorClass, validClass) {
                  $( element ).addClass( "has-success" ).removeClass( "has-error" );
                }
              } );
            }

    	// Password Strength Check

    	if($(document).find(".strengthCheck").length > 0) {
    		
    		$(".strengthCheck").on('keyup',function(){
    		  var passValue = $(this).val();
    		  var checkLower = hasLowerCase(passValue);
    		  var checkUpper = hasUpperCase(passValue);
    		  var checkNumber = hasNumber(passValue);
    		  var checkLength = passValue.length;

    		  checkLower ? $('.strenthInfo .lowerCase').addClass('validated'): $('.strenthInfo .lowerCase').removeClass('validated');
    		  checkUpper ? $('.strenthInfo .upperCase').addClass('validated'): $('.strenthInfo .upperCase').removeClass('validated');
    		  checkNumber ? $('.strenthInfo .numberCase').addClass('validated'): $('.strenthInfo .numberCase').removeClass('validated');
    		  checkLength > 7 ? $('.strenthInfo .lengthCase').addClass('validated'): $('.strenthInfo .lengthCase').removeClass('validated');

    		});

    		function hasLowerCase(str) {
			    return (/[a-z]/.test(str));
			}    		

			function hasUpperCase(str) {
			    return (/[A-Z]/.test(str));
			}			

			function hasNumber(str) {
			    return (/\d/.test(str));
			}
    	}

    	// Card Expiry

    	if($(document).find(".ccValidate").length > 0) {

    		$('.ccValidate').on('keyup', function(e) {
    			
    			var inputChar = String.fromCharCode(event.keyCode);
				var code = event.keyCode;
				var allowedKeys = [8];
				if (allowedKeys.indexOf(code) !== -1) {
				    return;
				}

				event.target.value = event.target.value.replace(
				    /^([1-9]\/|[2-9])$/g, '0$1/' // 3 > 03/
				).replace(
				    /^(0[1-9]|1[0-2])$/g, '$1/' // 11 > 11/
				).replace(
				    /^([0-1])([3-9])$/g, '0$1/$2' // 13 > 01/3
				).replace(
				    /^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2' // 141 > 01/41
				).replace(
				    /^([0]+)\/|[0]+$/g, '0' // 0/ > 0 and 00 > 0
				).replace(
				    /[^\d\/]|^[\/]*$/g, '' // To allow only digits and `/`
				).replace(
				    /\/\//g, '/' // Prevent entering more than 1 `/`
				);
    		})
    	}


    	/************ Inner Pages *************/

    		// Side bar

    		if($('#sidebarCollapse').length > 0) {

    			$("#sidebar .components").mCustomScrollbar({
			         theme: "minimal"
			    });
				
				$('#sidebarCollapse').on('click', function () {
			        // open or close navbar
			        $('#sidebar').toggleClass('active');
                    $('#content').toggleClass('active');
                    $('body').toggleClass('activeNav');
			        // close dropdowns
			        $('.collapse.in').toggleClass('in');
			        // and also adjust aria-expanded attributes we use for the open/closed arrows
			        // in our CSS
			        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
			    });

			}

            //profile configurations

            if($(document).find('.profileTable').length > 0) {
                
                $('#updateEmail').on('click',function(e){
                    e.preventDefault();
                    var row = $(this).closest('tr');
                    $(this).addClass('d-none');
                    row.find('#saveEmail').removeClass('d-none');
                    row.find("input").removeAttr('readonly').focus();
                });                

                $('#saveEmail').on('click',function(e){
                    e.preventDefault();
                    var row = $(this).closest('tr');
                    $(this).addClass('d-none');
                    row.find('#updateEmail').removeClass('d-none');
                    row.find("input").attr('readonly',true);
                });                

                $('#updatePhone').on('click',function(e){
                    e.preventDefault();
                    var row = $(this).closest('tr');
                    $(this).addClass('d-none');
                    row.find('#savePhone').removeClass('d-none');
                    row.find("input").each(function(){
                        $(this).removeAttr('readonly');
                    });                    
                    row.find("input:first").focus();
                });                

                $('#savePhone').on('click',function(e){
                     e.preventDefault();
                    var row = $(this).closest('tr');
                    $(this).addClass('d-none');
                    row.find('#updatePhone').removeClass('d-none');
                    row.find("input").each(function(){
                        $(this).attr('readonly',true);
                    });                    
                });                

                $('#updatePassword').on('click',function(e){
                    e.preventDefault();
                    var row = $(this).closest('tr');
                    $(this).addClass('d-none');
                    row.find('#savePassword').removeClass('d-none');
                    row.find("input").removeAttr('readonly').focus();
                });                

                $('#savePassword').on('click',function(e){
                    e.preventDefault();
                    var row = $(this).closest('tr');
                    $(this).addClass('d-none');
                    row.find('#updatePassword').removeClass('d-none');
                    row.find("input").attr('readonly',true);
                });  

                $('#updateSecurity').on('click',function(e){
                    e.preventDefault();
                    var row = $(this).closest('tr');
                    $(this).addClass('d-none');
                    row.find('#saveSecurity').removeClass('d-none');
                    row.find("input").each(function(){
                        $(this).attr('type','text');
                    });                    
                    row.find("input:first").focus();
                });                

                $('#saveSecurity').on('click',function(e){
                     e.preventDefault();
                    var row = $(this).closest('tr');
                    $(this).addClass('d-none');
                    row.find('#updateSecurity').removeClass('d-none');
                    row.find("input").each(function(){
                        $(this).attr('type','hidden')
                    });                    
                }); 
            
            }


	});

})(jQuery);
