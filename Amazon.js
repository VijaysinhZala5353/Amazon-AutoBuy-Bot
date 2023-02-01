//BOT version 35.2: coupon setting
const puppeteer = require('puppeteer-extra')
const puppeteer2 = require('puppeteer')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin(),puppeteer2)
const fs = require('fs').promises;
var fs2 = require('fs');

//id and address settings
var idName = 'shrikant';
var idIncludePlus = "no" //"yes", "no"
var domainName = "gidwani.store" // "gmail.com", "Rohitfilte.store", "nathanitus.store","gidwani.store"
var pass = '112233';
var address = 'Harsh'; //'Harsh', 'Rohit', 'Punit', 'Nathani', 'Nitin', 'Rahul', 'Vishal', 'Jatin', 'Piyush','Piyush2', 'Ravi', 'Ravi2', 'Ravi3', 'Deepak', 'palash', 'sunny', 'Neeraj', 'RB', 'Manish'
var accessCode = "VZ"; // "VZ", "ZV", "MS", "MZ", "BK", "PS", "HR", "AV", "MJ", "JZ", "Het", "VH", "AJ", "JD"
var idNumberStart = 458;
var idNumberEnd = 475;

//gv setting
var payWithGV = "yes";
var totalGV = 1;

//product setting
var finalCartValue = "933.20";
var secondaryCartValue = "0"

var proLink1 = "https://www.amazon.in/gp/product/B09L7QVYTZ/ref=sw_img_1?smid=A15APWRK6P7LBV&psc=1"
var qtyOfPro1 = "1";
var lastPageQty = 0; 
var subSaveStatus1 = "no" //"yes" or "no"
var extraCoupon1 = "yes"

var proLink2 = ""
var qtyOfPro2 = "4";
var subSaveStatus2 = "yes" //"yes" or "no"
var extraCoupon2 = "no"
 
var proLink3 = "";
var qtyOfPro3 = "4";
var subSaveStatus3 = "yes" //"yes" or "no"
var extraCoupon3 = "no"

//order type
var orderType = "NORMAL" // "Beauty", "Home", "NORMAL"
var addAddress = "yes" //"yes", "no"
var paymentType = "Prepaid" // "Prepaid", "COD"

//coupon and gv setting
var beautyCouponLink = "https://amazon.in/h/rewards/dp/amzn1.rewards.rewardAd.YBS3A3C3N5RUU?rdpf=en";
var beatyCouponButtonCode = "amzn1.rewards.reward.D735YEQEEZIOC";
var homeCouponLink = "https://www.amazon.in/h/rewards/dp/amzn1.rewards.rewardAd.WSITHH74HAYN2?rdpf=en";
var homeCouponButtonCode = "amzn1.rewards.reward.4GM5BNMN6PCDW";
var couponCode = ""; //Like "HOM200"
 
//available links to scrape
var signIn = "https://www.amazon.in/ap/signin?ie=UTF8&openid.pape.max_auth_age=3600&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fcbcc%2Fmarketpage%3Fref_%3Din_cbcc_direct%26cbccReturnUrl%3Dhttps%253A%252F%252Fwww.amazon.in%253Fref%253Din_cbcc&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_aircube_mobile_in&openid.mode=checkid_setup&siteState=clientContext%3D260-5487428-8205334%2CsourceUrl%3Dhttps%253A%252F%252Fwww.amazon.in%252Fcbcc%252Fmarketpage%253Fref_%253Din_cbcc_direct%2526cbccReturnUrl%253Dhttps%25253A%25252F%25252Fwww.amazon.in%25253Fref%25253Din_cbcc%2Csignature%3Dj2FY0MRaOR9ecPUlF6rgBj8gKpvyMj3D&marketPlaceId=A21TJRUUN4KGV&pageId=Amazon&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&switch_account=signin&ignoreAuthState=1&disableLoginPrepopulate=1&ref_=ap_sw_aa";
var captcha = "https://www.amazon.in/ap/signin";
var successfulLoginLink = "https://www.amazon.in/cbcc/marketpage?ref_=in_cbcc_direct&cbccReturnUrl=";
var addressLink = "https://www.amazon.in/a/addresses/add?ref=ya_address_book_add_button";
var successfulAddressLink = "https://www.amazon.in/a/addresses?alertId=yaab-enterAddressSucceed";
var duplicateAddressLink = "https://www.amazon.in/a/addresses?alertId=yaab-enterAddressDuplicate";
var cartLink = "https://www.amazon.in/gp/cart/view.html?ref_=nav_cart";
var skipNumber = "https://www.amazon.in/gp/buy/addressselect/handlers/display.html?hasWorkingJavascript=1";
var skipNumber2 = "https://www.amazon.in/gp/buy/addressselect/handlers/display.html?_from=cheetah"
var proceesToPayLink = "https://www.amazon.in/gp/buy/spc/handlers/display.html?hasWorkingJavascript=1";
var paymentPageLink = "https://www.amazon.in/gp/buy/payselect/handlers/display.html?hasWorkingJavascript=1"
var noStockUrl = "https://www.amazon.in/gp/buy/itemselect/handlers/display.html?ie=UTF8&useCase=multiAddress&hasWorkingJavascript=1"
var signInApproval = "https://www.amazon.in/cbcc/marketpage?ref_=in_cbcc_direct&cbccReturnUrl=https%3A%2F%2Fwww.amazon.in%3Fref%3Din_cbcc"
var accountNotFoundError = "Wecannotfindanaccountwiththatemailaddress"
var accountLockError = "YouraccounthasbeenlockedformisuseofAmazon’sservices.Wehavesentyouanemailwithadditionalinformation.";
var passwordResetError = "https://www.amazon.in/ap/forgotpassword/reverification?"
var addressErrorLink = "https://www.amazon.in/a/addresses/add?ref=ya_address_book_add_post"
var orderIdPageLink = "https://www.amazon.in/gp/buy/thankyou/handlers/display.html?purchaseId=404-2268831-3250758&ref_=chk_typ_browserRefresh&isRefresh=1"
var orderPage = "https://www.amazon.in/gp/css/order-history?ref_=nav_orders_first"
var puzzleLink = "https://www.amazon.in/ap/cvf/request?arb="

//some logical parts
var idShortName = idName.slice(0,3)
finalCartValue = "₹"+finalCartValue;
secondaryCartValue = "₹"+secondaryCartValue;

gvFinalCartValue = "-"+finalCartValue;
gvSecondPrice = "-"+secondaryCartValue;

//order type 
if(orderType.toLowerCase() == "beauty")
{
    var CouponLink = beautyCouponLink
    var couponButtonCode = beatyCouponButtonCode
}
else if(orderType.toLowerCase() == "home")
{
    var CouponLink = homeCouponLink
    var couponButtonCode = homeCouponButtonCode
}

