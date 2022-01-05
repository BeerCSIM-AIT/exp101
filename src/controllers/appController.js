exports.login = async (req, res)=>{
    res.send("Hello from login!");
}

exports.register = async (req, res)=> {
    console.log(req.body);
    res.send("Hello from register!");
}

exports.getProduct = async (req, res)=>{  
    console.log(req);
    res.send("Details of id " + req.params.id);
}