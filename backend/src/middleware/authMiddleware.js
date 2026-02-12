import jwt from "jsonwebtoken"; //middleware will read token from req and verify it

const verifyToken = (req, res, next) => {
    let token;
    let authHeader = req.headers.authorization; //get http header

    if (authHeader && authHeader.startsWith("Bearer")){ 
        token = authHeader.split(" ")[1]; //token in the form Bearer abcdefghi -> ["Bearer", "abcdefghi"]

        if (!token){
            return res.status(401).json({message: "No token, authorization denied"})
        }

        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET); //jwt.verify checks if token signature matches secret
                                                                      //if token is valid or expired
                                                                      // if valid, returns decoded payload, otherwse throws error
            req.user = decode;
            // console.log("The decoded user is: ", req.user);
            next(); //token valid, continue to next middleware or controller
        } catch(e){
            res.status(400).json({message: "Token is not valid"});
        }
    } else {
        return res.status(401).json({message: "No token, authorization denied"});
    }
};

export default verifyToken;