//access setting
if(accessCode.toLowerCase() == "vz")
{
    var programFilesName = "Program Files"
    var laptopName = "Admin"
}
else if(accessCode.toLowerCase() == "zv")
{
}
else if(accessCode.toLowerCase() == "ms")
{
    var programFilesName = "Program Files"
    var laptopName = "Mahipat Singh Zala"
}
else if(accessCode.toLowerCase() == "bk")
{
    var programFilesName = "Program Files"
    var laptopName = "chavd"
}
else if(accessCode.toLowerCase() == "ps")
{
    var programFilesName = "Program Files"
    var laptopName = "PRAHLAD SINH RAO"
}
else if(accessCode.toLowerCase() == "hr")
{
    var programFilesName = "Program Files"
    var laptopName = "Harpalsinh"
}
else if(accessCode.toLowerCase() == "av")
{
    var programFilesName = "Program Files"
    var laptopName = "HP"
}
else if(accessCode.toLowerCase() == "mj")
{
    var programFilesName = "Program Files (x86)"
    var laptopName = "MAYUR RAJ JADEJA"
}
else if(accessCode.toLowerCase() == "jz")
{
    var programFilesName = "Program Files"
    var laptopName = "zala jaydipsinh"
}
else if(accessCode.toLowerCase() == "het")
{
    var programFilesName = "Program Files"
    var laptopName = "hetan"
}
else if(accessCode.toLowerCase() == "vh")
{
    var programFilesName = "Program Files"
    var laptopName = "VIPUL PATEL"
}
else if(accessCode.toLowerCase() == "mz")
{
    var programFilesName = "Program Files"
    var laptopName = "ADMIN"
}
else if(accessCode.toLowerCase() == "jd")
{
    var programFilesName = "Program Files"
    var laptopName = "DELL"
}
else if(accessCode.toLowerCase() == "aj")
{
    var programFilesName = "Program Files"
    var laptopName = "LENOVO"
}

//convert gv into array from text file
async function takeGV()
{
    gv1 = []
    gv2 = []
    gv1Index = 0
    if(payWithGV.toLowerCase() == "yes")
    {
        gv1 = fs2.readFileSync('gv1.txt').toString().split("\n");
        if(totalGV == 2)
        {
            gv2 = fs2.readFileSync('gv2.txt').toString().split("\n");
        }
    }
}

//set gv from array
async function setGV()
{
    firstGV = ""
    secondGV = ""
    firstGV = gv1[gv1Index]
    if(totalGV == 2)
    {
        secondGV = gv2[gv1Index]
    }
    try
    {
        firstGV = firstGV.replace(/\s+/g, '');
        secondGV = secondGV.replace(/\s+/g, '');
        firstGV = firstGV.replace(",", "");
        secondGV = secondGV.replace(",", "");
    }
    catch
    {}
}

//open chrome according to user and OS platform
async function givePage()
{
    if(accessCode.toLowerCase() == "zv")
    {
        browser = await puppeteer.launch({
            executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
            userDataDir : `/Users/vijaysinh/Library/Application Support/Google/Chrome/Profile ${1000+idNumberStart}`,
            headless: false,
            defaultViewport: null,
            args: [
                //'--auto-open-devtools-for-tabs',
                '--disable-dev-shm-usage',
                '--disable-site-isolation-trials',
                '--start-maximized',
                '--start-fullscreen'
            ]
        });
    }
    else
    {
        browser = await puppeteer.launch({
            executablePath: `C:\\${programFilesName}\\Google\\Chrome\\Application\\chrome.exe`,
            userDataDir : `C:\\Users\\${laptopName}\\AppData\\Local\\Google\\Chrome\\User Data\\Profile ${1000+idNumberEnd}`,
            headless: false,
            defaultViewport: null,
            args: [
                //'--auto-open-devtools-for-tabs',
                '--disable-dev-shm-usage',
                '--disable-site-isolation-trials',
                '--start-maximized'
            ]
        });        
    }
    
    [page] = await browser.pages()   
    return page;
}


async function clickById(page, id_name)
{
   try
   {
       await page.click("input[id='"+ id_name + "']", elem => elem.click());
   }
   catch(e1)
   {
       try
       {
           await page.$eval("input[id='"+ id_name + "']", elem => elem.click());
       }
       catch(e2)
       {
           try
           {
               await page.evaluate(() => document.getElementById(id_name)[0].click());
           }
           catch(e3)
           {
 
           }
          
       }
   }
}
 
async function clickByButtonId(page, id_name)
{
   try
   {
       await page.click("button[id='"+ id_name + "']", elem => elem.click());
   }
   catch(e1)
   {
       try
       {
           await page.$eval("button[id='"+ id_name + "']", elem => elem.click());
       }
       catch(e2)
       {
           await page.evaluate(() => document.getElementById(id_name)[0].click());
       }
   }
}
 
 
async function clickByAria(page, aria_name)
{
    try
    {
        await page.click("input[aria-labelledby='"+ aria_name + "']", elem => elem.click());
    }
    catch(e1)
    {
        try
        {
            await page.$eval("input[aria-labelledby='"+ aria_name + "']", elem => elem.click());
        }
        catch(e2)
        {
            await page.evaluate(() => document.getElementById(aria_name)[0].click());
        }
    }
}

async function loginErrors(page)
{
    var error_info = await page.$x('//*[@id="auth-error-message-box"]/div/div/ul/li/span');
    error_text = await page.evaluate(el => el.textContent, error_info[0])
    error_text = error_text.replace(/\s+/g, '');
    if(error_text == accountNotFoundError)
    {
        sign_in_error = true
        console.log(`ID: ${idNumberStart} account not found`)
    }
    if(error_text == accountLockError)
    {
        sign_in_error = true
        console.log(`ID: ${idNumberStart} account lock che`)
    }
}
async function signIn(page,idName,idNumber,pass)
{
    for(var j=1; j<2; j++)
    {
        password_error = false;
        sign_in_error = false;
        require_approval = false;
        await page.goto(signIn, { waitUntil: 'domcontentloaded' });
        await page.waitForTimeout(500)
        if(idIncludePlus.toLowerCase() == "yes")
        {
            await page.type("input[id='ap_email']", `${idName}+${idNumber}@${domainName}`);
        }
        else if(idIncludePlus.toLowerCase() == "no")
        {
            await page.type("input[id='ap_email']", `${idName}${idNumber}@${domainName}`);
        }

        await page.waitForTimeout(20)
        await page.type("input[id='ap_password']", `${pass}`);
        await page.waitForTimeout(200)
        await clickById(page,'signInSubmit');
        await page.waitForNavigation({ waitUntil: 'domcontentloaded' });
        var error_link = await page.url()
        var testing_link = error_link
        var puzzle_page = error_link.slice(0,41)
        error_link = error_link.slice(0,55)
        while(puzzle_page == puzzleLink)
        {
            try
            {
                await page.waitForNavigation({ waitUntil: 'domcontentloaded' })
            }
            catch
            {
            }
            puzzle_page = await page.url()
            puzzle_page = puzzle_page.slice(0,41)
        }
        if(error_link == passwordResetError)
        {
            password_error = true
            console.log(`ID: ${idNumberStart} ma password reset mage che`)
            break;
        }
        if(testing_link.slice(0,52) == signInApproval)
        {
            require_approval = true;
            console.log(`ID: ${idNumberStart} ma approval jaay che`)
            break;
        }
        while(await page.url() == captcha)
        {
            try
            {
                await loginErrors(page)
                if(sign_in_error)
                {
                    break;
                }
                await page.type("input[id='ap_password']", `${pass}`);
            }
            catch
            {
                await page.waitForSelector("input[id='ap_email']");
                await page.type("input[id='ap_password']", `${pass}`);
            }
            page_link = await page.url()
            page_link = page_link.slice(0,72)
            while(page_link != successfulLoginLink)
            {
                try
                {
                    await page.waitForNavigation({ waitUntil: 'domcontentloaded' })
                    if(await page.url() == captcha)
                    {
                        await page.type("input[id='ap_password']", `${pass}`);
                    }
                }
                catch
                {}
                page_link = await page.url()
                page_link = page_link.slice(0,72)
            }
        }
        if(!sign_in_error)
        {
            cart_button = await page.$x('//*[@id="nav-cart-count"]');
            cart_text = await page.evaluate(el => el.textContent, cart_button[0])
        }
    }
}
    
