const request = require('request');
const cheerio = require('cheerio');




function paragraph(url,res){
request(url,(error,response,body)=>{
    if(!error && response.statusCode==200){
        const $ = cheerio.load(body);
    
    
    const pageTitle = $('p').text();
    res.send(pageTitle);
    }
    else{
        res.send("error")
    }
})
}


function title(url,res){
    request(url,(error,response,body)=>{
        if(!error && response.statusCode==200){
            const $ = cheerio.load(body);
        
        
        const pageTitle = $('title').text();
        res.send(pageTitle);
        }
        else{
            res.send("error")
        }
    })
    }


function links(url,res){
    let link=[];
    request(url,(error,response,body)=>{
        if(!error && response.statusCode==200){
            const $ = cheerio.load(body);
           $('a').each((index,element)=>{
            link[index] = $(element).attr('href');
            
           })

           res.send(link)
        }
    })
}

function images(url,res){
    let image=[];
    request(url,(error,response,body)=>{
        if(!error && response.statusCode==200){
            const $= cheerio.load(body);
            $('img').each((index,element)=>{
                image[index] = $(element).attr('src');

            })
            res.send(image)
        }
    })
}


function description(url,res){
    request(url,(error,response,body)=>{
        if(!error && response.statusCode==200){
            const $ =cheerio.load(body)
            const title=$('title');
            const des = $('meta[name="description"]').attr('content');
            res.send(des);
        }
    })
}


function keywords(url,res){
    request(url,(error,response,body)=>{
        if(!error && response.statusCode==200){
            const $ =cheerio.load(body)
            const title=$('title');
            const key = $('meta[name="keywords"]').attr('content');
            res.send(key);
        }
    })
}
module.exports={
    paragraph,
    title,
    links,
    images,
    description,
    keywords
}