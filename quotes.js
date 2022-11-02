const quotes =[
    {
    quote: "Confidence is contagious. So is lack of confidence.",
    author:  "Vince Lombardi",    
    },
    {
    quote: "Shallow men believe in luck, Strong men believe in cause and effect",
    authour: "Ralph Waldo Emerson",    
    },
    {
    quote:"Life has no limitations, except the ones you make.",
    author: "Les Brown",
    },
    {
    quote: "A goal without a plan is just a wish.",
    author: "Antone de Saint-Exupery",    
    },
    {
    quote: "Pain is temporary Quitting lasts forever",
    author: "Lance Armstrong",    
    },
    {
    quote: "Big jobs usually go to the men who prove their ablilty to outgrow small ones.",
    author: "Ralph Waldo Emerson",    
    },
    {
    quote: "I'm a great believer in luck and I find the harder I work, the more I have of it.",
    author:"ThomasJefferson",
    },
    {
    quote: "Nothing is impossible, the word itself says 'I\'m possible'.",
    author: "Audrey Hepburn",    
    
    },
    {
     quote: "Optimism is the faith that leads to achivement. Nothing can be done without hope and confidence.",
     author:"Helen Keller" ,  
    },
    {
    quote: "What is not started today is never finished tomorrow.",
    author: "Johann Wolfgang von Goethe",
    }
        
 ]


 
 const quote = document.querySelector("#quote span:first-child");
 const author = document.querySelector("#quote span:last-child");
 const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
 
 quote.innerText = todaysQuote.quote;
 author.innerText = todaysQuote.author;