async function noImage(page)
{
    await page.setRequestInterception(true)
    page.on('request', (request) => {
    if (request.resourceType() === 'image') request.abort()
    else request.continue()
    })
}

async function emptyCart(page)
{
    await page.goto(cartLink, { waitUntil: 'domcontentloaded' });
    try
    {
        await page.click("input[value='Delete']", elem => elem.click());
        await page.waitForTimeout(1000)
        try
        {
            await page.click("input[value='Delete']", elem => elem.click());
            await page.waitForTimeout(1000)
            try
            {
                await page.click("input[value='Delete']", elem => elem.click());
                await page.waitForTimeout(1000)
                try
                {
                    await page.click("input[value='Delete']", elem => elem.click());
                    await page.waitForTimeout(1000)
                    try
                    {
                        await page.click("input[value='Delete']", elem => elem.click());
                        await page.waitForTimeout(1000)
                    }
                    catch
                    {}
                }
                catch
                {}
            }
            catch
            {}
        }
        catch
        {}
    }
    catch
    {}
}

async function collectCoupon(page)
{
    coupon_collected = false;
    await page.goto(CouponLink, { waitUntil: 'domcontentloaded' });
    
    await page.waitForTimeout(500)
    try 
    {
        await clickByButtonId(page,`${couponButtonCode}`);
        coupon_collected = true;
    }
    catch (e)
    {
        try
        {
            await page.waitForTimeout(100)
            var coupon_button = await page.$x('//*[@id="a-autoid-0"]/span');
            coupon_message = await page.evaluate(el => el.textContent, coupon_button[0])
            coupon_collected = true;
        }
        catch
        {
            coupon_collected = false;
        }
        
    }
}

