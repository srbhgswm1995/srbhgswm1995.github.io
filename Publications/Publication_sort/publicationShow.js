function placePubData(year){
	$("#pageContent").empty();
	var docName = 'Publication_sort/';
	docName = docName.concat(year,'.html')
	var base = "<object type = 'text/html' data='";
	var content = base.concat(docName,"' height='100%' width='100%'></object>")
	$("#pageContent").append(content);
}
