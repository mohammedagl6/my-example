

$(document).ready(function(){

	/* Opening and closing navigation menue for small screens */
	$('#nav-btn').click(function(){
		if ($('.nav ul').hasClass('nav-show')) {
			$('.nav ul').removeClass('nav-show');
		}else{
			$('.nav ul').addClass('nav-show');
		}
	});
	
	/* opening website pages (sections included in the same page) */
	let link_list = $('.nav ul li a');
	for(i=0; i< link_list.length; i++){
		link_list[i].addEventListener('click', open_section);
	}

	function open_section(e){		
		e.preventDefault()
		//$('.nav ul').removeClass('nav-show');
		let section_id = $(this).attr('data-id');		
		for (i=0; i<link_list.length; i++){			
			$(link_list[i]).removeClass('current-page');
		}
		$(this).addClass('current-page');

		for ( i = 0; i < $('.content section').length;  i++) {
			$($('.content section')[i]).addClass('hidden');
		}
		$('#'+section_id).removeClass('hidden');
	}

	/** this is for Proceed button in the main page to open menu page **/
	$('#open-section-2').click(function(){		
		document.getElementById("menu-btn").click();
		//$('#menu-btn').trigger("click");
		return false;
	});


	/* changing the background of the website */
	let next = 1;
	setInterval(function(){
		
		setTimeout(function(){
			next++;
			$('.container').css("background-image","url(https://aqial.com/hyf/img/"+next+".jpg)");
			if (next == 3) {
			next=0;
			}
		}, 2000); // this is for the delay for the transition period in css				
				
	}, 5000);
});