const mongoose =require('mongoose')

mongoose.connect('mongodb+srv://ezhil:ezhil@cluster0.pb8jx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log("connection done")
}).catch((e)=>{
    console.log("something error")
})
