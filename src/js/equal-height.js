$(document).ready(function(){

	function setEqualHeight(columns){
		var tallestcolumn = 0;
		columns.each(function(){
			currentHeight = $(this).height();
			if(currentHeight > tallestcolumn){
					tallestcolumn  = currentHeight;
			}
		});
		columns.height(tallestcolumn);
	}
		
	setEqualHeight($('.last1, last2, .last3'));
});