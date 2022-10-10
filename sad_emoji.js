//required modules
const puppeteer = require('puppeteer');
const cheerio = require('cheerio'); 
const scraping = require('website-scraper');
const web = require ("prompt-sync");
const got = require('got');


/*
(async () => {

    //user Enters Their web site on terminal
    const prompt = web();
    let WebSite = prompt("Enter Your Web Site : ");  

    //async helps with loading of puppeteer,browser and web page in order
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    const url = WebSite; 
    await page.goto(url);
            
     //Scraping title
     const h1 = await page.evaluate(
     () => document.querySelector("h1").textContent
     );

    //Scraping images links
      const logos = await page.evaluate(() =>
      Array.from(document.querySelectorAll("img"))
      .map(logo =>logo.src)
      )
 
      //For now print scraped title & images Links

      const messageOne ="********HTML Title************";
      console.log(messageOne);
      console.log(h1);

      const messageTwo ="********Image Links************";
      console.log(messageTwo);
      console.log(logos);   
 

      //Scraping all web site links  
      const messageLinks = '***********All Web site Links*****************';  
      console.log(messageLinks);

       await got(url).then(response => {
        const $ = cheerio.load(response.body);
      
        $('a').each((i, link) => {         

          const href = link.attribs.href;           
          //print all links
          console.log(href); 

        });

        }).catch(err => {
          console.error(err);
        });

        
      
      const message = '***********PLEASE WAIT WHILE WE ARE SCRAPING HTML FOR A  SITE*****************';
      console.log(message);
       
      //user enter filename for html file
      let userInput = prompt("Enter Folder Name where Html file will be Saved : ");  
      
      let options = {

        urls: [url],
        directory: userInput,        
            
      };
      
          scraping(options)
          .then((results) => {
              console.log("Succesfully Scraped..!");
              }).catch((err) =>{ 
              console.log("Error!!",err);
              });       
          
              
      const messageOne ="********HTML Title************";
      console.log(messageOne);
      console.log(h1);
     await browser.close();
})(); */


async function sad_emoji(url){
  
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  //const url ='https://www.licensingcorner.com/2017/04/27/jack-licensing-programme-emoji-movie/'; 
  await page.setDefaultNavigationTimeout(0);
  await page.goto(url);
 
 
  //select item inspected by xpath
  const [el] =await page.$x('/html/body/div[1]/div[1]/div/div[3]/div/main/article/div[1]/img');

  //get the src
  const src = await el.getProperty('src');
  const srcLink = await src.jsonValue();

  console.log({srcLink}); 

  await browser.close();
};

sad_emoji('https://www.licensingcorner.com/2017/04/27/jack-licensing-programme-emoji-movie/');




/*
(async () => {

  
  //async helps with loading of puppeteer,browser and web page in order
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const url = "https://www.licensingcorner.com"
  await page.goto(url);
          
   //Scraping title
   const h1 = await page.evaluate(
   () => document.querySelector("h1").textContent
   );


   const messageOne ="********HTML Title************";
   console.log(messageOne);
   console.log(h1);

   await browser.close();
  })();

*/



