async function addAddress(page,idNumber)
{
    while(!(await page.url() == successfulAddressLink || await page.url() == duplicateAddressLink))
    {
        await page.goto(addressLink, { waitUntil: 'domcontentloaded' });
        
        await page.evaluate(() => {
            var example3 = document.getElementById('address-ui-widgets-enterAddressPostalCode');
            example3.value = '';
        });
        await page.waitForTimeout(200)
        await page.evaluate(() => {
            var example4 = document.getElementById('address-ui-widgets-enterAddressFullName');
            example4.value = '';
        });
        
        if(address.toLowerCase() == "harsh")
        {
            //Harsh Dheeraj DG
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressFullName']", `Harsh Dheeraj DG ${idShortName}${idNumber}`); //name
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressPhoneNumber']", '7987083405');  //mobile number
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressPostalCode']", '462030');  //pincode
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressLine1']", `House no. ${idNumber}, 6 near sparkle gym, ${accessCode}`); //address 1st line
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressLine2']", 'mini market, bairagarh, Bhopal'); //address 2nd line
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-landmark']", 'Bairagarh'); //landmark
            await page.waitForTimeout(50)
        }

        else if(address.toLowerCase() == "rohit")
        {
            //Rohit Zl
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressFullName']", `Rohit Suraj ${idShortName}${idNumber}`); //name
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressPhoneNumber']", '8319904725');  //mobile number
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressPostalCode']", '462044');  //pincode
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressLine1']", `House no. ${idNumber}, sadhu vaswani school road, ${accessCode}`); //address 1st line
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressLine2']", 'uco bank road, Bhopal'); //address 2nd line
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-landmark']", 'Kolar Bhopal'); //landmark
            await page.waitForTimeout(50)
        }

        else if(address.toLowerCase() == "rahul")
        {
            //Rahul Lalwani
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressFullName']", `Rahul Lalwani ${idShortName}${idNumber}`); //name
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressPhoneNumber']", '8462866296');  //mobile number
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressPostalCode']", '462044');  //pincode
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressLine1']", `House no. ${idNumber}, sadhu vaswani school, ${accessCode}`); //address 1st line
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressLine2']", 'pari jounral, near dps school, kolar'); //address 2nd line
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-landmark']", 'kolar bhopal'); //landmark
            await page.waitForTimeout(50)
        }

        else if(address.toLowerCase() == "vishal")
        {
            //Vishal KV
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressFullName']", `Vishal KV ${idShortName}${idNumber}`); //name
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressPhoneNumber']", '6263874037');  //mobile number
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressPostalCode']", '462030');  //pincode
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressLine1']", `House no. ${idNumber}, Aara machine road, ${accessCode}`); //address 1st line
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressLine2']", 'Maa vishnu elecrticals, bairagarh'); //address 2nd line
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-landmark']", 'Bairagarh'); //landmark
            await page.waitForTimeout(50)
        }

        else if(address.toLowerCase() == "jatin")
        {
            //Jatin PKS
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressFullName']", `Jatin PKS ${idShortName}${idNumber}`); //name
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressPhoneNumber']", '6263666369');  //mobile number
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressPostalCode']", '462030');  //pincode
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressLine1']", `House no. ${idNumber}, near bank of baroda, ${accessCode}`); //address 1st line
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressLine2']", 'Chanchal road, sant hirdaram nagar, bairagarh'); //address 2nd line
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-landmark']", 'Pradeep kirana store'); //landmark
            await page.waitForTimeout(50)
        }

        else if(address.toLowerCase() == "piyush")
        {
            //Piyush
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressFullName']", `Piyush Vadhani PV ${idShortName}${idNumber}`); //name
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressPhoneNumber']", '9691434012');  //mobile number
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressPostalCode']", '462030');  //pincode
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressLine1']", `House no. ${idNumber}, Pink Fashion style, ${accessCode}`); //address 1st line
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressLine2']", 'Near leena gulani clinic, shivam collection'); //address 2nd line
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-landmark']", 'shivam collection,leena gulani clinic'); //landmark
            await page.waitForTimeout(50)
        }

        else if(address.toLowerCase() == "piyush2")
        {
            //kamal
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressFullName']", `Kamal VK Traders ${idShortName}${idNumber}`); //name
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressPhoneNumber']", '7000064740');  //mobile number
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressPostalCode']", '462030');  //pincode
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressLine1']", `House no. ${idNumber}, VK traders, ${accessCode}`); //address 1st line
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressLine2']", 'shani mandir, near vikram aditya dairy'); //address 2nd line
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-landmark']", 'Nr. constructionsite sahni mandir VK Traders'); //landmark
            await page.waitForTimeout(50)
        }

        else if(address.toLowerCase() == "nathani")
        {
            //Nathani
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressFullName']", `Tushar TN ${idShortName}${idNumber}`); //name
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressPhoneNumber']", '7000431805');  //mobile number
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressPostalCode']", '462030');  //pincode
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressLine1']", `House no. ${idNumber}, Sindhu samaj, ${accessCode}`); //address 1st line
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressLine2']", 'B23/251, Behind Sindhu samaj school, bairagarh'); //address 2nd line
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-landmark']", 'Bairagarh'); //landmark
            await page.waitForTimeout(50)
        }

        else if(address.toLowerCase() == "ravi")
        {
            //Ravi
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressFullName']", `Ravi RV ${idShortName}${idNumber}`); //name
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressPhoneNumber']", '8319001155');  //mobile number
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressPostalCode']", '462030');  //pincode
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressLine1']", `House no. ${idNumber}, Near Girls School, ${accessCode}`); //address 1st line
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressLine2']", 'Happy O Clock, Bairagarh'); //address 2nd line
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-landmark']", 'HAPPY O CLOCK BAIRAGARH'); //landmark
            await page.waitForTimeout(50)
        }

        else if(address.toLowerCase() == "ravi2")
        {
            //Ravi2
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressFullName']", `Ravi ${idShortName}${idNumber}`); //name
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressPhoneNumber']", '8054001246');  //mobile number
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressPostalCode']", '148031');  //pincode
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressLine1']", `House no. ${idNumber}, Near amul parlour, ${accessCode}`); //address 1st line
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressLine2']", 'touch try, near axis bank'); //address 2nd line
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-landmark']", 'toch try'); //landmark
            await page.waitForTimeout(50)
        }

        else if(address.toLowerCase() == "ravi3")
        {
            //ravi3
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressFullName']", `${idShortName} way${idNumber}`); //name
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressPhoneNumber']", '8837846928');  //mobile number
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressPostalCode']", '148101');  //pincode
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressLine1']", `House no. ${idNumber}, amul parlor, ${accessCode}`); //address 1st line
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressLine2']", 'near golden temple, main road'); //address 2nd line
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-landmark']", 'way'); //landmark
            await page.waitForTimeout(50)
        }

        else if(address.toLowerCase() == "deepak")
        {
            //Deepak

            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressFullName']", `${idShortName} YK${idNumber}`); //name
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressPhoneNumber']", '9981528508');  //mobile number
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressPostalCode']", '462030');  //pincode
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressLine1']", `House no. ${idNumber},community hall, ${accessCode}`); //address 1st line
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressLine2']", 'Near people ka ped, Bairagarh'); //address 2nd line
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-landmark']", 'Bairagarh huzur'); //landmark
            await page.waitForTimeout(50)
        }

        else if(address.toLowerCase() == "nitin")
        {
            //Nitin
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressFullName']", `${idShortName} NN ${idNumber}`); //name
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressPhoneNumber']", '7566762222');  //mobile number
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressPostalCode']", '452020');  //pincode
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressLine1']", `House no. ${idNumber}, plot no 333001, ${accessCode}`); //address 1st line
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressLine2']", 'marble mandi, near shakti tol kaata'); //address 2nd line
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-landmark']", 'Udyog nagar palda'); //landmark
            await page.waitForTimeout(50)
        }

        else if(address.toLowerCase() == "nitin2")
        {
            //Nitin2
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressFullName']", `Ayush ${idShortName}${idNumber}`); //name
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressPhoneNumber']", '7566762222');  //mobile number
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressPostalCode']", '462046');  //pincode
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressLine1']", `House no. ${idNumber}, Mahaveer nagar, ${accessCode}`); //address 1st line
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressLine2']", 'near station road, mandideep'); //address 2nd line
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-landmark']", 'mandideep'); //landmark
            await page.waitForTimeout(50)
        }

        else if(address.toLowerCase() == "rb")
        {
            //Ravi Bansal   
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressFullName']", `Rajni`); //name
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressPhoneNumber']", '8437718850');  //mobile number
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressPostalCode']", '151204');  //pincode
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressLine1']", `House no. ${idNumber},Amazon Easy Store, ${accessCode}`); //address 1st line
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressLine2']", 'Gobind Nagar, St No.1, KotKapura'); //address 2nd line
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-landmark']", `PO ${idShortName}${idNumber}`); //landmark
            await page.waitForTimeout(50)
        }
        else if(address.toLowerCase() == "neeraj")
        {
            //Neeraj
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressFullName']", `Bhartu ${idShortName}${idNumber}`); //name
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressPhoneNumber']", '8839770239');  //mobile number
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressPostalCode']", '462030');  //pincode
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressLine1']", `House no. ${idNumber}, Bhartu Mini market, ${accessCode}`); //address 1st line
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressLine2']", 'near fine studio, sun deep provision'); //address 2nd line
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-landmark']", 'sun deep provision'); //landmark
            await page.waitForTimeout(50)
        }

        else if(address.toLowerCase() == "sunny")
        {
            //sunny
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressFullName']", `sunny m ${idShortName}${idNumber}`); //name
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressPhoneNumber']", '7987426837');  //mobile number
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressPostalCode']", '462030');  //pincode
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressLine1']", `House no. ${idNumber}, aara machine road, ${accessCode}`); //address 1st line
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressLine2']", 'aara machine, bairagarh, Bhopal'); //address 2nd line
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-landmark']", 'Bairagarh'); //landmark
            await page.waitForTimeout(50)
        }

        else if(address.toLowerCase() == "palash")
        {
            //Palash
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressFullName']", `Palash Detani ${idShortName}${idNumber}`); //name
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressPhoneNumber']", '8319789131');  //mobile number
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressPostalCode']", '462030');  //pincode
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressLine1']", `House no. ${idNumber}, B new 35, ${accessCode}`); //address 1st line
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressLine2']", 'near Gidhwani park, bairagarh'); //address 2nd line
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-landmark']", 'Bairagarh'); //landmark
            await page.waitForTimeout(50)
        }

        else if(address.toLowerCase() == "manish")
        {
            //Manish
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressFullName']", `${idShortName} mm ${idNumber}`); //name
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressPhoneNumber']", '7000521569');  //mobile number
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressPostalCode']", '462030');  //pincode
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressLine1']", `House no. ${idNumber}, mm colony, ${accessCode}`); //address 1st line
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressLine2']", 'near mm colony, bairagarh'); //address 2nd line
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-landmark']", 'Bairagarh'); //landmark
            await page.waitForTimeout(50)
        }

        else if(address.toLowerCase() == "punit")
        {
            //Manish
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressFullName']", `PD ${idShortName}${idNumber}`); //name
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressPhoneNumber']", '8319311524');  //mobile number
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressPostalCode']", '462030');  //pincode
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressLine1']", `House no. ${idNumber}, Evergreen Hotel, ${accessCode}`); //address 1st line
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-enterAddressLine2']", 'Near Chirayu Hospital, bairagarh'); //address 2nd line
            await page.waitForTimeout(50)
            await page.type("input[id='address-ui-widgets-landmark']", 'Bhaishkhedi'); //landmark
            await page.waitForTimeout(50)
        }

        await clickByAria(page,'address-ui-widgets-form-submit-button-announce');
        try
        {
            await page.waitForNavigation(6000);
        }
        catch
        {}
        address_error_check = await page.url()
        if(address_error_check == addressErrorLink)
        {
            try
            {
                //*[@id="address-ui-widgets-original-address-block_id-input"]
                var ss_button10 = await page.$x('//*[@id="address-ui-widgets-original-address-block_id-input"]')
                await ss_button10[0].click()
                await page.waitForTimeout(500)
                //address-ui-widgets-saveOriginalOrSuggestedAddress
                await page.click("input[name='address-ui-widgets-saveOriginalOrSuggestedAddress']", elem => elem.click());
                try
                {
                    await page.waitForNavigation(6000);
                }
                catch
                {}
            }
            catch
            {}
        }
    }
}

