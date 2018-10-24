
function submit(e)
{
    alert("Press 'OK' to submit, the form will clear on submission success.");
    var responses = Form.extractResponses(e.target);
    SFDK.set(`${window.localStorage.getItem("evt")}/${parseInt(responses["TEAM"])}/${parseInt(responses["MATCH"])}`, Form.extractResponses(e.target), onsuccess);
}

function onsuccess()
{
    var _form = document.querySelector("#form");
    _form.reset();
    alert("Success! Thank you for Scouting!");
}

function increment(e)
{
    var input = e.toElement.previousSibling;
    input.value ++;
}

function decrement(e)
{
    var input = e.toElement.previousSibling.previousSibling;
    input.value --;
}

class JSFN
{
    static parse(raw, isFieldSet, fieldset)
    {
        raw = JSON.parse(raw);
        function ce(t)
        {
            return document.createElement(t);
        }
        function ac(e, p)
        {
            p.appendChild(e);
        }
        function ct(t)
        {
            return document.createTextNode(t);
        }
        var form = (!isFieldSet? ce("form"): fieldset);
        for(var obj of raw)
        {
            if(obj.hasOwnProperty("@ROOT"))
            {
                form.setAttribute("id", obj["@ROOT"].id);
                if(obj["@ROOT"].hasOwnProperty("onsubmit"))
                {
                    form.onsubmit = eval("(e) => {e.preventDefault(); " + obj["@ROOT"].onsubmit + "(e)}");
                }
            }
            else if(obj.hasOwnProperty("@FIELDSET"))
            {
                var fieldset = ce("fieldset");
                for(var property of Object.keys(obj["@FIELDSET"].properties))
                {
                    if(property != "legend")
                    {
                        fieldset.setAttribute(property, obj["@FIELDSET"].properties[property]);
                    }
                    else
                    {
                        var legend = ce("legend");
                        ac(ct(obj["@FIELDSET"].properties[property]), legend);
                        ac(legend, fieldset);
                    }
                }
                ac(this.parse(JSON.stringify(obj["@FIELDSET"].fields), true, fieldset), form);
            }
            else
            {
                switch(obj.type)
                {
                    case 'checkbox':
                    case 'color':
                    case 'date':
                    case 'datetime-local': 
                    case 'email': 
                    case 'file':
                    case 'hidden':
                    case 'image':
                    case 'month': 
                    case 'number':
                    case 'password':
                    case 'radio':
                    case 'range':
                    case 'reset':
                    case 'search':
                    case 'submit':
                    case 'tel':
                    case 'text':
                    case 'time':
                    case 'url':
                    case 'week':
                    case 'submit':
                    case 'text':
                        var input = ce('input');
                        var label;
                        for(var attribute of Object.keys(obj))
                        {
                            if(attribute != "label")
                            {
                                input.setAttribute(attribute, obj[attribute]);
                            }
                            else
                            {
                                label = ce('label');
                                ac(ct(obj[attribute]), label);
                            }
                        }
                        if(label)
                        {
                            label.setAttribute("for", obj.type)
                            ac(label, form);
                            ac(input, form);   
                            if(obj.type == "number")
                            {
                                var inc = ce("button");
                                inc.setAttribute("type", "button");
                                inc.onclick = increment;
                                ac(document.createTextNode("+"), inc);
                                ac(inc, form);
                                var dec = ce("button");
                                dec.setAttribute("type", "button");
                                dec.onclick = decrement;
                                ac(document.createTextNode("-"), dec);
                                ac(dec, form);
                            }
                            label = undefined;
                        }
                        else
                        {
                            ac(input, form);   
                            if(obj.type == "number")
                            {
                                var inc = ce("button");
                                inc.onclick = increment;
                                ac(document.createTextNode("+"), inc);
                                ac(inc, form);
                                var dec = ce("button");
                                dec.onclick = decrement;
                                ac(document.createTextNode("-"), dec);
                                ac(dec, form);
                            }
                        }
                    break;
                    case 'button':
                        var input = ce("button");
                        input.setAttribute("type", "button")
                        for(var attribute of Object.keys(obj))
                        {
                            if(attribute != "label")
                            {
                                if(attribute != "type")
                                {
                                    input.setAttribute(attribute, obj[attribute]);
                                }
                            }
                            else
                            {
                                ac(ct(obj[attribute]), input);
                            }
                        }
                        ac(input, form);
                    break;
                    case 'textarea':
                        var input = ce("textarea");
                        var label;
                        for(var attribute of Object.keys(obj))
                        {
                            if(attribute != "label")
                            {
                                if(attribute != "type")
                                {
                                    input.setAttribute(attribute, obj[attribute]);
                                }
                            }
                            else
                            {
                                label = ce('label');
                                ac(ct(obj[attribute]), label);
                            }
                        }
                        if(label)
                        {
                            ac(label, form);
                            ac(input, form);
                            label = undefined;
                        }
                        else
                        {
                            ac(input, form);
                        }
                    break;
                    case 'select':
                        var input = ce("select");
                        var label;
                        for(var attribute of Object.keys(obj))
                        {
                            if(attribute != "label")
                            {
                                if(attribute != "type")
                                {
                                    if(attribute != "options")
                                    {
                                        input.setAttribute(attribute, obj[attribute]);
                                    }
                                    else
                                    {
                                        for(var option of obj["options"])
                                        {
                                            var optionElm = ce("option");
                                            optionElm.setAttribute("value", option);
                                            ac(ct(option), optionElm);
                                            ac(optionElm, input);
                                        }
                                    }
                                }
                            }
                            else
                            {
                                label = ce('label');
                                ac(ct(obj[attribute]), label);
                            }
                        }
                        if(label)
                        {
                            ac(label, form);
                            ac(input, form);
                            label = undefined;
                        }
                        else
                        {
                            ac(input, form);
                        }
                    break;
                    default:
                        console.error(`Unknown type '${obj.type}`);
                    break;
                }
            }
        }
        return form;
    }
}

class Form
{
    static extractResponses(formElement)
    {
        var responses = {};
        for(var child of formElement.children)
        {
            if(child.children.length < 1 && child.parentElement == formElement && child.tagName != "BUTTON" && child.type != "submit" && child.tagName != "LEGEND" && child.tagName != "LABEL")
            {
                if(child.type == "radio")
                {
                    if(responses[child.getAttribute("name")] == undefined)
                        responses[child.getAttribute("name")] = "unset";
                    if(child.checked)
                    {
                        responses[child.getAttribute("name")] = child.value;
                    }
                }
                else if(child.type == "checkbox")
                {
                    if(responses[child.getAttribute("name")] == undefined)
                    {
                        responses[child.getAttribute("name")] = [];
                    }
                    if(child.checked)
                    {
                        responses[child.getAttribute("name")].push(child.value);
                    }
                }
                else
                {
                    responses[child.getAttribute("name")] = child.value;
                }
            }
            else if(child.children.length > 0)
            {
                switch(child.type.toUpperCase())
                {
                    case 'FIELDSET':
                        responses = Object.assign(this.extractResponses(child), responses);
                    break;
                    case 'SELECT-ONE':
                        responses[child.getAttribute("name")] = child.value;
                    break;
                    default:
                        console.log(child.type);
                    break;
                }
            }
        }
        return responses;
    }
}
