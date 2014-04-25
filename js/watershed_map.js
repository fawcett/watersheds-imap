
function WatershedMapLoad(map){

			if(map != '')
			{
				 //alert(map);
			}

			jQuery("#map-container AREA").mouseover(function(){
				jQuery('#map-container img.wshd').removeClass('selected').css('display', 'none');
				
				var regionMap = '.'+$(this).attr('id')+'-map';
				var regionName = '.'+$(this).attr('id')+'-desc';
				
				jQuery(regionMap).css('display', 'inline');
				
				nametext = $(this).attr('alt');		
				descriptiontext = $(this).attr('desc');
				
				$('#desc_text').text("");
				$('#desc_description').text("");				
				
				$('#desc_text').text(nametext);
				$('#desc_description').text(descriptiontext);
				$(this).attr('alt',"");
				
			}).mouseout(function(){
				var regionMap = '.'+$(this).attr('id')+'-map';

				// nametext = $('#desc_text').text();

				$(this).attr('alt',nametext);
				
				if(map != 'wd-wmo')
				{
					$('#desc_text').text("Click on a watershed to learn more about it.");
				}
				else
				{
					$('#desc_text').text("Click on a WD/WMO to learn more about it.");
				}
				
				$('#desc_description').text("");

				// Check if a click event has occured and only change the Region hover state accordingly
				if (! jQuery(regionMap).hasClass('selected')) {
					jQuery(regionMap).css('display', 'none');
				}

			}).click(function(){
				jQuery('#map-container img.wshd').removeClass('selected').css('display', 'none');
				
				var regionMap = '.'+$(this).attr('id')+'-map';
				var regionName = '.'+$(this).attr('id')+'-desc';
				
				jQuery(regionMap).addClass('selected').css('display', 'inline');
				
				$(this).attr('alt',nametext);
				$('#desc_text').text("");
				$('#desc_description').text("");

				nametext = $(this).attr('alt');
				descriptiontext = $(this).attr('desc');
				
				$('#desc_text').text(nametext);
				$('#desc_description').text(descriptiontext);
			});
}		