async function addProduct(page, product_link, paach_taka_coupon, ss_che, qty_product)
{
    product_problem = false;
    await page.goto(product_link, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500)

    if(paach_taka_coupon.toLowerCase() == "yes")
    {
        try
        {
            await page.evaluate(() => document.getElementsByClassName('a-icon a-icon-checkbox')[1].click());
        }
        catch(e101)
        {}
    }
    try
    {
        await page.waitForSelector("input[id='add-to-cart-button']",{timeout: 1000});
        if(ss_che.toLowerCase() == "yes")
        {
            try
            {
                await page.click("i[class='a-icon a-accordion-radio a-icon-radio-inactive']", elem => elem[1].click());
            }
            catch
            {
                await page.click("i[class='a-icon a-accordion-radio a-icon-radio-inactive']", elem => elem[0].click());
            }
            if(qty_product != "1")
            {
                await page.select('#rcxsubsQuan',qty_product);
            }
            await page.waitForTimeout(50)
            await page.waitForSelector("button[id='rcx-subscribe-submit-button-announce']");
            await page.waitForTimeout(50)
            var ss_button1 = await page.$x('//*[@id="rcx-subscribe-submit-button-announce"]')
            await ss_button1[0].click()
            try
            {
                await page.waitForTimeout(100)
                await ss_button1[0].click()
            }
            catch
            {
            }
        }
        else
        {
            if(qty_product != "1")
            {
                await page.select('#quantity',qty_product);
            }
            var addToCart_button1 = await page.$x('//*[@id="add-to-cart-button"]')
            await addToCart_button1[0].click()
        }   
    }
    catch(e102)
    {
        console.log(`SS nathi kato product problem`)
        product_problem = true;
    }
}

async function addToCart(page)
{
    try
    {
        await addProduct(page, proLink1, extraCoupon1, subSaveStatus1, qtyOfPro1)
        if(proLink2 != "")
        {
            await page.waitForNavigation(7000);
            await addProduct(page, proLink2, extraCoupon2, subSaveStatus2, qtyOfPro2)
            if(proLink3 != "")
            {
                await page.waitForNavigation(7000);
                await addProduct(page, proLink3, extraCoupon3, subSaveStatus3, qtyOfPro3)
            }
        }
    }
    catch
    {}
}

async function goToCart(page)
{
    try
    {
        await page.waitForNavigation(5000);
    }
    catch
    {}
    await page.goto(cartLink, { waitUntil: 'domcontentloaded' });
    while(await page.url() != cartLink)
    {
        await page.goto(cartLink, { waitUntil: 'domcontentloaded' });
        await page.waitForTimeout(1000)
    }
    try
    {
        await page.click("a[class='a-size-small a-link-normal sc-action-link']", elem => elem.click());
        await page.waitForTimeout(1000)
    }
    catch
    {}
    var m = puppeteer2.devices['iPhone SE']
    await page.emulate(m)
    skip_status = false
}
 
async function selectAddress(page)
{
    try
    {
        var element1 = await page.$x('//*[@id="address-book-entry-4"]/div[2]/span/a')
        await element1[0].click()
        skip_status = true
    }
    catch
    {
        try
        {
            var element1 = await page.$x('//*[@id="address-book-entry-3"]/div[2]/span/a')
            await element1[0].click()
            skip_status = true
        }
        catch
        {
            try
            {
                var element1 = await page.$x('//*[@id="address-book-entry-2"]/div[2]/span/a')
                await element1[0].click()
                skip_status = true
            }
            catch
            {
                try
                {
                    var element1 = await page.$x('//*[@id="address-book-entry-1"]/div[2]/span/a')
                    await element1[0].click()
                    skip_status = true
                }
                catch
                {
                    var element1 = await page.$x('//*[@id="address-book-entry-0"]/div[2]/span/a')
                    await element1[0].click()
                    skip_status = true
                }
            }
        }
    }
}

async function skipNumber(page)
{
    skip_status = false
    await page.goto(skipNumber, 1000);
    await page.waitForTimeout(1000)

    var page2 = await browser.newPage()
    await page2.goto(skipNumber, 1000);
    await page2.waitForTimeout(1000)

    try
    {
        await selectAddress(page2)
    }
    catch
    {
        await page.goto(cartLink, 2000);
        try
        {
            await page.click("a[class='a-size-small a-link-normal sc-action-link']", elem => elem.click());
            await page.waitForTimeout(1000)
        }
        catch
        {}
        var m = puppeteer2.devices['iPhone SE']
        await page.emulate(m)
        await page.goto(skipNumber, 1000);
        await page.waitForTimeout(1000)
        await page.goto(skipNumber, 1000);

        await page2.goto(skipNumber, 1000);
        await page2.waitForTimeout(1000)
        await selectAddress(page2)

    }
    page.close()
    
    try
    {
        await page2.waitForNavigation(6000);
    }
    catch
    {}
    return page2;
}
 
