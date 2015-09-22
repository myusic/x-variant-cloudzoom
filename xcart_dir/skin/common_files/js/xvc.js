//***
/* X-Variant-Cloudzoom
/* Author: Marilyn Hynes, 2015
/* Version: 1.2
/* X-Cart: 4.6.x, 4.7.x
/* Description: This module creates an association between x-cart product variant selectors and the detailed image/cloudzoom default feature.
/* There are dependencies, please review the README and Installation.txt files.
/*
/***

   /*********************** Detailed Images Customization **********************/

	function clicked_option() {
		var color_option = $("select.color").find('option:selected').text();
		change_image(color_option);
	}
	

	function change_image(color_option) {
		//fake a click on the detailed image based on the option_name.
		var color = color_option.trim();
		$('.dpimages-icons-box a img[title*='+color+']').parent('a').click();
	}

	/*************************************************************************/

	function detailed_images(color) {
		$('option:contains('+color+')').attr('selected', 'selected');
	}

    /**************************************************************************/