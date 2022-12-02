const express = require("express");
const app = express();


// your code

app.listen( process.env.PORT || 3030);
app.get('/',(req,res)=>{
  res.send('<p>home page</p>');
});