async function clickContinueButton(page)
{
    continueButtonStatus = true
    try
    {
        var elements1 = await page.$x('/html/body/div[5]/div/div[2]/div[2]/div/div[2]/div[1]/form/div[2]/div/div/div/span/span/input');
        await elements1[0].click()
    }
    catch
    {
        try
        {
            var elements2 = await page.$x('/html/body/div[5]/div/div[2]/div[2]/div/div[2]/div[2]/form/div[2]/div/div/div/span/span/input');
            await elements2[0].click()
        }
        catch
        {
            try
            {
                var elements3 = await page.$x('/html/body/div[5]/div/div[2]/div[3]/div/div[2]/div[1]/form/div[2]/div/div/div/span/span/input');
                await elements3[0].click()
            }
            catch
            {
                try
                {
                    var elements4 = await page.$x('/html/body/div[5]/div/div[2]/div[3]/div/div[2]/div[2]/form/div[2]/div/div/div/span/span/input');
                    await elements4[0].click()
                }
                catch
                {
                    continueButtonStatus = false
                    var elements5 = await page.$x('/html/body/div[5]/div/div[2]/div[2]/div/div[2]/div[3]/form/div[2]/div/div/div/span/span/input');
                    await elements5[0].click()
                    continueButtonStatus = true
                }
            } 
        }
    } 
}

async function selectPayAtStore(page)
{
    account_gv_limit = false
    gv_applied = false
    for(var i=1; i<2; i++)
    {
        product_qty_error = false;
        while(await page.url() != paymentPageLink)
        {
            await page.waitForTimeout(1000)
            if(await page.url() == noStockUrl)
            {
                product_qty_error = true;
                break;
            }
        }

        if(product_qty_error)
        {
            break;
        }
        else
        {
            try
            {
                console.log("testing 1")
                await page.waitForSelector("span[class='pmts-INR-currency-symbol']",{timeout: 1000});
                console.log("testing 2")
                await page.waitForSelector("input[name='ppw-widgetEvent:SetPaymentPlanSelectContinueEvent']");
                console.log("testing 3")
                await page.click("input[name='ppw-widgetEvent:SetPaymentPlanSelectContinueEvent']", elem => elem.click());
                await page.waitForTimeout(500)
                console.log("testing 4")
                account_gv_limit = true
                gv_applied = true
            }
            catch
            {
                try
                {
                    console.log("testing 5")
                    await page.waitForSelector("span[class='a-expander-prompt']",{timeout: 2000});
                    console.log("testing 6")
                    account_gv_limit = true
                    try
                    {
                        await page.waitForSelector("input[value='instrumentId=amzn1.pm.poa.YW16bjEucG9hOmFtem4xLnBvYS5wb2RhLlVuaWZpZWRQYXltZW50c0ludGVyZmFjZTox.QTIyV1c0UTBNTEVKOEI&isExpired=false&paymentMethod=UnifiedPaymentsInterface&tfxEligible=false']");
                        await page.click("input[value='instrumentId=amzn1.pm.poa.YW16bjEucG9hOmFtem4xLnBvYS5wb2RhLlVuaWZpZWRQYXltZW50c0ludGVyZmFjZTox.QTIyV1c0UTBNTEVKOEI&isExpired=false&paymentMethod=UnifiedPaymentsInterface&tfxEligible=false']", elem => elem.click());
                        await page.waitForTimeout(500);
                        console.log("testing 7")
                        await page.waitForSelector("input[class='a-input-text a-form-normal no-prefetch-on-change']");
                        await page.type("input[class='a-input-text a-form-normal no-prefetch-on-change']", "mahipatsinhzala@upi");
                        await page.waitForTimeout(250);
                        console.log("testing 8")
                        await page.click("input[name='ppw-widgetEvent:ValidateUpiIdEvent']", elem => elem.click());
                        await page.waitForTimeout(250);
                        await page.waitForSelector("span[class='a-color-success a-text-beside-button']");
                        await page.waitForTimeout(250);
                        console.log("testing 9")
                        await page.click("input[name='ppw-widgetEvent:SetPaymentPlanSelectContinueEvent']", elem => elem.click());
                        await page.waitForTimeout(250);
                        while(await page.url() != proceesToPayLink)
                        {
                            try
                            {
                                await page.waitForTimeout(250);
                                await page.click("input[name='ppw-widgetEvent:SetPaymentPlanSelectContinueEvent']", elem => elem.click());
                                await page.waitForTimeout(750);
                            }
                            catch
                            {}
                            
                        }
                        console.log("testing 9.1")
                        console.log("testing 10")
                    }    
                    catch(e14)
                    {}
                }
                catch
                {} 
            }       
        }
    }
}

async function checkQtyError(page)
{
    await page.waitForTimeout(100)
    if(await page.url() == noStockUrl)
    {
        product_qty_error = true;
    }
    else
    {
        product_qty_error = false;
    }
}

