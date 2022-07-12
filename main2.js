obj1 = {
    a:"a",
    b:"b",
    c:{d:"d",e:"e"},
    editA(){
        this.a ="AAAAAAAA"
    }
}

function isObject(subject){
    return typeof subject == "object";
}

function isArray(subject){
    return Array.isArray(subject);
}

function deepCopy(subject){
    let copySubject;

    const subjectIsObject = isObject(subject);
    const subjecIsArray = isArray(subject);

    if (subjectIsArray){
        copySubject =[];
    }else if(subjectIsObject) {
        copySubject ={};
    }
    else{
        return subject;
    }

    for (key in subject ) {
        const keyIsObject = isObject(subject(key))
        if (keyIsObject){
            copySubject[key] = deepCopy(subject(key));
        }
    }
    return copySubject;
}



/*
for (prop in obj1){
    obj2[prop] = obj1[prop];}

const obj3 = Object.assign({},obj1);

const obj4 = Object.create(obj1); */


