var OpenTab;

function showTab(num) {
	try {
		if( OpenTab !== undefined ){
			var OldTabID = document.getElementById('tab'+OpenTab);
			var OldPanelID = document.getElementById('panel'+OpenTab);
			OldTabID.className = '';
			OldPanelID.className = 'hide';
			OldTabID.setAttribute('aria-selected', false);
			OldPanelID.setAttribute('aria-hidden', true);
		}
		var TabID = document.getElementById('tab'+num);
		var PanelID = document.getElementById('panel'+num);
		TabID.className = 'selected';
		PanelID.className = 'selected';
		TabID.setAttribute('aria-selected', true);
		PanelID.setAttribute('aria-hidden', false);
		OpenTab = num;
	} catch(e){}
}

showTab(1);