async function selectCOD(page)
{
    account_gv_limit = false
    gv_applied = false
    for(var i=1; i<2; i++)
    {
        product_qty_error = false;
        while(await page.url() != paymentPageLink)
        {
            await page.waitForTimeout(1000)
            if(await page.url() == noStockUrl)
            {
                product_qty_error = true;
                break;
            }
        }

        if(product_qty_error)
        {
            break;
        }
        else
        {
            try
            {
                await page.waitForSelector("span[class='pmts-INR-currency-symbol']",{timeout: 1000});
                await page.waitForSelector("input[name='ppw-widgetEvent:SetPaymentPlanSelectContinueEvent']");
                await page.click("input[name='ppw-widgetEvent:SetPaymentPlanSelectContinueEvent']", elem => elem.click());
                await page.waitForTimeout(500)
                account_gv_limit = true
                gv_applied = true
            }
            catch
            {
                try
                {
                    await page.waitForSelector("span[class='a-expander-prompt']",{timeout: 2000});
                    account_gv_limit = true
                    try
                    {
                        await page.evaluate(() => document.getElementsByClassName('a-color-base a-text-bold')[2].click());
                        await page.waitForTimeout(500);
                        await page.evaluate(() => document.getElementsByClassName('a-color-base a-text-bold')[2].click());
                        await page.waitForTimeout(500)
                        await page.click("input[name='ppw-widgetEvent:SetPaymentPlanSelectContinueEvent']", elem => elem.click());
                        await page.waitForNavigation(500)
                    }    
                    catch(e14)
                    {
                        await page.waitForSelector("input[value='instrumentId=amzn1.poa%3Aamzn1.poa.poda.PayAtStore%3A1&isExpired=false&paymentMethod=POA&tfxEligible=false']");
                        await page.evaluate(() => document.getElementsByClassName('a-color-base a-text-bold')[2].click());
                        await page.waitForTimeout(500);
                        await page.evaluate(() => document.getElementsByClassName('a-color-base a-text-bold')[2].click()); 
                        try
                        {
                            var elements1 = await page.$x('/html/body/div[5]/div/div[2]/div[2]/div/div[2]/div[1]/form/div[2]/div/div/div/span/span/input');
                            await elements1[0].click()
                        }
                        catch
                        {
                            try
                            {
                                var elements2 = await page.$x('/html/body/div[5]/div/div[2]/div[2]/div/div[2]/div[2]/form/div[2]/div/div/div/span/span/input');
                                await elements2[0].click()
                            }
                            catch
                            {
                                try
                                {
                                    var elements3 = await page.$x('/html/body/div[5]/div/div[2]/div[3]/div/div[2]/div[1]/form/div[2]/div/div/div/span/span/input');
                                    await elements3[0].click()
                                }
                                catch
                                {
                                    try
                                    {
                                        var elements4 = await page.$x('/html/body/div[5]/div/div[2]/div[3]/div/div[2]/div[2]/form/div[2]/div/div/div/span/span/input');
                                        await elements4[0].click()
                                    }
                                    catch
                                    {
                                        var elements5 = await page.$x('/html/body/div[5]/div/div[2]/div[2]/div/div[2]/div[3]/form/div[2]/div/div/div/span/span/input');
                                        await elements5[0].click()
                                    }
                                } 
                            }
                        } 
                        
                        await page.waitForTimeout(500)
                    }        
                    
                    var last_page_link = await page.url();
                    if(last_page_link != proceesToPayLink)
                    {
                         
                    }
                }
                catch
                {} 
            }       
        }
    }
}

async function priceChecker(page)
{
    try
    {
        var cart_value = await page.$x('//*[@id="subtotals-marketplace-table"]/tbody/tr[7]/td[2]');
        text1 = await page.evaluate(el => el.textContent, cart_value[0])
        text1 = text1.replace(/\s+/g, '');
        text1 = text1.replace(",", "");

        if(payWithGV.toLowerCase() == "yes")
        {
            var gv_value = await page.$x('//*[@id="subtotals-marketplace-table"]/tbody/tr[5]/td[2]');
            text2 = await page.evaluate(el => el.textContent, gv_value[0])
            text2 = text2.replace(/\s+/g, '');
            text2 = text2.replace(",", "");
        }
    }
    catch
    {
        try
        {
            var cart_value = await page.$x('//*[@id="subtotals-marketplace-table"]/tbody/tr[6]/td[2]');
            text1 = await page.evaluate(el => el.textContent, cart_value[0])
            text1 = text1.replace(/\s+/g, '');
            text1 = text1.replace(",", "");
            if(payWithGV.toLowerCase() == "yes")
            {
                var gv_value = await page.$x('//*[@id="subtotals-marketplace-table"]/tbody/tr[4]/td[2]');
                text2 = await page.evaluate(el => el.textContent, gv_value[0])
                text2 = text2.replace(/\s+/g, '');
                text2 = text2.replace(",", "");
            }
        }
        catch
        {
            try
            {
                var cart_value = await page.$x('//*[@id="subtotals-marketplace-table"]/tbody/tr[5]/td[2]');
                text1 = await page.evaluate(el => el.textContent, cart_value[0])
                text1 = text1.replace(/\s+/g, '');
                text1 = text1.replace(",", "");

                if(payWithGV.toLowerCase() == "yes")
                {
                    var gv_value = await page.$x('//*[@id="subtotals-marketplace-table"]/tbody/tr[3]/td[2]');
                    text2 = await page.evaluate(el => el.textContent, gv_value[0])
                    text2 = text2.replace(/\s+/g, '');
                    text2 = text2.replace(",", "");
                }
            }
            catch(e91)
            {
                var cart_value = await page.$x('//*[@id="subtotals-marketplace-table"]/tbody/tr[4]/td[2]');
                text1 = await page.evaluate(el => el.textContent, cart_value[0])
                text1 = text1.replace(/\s+/g, '');
                text1 = text1.replace(",", "");

                if(payWithGV.toLowerCase() == "yes")
                {
                    var gv_value = await page.$x('//*[@id="subtotals-marketplace-table"]/tbody/tr[2]/td[2]');
                    text2 = await page.evaluate(el => el.textContent, gv_value[0])
                    text2 = text2.replace(/\s+/g, '');
                    text2 = text2.replace(",", "");
                }
            }
        }
    }
}

async function applyGv(page, gv)
{
    await page.waitForSelector("input[id='spc-gcpromoinput']");
    await page.type("input[id='spc-gcpromoinput']", `${gv}`);
    await page.waitForTimeout(20)
    await page.waitForSelector("input[class='a-declarative a-button-text']");
    await page.click("input[class='a-declarative a-button-text']")
    await page.waitForTimeout(1000)
    await page.waitForSelector("p[id='gc-success']");
    await page.waitForTimeout(100)
    gv_applied = true
}

