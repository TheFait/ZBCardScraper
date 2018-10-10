let cardList = {};

function parseText()
{
    let text = $("#textBox").val();

    let test = jQuery.parseHTML(text)[1];

    let obj = $(test).find('div.card-body');
	
	console.log(obj);
	
	
    $.each(obj, function(key, value)
    {
		let amount = Number(value.childNodes[0].innerText.substring(2));
		let type = "";
		
		console.log(value.childNodes[5]);
		
		if (value.childNodes[5].innerText !== undefined)
			type = value.childNodes[5].innerText.trim();
		else
			type = "standard";
		
		let name = value.childNodes[2].innerText.trim();
        //console.log(name + ":" + type + ":" + amount);
		
		
		if(cardList[name] !== undefined)
		{
			cardList[name][type] = amount;
		}
		else
		{
			cardList[name] = {"standard":0,"backer":0,"limited":0};
			cardList[name][type] = amount;
		}
    });
	
	let table = $('<table />');
	let headRow = $('<tr />');
	headRow.append($('<th />').text("Name"));
	headRow.append($('<th />').text("Standard"));
	headRow.append($('<th />').text("Backer"));
	headRow.append($('<th />').text("Limited"));
	table.append(headRow);
	
	$.each(cardList, function(key,value)
	{	
		let row = $('<tr />');
		let keyData = $('<td />').text(key);
		let standard = $('<td />').text(value.standard);
		let backer = $('<td />').text(value.backer);
		let limited = $('<td />').text(value.limited);
		
		row.append(keyData);
		row.append(standard);
		row.append(backer);
		row.append(limited);
		
		table.append(row);
	});
	
	$("#container").append(table);
	
}