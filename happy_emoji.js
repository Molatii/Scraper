//required module
const puppeteer = require('puppeteer');

async function happy_emoji(url){
  
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    //const url ='https://www.licensingcorner.com/2017/04/27/jack-licensing-programme-emoji-movie/'; 
    await page.setDefaultNavigationTimeout(0);
    await page.goto(url);
   
   
    //select item inspected by xpath
    const [el] =await page.$x('/html/body/main/figure/div[1]/ul/li[2]/img');
  
    //get the src
    const src = await el.getProperty('src');
    const srcLink = await src.jsonValue();
  
    console.log({srcLink}); 
  
    await browser.close();
  };
  
  happy_emoji('https://www.pinclipart.com/maxpin/TobwwR/');
  
  