async function lastPage(page)
{
    while(await page.url() != proceesToPayLink)
    {
        await checkQtyError(page)
    }
    if(!product_qty_error)
    {
        await page.waitForSelector("input[class='a-button-text place-your-order-button']");
        try
        {
            COD = false;
            if(payWithGV.toLowerCase() == "no" && paymentType.toLowerCase() != "cod")
            {
                var payAtStore = await page.$x('//*[@id="payatstore"]');
                payatstore_text = await page.evaluate(el => el.textContent, payAtStore[0])
                payatstore_text = payatstore_text.replace(/\s+/g, '');
            }
            await page.waitForTimeout(1000)
            if(lastPageQty > 0)
            {
                try
                {
                    await page.click("a[class='a-declarative change-quantity-button a-size-mini']", elem => elem.click());
                    await page.waitForSelector("input[class='quantity-input']");
                    await page.waitForTimeout(50) 
                    await page.type("input[class='quantity-input']", `${lastPageQty}`);
                    await page.waitForTimeout(500)
                    await page.click("a[class='a-declarative update-quantity-button a-size-mini']", elem => elem.click());
                }
                catch
                {}
            }
            await priceChecker(page)
            if(!gv_applied)
            {
                while(text1 != finalCartValue)
                {
                    await page.waitForTimeout(500)
                    await priceChecker(page)
                }
                if(couponCode != "")
                {
                    await page.waitForSelector("input[id='spc-gcpromoinput']");
                    await page.type("input[id='spc-gcpromoinput']", `${couponCode}`);
                    await page.waitForTimeout(20)
                    await page.waitForSelector("input[class='a-declarative a-button-text']");
                    await page.click("input[class='a-declarative a-button-text']")
                    await page.waitForTimeout(5000)
                    var coupon_applied = false;
                    while(!coupon_applied)
                    {
                        try
                        {
                            await page.waitForSelector("a[id='triggerModalWithDropdownPostFormAndTextInput']");
                            coupon_applied = true;
                        }
                        catch
                        {}
                    }
                    await page.waitForTimeout(100)
                }
                if(payWithGV.toLowerCase() == "yes")
                {
                    await applyGv(page, firstGV)
                }
                if(totalGV == 2)
                {
                    text3 = text1
                    while(text3 == text1)
                    {
                        await priceChecker(page)
                    }
                    await page.waitForTimeout(1500)
                    await applyGv(page, secondGV)
                }
            }
            if(gv_applied && payWithGV.toLowerCase() == "yes")
            {
                while(text2 != gvFinalCartValue)
                {
                    await page.waitForTimeout(500)
                    await priceChecker(page)
                }
            }
            gv_status = false
            final_value_status = false
            if(payWithGV.toLowerCase() == "yes")
            {
                if(text2 == gvFinalCartValue || text2 == gvSecondPrice)
                {

                    if(text1 == "₹0.00")
                    {
                        gv_status = true
                    }
                }
            }
            else if(text1 == finalCartValue || text1 == secondaryCartValue)
            {
                final_value_status = true
            }
            else
            {
                while(text1 != finalCartValue)
                {
                    await page.waitForTimeout(500)
                    await priceChecker(page)
                    final_value_status = true
                }
            }
            if(gv_status || final_value_status)
            {
                await page.waitForSelector("input[class='a-button-text place-your-order-button']");
                await page.click("input[class='a-button-text place-your-order-button']", elem => elem.click());
                await page.waitForNavigation(7000);
                price_changed = false;
            }
            else
            {
                price_changed = true;
            }
        }
        catch
        {
            COD = true;
        }
    } 
}

async function tokenPage(page,idNumber)
{
    await page.waitForSelector("span[class='break-word']")
    await page.waitForTimeout(1000)

    date = new Date()
    day = date.getDate()
    month = date.getMonth()+1
    time = date.getHours()
    min = date.getMinutes()
    sec = date.getSeconds()
    if(day < 10)
    {
        day = '0'+day
    } 
    if(month < 10)
    {
        month = '0'+month
    }
    if(time < 10)
    {
        time = '0'+time
    }
    if(min < 10)
    {
        min = '0'+min
    }
    if(sec < 10)
    {
        sec = '0'+sec
    }
    
    if(payWithGV.toLowerCase() == "yes")
    {

        if(totalGV == 1)
        {
            message1 = `ID: ${idNumber}, Store: ${accessCode}, Value ${text2}, Date: ${day}/${month}, GV: ${firstGV}`
        }
        else
        {
            message1 = `ID: ${idNumber}, Store: ${accessCode}, Value ${text2}, Date: ${day}/${month}, GV1: ${firstGV}, GV2: ${secondGV}`
        }
        console.log(message1)
    }

    else
    {
        try
        {
            try
            {
                message2 = `ID:, ${idNumber}, Store: ${accessCode}, Value ${text1}, CB: ${cb_value}, Date: ${day}/${month}, Time: ${time}:${min}`
            }
            catch
            {
                message2 = `ID: ${idNumber}, Store: ${accessCode}, Value ${text1}, Date: ${day}/${month}, Time: ${time}:${min}`
            }
            
        }
        catch(e71)
        {
        }
        console.log(message2)
    }
}

async function closing(page)
{
    var client = await page.target().createCDPSession();
    await client.send('Network.clearBrowserCache');
    //await client.send('Network.clearBrowserCookies');
    await page.close()
    await browser.close();
}

async function removeData(fileName)
{
    const removeLines = (data, lines = []) => {
        return data
            .split('\n')
            .filter((val, idx) => lines.indexOf(idx) === -1)
            .join('\n');
    }
    fs2.readFile(fileName, 'utf8', (err, data) => {
        if (err) throw err;
        fs2.writeFile(fileName, removeLines(data, [0]), 'utf8', function(err) {
            if (err) throw err;
        });
    })
}

async function checkout()
{
    order_successful =false;
    await takeGV()
    for(var i=idNumberStart; i<=idNumberEnd; i++)
    {
        await setGV()
        try
        {
            page = await givePage()
            await signIn(page,idName,idNumberStart,pass);
            if(sign_in_error || password_error || require_approval)
            {
                idNumberStart += 1;
                await closing(page)
                continue;     
            }
            if(cart_text != "0")
            {
                await emptyCart(page);
            }
            await noImage(page);
            if(orderType.toLowerCase() != "normal")
            {
                await collectCoupon(page);
                if(!coupon_collected)
                {
                    console.log(`ID: ${idNumberStart} ma coupon collect nathi thai kato coupon nathi`)
                    await closing(page)
                    idNumberStart += 1;
                    continue;
                }
            }
            if(addAddress.toLowerCase() == "yes")
            {
                await addAddress(page,idNumberStart);
            }
            await addToCart(page);
            if(product_problem)
            {
                await closing(page)
                break;
            }
            await goToCart(page);
            page = await skipNumber(page);
            while(!skip_status)
            {
                page = await skipNumber(page);
            }
            if(paymentType.toLowerCase() == "prepaid")
            {
                await selectPayAtStore(page);
            }
            else if(paymentType.toLowerCase() == "cod")
            {
                await selectCOD(page);
            }
            if(product_qty_error)
            {
                await closing(page)
                i -= 1;
                continue;
            }
            if(!account_gv_limit)
            {
                console.log(`ID:${idNumberStart} ma gv add kari sakase nahi`)
                await closing(page)
                idNumberStart += 1;
                continue;
            }
            await lastPage(page);
            if(product_qty_error)
            {
                i -= 1;
                await closing(page)
                continue;
            }
            if(price_changed)
            {
                console.log(`ID:${idNumberStart} ma product price change thai gai che. Current Price: ${text1}`)
                await closing(page)
                break;
            }
            if(COD)
            {
                console.log(`ID:${idNumberStart} vakhte STORE: ni limit over`)
                await closing(page)
                i -= 1;
                continue;
            }
            else
            {
                await tokenPage(page,idNumberStart);
                idNumberStart += 1;
                if(payWithGV.toLowerCase() == "yes")
                {
                    await removeData('gv1.txt')
                    if(totalGV == 2)
                    {
                        await removeData('gv2.txt')
                    } 
                    gv1Index += 1;
                }
            }
            order_successful =true;
            await closing(page)
        }
        catch
        {
            i -= 1;
            await closing(page)
            continue;
        }
    }
}

checkout();