//Various scripts for automating container-wise actions.

//code for mass-parsing a gtm container code to populate a custom dimension containing tag name for every ua tag that doesn't have it yet.
//mainPayload should contain the exported container. It's fine to not include the variables or the triggers. Should cut the size five times if you ditch them. 

var dimNumber = "123" //the ID of the dimension you want to update
var cd = {
    "type": "LIST",
    "key": "dimension",
    "list": [
        {
            "type": "MAP",
            "map": [
                {
                    "type": "TEMPLATE",
                    "key": "index",
                    "value": dimNumber
                },
                {
                    "type": "TEMPLATE",
                    "key": "dimension",
                    "value": ""
                }
            ]
        }
    ]
}

mainPayload.containerVersion.tag.forEach(function (tag) {
    if (tag.type == "ua") {
        cd.list[0].map[1].value = tag.name;
        var tagDimParameter = tag.parameter.find(function (param) { return param.key == "dimension"; });//see if any dimensions are set
        if (tagDimParameter) {
            if (tagDimParameter.list.find(function (dim) { return dim.map[0].value == dimNumber })) return;//check if our CD is set is set
            tagDimParameter.list.push(JSON.parse(JSON.stringify(cd.list[0])));
        }
        else{//no dimensions are set in the tag
            tag.parameter.push(JSON.parse(JSON.stringify(cd)));
        }
    }
});
