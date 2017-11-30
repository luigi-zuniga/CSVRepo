function opsi(data){
    var allRows = data.split(/\r?\n|r/);
    var div = "<div class='table-responsive'>";
    var table = "<table class='table'>";
        for(var singleRow = 0;singleRow<allRows.length;singleRow++){
            if(singleRow === 0){
                table+="<thead>";
                table+="<th class='text-center'>Sector | Temperatura </th>";
            }else{
                table+="<tr>";    
            }

        var rowCells = allRows[singleRow].split(',');
        
        for(var rowSingleCell=0;rowSingleCell<rowCells.length;rowSingleCell++){
                table+="<td class='text-center'>";
                table+= rowCells[rowSingleCell];
                table+="</td>";
        }
        if(singleRow === 0){
            table+="<tr>";
            table+="</thead>";         
            table+="<tbody>";         
        }else{
            table+="</tr>";
        }
    }
    table += "</tbody>"
    table+= "</table>";
    div+="</div>";
    $("body").append(table);
}
$.ajax({
    url: "historico",
    dataType:"text",
}).done(opsi);
