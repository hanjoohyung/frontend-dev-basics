// DOM Level 2 Event 처리: HTML element의 event의 Listener를 등록하는 방식
// 1) JavaScript Code(DOM API) 로만 작성하기

var onTabClicked = function() {
	// unselect
	var lisSelected = document.getElementsByClassName("selected");
	(lisSelected.length === 1) && (lisSelected[0].className = '');
	
	// select
	this.className = "selected";
}



var tabbox = {
	init : function() {
		window.addEventListener("load", this.onWindouwLoad.bind(this));			
	},	
	onTabClicked: function() {
		// unselect
		var lisSelected = document.getElementsByClassName("selected");
		(lisSelected.length === 1) && (lisSelected[0].className = '');
		
		// select
		this.className = "selected";
	},
	onWindouwLoad: function() {
		var divTabBox = document.getElementsByClassName("tab-box")[0];
		var ul = divTabBox.childNodes[1];
		var liTabs = ul.getElementsByTagName("li");
		
		for(var i = 0; i < liTabs.length; i++) {
			liTabs[i].addEventListener("click", this.onTabClicked);
		}
	}
}