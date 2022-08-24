//Various scripts for automating container-wise actions.

//code for mass-parsing a gtm container code to populate a custom dimension containing tag name for every ua tag that doesn't have it yet.
//mainPayload should contain the exported container. It's fine to not include the variables or the triggers. Should cut the size five times if you ditch them. 

//Someone asked me to describe the process step-by-step, so here it is:
/*
1. Export your container into json through the admin panel of GTM.
2. Open the json file, copy everything except the top line (top line is just a comment, not a json)
3. Open Chrome on any page (empty tab would do), open the console.
4. Type var mainPayload =   and paste your json there. Hit enter.
5. Copy my code, change the dimNumber value in it to the actual custom dimension you would like to use for this. 
I would suggest using hit-level CD unless you want to find out which tag fired last in a session, lol.
6. Paste the code. Hit enter. TPaste the code. Hit enter. Type mainPayload , hit enter. 
Right click on the object (at the very beginning of it), choose to copy the whole object. 
7. Now paste the object in a separate tab and compare its structure to the object that you've exported. 
It should have the same structure. You can also check if the new object has the custom dimensions set properly.
8. Now import the changed container into GTM, preferably in a separate workspace.
9. The import function should show the tags modified. 
It can also wrongly label certain variables and triggers as newly created or modified. That's an artefact. 
I don't think that's me doing it. Just abandon these changes in the overview. They don't change anything really. 
A few unrelated tags may be similarly affected, although, again, no changes there. 
10. Preview. See if the tag name is indeed populated where expected.
11. Publish.
*/

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
            tag.parameter.find(function (param) { return param.key == "overrideGaSettings"; }).value = "true";
            tag.parameter.push(JSON.parse(JSON.stringify(cd)));
        }
    }
});
